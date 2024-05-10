import React, { useState } from 'react';
import TodoEdit from './TodoEdit'; // Importa TodoEdit
 
 
function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);
 
  const handleEdit = (newText) => {
//     console.log(localStorage.getItem("todos"));
    onEdit(newText);
    setIsEditing(false);
//   console.log(localStorage.getItem("todos"));
  // localStorage.setItem(this, newText);

  };
  return (
    
<li>
      {isEditing ? (
<TodoEdit todo={editedText} onSave={handleEdit} />
      ) : (
<>
          {todo}
<button onClick={() => setIsEditing(true)}>Editar</button>
<button onClick={onDelete}>Eliminar</button></>
      )}
</li>
  );
}
 
export default TodoItem;




/*
import React from 'react';
 
function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}
 
export default TodoItem;
*/
