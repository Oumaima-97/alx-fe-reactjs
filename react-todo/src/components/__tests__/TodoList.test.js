// src/components/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  // Test 1: Verify that the TodoList renders correctly with initial todos
  test("renders todo items", () => {
    render(<TodoList />);
    
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(3); // Initially, we have 3 todos
  });

  // Test 2: Test that a new todo can be added
  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: "New Todo" } }); // Simulate typing a new todo
    fireEvent.click(button); // Simulate clicking the add button

    const newTodo = screen.getByText(/new todo/i);
    expect(newTodo).toBeInTheDocument(); // Verify that the new todo appears in the list
  });

  // Test 3: Test that a todo item can be toggled
  test("toggles a todo item", () => {
    render(<TodoList />);
    
    const firstTodo = screen.getByText(/learn react/i); // Select the first todo
    fireEvent.click(firstTodo); // Simulate clicking on the todo to toggle its completion status

    // Check if the first todo is now striked-through
    expect(firstTodo).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(firstTodo);
    expect(firstTodo).not.toHaveStyle("text-decoration: line-through");
  });

  // Test 4: Test that a todo item can be deleted
  test("deletes a todo item", () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText(/delete/i)[0]; // Select the first delete button
    fireEvent.click(deleteButton); // Simulate clicking the delete button for the first todo

    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(2); // After deleting one todo, there should be 2 remaining
  });
});
