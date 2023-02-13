import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

const Card = (props) => {


    return (
        <div className='p-3' data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Title : {props.title}</h5>
                    <p className="card-text">Description :{props.description} and Price {props.price}</p>
                </div>
            </div>

        </div>
    )
}

export default Card