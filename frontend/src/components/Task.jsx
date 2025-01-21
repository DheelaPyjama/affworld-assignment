import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-col justify-center items-start p-4 min-h-[106px] rounded-md max-w-[311px] bg-white mt-4 shadow-sm"
        >
          <p className="text-gray-800 font-medium">{item.Task}</p>
          <div className="flex justify-between items-center w-full text-sm text-gray-500 mt-2">
            <p>
              <span>
                {new Date(item.Due_Date).toLocaleDateString("en-us", {
                  month: "short",
                  day: "2-digit",
                })}
              </span>
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
