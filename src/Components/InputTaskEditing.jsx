import React from "react";
import { useState } from "react";

export const InputTaskEditing = ({ item, setToDoItems, setIsEditing }) => {
  const [task, setTask] = useState(item.task);
  return (
    <div className="mb-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (task.length < 1) {
            alert("Length must be one or more");
            setIsEditing((prev) => !prev);
            return;
          } else if (task.length > 15) {
            alert("length must be less than 15");
            setIsEditing((prev) => !prev);
            return;
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
          className="bg-gray-600 text-gray-200 rounded-sm p-1 border border-black"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-800 active:bg-red-300 active:border-gray-400 rounded-sm border border-black p-1 ml-0.5"
        >
          Edit
        </button>
      </form>
    </div>
  );
};
