import React, { useContext } from 'react'
import { useDrag } from 'react-dnd'
import { TrashIcon } from '@radix-ui/react-icons'
import { BoardContext } from '../contexts/BoardContext'
import DeleteTaskModal from './modals/DeleteTaskModal'
import clsx from 'clsx'
import Pill from './Pill'

const Task = ({ task, columnId }) => {
  const { isDeleteModal, setIsDeleteModal } = useContext(BoardContext)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task, from: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div
      ref={drag}
      className={clsx(
        'flex items-center justify-between p-2 my-2 bg-gray-50 border border-gray-300 rounded-md cursor-grab',
        {
          'bg-gray-300': isDragging,
          'bg-gray-50': !isDragging
        }
      )}
    >
      <div className='flex flex-col'>
        <span>{task.name}</span>
        <Pill status={task.status} />
      </div>
      <TrashIcon color='red' onClick={() => setIsDeleteModal(true)} className='cursor-pointer' />
      {isDeleteModal && <DeleteTaskModal task={task} />}
    </div>
  )
}

export default Task
