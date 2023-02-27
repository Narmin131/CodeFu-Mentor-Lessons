import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import TopToBtn from '../components/TopToBtn'
import myData from '../data/Data'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])


  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              data.map((item, index) => (
                <ProductItem product={item} key={index} />
              ))
            }
          </div>
        </div>
      </section>

      {
        myData.map((data, index) => (
          <h2>{data.address.city}</h2>
        ))
      }
      <TopToBtn />
    </>
  )
}

export default Home