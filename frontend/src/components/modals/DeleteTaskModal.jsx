import React, { useContext, useState } from 'react'
import { BoardContext } from '../../contexts/BoardContext'
import { Dialog, DialogTitle } from '@headlessui/react'

const DeleteTaskModal = ({ task }) => {
  const { isDeleteModal, closeDeleteModal, deleteTask } = useContext(BoardContext)

  const handleDeleteTask = () => {
    deleteTask(task)
    closeDeleteModal()
  }

  return (
    <div className='relative'>
      <Dialog
        open={isDeleteModal}
        onClose={closeDeleteModal}
        className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'
      >
        <div className='bg-white rounded-lg p-6 max-w-sm w-full shadow-lg'>
          <DialogTitle className='text-lg font-bold mb-4'>Delete Task</DialogTitle>
          <form>
            <div className='mb-4'>
              <p className='block text-sm font-medium text-gray-700'>
                Are you sure you want to delete this task: {task?.name}
              </p>
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                className='mr-2 px-4 py-2 bg-yellow-600 text-white rounded-md'
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                type='button'
                className='mr-2 px-4 py-2 bg-red-700 text-white rounded-md'
                onClick={handleDeleteTask}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  )
}

export default DeleteTaskModal
