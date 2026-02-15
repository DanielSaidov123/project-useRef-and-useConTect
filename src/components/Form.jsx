
export const Form = ({ setInput, addtextclick ,settype,clear}) => {
  
  return (
    <>
      <form  className="todo-form">
        <h2>Add a New Todo</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" placeholder="What do you need to do?" type="text" onChange={(e) => setInput(e.target.value)} />
          <label htmlFor="priority">Priority</label>
          <select name="dsa" id="priority" onChange={(e) => settype(e.target.value)}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div className="form-buttons">
            <button  onClick={addtextclick} type="submit" className="save-btn">Save Todo</button>
            <button onClick={clear} type="button" className="clear-btn">Clear</button>
        </div>
      </form>
    </>
  );
};
