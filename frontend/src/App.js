
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from './pages/Pages';
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartFooter from './components/Cartfooter';
import Home from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
// import Cart from './pages/Cart';
import Cart from './components/cart';
import Checkout from './pages/Checkout';
import Header from './components/header';
import Address from './components/address';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route index element={<Home />} />
          <Route path="ProductCategory" element={<ProductCategory />} />
          <Route path="ProductsPage" element={<ProductsPage />} />
          <Route path="productDetails" element={<ProductDetails />} />
        </Route>
        {/* <Route path="/checkout" element={<Checkout />}> */}
        {/* <Route index element={<Cart />} /> */}
        <Route
          path={"/checkout/cart"}
          element={
            <>
              <Header>
                <Cart />
              </Header>
              <CartFooter />
            </>
          }
        />
        <Route
          path={"/checkout/address"}
          element={
            <>
              <Header>
                <Address />
              </Header>
              <CartFooter />
            </>
          }
        />
        {/* <Route path={"/checkout/address"} element={<Address />} /> */}
        {/* <Route path='address' element={} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
