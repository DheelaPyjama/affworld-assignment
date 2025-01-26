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
    <div className='w-full flex justify-center items-center'>
      <nav className='bg-white p-4 text-black' shadow-md>
        <div className='flex space-x-4'>
          <Link to='/landing' className='hover:text-green-500'>
            Home
          </Link>
          <Link to='/board' className='hover:text-green-500'>
            Task Management
          </Link>
          <Link to='/feed' className='hover:text-green-500'>
            Feed
          </Link>
          <button onClick={handleLogout} className='bg-red-500 px-2 py-2 text-sm rounded-md hover:bg-red-600'>
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
