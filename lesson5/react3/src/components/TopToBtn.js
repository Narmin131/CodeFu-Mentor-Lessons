import { useState } from "react"
import React from 'react'

const TopToBtn = () => {

    const [visible, setVisible] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    })

    const topToPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div>
            <button onClick={topToPage} className='btn btn-dark' style={{ display: visible ? 'block' : 'none', position: 'fixed', bottom: '30px', right: '30px' }}>Top</button>
        </div>
    )
}

export default TopToBtn