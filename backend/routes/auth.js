const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')

//Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = new User({ username, email, password })
    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

//Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) throw new Error('User not found')

    const isMatch = await user.comparePassword(password)
    if (!isMatch) throw new Error('Invalid Credentials!')

    const token = jwt.sign({ id: user._id }, process.env.jwt, { expiresIn: '1h' })
    res.json({ token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

//Forgot password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) throw new Error('User not found')

    const resetToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000 // 10 minutes
    await user.save()

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`
    await sendEmail({
      email: user.email,
      subject: 'Password Reset',
      message: `Click the link to reset the password: ${resetUrl}`
    })

    res.json({ message: 'Email sent' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params
  const { password } = req.body
  try {
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    })
    if (!user) throw new Error('Invalid or expired token')

    user.password = password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save()

    res.json('Password reset successfully')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
