import React from 'react'
import { Outlet } from 'react-router-dom'
import Cart from '../components/cart'
import Cartfooter from '../components/Cartfooter'
import { AuthProvider } from "../components/AuthContext";
import CartNav from '../components/CartNav'
import Header from '../components/header'

function Checkout() {
  return (
    <AuthProvider>
      <Header />
      {/* <Cart /> */}
      <Cartfooter />
    </AuthProvider>
  );
}

export default Checkout