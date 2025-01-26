import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './components/Board'
import BoardProvider from './contexts/BoardContext'
import Post from './components/Post'
import Feed from './components/Feed'
import Landing from './pages/Landing'
import AuthProvider, { useAuth } from './contexts/AuthContext'
import TaskPage from './pages/TaskPage'
import Navbar from './components/Navbar'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to='/login' replace />
  }
  return children
}

function App() {
  const [posts, setPosts] = useState([])

  const handleSubmit = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  return (
    <AuthProvider>
      <BoardProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/board'
              element={
                <ProtectedRoute>
                  <TaskPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path='/feed'
              element={
                <ProtectedRoute>
                  <Navbar />
                  <div className='min-h-screen bg-gray-100 p-6'>
                    <div className='max-w-md mx-auto'>
                      <Post onSubmit={handleSubmit} />
                      <Feed posts={posts} />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path='/landing'
              element={
                <ProtectedRoute>
                  <Landing />
                </ProtectedRoute>
              }
            ></Route>

            <Route path='/' element={<Navigate to='/login' replace />} />
          </Routes>
        </Router>
      </BoardProvider>
    </AuthProvider>
  )
}

export default App
