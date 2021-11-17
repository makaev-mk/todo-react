import React from 'react';
import TodoItem from "./TodoItem";
function TodoList({todos}) {
    const removeTodo = (id) => {
        console.log(id)
    }
    return (
        <div>
            {todos.map((todo) => <TodoItem remove={removeTodo} todo={todo} key={todo.id}/>)}
        </div>
    )

}

export default TodoList;