import { useContext } from "react";
import { TodoList } from "../Contexts/TodoContext";
import { Link } from "react-router";

export const AllTodo = ({ title, type, id }) => {
  const { deleteed } = useContext(TodoList);

  return (
        <Link
        to={`/todos/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
    <div className={`todo-card priority-${type}`}>
  
        <div className="todo-card-header">
          <h3>{title}</h3>
          <span className="priority-badge">{type}</span>
        </div>

      <button className="delete-btn" onClick={() => deleteed(id)}>
        Delete
      </button>
    </div>
      </Link>

  );
};