import React from 'react'
import { Outlet } from 'react-router-dom'
import Cart from '../components/Cart'
import CartNav from '../components/CartNav'

function Checkout() {
  return (
      <>
          <CartNav />
          <Outlet />
      </>
  )
}

export default Checkout