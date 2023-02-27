import React from 'react'

const Todos = ({ todoList, setTodoList }) => {


  const deleteTodo = (a) => {
    const newArray = todoList.filter((item, index) => {
      return a !== item
    })

    setTodoList(newArray)
  }

  return (
    <ul>
      {
        todoList.map((todo, index) => (
          <li>{todo} <button onClick={() => deleteTodo(todo)}>Delete todo</button></li>
        ))
      }
    </ul>
  )
}

export default Todos