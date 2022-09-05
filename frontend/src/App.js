
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Pages from './pages/Pages';
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
// import Cart from './pages/Cart';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Address from './components/address';
import { getCartFromDB } from './cart/cartFunctions';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice';

function App() {
  const dispatch = useDispatch()
  // console.log(a)
  useEffect(() => {
    
    // getCartFromDB().then(res => {
    //   res.forEach(item => {
    //     dispatch(addItem(item))
        
    //   });
    // })
  
    
  }, [])
  

  return (<>
    <Routes>
      <Route path="/" element={<Pages />} >
        <Route index element={<Home />} />
        <Route path='ProductCategory/:name' element={<ProductCategory />} />
        <Route path='/ProductsPage/:type' element={<ProductsPage />} />
        <Route path='productDetails/:type/:id' element={<ProductDetails />} />
      </Route>
      <Route path='/checkout' element={<Checkout />}>
        <Route index element={<Cart />} />
        <Route path='address' element={<Address />} />
        {/* <Route index element={<Cart />} /> */}
      </Route>
    </Routes>
  </>

  );
}

export default App;
