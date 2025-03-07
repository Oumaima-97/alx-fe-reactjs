// src/__tests__/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Adjust the path if necessary

describe('TodoList Component', () => {
  it('renders todo items', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  it('adds a new todo item', () => {
    render(<TodoList />);
    
    // Simulate typing in the input and clicking the "Add Todo" button
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Check if the new todo is displayed
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion', () => {
    render(<TodoList />);
    
    // Get the "Complete" button for the first todo item
    const completeButton = screen.getAllByRole('button', { name: /complete/i })[0]; // Get the first "Complete" button
    
    // Simulate clicking the "Complete" button
    fireEvent.click(completeButton);
    
    // Check if the text has a line-through style
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo item', () => {
    render(<TodoList />);
    
    // Simulate clicking the "Delete" button for the first todo item
    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0]; // Get the first "Delete" button
    fireEvent.click(deleteButton);
    
    // Check if the todo is removed from the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
