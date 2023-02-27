import React from 'react'
import { useCart } from 'react-use-cart'
import ProductItem from './ProductItem'
const Cart = () => {

  const { items, isEmpty, totalUniqueItems, setItems } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>

      <section>
        <div className="container">
          <div className="row">
            {
              items.map((a, index) => (
                <>
                  <ProductItem product={a}/>
                </>
              ))
            }
            <h1>Cart ({totalUniqueItems})</h1>
          </div>
        </div>

        <button onClick={()=>setItems([])}>Buy now</button>
      </section>
    </>
  )
}

export default Cart