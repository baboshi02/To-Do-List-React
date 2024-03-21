import React, { useState } from "react";
import { InputTaskEditing } from "./InputTaskEditing";
// Todo fixing Done functionality @Done
// Todo replacing text with Icons
export const Task = ({ item, handleDelete, setToDoItems }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      {isEditing ? (
        <InputTaskEditing
          item={item}
          setToDoItems={setToDoItems}
          handleDelete={handleDelete}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div
          className={
            isDone
              ? "bg-gray-600  mb-0.5 rounded border flex justify-between border-black"
              : "bg-zinc-400  mb-0.5 rounded border flex justify-betweenflex justify-between border-black"
          }
        >
          <button
            className=" p-0.5 bg-green-300  hover:bg-green-100 border h-full rounded-sm border-black "
            onClick={() => setIsDone((prev) => !prev)}
          >
            {isDone ? <>unCheck</> : <>check</>}
          </button>
          <div className={isDone && "text-gray-200"}>{item.task}</div>
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
