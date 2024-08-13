import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'

function Checkout() {
  return (
    <div className='checkout'>

        <div className='checkout__left'>

          <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg' alt='checkout-ad' />
            <div >
                <h2 className='checkout__title'>Your shopping Basket</h2>
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout
