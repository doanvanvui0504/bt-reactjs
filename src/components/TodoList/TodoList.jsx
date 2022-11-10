import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', { title: todo });
      await getTodos();
    } catch (err) {
      console.log(err);
    }
    setTodo('');
  };

  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <ul>{todos.length > 0 && todos.map((item, index) => <li key={index}>{item.title}</li>)}</ul>
    </div>
  );
};

export default TodoList;
