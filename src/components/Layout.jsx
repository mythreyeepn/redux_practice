import React, { startTransition } from 'react'
import Header from './Header'
import Products from './Products'
import './Layout.css'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'

const Layout = () => {
  let total = 0;
  const itemList = useSelector(state=>state.cart.itemsList);
  itemList.forEach(element => {
    total += element.totalPrice;
    
  });
  const showCart = useSelector(state => state.cart.showCart)
  return (
    <>
    <div className='layout'>
      <Header/>
      <Products />
      {showCart &&  <CartItems/> }
      <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
    </div>
    </>
  )
}

export default Layout
