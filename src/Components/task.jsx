import React, { useState } from "react";
export const Task = ({ item, handleDelete, setToDoItems }) => {
  const [isDone, setIsDone] = useState(false);
  const [task, setTask] = useState(item.task);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      {isEditing ? (
        <div className="mb-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (task.length < 1) {
                handleDelete(item);
              }
              setToDoItems((prev) =>
                prev.map((items) =>
                  items.id == item.id ? { ...items, task } : items
                )
              );
              setIsEditing((prev) => !prev);
            }}
          >
            <input
              type="text"
              className="bg-gray-300 rounded-sm p-1 border border-black"
              placeholder="Task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button className="bg-red-500 hover:bg-red-800 active:bg-red-300 active:border-gray-400 rounded-sm border border-black p-1 ml-0.5">
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div
          onClick={() => setIsDone((prev) => !prev)}
          className={
            isDone
              ? "bg-gray-600 mb-0.5 rounded border flex justify-between border-black"
              : "bg-zinc-400 mb-0.5 rounded border flex justify-between border-black"
          }
        >
          <div className="text-center">{item.task}</div>
          <div>
            <button
              className=" p-0.5 bg-green-300 ml-0.5 hover:bg-green-100 border h-full rounded-sm border-black "
              onClick={() => setIsEditing((prev) => !prev)}
            >
              Edit
            </button>
            <button
              className=" p-0.5 bg-green-300 ml-0.5 hover:bg-green-100 border h-full rounded-sm border-black "
              onClick={() => handleDelete(item)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
