export const AllTodo = ({ title, type ,deleteed,id }) => {
  return (
    <div id={id}>
      <div className="todo-card-header">{title}</div>
      <div>{type}</div>
      <button className="delete-btn" onClick={()=>deleteed(id)}>Delete</button>
    </div>
  );
};
