import React from "react";
import "./cart.css";
import { useState } from "react";

import logo from "../images/pf-logo-21.svg";
import visa from "../images/web21-footer-visacard-logo.png";
import master from "../images/web21-footer-mastercard-logo.png";
import maestro from "../images/web21-footer-maestrocard-logo.png";
import americanE from "../images/web21-footer-amexcard-logo.png";
import rupay from "../images/web21-footer-rupaycard-logo.png";
import dinnerclub from "../images/web21-footer-dinnerscard-logo.png";
import wallet from "../images/web21-footer-wallet-logo.png";
import internet from "../images/web21-footer-internet-banking-logo.png";
import delievery from "../images/icon-ck-footer-hassle-free-delievry-21.svg";
import returns from "../images/icon-ck-footer-easy-returns-21.svg";
import trophy from "../images/icon-ck-footer-trophy-21.svg";
import versign from "../images/icon-ck-footer-verisign-21-2x.webp";
import psidss from "../images/icon-ck-footer-pci-21-2x.png";
import location from "../images/w21-locate-orange-icon.svg";
import image from "../images/monster-ultimate--t--gaming-chair-in-black.webp";

const Cart = () => {
  const [cartitem, setcartitem] = useState([
    {
      heading:
        "Monster Ultimate (T) Gaming Chair in Black & Grey Colour by Green Soul",
      by: "Green Soul",
      warrenty: "36 Months Warranty, 100% Genuine",
      price: 35333,
      delivery: 0,
      assembly: 0,
      discount: 12299,
      credit: 1234,
      image: image,
      id: 1,
    },
    {
      heading:
        "Zeeyan Leatherette High Back Executive Chair In Black Color By Valuewud",
      by: "ValueWud",
      warrenty: "12 Months Warranty, 100% Genuine",
      price: 12499,
      discount: 1299,
      delivery: 240,
      assembly: 320,
      credit: 134,
      image: `https://www.pepperfry.com/high-back-executive-chair-in-black-color-by-valuewud-1964282.html?type=cart`,
      id: 2,
    },
  ]);
  // const [total, settotal] = useState(0)
  console.log(cartitem[0]);
  let dollarIndianLocale = Intl.NumberFormat("en-IN");

  var cartvalue = 0;
  var delieverya = 0;
  var assembly = 0;
  var discount = 0;
  var credits = 0;
  var total = 0;

  for (let i = 0; i < cartitem.length; i++) {
    cartvalue = cartvalue + cartitem[i]["price"];
    delieverya = delieverya + cartitem[i]["delivery"];
    assembly = assembly + cartitem[i]["assembly"];
    discount = discount + cartitem[i]["discount"];
    credits = credits + cartitem[i]["credit"];
    total = cartvalue + delieverya + assembly - discount - credits;
  }
  console.log(cartvalue);
  console.log(delieverya);
  console.log(assembly);
  console.log(discount);
  console.log(credits);
  console.log(total);

  return (
    <div>
      <div className="page">
        <div className="jsp1">
          <h2>
            Your cart <span>({cartitem.length} item)</span>
          </h2>
        </div>
        <div className="jsp2">
          <div className="page-left">
            <div className="jsp2-data">
              <div className="saved-message">
                <p className="jspa">
                  Congratulations! You Saved&nbsp;
                  {(discount + credits).toLocaleString("en-IN")}
                  &nbsp;On This Order
                </p>
              </div>
              <div className="cart-list">
                {cartitem?.map((item) => (
                  <div className="card" key={item.id}>
                    <img className="item-image" src={item.image} alt="" />
                    <div className="cart-right">
                      <div className="carthead">
                        <h2>{item.heading}</h2>
                      </div>
                      <div className="by">by {item.by}</div>
                      <div className="warrenty">{item.warrenty} </div>
                      <div className="amounta">
                        ₹ {item.price - (item.discount + item.credit)}
                        &nbsp;&nbsp;&nbsp;
                        <p className="line-through">
                          ₹ {item.price.toLocaleString("en-IN")}
                        </p>
                        &nbsp; &nbsp; &nbsp;
                        <p className="jspb1">
                          ( Saved ₹
                          {(
                            item.price -
                            (item.price - (item.discount + item.credit))
                          ).toLocaleString("en-IN")}
                          )
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="page-right">
            <div className="right-main">
              <div className="rtop1">
                <div className="raddress">
                  <input className="input1" type="text" placeholder="123001" />
                  <p>Remove</p>
                </div>
                <div className="locate">
                  {/* <img src={location} alt="" /> */}
                  <p>Locate me</p>
                </div>
              </div>
              <div className="rtop2">
                {/* <div className="rcoupon">
                  <p>Apply Coupon</p>
                  <p></p>
                </div> */}
              </div>
              <div className="rmid1">
                <div className="price-detail jsc2">
                  <p>Price Details</p>
                  <p>
                    {cartitem.length} {cartitem.length > 1 ? "items" : "item"}
                  </p>
                </div>
                <div className="pricing">
                  <div className="cartvalue jsc2 aa">
                    <p>Cart Value</p>
                    <p>₹ {cartvalue}</p>
                  </div>
                  <div className="delivery1 jsc2 aa">
                    <p>Delivery</p>
                    <p>₹ {delieverya}</p>
                  </div>
                  <div className="assembly1 jsc2 aa">
                    <p>Assembly</p>
                    <p>₹ {assembly}</p>
                  </div>
                </div>
                <div className="discount">
                  <div className="retail jsc2">
                    <p>Retail Discount</p>
                    <p>(-)₹ {discount.toLocaleString("en-IN")}</p>
                  </div>
                  <div className="credits jsc2">
                    <p>Credits Reedemed</p>
                    <p>(-)₹ {credits.toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <div className="total">
                  <div className="sub-total jsc2">
                    <div className="jsct">
                      <p>Sub Total</p>
                      <p className="p11">(incl. of all taxes)</p>
                    </div>
                    <p>₹ {total.toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <div className="rinfo">
                  <p>(Shipping and Assembly details on Checkout)</p>
                </div>
                <div className="rinfoa">
                  <p>Use GSTIN For Business Purchase (Optional)</p>
                </div>
                <div className="checkout">
                  <p className="p1a">PROCEED TO CHECKOUT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
