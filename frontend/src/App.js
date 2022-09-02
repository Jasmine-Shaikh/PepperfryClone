import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from './pages/Pages';
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
    </Routes>

  );
}

export default App;
