
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginContextProvider } from './context/LoginContext';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  pepperfry: {
    orange: "#e75a16"
  }
};
const theme = extendTheme({ colors });

root.render(
  <Provider store={store} >
    <LoginContextProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </LoginContextProvider>
  </Provider>

);
