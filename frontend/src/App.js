import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from './pages/Pages';
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
import Cart from './pages/Cart';


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Pages />} >
        <Route index element={<Home />} />
        <Route path='ProductCategory' element={<ProductCategory />} />
        <Route path='ProductsPage' element={<ProductsPage />} />
        <Route path='productDetails' element={<ProductDetails />} />
      </Route>
      <Route path='/checkout'>
        <Route index element={<Cart />} />
        {/* <Route path='address' element={} /> */}
      </Route>
    </Routes>
  </>

  );
}

export default App;
