import React, { useContext } from "react";
import { TodoList } from "../Contexts/TodoContext";

export const Nav = () => {
  const Todos = useContext(TodoList);

  return (
    <nav className="navbar light">
      <h1>Todo App</h1>

      <div className="navbar-right">
        <span className="todo-count">
          Total Todos: {Todos.todos.length}
        </span>

        <button className="theme-btn">Dark Mode</button>
      </div>
    </nav>
  );
};
