import { useContext, useRef, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Form } from "./components/Form";
import { AllTodo } from "./components/AllTodo";
import { TodoList } from "./Contexts/TodoContext";
function App() {
  const Todos = useContext(TodoList);
  const [text, setInput] = useState("");
  const [type, settype] = useState("Low");

  function addtextclick(e) {
    e.preventDefault();
    Todos.setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: text, type: type },
    ]);
  }
   const textref = useRef();
  function deleteed(id) {
      Todos.setTodos(Todos.todos.filter((todo) => todo.id !== id))
  }
  function clear( ) {
     setInput("")
  }
  return (
    <>
      <Nav />
      <Form setInput={setInput} addtextclick={addtextclick} settype={settype} clear={clear}/>
      { Todos.todos.map((t) => (
        <AllTodo
          title={t.title}
          id={t.id}
          key={t.id}
          type={t.type}
          deleteed={deleteed}
        />
      ))}
    </>
  );
}

export default App;
