import React, { useState } from "react";
export const Task = ({ item, handleDelete }) => {
  const [isDone, setIsDone] = useState(false);
  return (
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
          onClick={() => handleDelete(item)}
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
  );
};
