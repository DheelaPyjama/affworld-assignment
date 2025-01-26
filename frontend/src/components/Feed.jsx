import React from 'react'

const Feed = ({ posts }) => {
  return (
    <div className='space-y-6'>
      {posts.map((post) => (
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <img src={post.image} alt={post.caption} className='w-full h-64 object-cover rounded-md mb-4' />
          <p className='text-gray-700'>{post.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default Feed
