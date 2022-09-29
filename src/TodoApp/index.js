import { useRef, useState } from "react";

import "./TodoApp.css";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoRef = useRef();

  const handleAdd = () => {
    setTodos((prev) => [...prev, todo]);
    setTodo("");
    todoRef.current.focus();
  };

  return (
    <div className="todo__app">
      <h2>Todo App</h2>
      <input
        ref={todoRef}
        type="text"
        placeholder="Enter your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos && todos.length > 0 && todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoApp;
