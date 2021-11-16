import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {id:1, title: 'send message', completed:false},
    {id:2, title: 'did homework', completed:false},
    {id:3, title: 'go to class', completed:false}
  ])

  const addTodo = (data) => {
    const todoId = todos[todos.length - 1].id + 1
    setTodos([...todos, {
      id:todoId,
      title: data,
      completed: false
    }])
  }

  return (
    <div className="container">
      <Navbar title='todo'/>
        <div className="container mt-4">
          <FormTodo emit={addTodo}/>
          <TodoList todos={todos}/>
        </div>
    </div>
  );
}

export default App;
