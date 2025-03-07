// src/components/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList"; // Import the TodoList component

// Mock the AddTodoForm component to isolate testing the TodoList logic
jest.mock('./AddTodoForm', () => {
  return function DummyAddTodoForm() {
    return <div>Form Mock</div>;
  };
});

describe('TodoList Component', () => {
  it('should render the TodoList component with initial tasks', () => {
    render(<TodoList />);

    // Check if the tasks are rendered
    expect(screen.getByText('Apprendre React')).toBeInTheDocument();
    expect(screen.getByText('Faire les exercices ALX')).toBeInTheDocument();
    expect(screen.getByText('Créer une app Todo')).toBeInTheDocument();
  });

  it('should add a new task when addTodo is called', () => {
    render(<TodoList />);
    
    // Let's assume the addTodo function adds a new task
    fireEvent.click(screen.getByText('Ajouter'));
    // Check if the new task has been added (you can customize the text)
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('should toggle a task as completed', () => {
    render(<TodoList />);
    
    const task = screen.getByText('Apprendre React');
    fireEvent.click(task); // Simulate a click on the task to mark it as completed

    // Check if the task has the "completed" class
    expect(task).toHaveClass('completed');
  });

  it('should delete a task when the delete button is clicked', () => {
    render(<TodoList />);

    const task = screen.getByText('Apprendre React');
    const deleteButton = screen.getByText('❌');
    
    fireEvent.click(deleteButton); // Simulate deleting the task

    // Check if the task is removed from the list
    expect(screen.queryByText('Apprendre React')).not.toBeInTheDocument();
  });
});