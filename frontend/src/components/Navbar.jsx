import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import CartSideBar from "./CartSideBar";
import { Appliances, Beds, Carpets, Decor, Dining, Furnishing, Furniture, Garden, Lighting, Modular, Sofas, Storage, Wall } from "./DropDownElements";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const [modalToggle, setModalToggle] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [dropCategory, setdropCategory] = React.useState(null);
  const handleLoginSignUp = () => setModalToggle(!modalToggle);
  const { user, setUser } = React.useContext(LoginContext);
  const [searchFor, setSearchFor] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const searchStore = [
    "table linen",
    "table lamps",
    "table decor",
    "table clocks",
    "study table",
    "table",
    "dining table",
    "coffee table",
    "dressing table",
    "office table",
    "bed wedges",
    "bed covers",
    "sofa cum bed",
    "bed",
    "single bed",
    "bedside table",
    "bunk bed",
    "bed sheets",
    "outdoor furniture",
    "furniture cover",
    "bar furniture",
    "office furniture",
    "desk",
    "office desk",
    "standing desk",
    "computer desk",
    "study desk",
    "work desk",
    "desktop table",
    "executive desk",
    "chair pads",
    "chair",
    "office chair",
    "gaming chair",
    "study chair",
    "dinning chair",
    "rocking chair",
    "wing chair",
    "plastic chairs",
    "wooden chairs",
  ];

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  //-------------------------------Register-----------------------------------------
  const [registerData, setRegisterData] = React.useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const {
    registerName,
    registermobileNumber,
    registeremail,
    registerpassword,
  } = registerData;

  const handleRegisterForm = async (e) => {
    console.log(registerData);
    try {
      let data = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      let res = await data.json();
      console.log(res);
      if (res.message) {
        alert(res.message);
      }

      if (
        res.message === "Registeration Complete!" ||
        res.message === "Account already exists! Please Log In."
      ) {
        handleLoginSignUp();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //------------------------------------login-------------------------------------------
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const { loginemail, loginpassword } = loginData;

  const handleLoginForm = async (e) => {
    e.preventDefault();
    console.log("loginData", loginData);
    try {
      let data = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      let res = await data.json();
      console.log(res.token);
      let token = res.token;
      localStorage.setItem("token", token);
      setUser(token);
      alert(res.message);
      if (res.message === "User logged in succesfully") {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //-----------------------------------------Search-------------------------------------------
  const handleSearch = async () => {
    try {
      let searchData = searchStore.filter((e) => {
        return e.includes(searchFor);
      });
      
      if (searchData.length === 0) {
        return setSearchResults(["No results found"]);
      } else {
        return setSearchResults(searchData);
      }
    } catch (error) {
      console.log(error);
    }
  };

   //------------------------------------cart sidebar-------------------------------------------

  const { isOpen: cartSideBarIsOpen, onOpen: cartSideBarOnOpen, onClose: cartSideBarOnClose } = useDisclosure()

  function toggleCartDrawer() {
    cartSideBarOnOpen()
  }

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                style={{ height: "32px", paddingRight: "30px" }}
                src="https://i.pinimg.com/originals/20/9c/36/209c3603015dfc4a79f59efd7d5217ce.png"
                alt="logo"
              />
            </Link>
            <Box width={"60%"} marginRight={"15px"}>
              <InputGroup>
                <Input
                  bg="#F5F5F5"
                  borderRadius={"0px"}
                  border={"none"}
                  type="text"
                  fontSize={"15px"}
                  placeholder="Your door to happiness starts with a search"
                  onChange={(e) => {
                    setSearchFor(e.target.value);
                    handleSearch()
                  }}
                />
                <InputRightElement
                  pointerEvents="none"
                  children={<Search2Icon />}
                />
              </InputGroup>
              {/* ---------------------------------------------Search results--------------------------- */}
              {searchFor === "" ? null : (
                <div
                  style={{
                    position: "absolute",
                    boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
                    backgroundColor: "#fff",
                    zIndex: 1,
                    width: "360px",
                    padding: "12px 18px",

                    left: "270px",
                    top: "98px"
                  }}
                >
                  {searchResults.map((e) => {
                    return <p key={e}>{e}</p>;
                  })}
                </div>
              )}
            </Box>

            <Stack direction={["row"]} spacing="10px">
              <button
                style={{
                  width: "40px",
                  verticalAlign: "middle",
                  backgroundSize: "40px",
                  background:
                    "url(https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg) no-repeat center",
                }}
              ></button>
              <Menu>
                <MenuButton
                  sx={{
                    width: "40px",
                    verticalAlign: "middle",
                    backgroundSize: "40px",
                    fill: "orange",
                    background:
                      "url(https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1) no-repeat center",
                  }}
                  onClick={onOpen}
                >
                  {user ? (
                    <span
                      style={{
                        padding: "0px",
                        margin: "0px",
                        backgroundColor: "orange",
                        fontSize: "1px",
                        position: "relative",
                        border: "5px solid orange",
                        borderRadius: "100%",
                        top: -17,
                        left: 5,
                      }}
                    ></span>
                  ) : (
                    <>.</>
                  )}
                </MenuButton>
                {user ? (
                  <MenuList>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>My Orders</MenuItem>
                    <MenuItem>My Reviews</MenuItem>
                    <MenuItem>My Wishlist</MenuItem>
                    <MenuItem>My Wallet</MenuItem>
                    <MenuDivider />
                    <MenuItem>Edit Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                ) : null}
              </Menu>

              <button
                style={{
                  width: "30px",
                  verticalAlign: "middle",
                  backgroundSize: "30px",
                  background:
                    "url(https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg) no-repeat center",
                }}
              ></button>
              <button
                onClick={toggleCartDrawer}
                style={{
                  width: "30px",
                  verticalAlign: "middle",
                  backgroundSize: "30px",
                  background:
                    "url(https://ii1.pepperfry.com/images/svg/icon-cart-21.svg) no-repeat center",
                }}
              ></button>
              <CartSideBar isOpen={cartSideBarIsOpen} onOpen={cartSideBarOnOpen} onClose={cartSideBarOnClose} />
            </Stack>
          </div>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px 0px",
          }}
        >
          <Stack direction={["row"]} spacing="20px" onMouseEnter={()=>{setShowDropdown(true)}} onMouseLeave={()=>{setShowDropdown(false);setdropCategory(null)}} >
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="/ProductCategory" onMouseEnter={()=>{setdropCategory("furniture")}}>Furniture</Link>
              {showDropdown && dropCategory === "furniture" ? <Furniture/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("sofas")}}>Sofas & Recliners</Link>
              {showDropdown && dropCategory === "sofas" ? <Sofas/>: null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("beds")}}>Beds & Mattresses</Link>
              {showDropdown && dropCategory === "beds" ? <Beds/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("storage")}}>Storage</Link>
              {showDropdown && dropCategory === "storage" ? <Storage/>: null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("dining")}}>Dining & Bar</Link>
              {showDropdown && dropCategory === "dining" ? <Dining/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("wall")}}>Wall Accents</Link>
              {showDropdown && dropCategory === "wall" ? <Wall/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("decor")}}>Decor</Link>
              {showDropdown && dropCategory === "decor" ? <Decor/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("light")}}>Lighting</Link>
              {showDropdown && dropCategory === "light" ? <Lighting/>: null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("furnishing")}}>Furnishings</Link>
              {showDropdown && dropCategory === "furnishing" ? <Furnishing/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("carpet")}}>Carpets</Link>
              {showDropdown && dropCategory === "carpet" ? <Carpets/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("garden")}}>Garden & Outdoor</Link>
              {showDropdown && dropCategory === "garden" ? <Garden/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("appliances")}}>Appliances</Link>
              {showDropdown && dropCategory === "appliances" ? <Appliances/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" }}
            >
              <Link to="" onMouseEnter={()=>{setdropCategory("modular")}}>Modular</Link>
              {showDropdown && dropCategory === "modular" ? <Modular/> : null}
            </li>
          </Stack>
        </Box>
      </Box>
      <hr />
      {/* ---------------------Log In/ Register Modal------------------------------- */}
      {!user ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent minWidth={"700px"} borderRadius={"0px"}>
            <ModalCloseButton />
            <ModalBody padding={"0px"}>
              <div style={{ widht: "1000px" }}>
                {modalToggle ? (
                  // -----------------------------------Login modal---------------------------------
                  <Stack direction={"row"} spacing={0}>
                    <img
                      style={{ maxWidth: "300px" }}
                      src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg"
                      alt=""
                    />
                    <div style={{ width: "100%" }}>
                      <Stack
                        backgroundColor={"rgba(231,231,231,.3)"}
                        spacing={3}
                        padding={"35px 45px 10px"}
                        direction={"column"}
                        marginBottom={"100px"}
                      >
                        <Input
                          focusBorderColor="pepperfry.orange"
                          _placeholder={{
                            opacity: 1,
                            color: "gray.500",
                            fontSize: "14px",
                          }}
                          onChange={handleLoginChange}
                          type={"text"}
                          variant="flushed"
                          placeholder="Email ID/Mobile Number"
                          value={loginemail}
                          name="email"
                        />
                        <InputGroup>
                          <Input
                            focusBorderColor="pepperfry.orange"
                            _placeholder={{
                              padding: "2px",
                              opacity: 1,
                              color: "gray.500",
                              fontSize: "14px",
                            }}
                            onChange={handleLoginChange}
                            variant="flushed"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            value={loginpassword}
                            name="password"
                          />
                          <InputRightElement width="3rem">
                            <Text
                              cursor={"pointer"}
                              fontSize="xs"
                              color={"pepperfry.orange"}
                              onClick={handlePasswordVisibility}
                            >
                              {showPassword ? "HIDE" : "SHOW"}
                            </Text>
                          </InputRightElement>
                        </InputGroup>
                        <Button
                          color={"white"}
                          fontSize={"13px"}
                          h={"45px"}
                          backgroundColor={"pepperfry.orange"}
                          borderRadius={"0px"}
                          onClick={handleLoginForm}
                        >
                          LOG IN
                        </Button>
                        <p style={{ fontSize: "12px", color: "#e75a16" }}>
                          <u>Forgot Password</u>.
                        </p>
                      </Stack>
                      <Stack spacing={6} padding={"45px"} direction={"column"}>
                        <Button
                          variant={"outline"}
                          fontSize={"13px"}
                          fontWeight={"medium"}
                          color={"pepperfry.orange"}
                          borderRadius={"0px"}
                          border={"2px"}
                          onClick={handleLoginSignUp}
                        >
                          New To Pepperfry? Register Here.
                        </Button>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              textAlign: "center",
                              color: "#969696",
                            }}
                          >
                            OR Continue with
                          </p>
                          <img
                            style={{ height: "28px", marginLeft: "15px" }}
                            src="https://ii1.pepperfry.com/images/social_login_fb_2x.png"
                            alt="facebook"
                          />
                          <img
                            style={{ height: "28px", marginLeft: "15px" }}
                            src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                            alt="google"
                          />
                        </div>
                      </Stack>
                    </div>
                  </Stack>
                ) : (
                  // ------------------------------------------Register Modal--------------------------------------
                  <Stack direction={"row"} spacing={0}>
                    <img
                      style={{ maxWidth: "300px" }}
                      src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_010822.jpg"
                      alt=""
                    />
                    <div>
                      <Stack
                        backgroundColor={"rgba(231,231,231,.3)"}
                        spacing={3}
                        padding={"35px 45px 10px"}
                        direction={"column"}
                      >
                        <Input
                          focusBorderColor="pepperfry.orange"
                          _placeholder={{
                            opacity: 1,
                            color: "gray.500",
                            fontSize: "14px",
                          }}
                          onChange={handleRegisterChange}
                          type={"text"}
                          variant="flushed"
                          placeholder="Name"
                          value={registerName}
                          name="name"
                        />
                        <Stack direction={"row"}>
                          <Input
                            focusBorderColor="pepperfry.orange"
                            _placeholder={{
                              opacity: 1,
                              color: "gray.500",
                              fontSize: "14px",
                            }}
                            onChange={handleRegisterChange}
                            marginRight={"30px"}
                            type={"text"}
                            variant="flushed"
                            placeholder="Mobile Number"
                            value={registermobileNumber}
                            name="mobile"
                          />
                          <Button
                            backgroundColor={"transparent"}
                            color={"pepperfry.orange"}
                            fontSize={"small"}
                            variant="ghost"
                          >
                            VERIFY WITH OTP
                          </Button>
                        </Stack>
                        <Input
                          focusBorderColor="pepperfry.orange"
                          _placeholder={{
                            opacity: 1,
                            color: "gray.500",
                            fontSize: "14px",
                          }}
                          onChange={handleRegisterChange}
                          type={"text"}
                          variant="flushed"
                          placeholder="Email ID"
                          value={registeremail}
                          name="email"
                        />
                        <InputGroup>
                          <Input
                            focusBorderColor="pepperfry.orange"
                            _placeholder={{
                              padding: "2px",
                              opacity: 1,
                              color: "gray.500",
                              fontSize: "14px",
                            }}
                            onChange={handleRegisterChange}
                            variant="flushed"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            value={registerpassword}
                            name="password"
                          />
                          <InputRightElement width="3rem">
                            <Text
                              cursor={"pointer"}
                              fontSize="xs"
                              color={"pepperfry.orange"}
                              onClick={handlePasswordVisibility}
                            >
                              {showPassword ? "HIDE" : "SHOW"}
                            </Text>
                          </InputRightElement>
                        </InputGroup>
                        <Button
                          color={"white"}
                          fontSize={"13px"}
                          h={"45px"}
                          backgroundColor={"pepperfry.orange"}
                          borderRadius={"0px"}
                          onClick={handleRegisterForm}
                        >
                          YEAH I WANT CREDITS!
                        </Button>
                        <p style={{ fontSize: "12px", textAlign: "center" }}>
                          By registering you agree to our
                          <u>Terms and Conditions</u>.
                        </p>
                      </Stack>
                      <Stack spacing={6} padding={"45px"} direction={"column"}>
                        <Button
                          variant={"outline"}
                          fontSize={"13px"}
                          fontWeight={"medium"}
                          color={"pepperfry.orange"}
                          borderRadius={"0px"}
                          border={"2px"}
                          onClick={handleLoginSignUp}
                        >
                          Existing User? Log In
                        </Button>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              textAlign: "center",
                              color: "#969696",
                            }}
                          >
                            OR Continue with
                          </p>
                          <img
                            style={{ height: "28px", marginLeft: "15px" }}
                            src="https://ii1.pepperfry.com/images/social_login_fb_2x.png"
                            alt="facebook"
                          />
                          <img
                            style={{ height: "28px", marginLeft: "15px" }}
                            src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                            alt="google"
                          />
                        </div>
                      </Stack>
                    </div>
                  </Stack>
                )}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
      {/* ---------------------------After Log In ------------------------------------- */}
    </header>
  );
};

export default Navbar;
