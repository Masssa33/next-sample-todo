import React from "react";
import { Task } from "@/types";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: Task[];
  onEditTodo: (id: string, newText: string) => Promise<void>;
  onDeleteTodo: (id: string) => Promise<void>;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEditTodo,
  onDeleteTodo,
}) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

// import React from "react";
// import { Task } from "@/types";
// import { Todo } from "./Todo";

// interface TodoListProps {
//   todos: Task[];
// }

// export const TodoList = ({ todos }: TodoListProps) => {
//   return (
//     <ul className="space-y-3">
//       {todos.map((todo) => (
//         <Todo key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
