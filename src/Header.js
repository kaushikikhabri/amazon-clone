import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>

        <Link to='/'>
          <img className='header__logo' src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="" />
        </Link>

        <div className='header__search'>
            <input className='header__searchInput' type='text' placeholder='Search Amazon.in'></input>
            <SearchIcon className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>&Orders</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>

          <Link to='/checkout' className='header__optionBasket'>
            <ShoppingCartCheckoutIcon className='header__basketIcon'/>
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </Link>  
             
        </div>
    </div>
  )
}

export default Header
