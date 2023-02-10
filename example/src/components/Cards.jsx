import React from 'react'
import Card from './Card'
import img1 from "../assets/img/img1.svg"
import img2 from "../assets/img/img2.svg"
import img3 from "../assets/img/img3.svg"
import data from '../data/Data'
import axios from 'axios'

const Cards = () => {

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => console.log(data))


  // axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(myData => console.log(myData.data))

  return (
    <>
      <section className='myCards'>
        <div className="container h-100">
          <div className="row h-100">
            <Card img={img1} title='Various assets' />
            <Card img={img2} title='Market analysis' />
            <Card img={img3} title='Enhanced tools' />
          </div>
        </div>
      </section>


      <section className='myCards'>
        <div className="container h-100">
          <div className="row h-100">
            {
              data.map((item, index) => (
                <Card title={item.title} img={item.img} key={index} />
              ))
            }
          </div>
        </div>
      </section>

    </>


  )
}

export default Cards