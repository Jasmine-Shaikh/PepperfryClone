import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from './pages/Pages';
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import { ProductsPage } from './pages/ProductsPage';


function App() {
  return (
        <Routes>
          <Route path="/" element={<ProductsPage />}/>
          <Route path='/:id' element={<ProductDetails/>}/>
        </Routes>
 );
}

export default App;
