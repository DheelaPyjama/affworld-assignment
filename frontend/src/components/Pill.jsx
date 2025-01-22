import React from 'react'
import clsx from 'clsx'

const Pill = ({ status }) => {
  const statusColors = {
    pending: 'bg-yellow-200, text-yellow-800',
    inProgress: 'bg-orange-200, text-orange-800',
    completed: 'bg-green-200, text-green-800'
  }

  const icons = {
    pending: '⏳',
    inProgress: '🚧',
    completed: '✅'
  }

  return (
    <div
      className={
        (clsx =
          ('flex flex-row items-center justify-between gap-2 px-3 py-1 rounded-full text-sm font-medium',
          statusColors[status]))
      }
    >
      <span>{icons[status]}</span>
      <span>{status}</span>
    </div>
  )
}

export default Pill
