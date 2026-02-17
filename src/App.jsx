import { useContext, useRef, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Form } from "./components/Form";
import { AllTodo } from "./components/AllTodo";
import { TodoList } from "./Contexts/TodoContext";
import { Posts } from "./components/Posts";
import { Route , Routes } from "react-router";
function App() {
  const Todos = useContext(TodoList);
  const [text, setInput] = useState("");
  const [type, settype] = useState("low");
  const titleRef = useRef();
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
 
  return (
    <div className={`app ${!light && "light" } ${light && "dark"}`}>
      <Nav   light={light } lightset={lightset}/>
      <Routes>
         <Route path="/todos" element={<main className="main-content">
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
        </main>} />
         <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}
export default App;
