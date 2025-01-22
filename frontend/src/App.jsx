import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Register />
      <Board />
    </>
  )
}

export default App
