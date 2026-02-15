export const AllTodo = ({ title, type, deleteed, id }) => {
  return (
    <div className={`todo-card priority-${type}`}>
      <div className="todo-card-header">
        <h3>{title}</h3>
        <span className="priority-badge">{type}</span>
      </div>

      <button className="delete-btn" onClick={() => deleteed(id)}>
        Delete
      </button>
    </div>
  );
};
