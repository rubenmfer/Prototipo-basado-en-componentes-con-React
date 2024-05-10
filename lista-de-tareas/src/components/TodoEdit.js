import React, { useState } from 'react';
 
function TodoEdit({ todo, onSave }) {
    const [editedText, setEditedText] = useState(todo);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedText);
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            />
            <button type="submit">Guardar</button>
        </form>
        </div>
    );
}
 
export default TodoEdit;



