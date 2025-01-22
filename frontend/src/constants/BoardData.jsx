import { v4 as uuidv4 } from "uuid"

export const BoardData = {
    pending: pendingTasks.map((task) => ({...task, status: 'pending'})),
    inProgress: inProgressTasks.map((task) => ({...task, status: 'inProgress'})),
    completed: completedTasks.map((task)=> ({...task, status: 'completed'})),
  }

const pendingTasks = [
    {
        id: uuidv4(),
        name: "Task 1",
    },
    {
        id: uuidv4(),
        name: "Task 2",
    },
    {
        id: uuidv4(),
        name: "Task 3",
    }
]

const inProgressTasks = [
    {
        id: uuidv4(),
        name: "Task 4",
    },
    {
        id: uuidv4(),
        name: "Task 5",
    },
]

const completedTasks = [
    {
        id: uuidv4(),
        name: "Task 6",
    },
]
