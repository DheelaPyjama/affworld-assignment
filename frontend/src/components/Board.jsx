import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { useContext } from 'react'
import Column from './Column'
import { BoardContext } from '../contexts/BoardContext'
import { PlusIcon } from '@radix-ui/react-icons'

const Board = ({}) => {
  const { tasks, moveTask } = useContext(BoardContext)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-col p-5 md:p-10 relative m-5 bg-gray-50 rounded-lg shadow-md'>
        <button className='flex items-center absolute top-2 right-2 px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer'>
          <PlusIcon className='mr-2' /> {/* Add margin to the right of the icon */}
          <span>Add Task</span>
        </button>

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
      </div>
    </DndProvider>
  )
}

export default Board
