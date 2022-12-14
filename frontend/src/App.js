
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
import Payment from './components/payment';


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Pages />} >
        <Route index element={<Home />} />
        <Route path='ProductCategory/:name' element={<ProductCategory />} />
        <Route path='/ProductsPage/:type' element={<ProductsPage />} />
        <Route path='productDetails/:type/:id' element={<ProductDetails />} />
      </Route>
     <Route
          path={"/checkout"}
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
        <Route path={"/payment"} element={<Payment />} />
        {/* <Route path='address' element={} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
