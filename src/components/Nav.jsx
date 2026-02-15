import React, { useContext } from "react";
import { TodoList } from "../Contexts/TodoContext";

export const Nav = () => {
  const Todos = useContext(TodoList)
  return (
    <nav className="navbar">
      <h1>Todo App</h1>
        <p>Total Todos: {Todos.todos.length}</p>
        <button>Dark Mode</button>
    </nav>
  );
};
