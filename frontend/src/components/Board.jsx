import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { useContext } from 'react'
import Column from './Column'
import { BoardContext } from '../contexts/BoardContext'

const Board = ({}) => {
  const { tasks, moveTask } = useContext(BoardContext)

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px'
        }}
      >
        <Column title='Pending' tasks={tasks.pending} moveTask={moveTask} columnId='pending' />
        <Column title='In Progress' tasks={tasks.inProgress} moveTask={moveTask} columnId='inProgress' />
        <Column title='Completed' tasks={tasks.completed} moveTask={moveTask} columnId='completed' />
      </div>
    </DndProvider>
  )
}

export default Board
