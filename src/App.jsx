import { InputTask } from "./Components/InputTask";
import { useState } from "react";
export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  console.log(toDoItems);
  const handleDelete = (item) => {
    setToDoItems((prev) => prev.filter((itm) => itm != item));
  };
  return (
    <div className="bg-gray-200 p-5 text-center rounded-sm border-2 border-black box-border shadow-md ">
      <h1 className="text-yellow-700 text-2xl">Todo List</h1>
      <InputTask setToDoItems={setToDoItems} />
      {toDoItems.map((item) => (
        <div className="bg-zinc-400 mb-0.5 rounded border relative  border-black">
          {item}
          <button
            className="bg-green-300 border h-full rounded-sm border-black absolute right-0 "
            onClick={() => handleDelete(item)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
