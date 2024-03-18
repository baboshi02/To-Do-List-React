import { InputTask } from "./Components/InputTask";
import { useState } from "react";
export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  console.log(toDoItems);
  return (
    <div className="bg-[#fff] p-5 text-center rounded-sm border-2 border-black ">
      <h1 className="text-yellow-700 ">Todo List</h1>
      <InputTask setToDoItems={setToDoItems} />
      {toDoItems.map((item) => (
        <div className="bg-zinc-400 mb-0.5 rounded">{item}</div>
      ))}
    </div>
  );
}
