import React from 'react';
import {Card, CloseButton} from "react-bootstrap";

function TodoItem({todo}) {
    return (
        <Card>
            <Card.Body className="todo-item"><div>{todo.id}) {todo.title}</div> <CloseButton /></Card.Body>
        </Card>
    );
}

export default TodoItem;