import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import Todos from '../components/Todos'

const MyTodoPage = () => {


    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('Todos')) || [])

    useEffect(()=>{
       localStorage.setItem('Todos', JSON.stringify(todoList))
    },[todoList])


    return (
        <div>
            <Form todoList={todoList} setTodoList={setTodoList} />
            <Todos todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
}

export default MyTodoPage