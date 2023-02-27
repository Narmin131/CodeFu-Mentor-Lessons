import React from 'react'
import { useCart } from 'react-use-cart'

const ProductItem = ({ product }) => {
  const { addItem, removeItem, updateItemQuantity } = useCart();
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ width: '100%', height: '100%' }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className='btn btn-primary' onClick={() => addItem(product)}>Add to cart</button>
            <button onClick={() => removeItem(product.id)}>Remove item</button>
            <button
              onClick={() => updateItemQuantity(product.id, product.quantity - 1)}
            >
              -
            </button>
            <button>{product.quantity}</button>
            <button
              onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem