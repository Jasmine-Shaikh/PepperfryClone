import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Cart from "./components/cart";
import Header from "./components/header";
import Address from "./components/address";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Cart />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
