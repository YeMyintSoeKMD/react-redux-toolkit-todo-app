import React, { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, doneTodo } from "./features/todos/todoSlice";

const App = () => {

  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todo.todos)

  let titleRef = createRef()

  // add todo
  const addNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: titleRef.current.value,
      done: false
    }
    if(titleRef.current.value !== '') {
      dispatch(addTodo(newTodo))
    }
    titleRef.current.value = ''
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <form>
        <input type="text" ref={titleRef} />
        <button onClick={addNewTodo}>Add</button>
      </form>
      <ul className="todos">
        { todos.map(todo => {
          let doneClass = todo.done ? 'done' : ''
          return (
            <li key={todo.id} className={`todo-item ${doneClass}`} onDoubleClick={() => dispatch(doneTodo(todo.id))} title="Double click when you finish this task">
              <span>{todo.title}</span>
              <span onClick={() => dispatch(deleteTodo(todo.id)) }>x</span>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default App;
