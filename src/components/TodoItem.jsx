import React from 'react';
import {Card, CloseButton} from "react-bootstrap";


function TodoItem({todo, remove}) {
    return (
        <Card className="mb-2">
            <Card.Body className="todo-item"><div>{todo.id}) {todo.title}</div> <CloseButton onClick={remove(todo)}/></Card.Body>
        </Card>
    );
}

export default TodoItem;