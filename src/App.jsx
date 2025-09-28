import { useState, useEffect } from 'react'
import "./index.css"
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {


  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    return todos || []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)])
  }

  const updateTodo= (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id!==newTodo.id){
        return
      }

      return newTodo;
    })
    setTodos([...updatedTodos])
  }

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList onRemoveTodo={removeTodo} todos={todos} onUpdateTodo={updateTodo}/>
      </div>
    </div>
  )
}

export default App
