import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const InputTaskForm = ({ setToDoItems }) => {
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    const id = uuidv4();
    if (task.length < 1) return;
    setToDoItems((prev) => [...prev, { task, id }]);
    setTask("");
  };
  return (
    <div className="mb-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
          Add
        </button>
      </form>
    </div>
  );
};
