import React, { createContext, useState } from "react";
// import { axios } from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [cartactive, setcartactive] = useState(true)
    const [addressactive, setaddressactive] = useState(false);
    const [deliveryactive, setdeliveryactive] = useState(false)
    

 
    const value = {
      cartactive,
      setcartactive,
      addressactive,
      setaddressactive,
      deliveryactive,
      setdeliveryactive,
    };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
