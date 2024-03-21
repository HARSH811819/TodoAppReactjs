import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { Provider, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="mainBox  mx-auto   border overflow-hidden  border-black mt-3 rounded-lg p-4">
        <Form />
        
        {todos.map((todo) => (
            <Todo todo={todo.text} id={todo.id} completed={todo.completed} />
        ))}

      </div>
    </>
  );
}

export default App;
