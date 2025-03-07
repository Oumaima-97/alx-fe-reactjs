// src/__tests__/TodoList.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";  // Adjust the path based on your project structure

// Sample test data
const todos = [
  { text: "Learn React", completed: false },
  { text: "Write tests", completed: false },
];

describe("TodoList Component", () => {
  // Test if TodoList renders correctly
  it("renders TodoList with initial todos", () => {
    render(<TodoList />);
    // Check that the initial todos are rendered
    todos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  // Test if new todo can be added
  it("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");  // Assuming an input field with placeholder
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test if todo can be toggled
  it("toggles the completion status of a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);  // Simulate clicking to toggle completion

    // Assuming completed todos have a class or style indicating completion
    expect(todoItem).toHaveClass("completed");
  });

  // Test if todo can be deleted
  it("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByText("Delete");  // Assuming a Delete button

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
