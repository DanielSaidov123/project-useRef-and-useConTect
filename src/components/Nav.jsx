import  { useContext, useState } from "react";
import { TodoList } from "../Contexts/TodoContext";
import { NavLink } from "react-router";


export const Nav = ({ light,lightset}) => {
  const Todos = useContext(TodoList);


  return (
    <nav className={`navbar ${!light} "light" ${light && "dark"}`}>
      <h1>Todo App</h1>

      <div className="navbar-right">
        <span className="todo-count">
          Total Todos: {Todos.todos.length}
        </span>
        
        <button onClick={lightset} className="theme-btn">Dark Mode</button>
        <div className="links">
          <NavLink to="/todos" className="link">
            totos
          </NavLink>
          <NavLink to="/posts" className="link">
            posts
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};
