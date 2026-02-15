import { createContext, useState } from "react";

export const TodoList = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (

    <TodoList.Provider value={{ todos, setTodos }}>
      {children}
    </TodoList.Provider>
  );
}
