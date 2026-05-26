import React from 'react'
import { useState } from 'react';

export default function TodoList() {

  const [todos, setTodos] = useState(["sample task "]);
  const [newTodo, setNewTodo] = useState(" ");

  let newTask = () => {
    setTodos(...todos, newTodo);
  }

  let updateTodo = (event) =>{
    setNewTodo(event.target.value);
  }

  return (
    <div>
    <input 
    placeholder="Add a Task" 
    value={newTodo}
    onChange={updateTodo} />

    <button onClick={newTask} > Add Task </button>
    
    <br></br>
    <br></br>
    <br></br>

    <h1> Todo List </h1>
    <ul> 
      {todos.map ((todo) => (
      <li key={index}> {todo} </li>
     ) ) } 
     </ul>

    </div>
  )
}
