import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import "../index.css"
import { useState } from "react";

const Todo = ({todo, onRemoveTodo, onUpdateTodo}) => {
    const {id, content} = todo;


    const [editable, setEditable] = useState(false);
    const [newTodo, setnewTodo] = useState(content)

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id : id,
            content : newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", border:"1px solid lightgrey", padding:"10px", marginBottom: "10px"}}>
            <div>
                {
                    editable ? <input style={{width:"380px"}}className="todo-input" onChange={(e) => setnewTodo(e.target.value)} type="text" value={newTodo}/> : content
                }
            </div>
            <div>
                <MdDelete className="todo-icons" onClick={removeTodo} />
                {
                    editable ? <FaCheck className="todo-icons" onClick={updateTodo}/> 
                    : <GoPencil  className="todo-icons" onClick={() => setEditable(!editable)}/>
                }
                

            </div>
        </div>
    );
}
 
export default Todo;