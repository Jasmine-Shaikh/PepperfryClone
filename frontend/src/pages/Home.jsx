import { Stack } from "@chakra-ui/react";
import React from "react";
import HomeCarousel from "../components/HomeCarousel";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "30px"
      }}
    >
      {/* -----------------------Caurousel--------------------- */}
      <div style={{ display: "flex", justifyContent: "center", width: "90%", marginLeft:  "60px"}}>
      
        <HomeCarousel />
        <img
          style={{ maxHeight: "433px", marginLeft: "-15px", cursor : "pointer" }}
          src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_RHS_Features_270722.jpg"
          alt="features_emi"
        />
      </div>
      {/* --------------------------Shop by rooms-------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "40px 0px 20px",
          }}
        >
          Shop By Room
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_section3_web_28062022_1.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Living Room →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_section3_web_28062022_2.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>Shop Bedroom →</p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="	https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_section3_web_28062022_3.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Dinning Room →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="	https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_section3_web_28062022_4.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Study Room →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------You'll want to deal in this ------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          You’ll Want To Deal In These
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_deal_web_28072022_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Ahead Of Deadlines
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              200+ <b>Modern</b> Study Tables →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/deals_block_2_13_08_22_web.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Get Crafty with Majolica Tiles
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              100+ Solid Wood Products →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_deal_web_28072022_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Rest is For The Wise
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              200+ <b>Modern</b> Queen Size Beds →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_deal_web_28072022_4.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Let's Hang!
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              1500+ <b>Hanging</b> Lights →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------What's trending ------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          What's #trending
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_trendl_web_28072022_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Unleash The Gamer In You
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              50+ Options | Gaming Chairs →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_trendl_web_28072022_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Spring All Year Round
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              500+ Options | Floral Double Bedsheets →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_trendl_web_28072022_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Velvet Revivak
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              900+ Options | Velvet 3 Seater Sofas →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------Make0ver the top--------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Make-over The Top
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_makeover_web_28072022_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Ligthen Your Mood
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              310+ Shelf Floor Lamps <br />
              Starting ₹2380 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_makeover_web_28072022_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Make Homework Fun
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              70+ Kids Study Tables <br />
              Starting ₹474 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_makeover_web_28072022_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Soft On Your Skin
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              130+ Solid Colour Towel Sets <br />
              Starting ₹217 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_makeover_web_28072022_4.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Bud's Buddy
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              300+ Modern Vases <br />
              Starting ₹335 →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* ------------------------They say your style chooses you-----------------------*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          They Say Your Style Chooses You
        </h5>
        <Stack direction={"row"}>
          <img
            style={{ width: "388px", cursor : "pointer"  }}
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_style_web_28072022_1.jpg"
            alt=""
          />
          <img
            style={{ width: "388px", cursor : "pointer"  }}
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_trendl_web_28072022_2.jpg"
            alt=""
          />
          <img
            style={{ width: "388px", cursor : "pointer"  }}
            src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_trendl_web_28072022_3.jpg"
            alt=""
          />
        </Stack>
      </div>
      {/* -----------------------It's Brand New! It's Selling Fast------------------ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          It's Brand New! It's Selling Fast!
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_brand_web_28072022_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Ellementary | 50+ Options
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              Popular For Tableware →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_brand_web_28072022_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              A Globia | 60+ Options
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              Popular For Beds →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_brand_web_28072022_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              Orange Tree | 90+ Options
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              Popular For Tables →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_brand_web_28072022_4.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" }}
            >
              The Rug Republic
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" }}>
              Popular For Rugs →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------The Inspiration You Have Been Looking For------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          The Inspiration You Have Been Looking For
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/inspo_block1_web_20072022.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "16px",
                margin: "8px 0px 0px 0px",
                color: "#848484",
              }}
            >
              5 Benefits Of Choosing{" "}
              <b>
                Solid Wood
                <br /> Furniture
              </b>
              ...Read More →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/inspo_block2_web_20072022.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "16px",
                margin: "8px 0px 0px 0px",
                color: "#848484",
              }}
            >
              Turn Your Home Into A{" "}
              <b>
                Contemporary <br /> Haven in 1 Lakh
              </b>
              ...Read More →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/inspo_block3_web_20072022.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "16px",
                margin: "8px 0px 0px 0px",
                color: "#848484",
              }}
            >
              Enjoy Breaking Rules, We've <br /> <b>#Homeinspo</b> For
              You...Read More →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "288px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/inspo_block4_web_20072022.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "16px",
                margin: "8px 0px 0px 0px",
                color: "#848484",
              }}
            >
              9 Tricks For The{" "}
              <b>
                SparklingModular <br />
                Kitchen
              </b>
              ...Read More →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------More From The Store------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "50px",
          paddingBottom: "30px",
          background:
            "#f6f6f4 url(https://ii2.pepperfry.com/media/wysiwyg/banners/MoreFromTheStore_28_june_1.jpg) no-repeat right bottom",
          backgroundSize: "contain",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          More From The Store
        </h5>
        <div style={{display : "flex", justifyContent: "space-between",width: "87%"}}>
          <Stack direction={"column"}>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Furniture
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Sofas & Recliners
              <br />
              Seating
              <br />
              Chairs
              <br />
              Beds
              <br />
              Cabinetry
              <br />
              Tables
              <br />
              Dining
              <br />
              Kids & Teens
              <br />
              Home Office
              <br />
              Sofa Chairs
              <br />
              Entertainment Units
              <br />
              Outdoor
              <br />
              Bar Furniture
              <br />
              Furniture & Home Services
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Sofas & Recliners
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
              3 Seater Sofas
              <br />
              2 Seater Sofas
              <br />
              1 Seater Sofas
              <br />
              Sofa Sets
              <br />
              Sectional Sofas
              <br />
              Recliners
              <br />
              Chaise Loungers
              <br />
              Sofa Cum Beds
              <br />
              Futons
              <br />
            </p>
          </Stack>
          <Stack direction={"column"}>
          <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Storage
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
Wardrobes<br/>
Cabinets & Sideboards<br/>
Chest of Drawers<br/>
Shoe Racks<br/>
Book Shelves<br/>
Book Cases<br/>
Wall Shelves<br/>
Wall Cabinets<br/>
Table Organizers<br/>
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Beds & Mattresses
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Queen Size Beds<br/>
King Size Beds<br/>
Single Beds<br/>
Mattresses<br/>
Queen Size Mattresses<br/>
King Size Mattresses<br/>
Single Bed Mattresses<br/>
Upholstered Beds<br/>
Kids Beds<br/>
Bunk Beds<br/>
Bedding<br/>
Blankets and Comforters<br/>
            </p>
          </Stack>
          <Stack direction={"column"}>
          <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
             Dinning & Bar
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            Dinnerware<br/>
Serveware<br/>
Drinkware<br/>
Barware<br/>
Teaware<br/>
Bakeware<br/>
Table Linen<br/>
Dining Furniture<br/>
Bar Furniture<br/>
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
               Wall Accents
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
              
Mirrors<br/>
Clocks<br/>
Photoframes<br/>
Wall Shelves<br/>
Wall Cabinets<br/>
Canvas Paintings<br/>
Wall Art<br/>
              
            </p>
          </Stack>
          <Stack direction={"column"}>
          <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Decor
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            Table Decor<br/>
            Wall Shelves & Cabinets<br/>
            Wall Art<br/>
            Spiritual<br/>
            Kids Decor<br/>
            Mirrors<br/>
            Clocks<br/>
            Home Garden<br/>
            Tableware<br/>
            Screens & Dividers<br/>
            Photo Frames<br/>
            
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
             Lighting
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            Floor Lamps<br/>
            Table Lamps<br/>
            Wall Lights<br/>
            Ceiling Lights<br/>
            Chandeliers<br/>
            LED Lights<br/>
            Smart Lights<br/>
            Outdoor Lights<br/>
            Festive Lights<br/>
            Lampshades<br/>
            Kids Lighting<br/>
              
            </p>
          </Stack>
          <Stack direction={"column"}>
          <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Furnishings
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            Bed Linen<br/>
            Curtains<br/>
            Blankets and Comforters<br/>
            Cushions & Covers<br/>
            Bath Linen<br/>
            Kids Furnishings<br/>
            Table Linen<br/>
            Organizers<br/>
            Essentials<br/>
            
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
              Carpets
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Carpets<br/>
Dhurries<br/>
Runners<br/>
Doormats<br/>
            </p>
          </Stack>
          <Stack direction={"column"}>
          <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
             Garden & Outdoor
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            
Pots & Planters<br/>
Planter Stands<br/>
Natural Plants<br/>
Arificial Plants & Flowers<br/>
Garden Decor<br/>
Outdoor Furniture<br/>
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "8px 0px 0px 0px",
                color: "#323232",
                fontWeight: "500",
              }}
            >
             Appliances
            </p>
            <p
              style={{
                fontSize: "13px",
                margin: "8px 0px 0px 0px",
                color: "#121212",
              }}
            >
            Mixers & Processors<br/>
            Breakfast Appliances<br/>
            OTGs<br/>
            Cooktops<br/>
            Chimneys<br/>
            Heating & Cooling<br/>
            Televisions<br/>
            Home Audio<br/>
            Laundry<br/>
            Cleaning<br/>
            Purifiers<br/>
            Built-in Appliances<br/>
            Food Makers<br/>
              
            </p>
          </Stack>
        </div>
      </div>
      {/* -----------------------------Happy Customers, Happy Us ------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Happy Customers, Happy Us
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212" }}
            >
              Bought these two grey puffy stools from pepperfry.
              <br /> Found them to be surprisingly strong! Blends...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
              }}
            >
              Suman Senapatia
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484" }}>
              Visakhapatnam
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer" }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212" }}
            >
              I purchased Candy Study Chair in Pink Colour by <br />
              Alex Daisy from pepperfry looks awesome and My...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
              }}
            >
              Baba Kattubadi
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484" }}>
              Hyderabad
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "388px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212" }}
            >
              Purchased an ergonomic chair, I thought it would <br />
              not be fitting for me but once it got delivered, got it...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
              }}
            >
              Satya Madhana
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484" }}>
              Secunderabad
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------Need Help Buying?------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Need Help Buying?
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Here's How To Choose
              <br /> The Right Sofa
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            >
              How To Buy A Perfect Bed
              <br /> For Your Room
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Your Guide To Buy The
              <br /> Perfect Mattress
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            >
              Everything About
              <br /> Cabinets And Sideboards
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            >
              What To Look For While
              <br /> Buying A Chair
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "188px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            ></p>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
