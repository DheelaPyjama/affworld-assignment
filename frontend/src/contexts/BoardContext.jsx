import React, { useState, useContext, createContext } from "react";

const BoardContext = createContext()

const BoardProvider = ({children}) => {
    const [tasks, setTasks] = useState({
        pending: ["Task 1", "Task 2", "Task 3"],
        inProgress: ["Task 4", "Task 5"],
        completed: ["Task 6"],
      });

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

    return (
        <BoardContext.Provider value={{tasks, moveTask}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider
