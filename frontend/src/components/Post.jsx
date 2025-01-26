import React, { useState } from 'react'

const Post = ({ onSubmit }) => {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!image || !caption) return
    const newPost = {
      id: Date.now(),
      caption,
      image: URL.createObjectURL(image)
    }

    onSubmit(newPost)
    setCaption('')
    setImage(null)
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
      <h2 className='text-xl font-bold mb-4'>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='caption' className='block text-sm font-medium text-gray-700'>
            Caption
          </label>
          <input
            type='text'
            value={caption}
            name='caption'
            onChange={(e) => setCaption(e.target.value)}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            placeholder='Add a Caption'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
            Image
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            placeholder='Add an image'
            required
          />
        </div>
        <button type='submit' className='w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600'>
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
