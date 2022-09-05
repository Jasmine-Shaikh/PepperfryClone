import React from "react";
import "./cart.css";
import { useState } from "react";
import { Select } from "@chakra-ui/react";

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
import deletebox from "../images/icon-cart-dustbin-21.svg";
import location from "../images/w21-locate-orange-icon.svg";
import image from "../images/monster-ultimate--t--gaming-chair-in-black.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [addressactive, setaddressactive] = useState(false);
  const { cartItems } = useSelector((store) => store.cart)
  const [cartitem, setcartitem] = useState([...cartItems]);
  // const [total, settotal] = useState(0)
  console.log(cartitem[0]);
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const [open, setopen] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [checked, setchecked] = useState(1);
  const setstate = (id) => {
    setquantity(id);
    setchecked(id);
  };
  //  const func = () => {
  //    props.myFunc(addressactive);
  //  };
  const deleteitem = (id) => {
    setcartitem(cartitem.splice(id, 1));
  };
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
                        <div
                          className="delete"
                          onClick={() => deleteitem(item.id)}
                        >
                          <img src={deletebox} alt="" />
                        </div>
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
                      <div
                        onClick={() => {
                          setopen(item.id);
                        }}
                        className={` ${open == item.id ? "qty qtya" : "qty "} `}
                      >
                        {quantity}
                      </div>
                      <div
                        className={` ${
                          open == item.id ? "select-items" : "hidden "
                        } `}
                        onClick={() => setopen(false)}
                      >
                        <div
                          onClick={() => setstate(1)}
                          className={` ${
                            checked == 1 && open == item.id ? "checked" : ""
                          } `}
                        >
                          1
                        </div>
                        <div
                          onClick={() => setstate(2, item.id)}
                          className={` ${checked == 2 ? "checked" : ""} `}
                        >
                          2
                        </div>
                        <div
                          onClick={() => setstate(3)}
                          className={` ${checked == 3 ? "checked" : ""} `}
                        >
                          3
                        </div>
                        <div
                          onClick={() => setstate(4)}
                          className={` ${checked == 4 ? "checked" : ""} `}
                        >
                          4
                        </div>
                        <div
                          onClick={() => setstate(5)}
                          className={` ${checked == 5 ? "checked" : ""} `}
                        >
                          5
                        </div>
                        <div
                          onClick={() => setstate(6)}
                          className={` ${checked == 6 ? "checked" : ""} `}
                        >
                          6
                        </div>
                        <div
                          onClick={() => setstate(7)}
                          className={` ${checked == 7 ? "checked" : ""} `}
                        >
                          7
                        </div>
                        <div
                          onClick={() => setstate(8)}
                          className={` ${checked == 8 ? "checked" : ""} `}
                        >
                          8
                        </div>
                        <div
                          onClick={() => setstate(9)}
                          className={` ${checked == 9 ? "checked" : ""} `}
                        >
                          9
                        </div>
                        <div
                          onClick={() => setstate(10)}
                          className={` ${checked == 10 ? "checked" : ""} `}
                        >
                          10
                        </div>
                        <div
                          onClick={() => setstate(11)}
                          className={` ${checked == 11 ? "checked" : ""} `}
                        >
                          11
                        </div>
                        <div
                          onClick={() => setstate(12)}
                          className={` ${checked == 12 ? "checked" : ""} `}
                        >
                          12
                        </div>
                        <div
                          onClick={() => setstate(13)}
                          className={` ${checked == 13 ? "checked" : ""} `}
                        >
                          13
                        </div>
                        <div
                          onClick={() => setstate(14)}
                          className={` ${checked == 14 ? "checked" : ""} `}
                        >
                          14
                        </div>
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
                <Link to={"/checkout/address"}>
                  <div
                    className="checkout"
                    onClick={() => setaddressactive(true)}
                  >
                    <p className="p1a">PROCEED TO CHECKOUT</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer">
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
      </div> */}
    </div>
  );
};

export default Cart;
