import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {


  const [state, dispatch] = useStateValue();    //gets the current state  

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
            <small>₹</small>
            <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, index) => (
                    <p key={index}>⭐</p>
                ))}
                
            </div>
        </div>

        <img src={image} alt="product-image"></img>
        <button onClick={addToBasket}>Add to Cart</button>

    </div>
  )
}

export default Product
