import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])


    useEffect(() => {
        if (localStorage.getItem('Tasks')) {
            const List = JSON.parse(localStorage.getItem('Tasks'))
            setTodos(List)
        }
    }, [])

    const addTodo = (e) => {
        e.preventDefault()
        if (inputValue === '') {
            alert('xanani doldur')
        }
        setTodos([...todos, inputValue])
        setInputValue('')
        localStorage.setItem('Tasks', JSON.stringify([...todos, inputValue]))
    }


    return (
        <>
            <div>
                <form onSubmit={addTodo}>
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                    <button type='submit'>Add todo</button>
                </form>
            </div>

            <div>
                <ol>
                    {
                        todos.map((item, index) => (
                            <li>{item}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default Todo