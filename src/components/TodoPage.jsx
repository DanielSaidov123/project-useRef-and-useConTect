import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TodoList } from "../Contexts/TodoContext";

function TodoPage() {
  const { id } = useParams();
  const { todos } = useContext(TodoList);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return <h2>Todo not found</h2>;
  }

  return (
    <div>
      <Link to="/">&larr; Back to todos</Link>

      <div
        className={`todo-card priority-${todo.type}`}
        style={{ marginTop: "1rem" }}
      >
        <div className="todo-card-header">
          <h3>{todo.title}</h3>
          <span className="priority-badge">{todo.type}</span>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
