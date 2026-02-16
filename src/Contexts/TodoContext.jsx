import { createContext, useState } from "react";

export const TodoList = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  
  function deleteed(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <TodoList.Provider value={{ todos, setTodos ,deleteed}}>
      {children}
    </TodoList.Provider>
  );
}
