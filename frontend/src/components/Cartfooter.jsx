import React from 'react'
import visa from '../images/web21-footer-visacard-logo.png';
import master from '../images/web21-footer-mastercard-logo.png';
import maestro from '../images/web21-footer-maestrocard-logo.png';
import americanE from '../images/web21-footer-amexcard-logo.png';
import rupay from '../images/web21-footer-rupaycard-logo.png';
import dinnerclub from '../images/web21-footer-dinnerscard-logo.png';
import wallet from '../images/web21-footer-wallet-logo.png';
import internet from '../images/web21-footer-internet-banking-logo.png';
import delievery from '../images/icon-ck-footer-hassle-free-delievry-21.svg';
import returns from '../images/icon-ck-footer-easy-returns-21.svg';
import trophy from '../images/icon-ck-footer-trophy-21.svg';
import versign from '../images/icon-ck-footer-verisign-21-2x.webp';
import psidss from '../images/icon-ck-footer-pci-21-2x.png';

function Cartfooter() {
  return (
      <div>
          <div className="footer">
              <div className="fcontainer">
                  <div className="row footer-row1">
                      <div className="fcol">
                          <h6 className="f-h6">We accept</h6>
                          <div className="fcardlist">
                              <img src={visa} alt="" />
                              <img src={master} alt="" />
                              <img src={maestro} alt="" />
                              <img src={americanE} alt="" />
                          </div>
                          <div className="fcardlist">
                              <img src={rupay} alt="" />
                              <img src={dinnerclub} alt="" />
                              <img src={wallet} alt="" />
                              <img src={internet} alt="" />
                          </div>
                      </div>
                      <div className="fcol">
                          <h6 className="f-h6">Buy Safe Pay Easy</h6>
                          <div className="fdata">
                              <div className="jsf1">
                                  <img src={delievery} alt="" />
                                  <p>
                                      Hassale Free <br /> Delievery
                                  </p>
                              </div>
                              <div className="jsf1">
                                  <img src={returns} alt="" />
                                  <p>
                                      Easy <br />
                                      Returns
                                  </p>
                              </div>
                              <div className="jsf1">
                                  <img src={trophy} alt="" />
                                  <p>
                                      11 Lakh Homes <br />
                                      Made Beautiful
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="fcol">
                          <h6 className="f-h6">100% Safe & Secure</h6>
                          <div className="fdata fd2">
                              <img src={versign} alt="" />
                              <img src={psidss} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Cartfooter