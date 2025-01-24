import React, { useState, createContext } from 'react'
import { BoardData } from '../constants/BoardData'

export const BoardContext = createContext()

const BoardProvider = ({ children }) => {
  const [tasks, setTasks] = useState(BoardData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const moveTask = (task, from, to) => {
    setTasks((prev) => {
      const updatedTask = { ...task, status: to }
      const fromColumn = prev[from].filter((t) => t.id !== task.id)
      const toColumn = [...prev[to], updatedTask]
      return {
        ...prev,
        [from]: fromColumn,
        [to]: toColumn
      }
    })
  }

  const deleteTask = (task) => {
    setTasks((prev) => {
      const updatedTasks = prev[task.status].filter((t) => task.id !== t.id)
      return {
        ...prev,
        [task.status]: updatedTasks
      }
    })
  }

  const addTask = (task) => {
    setTasks((prev) => {
      return {
        ...prev,
        [task.status]: task
      }
    })
  }

  return (
    <BoardContext.Provider value={{ tasks, isModalOpen, openModal, closeModal, moveTask, deleteTask, addTask }}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardProvider
