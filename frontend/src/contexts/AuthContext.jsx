import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const register = async (name, email, password) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}`, {
        username: name,
        email,
        password
      })
    } catch (err) {
      console.error('Registration failed: ', err.response?.data?.message, err.message)
      throw err
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, {
        email,
        password
      })
      const { token } = response.data
      setUser(email)
      setToken(token)
      localStorage.setItem('token', token)
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message)
      throw err
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token', token)
    navigate('/login')
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')

  return context
}

export default AuthProvider
