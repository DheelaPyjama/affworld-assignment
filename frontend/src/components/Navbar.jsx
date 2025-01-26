import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className='bg-white p-4 text-black'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex space-x-4'>
          <Link to='/board' className='hover:text-blue-200'>
            Task Management
          </Link>
          <Link to='/feed' className='hover:text-blue-200'>
            Feed
          </Link>
          <button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded-md hover:bg-red-600'>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
