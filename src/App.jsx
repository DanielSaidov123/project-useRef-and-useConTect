import { useContext, useRef, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Form } from "./components/Form";
import { AllTodo } from "./components/AllTodo";
import { TodoList } from "./Contexts/TodoContext";
import { Posts } from "./components/Posts";
function App() {
  const Todos = useContext(TodoList);
  const [text, setInput] = useState("");
  const [type, settype] = useState("low");
  const titleRef = useRef();
  const [bool, setbool] = useState(false);
  const [light, setlight] = useState(false);

  function lightset() {
    console.log(light);
    setlight(!light);
  }
  
  function addtextclick(e) {
    e.preventDefault();
    Todos.setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: text, type: type },
    ]);
  }

  const clear = () => {
    if (titleRef.current) {
      titleRef.current.value = "";
      titleRef.current.focus();
    }
  };
  function togelbool() {
    setbool(!bool);
    console.log(bool);
  }
  return (
    <div className={`app ${!light && "light" } ${light && "dark"}`}>
      <Nav togelbool={togelbool} bool={bool}  light={light } lightset={lightset}/>
      {!bool ? (
        <main className="main-content">
          <Form
            setInput={setInput}
            addtextclick={addtextclick}
            settype={settype}
            clear={clear}
            titleRef={titleRef}
          />

          <div className="todo-list">
            {Todos.todos.map((t) => (
              <AllTodo title={t.title} id={t.id} key={t.id} type={t.type} />
            ))}
          </div>
        </main>
      ) : (
        <Posts />
      )}
    </div>
  );
}
export default App;
