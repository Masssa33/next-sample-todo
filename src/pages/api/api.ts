import { Task } from "@/types";

const API_BASE_URL = `${process.env.DATABASE_URL}:${process.env.PORT}`;

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`${API_BASE_URL}/todos`, {});
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = await res.json();
  console.log("updatedTodo: ", updatedTodo);
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deletedTodo = await res.json();
  console.log("deletedTodo: ", deletedTodo);
  return deletedTodo;
};
