import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    
    // Find input field and add new todo
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));

    // Check if new todo is added
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');

    // Click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    
    // Find the list item that contains "Learn React"
    const todoItem = screen.getByText('Learn React').closest('li');

    // Ensure it exists
    expect(todoItem).toBeInTheDocument();

    // Find the delete button inside the correct todo item
    const deleteButton = within(todoItem).getByRole('button', { name: /delete/i });

    // Click delete
    fireEvent.click(deleteButton);

    // Ensure "Learn React" is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
