import React from 'react';
import TodoItem from "./TodoItem";
function TodoList({todos, remove, complete}) {

    return (
        <div>
            {todos.map((todo) => <TodoItem complete={complete} remove={remove} todo={todo} key={todo.id}/>)}
        </div>
    )

}

export default TodoList;