import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Books = () => {

    const [books, setBooks] = useState([])

    const { addFavBooks } = useContext(GlobalContext)


    const getData = () => {
        axios.get('https://example-data.draftbit.com/books?_limit=10')
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        books.map((item, index) => (
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={item.image_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <button href="#" className="btn btn-primary" onClick={()=>addFavBooks(item)}>Add to favorites</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Books