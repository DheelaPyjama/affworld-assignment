import React from 'react'
import { useDrop } from 'react-dnd'
import Task from './Task'

const Column = ({ title, tasks, moveTask, columnId }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => {
      if (item.from !== columnId) {
        moveTask(item.task, item.from, columnId)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))

  return (
    <div
      ref={drop}
      style={{
        width: '300px',
        padding: '10px',
        backgroundColor: isOver ? '#f0f0f0' : '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        minHeight: '400px'
      }}
    >
      <h3 style={{ textAlign: 'center' }}>{title}</h3>

      {tasks.map((task) => (
        <Task key={task.id} task={task} columnId={columnId} moveTask={moveTask} />
      ))}
    </div>
  )
}

export default Column
