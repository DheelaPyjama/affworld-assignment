import React, { useContext, useState } from 'react'
import { BoardContext } from '../../contexts/BoardContext'
import { Dialog, DialogTitle } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid'

const AddTaskModal = () => {
  const { isModalOpen, closeModal, addTask } = useContext(BoardContext)
  const [formState, setFormState] = useState({ taskName: '', status: 'pending' })

  const handleAddTask = () => {
    const task = {
      id: uuidv4(),
      taskName: formState.taskName,
      status: formState.status
    }

    addTask(task)
    setFormState({ taskName: '', status: 'pending' })
    closeModal()
  }

  return (
    <div className='relative'>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'
      >
        <div className='bg-white rounded-lg p-6 max-w-sm w-full shadow-lg'>
          <DialogTitle className='text-lg font-bold mb-4'>Add a new Task</DialogTitle>
          <form>
            <div className='mb-4'>
              <label htmlFor='taskName' className='block text-sm font-medium text-gray-700'>
                Task Description
              </label>
              <input
                id='taskName'
                type='text'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                onChange={(e) => setFormState((prev) => ({ ...prev, taskName: e.target.value }))}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='status' className='block text-sm font-medium text-gray-700'>
                Status
              </label>
              <select
                id='status'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                onChange={(e) => setFormState((prev) => ({ ...prev, status: e.target.value }))}
              >
                <option value='pending'>Pending</option>
                <option value='inProgress'>In Progress</option>
                <option value='completed'>Completed</option>
              </select>
            </div>
            <div className='flex justify-end'>
              <button type='button' className='mr-2 px-4 py-2 bg-red-800 text-white rounded-md' onClick={closeModal}>
                Cancel
              </button>
              <button
                type='button'
                className='mr-2 px-4 py-2 bg-green-700 text-white rounded-md'
                onClick={handleAddTask}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  )
}

export default AddTaskModal
