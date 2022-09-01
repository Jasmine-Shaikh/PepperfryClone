import { Stack } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return (
        <div style={{ display : "flex", flexDirection : "column", justifyContent : "center", backgroundColor: "#F3F5F7", padding: "50px 80px"}} >
            <Stack direction={"row"} spacing={"10rem"} >
            <ul>
                <li style={{listStyle : "none",fontSize : "1rem", fontWeight : "600"}}>Useful links</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>About Us</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Our Blog</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Careers</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Corporate Governance</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Pepperfry In the News</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Find A Studio</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Gift Cards</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Brands</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Customer Reviews</li>
            </ul>
            <ul>
                <li style={{listStyle : "none",fontSize : "1rem", fontWeight : "600"}}>Partners</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Sell With Us</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Become a Franchisee</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Design For Us</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Pepperfry Marketplace</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Login to Your Merchant Dashboard</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Important : GST and You</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Corporate Enquiries</li>
            </ul>
            <ul>
                <li style={{listStyle : "none",fontSize : "1rem", fontWeight : "600"}}>Need Help?</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Contact Us</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Returns & Refund</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Track Your Order</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>FAQs</li>
                <li style={{listStyle : "none",fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}}>Buy on Phone</li>
            </ul>
            <Stack direction={"column"}>
              <h2 style={{ fontSize: "1.5rem", fontFamily: "Playfair Display,serif" , margin: "0 0 12px", fontWeight: "700"}}>Download App</h2>
              <img src='https://ii1.pepperfry.com/images/web21-footer-apple-appstore-logo.png' alt='apple_download'>
              </img>
              <img src="https://ii1.pepperfry.com/images/web21-footer-google-playstore-logo.png" alt="googel_download" />
            </Stack>
            </Stack>
            <Stack direction={"row"} marginTop={"50px"} marginBottom={"50px"} spacing={"2rem"}>
               <div>
                <p style={{fontSize : "1rem", fontWeight : "600", paddingTop : "8px"}} >Popular Categories</p>
                <p style={{fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}} >Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed</p>
               </div>
               <div>
                <p style={{fontSize : "1rem", fontWeight : "600", paddingTop : "8px"}} >Popular Brands</p>
                <p style={{fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}} >Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex</p>
               </div>
               <div>
                <p style={{fontSize : "1rem", fontWeight : "600", paddingTop : "8px"}} >Cities we deliver to</p>
                <p style={{fontSize : "0.875rem",paddingTop : "8px", color: "#848484"}} >Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more</p>
               </div>
            </Stack>
            <hr/>
            <div style={{display : "flex", padding : "40px 0px"}}>
              <div style={{ width : "60%"}}>
                <p style={{fontSize : "1rem", fontWeight : "600", paddingTop : "8px"}}>
                  We accept
                </p>
                <Stack direction={"row"} paddingTop={"10px"}>
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-visacard-logo.png" alt="visacard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-mastercard-logo.png" alt="mastercard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-maestrocard-logo.png" alt="maestrocard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-amexcard-logo.png" alt="amexcard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-rupaycard-logo.png" alt="rupaycard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-dinnerscard-logo.png" alt="dinnercard" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-wallet-logo.png" alt="wallet" />
                   <img style={{width : "55px", height : "34px", marginRight : "6px"}} src="https://ii1.pepperfry.com/images/web21-footer-internet-banking-logo.png" alt="banking" />
                </Stack> 
              </div>
              <div>
                <p style={{fontSize : "1rem", fontWeight : "600", paddingTop : "8px"}}>
                Like what you see? You'll like us even more here
                </p>
                <Stack direction={"row"} paddingTop={"10px"}>
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="https://ii1.pepperfry.com/images/web21-footer-facebook-logo.png" alt="facebook" />
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="https://ii1.pepperfry.com/images/web21-footer-twitter-logo.png" alt="twitter" />
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="	https://ii1.pepperfry.com/images/web21-footer-youtube-logo.png" alt="youtube" />
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="https://ii1.pepperfry.com/images/web21-footer-instagram-logo.png" alt="instagram" />
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="https://ii1.pepperfry.com/images/web21-footer-linkedin-logo.png" alt="linkedin" />
                   <img style={{width : "34px", height : "34px", marginRight : "8px"}} src="https://ii1.pepperfry.com/images/web21-footer-pinterest-logo.png" alt="pinterest" />
                </Stack> 
              </div>
               

            </div>
            <hr/>
            <div style={{ display : "flex", justifyContent : "space-between", paddingTop: "35px"}}>
                <Stack direction={"row"} spacing={"18px"}>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Buy In Bulk</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Write A Testimonial</p>
                </Stack>
                <Stack direction={"row"} spacing={"18px"}>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Whitehat</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Site Map</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Terms Of Use</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Privacy Policy</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Your Data & Security</p>
                  <p style={{color : "#848484", fontSize : "0.85rem"}}>Grievance Redressal</p>
                </Stack>
            </div>

            


        </div>
    );
}

export default Footer;