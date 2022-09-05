import React, { useState } from "react";
import "./cart.css";
import logo from "../images/pf-logo-21.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="jss1">
          <div className="jss2">
            <div className="jss3">
              <div className="jss4">
                <div className="jss4a">
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="jss4ba">
                  <div className="jss4b">
                    <div className="jss4bb">
                      <div className="jss4b1 header-cart">
                        <p>Cart</p>
                      </div>
                      <span className="line"></span>
                      <div className="jss4b1 header-address">
                        <p>Address</p>
                      </div>
                      <div className="line"></div>
                      <div className="jss4b1 header-payment">
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
    </div>
  );
};

export default Header;
