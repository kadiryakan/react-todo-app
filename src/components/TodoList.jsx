import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, onRemoveTodo, onUpdateTodo}) => {
    return (  
        <div style={{width:"100%", margin:"30px 0 0 0"}}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
                ))
            }
        </div>
    );
}
 
export default TodoList;