import React from 'react'
import { useState } from 'react';
import upi from '../images/arrow.svg';
import credit from '../images/credit.svg';
import net from '../images/net.svg';
import wallet from '../images/wallet.svg';
import qr from '../images/qr code.jfif';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import './cart.css'

const Payment = () => {
  let navigate = useNavigate();
    const [showqr, setshowqr] = useState("noshow")
    const [paycolor, setpaycolor] = useState(false)
      function payment_complete() {
        swal("We are Processing your Payment", {
          buttons: ["ok"],
        });
        setTimeout(function () {
          swal("Poof! Your payment has been completed!", {
            icon: "success",
            buttons: true,
          });
         navigate("/")
        }, 2000);
      }
  return (
    <div>
      <div className="main">
        <div className="jsa1">
          <div className="back">Back </div>
          <div className="jsa2">
            <div className="jsa3">
              <div className="jsa3a">
                <div className="jsa3b">
                  <div className="jsa3b1">
                    <div className="jsb1">
                      <img id="arrow" src={upi} alt="" />
                      <p className="pp1">UPI</p>
                    </div>
                    <div className="jsb1 jsb2">
                      <img src={credit} alt="" />
                      <p className="pp1">Credit / Debit Card</p>
                    </div>
                    <div className="jsb1 jsb3">
                      <img src={net} alt="" />
                      <p className="pp1">Netbanking</p>
                    </div>
                    <div className="jsb1 jsb4">
                      <img src={wallet} alt="" />
                      <p className="pp1">Wallets</p>
                    </div>
                  </div>
                </div>
                <div className="jsa3c">
                  <div className="jsa3c1">
                    <div className="js11">
                      <p className="pp2">Scan QR and Pay</p>
                      <p className="pp3">
                        Scan the QR using any UPI app on your mobile phone like
                        PhonePe, Paytm, GooglePay, BHIM etc.
                      </p>
                      <button className="qr">
                        <p onClick={() => setshowqr("show")} className="pp7">
                          {showqr == "show"
                            ? " Scan QR Code"
                            : "Generate QR Code"}
                        </p>
                      </button>
                      <div className={` ${showqr == "show" ? "" : "hidden"} `}
                      onMouseEnter={()=> payment_complete()}
                      >
                        <img src={qr} alt=""></img>
                      </div>

                      <p className="pp4">Enter your UPI ID</p>
                      <input
                        onInput={(e) =>
                          e.target.value.length > 9
                            ? setpaycolor(true)
                            : setpaycolor(false)
                        }
                        className="input5"
                        type="text"
                        placeholder="e.g rakesh@upi"
                      />
                      <p className="pp5">
                        A collect request will be sent to this UPI ID
                      </p>
                      <button
                        onClick={() => payment_complete()}
                        id="pay_now3"
                        className={` ${
                          paycolor == true ? "pay_now paycolor" : "pay_now"
                        } `}
                      >
                        <p className="pp7">Pay Now</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="jsa4">
                    <div className="jsa4a">
                        <div className="js4a">
                            <p className="p26">Comprehensive plan</p>
                            <p className="p27">For your Honda Activa</p>
                        </div>
                        <div className="js4b">
                            <div className="bill_data">
                                <div className="bill">
                                    <p className="p28">Net Premium</p>
                                    <p id="net_premium3" className="value3">₹ 2,390</p>
                                </div>
                                <div className="bill">
                                    <p className="p28">GST</p>
                                    <p id="gst3" className="value3">₹ 430</p>
                                </div>
                            </div>
                            <div className="last">
                                <div className=" total3">
                                    <p>Total</p>
                                    <p id="total" className="total">₹ 2,820</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment