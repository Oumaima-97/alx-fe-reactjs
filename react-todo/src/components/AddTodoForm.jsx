// src/components/AddTodoForm.jsx
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(''); // Réinitialiser le champ après soumission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTodoForm;