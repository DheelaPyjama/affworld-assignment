import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './components/Board'
import BoardProvider from './contexts/BoardContext'
import Post from './components/Post'
import Feed from './components/Feed'

function App() {
  const [posts, setPosts] = useState([])

  const handleSubmit = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  return (
    <>
      <Login />
      <Register />
      <BoardProvider>
        <Board />
      </BoardProvider>
      <div className='min-h-screen bg-gray-100 p-6'>
        <div className='max-w-md mx-auto'>
          <Post onSubmit={handleSubmit} />
          <Feed posts={posts} />
        </div>
      </div>
    </>
  )
}

export default App
