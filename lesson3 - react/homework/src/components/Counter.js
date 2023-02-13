import React, { useState } from 'react'

const Counter = () => {

    const [state, setState] = useState(0)

    const Increment = () => {
        setState(state + 1)
    }

    const Decrement = () => {
        setState(state - 1)
    }

    return (
        <div>
            <h2>Counter</h2>
            <span>{state}</span>
            <button className='btn btn-success m-2' onClick={Increment}>Increment</button>
            <button className='btn btn-danger m-2' onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Counter