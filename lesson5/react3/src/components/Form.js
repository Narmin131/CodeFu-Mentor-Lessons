import { useState } from "react"
import React from 'react'

const Form = ({ todoList, setTodoList }) => {


    const [inputValue, setInputValue] = useState('')


    const submitForm = (e) => {
        e.preventDefault()
        setTodoList([...todoList, inputValue])
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button>ADD to do </button>
            </form>
        </>
    )
}

export default Form