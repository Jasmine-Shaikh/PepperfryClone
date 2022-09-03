import React from 'react'
import { useState } from 'react';
import image from '../images/monster-ultimate--t--gaming-chair-in-black.webp';
import location from '../images/w21-locate-orange-icon.svg';

const Address = () => {
  const [cartitem, setcartitem] = useState([
    {
      heading:
        'Monster Ultimate (T) Gaming Chair in Black & Grey Colour by Green Soul',
      by: 'Green Soul',
      warrenty: '36 Months Warranty, 100% Genuine',
      price: 35333,
      delivery: 399,
      assembly: 0,
      discount: 12299,
      delivery_date:'wed,o8 Sep',
      credit: 1234,
      image: image,
      id: 1,
    },
    {
      heading:
        'Zeeyan Leatherette High Back Executive Chair In Black Color By Valuewud',
      by: 'ValueWud',
      warrenty: '12 Months Warranty, 100% Genuine',
      price: 12499,
      discount: 1299,
      delivery: 999,
      assembly: 720,
      credit: 134,
      delivery_date:'wed,o8 Sep',
      image: `https://www.pepperfry.com/high-back-executive-chair-in-black-color-by-valuewud-1964282.html?type=cart`,
      id: 2,
    },
  ]);
  const [addresses, setaddresses] = useState([
    {
      name: 'lucky',
    },
  ]);
 
  const updateaddress = (id) => {
   setaddresses({
     ...addresses[0],
     name: 'yadav',
     pincode:123001,
   });
    console.log(addresses);
}
  // const [total, settotal] = useState(0)
  console.log(cartitem);
  console.log(addresses)
  let dollarIndianLocale = Intl.NumberFormat('en-IN');

  var cartvalue = 0;
  var delieverya = 0;
  var assembly = 0;
  var discount = 0;
  var credits = 0;
  var total = 0;

  for (let i = 0; i < cartitem.length; i++) {

    cartvalue = cartvalue + cartitem[i]['price'];
    delieverya = delieverya + cartitem[i]['delivery'];
    assembly = assembly + cartitem[i]['assembly'];
    discount = discount + cartitem[i]['discount'];
    credits = credits + cartitem[i]['credit'];
    total = cartvalue + delieverya + assembly - discount - credits;
  }
  // console.log(cartvalue);
  // console.log(delieverya);
  // console.log(assembly);
  // console.log(discount);
  // console.log(credits);
  // console.log(total);
  return (
    <div>
      <div className="page">
        <div className="jsp1">
          <h2 className="estimates">
            Delivery Estimates{' '}
            <span className="estimatea">
              ({cartitem.length} {cartitem.length > 1 ? 'items' : 'item'})
            </span>
          </h2>
        </div>
        <div className="jsp2">
          <div className="page-left">
            <div className="jsp2-data">
              <div className="cart-lista">
                {cartitem?.map(item => (
                  <div className="card" key={item.id}>
                    <img className="item-image" src={item.image} alt="" />
                    <div className="cart-right cart-righta">
                      <div className="jss-top1">
                        <span className="deliveryby">Delivery by</span>
                        <span className="delivery3">
                          <span className="delivery5">
                            {item.delivery_date}
                          </span>

                          <span className="delivery4">| ₹ {item.delivery}</span>
                        </span>
                      </div>
                      <div className="jss-top1">
                        <span className="deliveryby">Assembly</span>
                        <span className="delivery3">
                          <span className="delivery5">
                            Can Be Self-Assembled
                          </span>
                          <span className="delivery4">
                            {item.assembly === 0 ? '' : ` | ₹ ${item.assembly}`}
                          </span>
                        </span>
                      </div>
                      <div className="jss-bottom1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="getaddress">
              <div className="jsd1">
                <h5 onClick={() => updateaddress(0)}>Select Delivery Address</h5>
                <span className="modifyaddress">Add New Address</span>
              </div>
              <div className="jsd2">
                <h6>Default Address</h6>
                <div className="jsd3">
                  <div className="addressinput">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-right page-righta">
            <div className="right-main">
              <div className="rmid1">
                <div className="price-detail jsc2">
                  <p>Price Details</p>
                  <p>
                    {cartitem.length} {cartitem.length > 1 ? 'items' : 'item'}
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
                    <p>(-)₹ {discount.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="credits jsc2">
                    <p>Credits Reedemed</p>
                    <p>(-)₹ {credits.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="total">
                  <div className="sub-total jsc2">
                    <div className="jsct">
                      <p>Sub Total</p>
                      <p className="p11">(incl. of all taxes)</p>
                    </div>
                    <p>₹ {total.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="rinfo">
                  <div className="rinfob">
                    <span>
                      <span className="emi">EMI </span>
                      Starting ₹{Math.floor(total / 30).toLocaleString('en-IN')}
                      /month
                    </span>
                    <span className="emi">No Cost EMI Available</span>
                  </div>
                </div>

                <div className="checkout">
                  <p className="p1a">PLACE ORDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address