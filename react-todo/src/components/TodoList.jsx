// src/components/TodoList.jsx
import React, { useState } from "react";
import "../styles.css"; // Assurez-vous que le chemin vers le fichier CSS est correct
import AddTodoForm from "./AddTodoForm"; // Assurez-vous que le chemin d'importation est correct

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Apprendre React", completed: false },
    { id: 2, text: "Faire les exercices ALX", completed: true },
    { id: 3, text: "Créer une app Todo", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Ma Liste de Tâches</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;