import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo"
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {id:1, title: 'send message', completed:false},
    {id:2, title: 'did homework', completed:false},
    {id:3, title: 'go to class', completed:false}
  ])

  const addTodo = (data) => {
    const todoId = todos.length ? todos[todos.length - 1].id + 1 : 1

    setTodos([...todos, {
      id:todoId,
      title: data,
      completed: false
    }])
  }

  const remove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const complete = (id) => {
    // setTodos(todos.map(item => {
    //   if (item.id === id) {
    //     return {...item}
    //   }
    // }))
    // eslint-disable-next-line array-callback-return
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }


  return (
    <div className="container">
      <Navbar title='Todo'/>

      <div className="container mt-4">
        <FormTodo emit={addTodo}/>
        <TodoList remove={remove} complete={complete} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
