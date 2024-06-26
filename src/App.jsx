import { InputTaskForm } from "./Components/InputTask";
import { Task } from "./Components/task";
import { useState } from "react";
export default function App() {
  const [toDoItems, setToDoItems] = useState([
    { task: "Getting Up", id: 0 },
    { task: "Brushing teeth", id: 1 },
    { task: "Praying Fajr", id: 2 },
    { task: "Going To Work", id: 3 },
  ]);
  console.log(toDoItems);
  const handleDelete = (item) => {
    setToDoItems((prev) => prev.filter((itm) => itm.id != item.id));
  };
  return (
    <div className="bg-gray-200 p-5 text-center rounded-sm border-2 border-black box-border shadow-md ">
      <h1 className="text-yellow-700 text-2xl">Todo List</h1>
      <InputTaskForm setToDoItems={setToDoItems} />
      {toDoItems.map((item) => (
        <Task
          item={item}
          key={item.id}
          handleDelete={handleDelete}
          setToDoItems={setToDoItems}
        />
      ))}
    </div>
  );
}
