import React from 'react';
import TodoList from './TodoList';
import './App.css'; // Optional: if you want to add styling

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;