import React from 'react';
import {Card} from "react-bootstrap";
import * as icons from './icons'

function TodoItem({todo, remove, complete}) {

    return (
        <Card className="mb-2">
            <Card.Body className="todo-item">
                <div style={ {textDecoration: todo.completed ? 'line-through' : ''}}>{todo.id}) {todo.title} </div>
                <div>
                    <button className="btn" onClick={() => complete(todo.id)}>{todo.completed ? icons.isComplete : icons.completed}</button>
                    <button className="btn" onClick={() => remove(todo.id)}>{icons.remove}</button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TodoItem;