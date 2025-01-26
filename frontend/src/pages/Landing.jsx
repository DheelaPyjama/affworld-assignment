import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className='p-6'>
        <h1 className='text-3xl font-bold'>Welcome to the Affworld Assignment</h1>
        <p className='mt-4'>You are now logged in, use the navbar to navigate to the task management system or feed.</p>
      </div>
    </div>
  )
}

export default Landing
