import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
 
function App() {
 const [todos, setTodos] = useState([]);
 
 useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem('todos'));
   if (storedTodos) {
      setTodos(storedTodos);
   }
 }, []);
 
 const handleAddTodo = (text) => {
   const newTodos = [...todos, text];
    setTodos(newTodos);
   localStorage.setItem('todos', JSON.stringify(newTodos));
 };
 
 const handleDeleteTodo = (index) => {
   const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
 };
 
 const handleEditTodo = (index, newText) => {
   const newTodos = [...todos];
    newTodos[index] = newText;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
 };
 
 return (
    <div>
      <Header />
     <div className="container">
        <TodoForm onAdd={handleAddTodo} />
        <TodoList 
          todos={todos} 
          onDelete={handleDeleteTodo} 
          onEdit={handleEditTodo} 
       />
      </div>
    </div>
 );
}
 
export default App;
