import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
const Wishlist = () => {

  const { favorites, removeFavBooks } = useContext(GlobalContext)


  return (
    <>
      Your Wishlist
      <div className="container">
        <div className="row">
          {
            favorites.map((item, index) => (
              <div className="card" style={{ width: '18rem' }}>
                <img src={item.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className='btn btn-danger' onClick={() => removeFavBooks(item.id)}>Remove from Wishlist</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Wishlist