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

    return (
        <BoardContext.Provider value={{tasks, moveTask}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider
