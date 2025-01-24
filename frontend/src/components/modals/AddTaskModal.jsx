import React, { useContext } from 'react'
import { BoardContext } from '../../contexts/BoardContext'
import { Dialog } from '@headlessui/react'

const AddTaskModal = () => {
  const { isModalOpen, closeModal, addTask } = useContext(BoardContext)
  return (
    <div className='relative'>
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'
        ></Dialog>
      )}
    </div>
  )
}

export default AddTaskModal
