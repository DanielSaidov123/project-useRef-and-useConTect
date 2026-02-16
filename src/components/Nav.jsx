import  { useContext, useState } from "react";
import { TodoList } from "../Contexts/TodoContext";

export const Nav = ({togelbool ,bool,light,lightset}) => {
  const Todos = useContext(TodoList);



  return (
    <nav className={`navbar ${!light} "light" ${light && "dark"}`}>
      <h1>Todo App</h1>

      <div className="navbar-right">
        <span className="todo-count">
          Total Todos: {Todos.todos.length}
        </span>
        <button onClick={togelbool} className="theme-btn">{!bool?"Posts":"Todos"}</button>
        <button onClick={lightset} className="theme-btn">Dark Mode</button>
      </div>
    </nav>
  );
};
