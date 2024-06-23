"use client";

import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos, addTodo, editTodo, deleteTodo } from "@/pages/api/api";
import { Task } from "@/types";

export default function Home() {
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getAllTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo: Task) => {
    const addedTodo = await addTodo(newTodo);
    setTodos((prevTodos) => [...prevTodos, addedTodo]);
  };

  const handleEditTodo = async (id: string, newText: string) => {
    const updatedTodo = await editTodo(id, newText);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const handleDeleteTodo = async (id: string) => {
    const deletedTodo = await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Nextjs 13 Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </main>
  );
}

// import Image from "next/image";
// import AddTask from "./components/AddTask";
// import TodoList from "./components/TodoList";
// import { getAllTodos } from "@/pages/api/api";

// export default async function Home() {
//   const todos = await getAllTodos();
//   console.log(todos);

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
//       <h1 className="text-4xl font-bold text-gray-700 -mt-32">
//         Nextjs 13 Todo App
//       </h1>
//       <div className="w-full max-w-xl mt-5">
//         <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
//           <AddTask />
//           <TodoList todos={todos} />
//         </div>
//       </div>
//     </main>
//   );
// }
