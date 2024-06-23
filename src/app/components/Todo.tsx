"use client";

import React, { useState } from "react";
import { Task } from "@/types";

interface TodoProps {
  todo: Task;
  onEditTodo: (id: string, newText: string) => Promise<void>;
  onDeleteTodo: (id: string) => Promise<void>;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  onEditTodo,
  onDeleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editedTaskTitle.trim() !== todo.text) {
      await onEditTodo(todo.id, editedTaskTitle);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTaskTitle(todo.text);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await onDeleteTodo(todo.id);
  };

  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {isEditing ? (
        <input
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <>
            <button className="text-blue-500 mr-3" onClick={handleSave}>
              保存
            </button>
            <button className="text-gray-500 mr-3" onClick={handleCancel}>
              キャンセル
            </button>
          </>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            編集
          </button>
        )}
        <button className="text-red-500" onClick={handleDelete}>
          削除
        </button>
      </div>
    </li>
  );
};

// "use client";

// import { editTodo } from "@/pages/api/api";
// import { Task } from "@/types";
// import React, { use, useEffect, useState } from "react";

// interface TodoProps {
//   todo: Task;
// }

// export const Todo = ({ todo }: TodoProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

//   const handleEdit = async () => {
//     setIsEditing(true);
//   };

//   const handleSave = async () => {
//     await editTodo(todo.id, editedTaskTitle);
//     setIsEditing(false);
//   };

//   useEffect(() => {
//     console.log("editedTaskTitle: ", editedTaskTitle);
//   }, [editedTaskTitle]);

//   return (
//     <li
//       key={todo.id}
//       className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
//     >
//       {isEditing ? (
//         <input
//           type="text"
//           className="mr-2 py-1 rounded border-gray-400 border"
//           value={editedTaskTitle}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setEditedTaskTitle(e.target.value)
//           }
//         />
//       ) : (
//         <span>{todo.text}</span>
//       )}
//       <div>
//         {isEditing ? (
//           <button className="text-blue-500 mr-3" onClick={handleSave}>
//             save
//           </button>
//         ) : (
//           <button className="text-green-500 mr-3" onClick={handleEdit}>
//             edit
//           </button>
//         )}

//         <button className="text-red-500">delete</button>
//       </div>
//     </li>
//   );
// };
