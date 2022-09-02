import React from 'react'
import { Outlet } from 'react-router-dom'
import Cart from '../components/Cart'
import Cartfooter from '../components/Cartfooter'
import CartNav from '../components/CartNav'

function Checkout() {
  return (
      <>
          <CartNav />
          <Outlet />
          <Cartfooter />
      </>
  )
}

export default Checkout