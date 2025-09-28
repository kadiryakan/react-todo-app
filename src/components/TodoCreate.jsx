import React, { useState } from "react";

const TodoCreate = ({onCreateTodo}) => {

    const [newTodo, setNewTodo] = useState("")

    const clearInput = () => {
        setNewTodo("");
    }

    const createTodo = () => {
        if(!newTodo) return
        const request= {
            id : Math.floor(Math.random() * 9999999),
            content: newTodo,
        }

        onCreateTodo(request)
        clearInput()
    }
    return (
        <div className="todo-create">
            <input 
            className="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text" 
            placeholder="Enter a todo"/>
            <button onClick={createTodo} className="todo-button">Create Todo</button>
        </div>
    );
}
 
export default TodoCreate;