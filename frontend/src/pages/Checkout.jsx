import React from 'react'
import { Outlet } from 'react-router-dom'
import Cart from '../components/cart'
import Cartfooter from '../components/Cartfooter'
import CartNav from '../components/CartNav'
import Header from '../components/header'

function Checkout() {
  return (
      <>
          <Header />
          <Cart />
          <Cartfooter />
      </>
  )
}

export default Checkout