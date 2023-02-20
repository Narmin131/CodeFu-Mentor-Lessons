import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Hooks = () => {


    const [data, setData] = useState([])
    const [counter, setCounter] = useState(0)



    const increaseCounter = ()=>{
        setCounter(counter + 1)
    }

    const getMyData = () => {
        axios.get('https://fakestoreapi.com/users')
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
    }



    useEffect(() => {
        getMyData()
    }, [])

    // useEffect(()=>{

    // })

    // useEffect(()=>{

    // },[])

    useEffect(()=>{
      console.log(`My counter clicked ${counter} times`);
    }, [counter])



    return (
        <>
            {
                data.map((item, index) => (
                    <div>
                        <h2>{item.username}</h2>
                    </div>
                ))
            }

            <div>
                <span>{counter}</span>
                <button onClick={increaseCounter}>ADD</button>
            </div>
            

        </>
    )
}

export default Hooks