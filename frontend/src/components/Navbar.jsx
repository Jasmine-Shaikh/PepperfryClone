import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <Box>
        <Box bg="#F5F5F5">
          <div
            style={{
              display: "flex",
              color: "#121212",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 70px",
            }}
          >
            <Stack direction={["row"]} spacing="20px">
              <li style={{ listStyle: "none", fontSize: "14px" }}>
                <Link to="">Sell on Pepperfry</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px" }}>
                <Link to="">Become a Franchisee</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px" }}>
                <Link to="">Buy in Bulk</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px" }}>
                <Link to="">Find a Studio</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px" }}>
                <Link to="">Find Design Inspiration</Link>
              </li>
            </Stack>
            <Stack direction={["row"]} spacing="10px">
              <li style={{ listStyle: "none", fontSize: "12px" }}>
                <Link to="">Enter pincode</Link>
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "12px",
                  color: "#FF7035",
                  textDecorationLine: "underline",
                }}
              >
                <Link to="">Find pepperfry studio</Link>
              </li>
            </Stack>
          </div>
        </Box>
        <Box paddingTop={"15px"}>
          <div style={{ display: "flex" , justifyContent: "center", alignItems: "center"}}>
            <Link to="/">
              <img
                style={{ height: "32px", paddingRight: "30px" }}
                src="https://i.pinimg.com/originals/20/9c/36/209c3603015dfc4a79f59efd7d5217ce.png"
                alt="logo"
              />
            </Link>
            <Box width={"60%"} marginRight={"15px"}>
              <InputGroup  >
                <Input
                 bg="#F5F5F5"
                  borderRadius={"0px"}
                  border={"none"}
                  type="text"
                  fontSize={"15px"}
                  placeholder="Your door to happiness starts with a search"
                />
                <InputRightElement
                  pointerEvents="none"
                  children={<Search2Icon />}
                />
              </InputGroup>
            </Box>
            <Stack direction={["row"]} spacing="10px">
              <button style={{width: "40px", verticalAlign: "middle",backgroundSize: "40px",background: "url(https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg) no-repeat center"}}>
              </button>
              <button style={{width: "40px",verticalAlign: "middle",backgroundSize: "40px",background: "url(https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1) no-repeat center"}}>.
              </button>
              <button style={{width: "30px",verticalAlign: "middle",backgroundSize: "30px",background: "url(https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg) no-repeat center"}}>
              </button>
              <button style={{width: "30px",verticalAlign: "middle",backgroundSize: "30px",background: "url(https://ii1.pepperfry.com/images/svg/icon-cart-21.svg) no-repeat center"}}>
              </button>
            </Stack>
          </div>
        </Box>
        <Box style={{display : "flex" , justifyContent : "center", padding : "15px 0px"}}>
        <Stack direction={["row"]} spacing="20px">
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Furniture</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Sofas & Recliners</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Beds & Mattresses</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Storage</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Dining & Bar</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Wall Accents</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Decor</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Lighting</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Furnishings</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Carpets</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Garden & Outdoor</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Appliances</Link>
              </li>
              <li style={{ listStyle: "none", fontSize: "14px", fontWeight : "500" }}>
                <Link to="">Modular</Link>
              </li>
            </Stack>
        </Box>
      </Box>
      <hr/>
    </header>

  );
};

export default Navbar;
