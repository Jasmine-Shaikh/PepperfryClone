import React, { useState, useContext } from 'react';
import './cart.css';
import logo from '../images/pf-logo-21.svg';
import { AuthContext } from './AuthContext';
import Cart from './cart';
import Address from './address';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const {
    cartactive,
    setcartactive,
    addressactive,
    setaddressactive,
    deliveryactive,
    setdeliveryactive,
  } = useContext(AuthContext);
  console.log(cartactive, setcartactive, addressactive, setaddressactive);
  return (
    <div>
      <div className="header">
        <div className="jss1">
          <div className="jss2">
            <div className="jss3">
              <div className="jss4">
                <div className="jss4a">
                  <Link to={'/'}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="jss4ba">
                  <div className="jss4b">
                    <div className="jss4bb">
                      <Link to={'/checkout/cart'}>
                        <div className="jss4b1 header-cart">
                          <p>Cart</p>
                        </div>
                      </Link>
                      <span className="line"></span>
                      <div
                        className={` ${
                          addressactive == true
                            ? 'jss4b1 header-address header-addressa'
                            : 'jss4b1 header-address'
                        } `}
                      >
                        <p>Address</p>
                      </div>
                      <div className="line"></div>
                      <div
                        className={` ${
                          deliveryactive == true
                            ? 'jss4b1 header-payment header-paymenta'
                            : 'jss4b1 header-payment '
                        } `}
                      >
                        <p>Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="child">{children}</div>
      {/* <div className={` ${cartactive == true ? "" : "hidden"} `}>
        <Cart />
      </div>
      <div className={` ${addressactive == true ? "" : "hidden"} `}>
        <Address />
      </div> */}
    </div>
  );
};

export default Header;
