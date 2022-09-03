import React from 'react'
import './cart.css';
import logo from '../images/pf-logo-21.svg';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="jss1">
          <div className="jss2">
            <div className="jss3">
              <div className="jss4">
                <div className="jss4a">
                  <a href="https://www.pepperfry.com">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="jss4ba">
                  <div className="jss4b">
                    <div className="jss4bb">
                      <div className="jss4b1">
                        <p>Cart</p>
                      </div>
                      <div className="jss4b1">
                        <p>Address</p>
                      </div>
                      <div className="jss4b1">
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
}

export default Header