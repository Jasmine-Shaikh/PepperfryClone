import React from 'react'
import deletebox from "../images/icon-cart-dustbin-21.svg";
function CartItemCard({ item }) {
    console.log(item)
  return (
          <div className="card" key={item.id}>
              <img className="item-image" src={item.img[0]} alt="" />
              <div className="cart-right">
                  <div className="carthead">
                      <h2>{item.name}</h2>
                      <div
                          className="delete"
                        //   onClick={() => deleteitem(item.id)}
                      >
                          {/* <img src={deletebox} alt="" /> */}
                      </div>
                  </div>
                  <div className="by">by {item.madeBy}</div>
                  <div className="amounta">
                      ₹ {item.offer_price}
                      &nbsp;&nbsp;&nbsp;
                      <p className="line-through">
                      ₹ {item.actual_price.toLocaleString("en-IN")}
                      </p>
                      &nbsp; &nbsp; &nbsp;
                      <p className="jspb1">
                           Saved ₹
                          {(
                          item.total_savings
                          ).toLocaleString("en-IN")}
                          
                      </p>
                  </div>
                  {/* <div
                      onClick={() => {
                          setopen(item.id);
                      }}
                      className={` ${open == item.id ? "qty qtya" : "qty "} `}
                  >
                      {quantity}
                  </div>
                  <div
                      className={` ${open == item.id ? "select-items" : "hidden "
                          } `}
                      onClick={() => setopen(false)}
                  >
                      <div
                          onClick={() => setstate(1)}
                          className={` ${checked == 1 && open == item.id ? "checked" : ""
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
                      </div> */}
                  {/* </div> */}
              </div>
          </div>
  )
}

export default CartItemCard