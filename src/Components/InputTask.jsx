import React from "react";
import { useState } from "react";

export const InputTask = ({ setToDoItems }) => {
  const [task, setTask] = useState();
  const handleSubmit = () => {
    setToDoItems((prev) => [...prev, task]);
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
          className="bg-gray-300 rounded-sm p-1"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className="bg-red-500 ">Add</button>
      </form>
    </div>
  );
};
