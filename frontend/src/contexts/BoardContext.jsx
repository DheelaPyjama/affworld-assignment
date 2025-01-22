import React, { useState, useContext, createContext } from "react";
import { BoardData } from "../constants/BoardData";

const BoardContext = createContext()

const BoardProvider = ({children}) => {
    const [tasks, setTasks] = useState(BoardData);

    const moveTask = (task, from, to) => {
        setTasks((prev) => {
          const fromColumn = prev[from].filter((t) => t !== task);
          const toColumn = [...prev[to], task];
          return {
            ...prev,
            [from]: fromColumn,
            [to]: toColumn,
          };
        });
      };

    const deleteTask = (task) => {
        setTasks((prev) => {
            const updatedTasks = prev[task.status].filter((t)=> task.id !== t.id)
            return {
                ...prev,
                [task.status]: updatedTasks
            }
        })
    }

    return (
        <BoardContext.Provider value={{tasks, moveTask, deleteTask}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider
