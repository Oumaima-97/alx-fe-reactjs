// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList"; // Assure-toi que le chemin est correct

test("renders initial todos", () => {
  render(<TodoList />);
  
  // Vérifie si les tâches initiales existent
  expect(screen.getByText("Apprendre React")).toBeInTheDocument();
  expect(screen.getByText("Faire les exercices ALX")).toBeInTheDocument();
  expect(screen.getByText("Créer une app Todo")).toBeInTheDocument();
});
