import React, { useState } from "react";

export const Task = ({ item, handleDelete }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div
      className={
        isDone
          ? "bg-gray-600 mb-0.5 rounded border flex justify-between border-black"
          : "bg-zinc-400 mb-0.5 rounded border flex justify-between border-black"
      }
    >
      <div className="text-center">{item}</div>
      <div>
        <button
          className="bg-yellow-400 hover:bg-green-100 border h-full rounded-sm border-black "
          onClick={() => setIsDone((prev) => !prev)}
        >
          {isDone ? <>UnDone </> : <>Done</>}
        </button>
        <button
          className="bg-green-300 ml-0.5 hover:bg-green-100 border h-full rounded-sm border-black "
          onClick={() => handleDelete(item)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
