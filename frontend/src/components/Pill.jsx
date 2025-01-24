import React from 'react'
import clsx from 'clsx'

const formatStatus = (status) => {
  return status.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (char) => char.toUpperCase())
}

const Pill = ({ status }) => {
  const statusColors = {
    pending: 'bg-yellow-200 text-yellow-800',
    inProgress: 'bg-orange-200 text-orange-800',
    completed: 'bg-green-200 text-green-800'
  }

  const icons = {
    pending: '⏳',
    inProgress: '🚧',
    completed: '✅'
  }

  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between px-1 py-1    rounded-full text-xs font-medium',
        statusColors[status]
      )}
    >
      <span>{icons[status]}</span>
      <span>{formatStatus(status)}</span>
    </div>
  )
}

export default Pill
