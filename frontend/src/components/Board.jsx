import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import Column from "./Column";

const Board = ({}) => {
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
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
            <Column title="Pending" tasks={tasks.pending} moveTask={moveTask} columnId="pending" />
            <Column title="In Progress" tasks={tasks.inProgress} moveTask={moveTask} columnId="inProgress" />
            <Column title="Completed" tasks={tasks.completed} moveTask={moveTask} columnId="completed" />
          </div>
        </DndProvider>
      );
}

export default Board