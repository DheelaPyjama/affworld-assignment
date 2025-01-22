import React from "react";
import { useDrag } from "react-dnd";
import { TrashIcon } from "@radix-ui/react-icons";


const Task = ({ task, columnId, handleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { task, from: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="flex flex-row items-center justify-between"
      style={{
        margin: "10px 0",
        padding: "10px",
        backgroundColor: isDragging ? "#ddd" : "#f9f9f9",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "grab",
      }}
    >
      {task}
      <TrashIcon color="red" onClick={handleClick}/>
    </div>
  );
};

export default Task;
