// TodoItem.jsx
import React, { useState } from 'react';
 
function TodoItem({ todo, onDelete, onEdit }) {
 const [isEditing, setIsEditing] = useState(false);
 const [newText, setNewText] = useState(todo);
 
 const handleEditChange = (e) => {
    setNewText(e.target.value);
 };
 
 const handleEditSubmit = () => {
    onEdit(newText);
    setIsEditing(false);
 };
 
 return (
   <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={handleEditChange} 
          />
          <button onClick={handleEditSubmit}>Guardar</button>
        </>
     ) : (
        <>
          <span>{todo}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
        </>
     )}
    </li>
 );
}
 
export default TodoItem;
