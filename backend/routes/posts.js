const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const auth = require('../middleware/auth')

//Create Post
router.post('/', auth, async (req, res) => {
  const { caption, imageUrl } = req.body
  try {
    const post = new Post({ caption, imageUrl, user: req.user.id })
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

//Get Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username')
    res.json(posts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
