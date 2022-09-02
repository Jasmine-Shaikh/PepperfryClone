import React from "react";
import { v4 as uuid } from "uuid";
import { StarIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactImageMagnify from 'react-image-magnify';

import {
  Select,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Divider,
  Drawer,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import ReactImageZoom from "react-image-zoom";
import {
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const ProductDetails = () => {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:8080/products/sofas/2")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const getRatings = () => {
    const stars = [];
    for (var i = 0; i < 5; i++) {
      stars.push(
        <StarIcon mx={"2px"} w={6} h={6} color={"#FFAA1F"} key={uuid()} />
      );
    }
    return stars;
  };
  const price = () => product.mrp - product.discount;

  const selectQuantity = () => {
    var opts = [];
    for (var i = 2; i < 14; i++)
      opts.push(
        <option key={uuid()} value="i">
          {i}
        </option>
      );
    return opts;
  };

  return (
    <Container marginBottom={'5%'} fontFamily={"Manrope, sans-serif"} maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box w="100%" p={4} color="white">
            <Carousel
              useKeyboardArrows
              transitionTime={1000}
              showThumbs={true}
              showArrows={true}
              infiniteLoop
            >
              {product?.img?.map((images) => {
                
                return (
                  <div>
                    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:images
    },
    largeImage: {
        src: images,
        width: 1200,
        height: 1800
    },
    enlargedImageContainerDimensions: {
      marginTop:'10%'
      width: '150%',
      height: '150%',
  },
}} />
                    <img
                      rounded={"md"}
                      alt={"product image"}
                      src={images}
                      fit={"cover"}
                      align={"center"}
                      w={"100%"}
                      h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                  </div>
                );
              })}
            </Carousel>
          </Box>
        </Flex>
        <Stack
          fontFamily={"Manrope, sans-serif"}
          scrollBehavior={"auto"}
          spacing={{ base: 6, md: 10 }}
        >
          <Box fontFamily={"Manrope, sans-serif"} as={"header"}>
            <Heading
              fontFamily={"Manrope, sans-serif"}
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "4xl", lg: "20px" }}
            >
              {product?.name}
            </Heading>
            <Text
              padding={"0px"}
              color={"#FF7135"}
              fontWeight={700}
              fontSize={"16px"}
              marginTop={"8px"}
            >
              By {product.details?.brand}
            </Text>
          </Box>
          <Box
            paddingTop={0}
            display={"inline-flex"}
            fontSize={"14px"}
            color={"#848484"}
            fontFamily={"Manrope, sans-serif"}
            fontWeight={600}
          >
            {getRatings()} ({Math.floor(Math.random() * 500) + 1} Ratings )
            &nbsp; <Text color={"black"}>{product?.details?.warranty}</Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack
              sx={{ alignItems: "baseline" }}
              spacing={{ base: 4, sm: 4 }}
            >
              <Text
                textAlign={"left"}
                fontSize={{ base: "2xl", sm: "4xl", lg: "24px" }}
                fontWeight={"900"}
                marginTop={"-30px"}
                color={"black"}
                fontFamily={"Manrope, sans-serif"}
              >
                ₹ {product?.offer_price}
              </Text>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                left={0}
                fontWeight={"300"}
              >
                Save ₹ {product?.total_savings}{" "}
                <s>MRP ₹ {product?.actual_price}</s> (Inc of all taxes)
              </Text>
              <Divider />
              <Text>
                Last Day to <b>Earn Cashback ₹ 21,000</b> <br />
                EMI Starting ₹ 1,978 view options
              </Text>
              <Image
                src={
                  "https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_28082022_nd.jpg"
                }
              />
              <InputGroup size="md">
                <Text width={"15%"} fontWeight={"700"} fontSize="12px">
                  DELIVERY
                </Text>
                <Stack>
                  <Text fontSize={"14px"} mx={"20px"}>
                    Enter Pincode to get Delivery Date, Assembly Information and
                    other details
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <Input
                      ml={"20px"}
                      pr="4.5rem"
                      placeholder="Enter pincode"
                    />
                    <InputRightElement pt={"50px"} width="35.5rem">
                      <Button color={"#FF7135"} h="1.75rem" size="sm">
                        Apply
                      </Button>
                    </InputRightElement>
                    <Text mx={"50px"} my={"auto"}>
                      {" "}
                      ✅ Pepperfry Fulfilled
                    </Text>
                  </SimpleGrid>
                  <Text>
                    {" "}
                    🚚 Delivery charges as applicable <b>Pincode Required</b>
                    <Text>
                      {" "}
                      🛠️ Assembly Charges as applicable <b>Pincode Required</b>
                    </Text>
                  </Text>
                </Stack>
              </InputGroup>
              <Divider />
              <Stack
                direction="row"
                alignItems="baseline"
                justifyContent={"right"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
                <Select
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  h={"60px"}
                  size={"lg"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  placeholder={"Qty"}
                >
                  <option value="1" selected>
                    1
                  </option>
                  {selectQuantity()}
                </Select>
                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  h={"60px"}
                  bg={"none"}
                  border="1px solid black"
                  color={useColorModeValue("black", "white.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Add to cart
                </Button>
                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  h={"60px"}
                  bg={"#FF7135"}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Buy Now
                </Button>
              </SimpleGrid>
            </VStack>
            <Divider />
            <Box>
              <Flex fontFamily={"Manrope, sans-serif"} fontSize="12px" gap={3}>
                <Box width={"25%"} fontWeight={"700"}>
                  <b>MORE OFFERS</b>
                </Box>
                <Box fontSize="14px">
                  <Text>
                    <b fontWeight={"700"}>
                      ICICI Bank Full SwipeCode: ICICI3000
                    </b>{" "}
                    <br />
                    Get Extra 10% off on Full Swipe purchases through ICICI Bank
                    Cards. Not applicable on EMI transactions. Maximum Discount
                    Rs 3000
                  </Text>
                  <Divider />
                  <Text>
                    <b fontWeight={"700"}>
                      Extra 10% Off On HDFC Bank Debit & Credit Card No Cost
                      EMICode: HDFCPFY10
                    </b>{" "}
                    <br />
                    Get Extra 10% Off Up to Rs.3500 Off on HDFC Bank Debit &
                    Credit Card EMI Transactions
                  </Text>
                  <Divider />
                  <Text>
                    <b fontWeight={"700"}>
                      Get BYJU's Power Program for Free on Every Transaction
                      with us
                    </b>{" "}
                    <br />
                    BYJU's Power Program Free on every Order - 3 Live Tuition
                    Classes and 15 Days Free Acess to BYJU's Premium App
                  </Text>
                  <Divider />
                  <Text>
                    <b fontWeight={"700"}>
                      Extra 10% Off On HDFC Bank Debit & Credit Card No Cost
                      EMICode: HDFCPFY10
                    </b>
                    <br />
                    Get Extra 10% Off Up to Rs.3500 Off on HDFC Bank Debit &
                    Credit Card EMI Transactions
                  </Text>
                  <Divider />
                  <Text>
                    <b fontWeight={"700"}>
                      Extra 10% Off Upto Rs.4000 on Rupay Credit CardsCode:
                      RUPAYPF10
                    </b>{" "}
                    <br />
                    Get Extra 10% Off on Rupay Credit Cards. Max Discount of
                    Rs.4,000
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box name="productDetails">
              <Flex fontFamily={"Manrope, sans-serif"} gap={3}>
                <Text fontSize="12px" width={"25%"} fontWeight={"700"}>
                  DETAILS
                </Text>
                <SimpleGrid
                  fontSize={"16px"}
                  columns={{ base: 1, md: 2 }}
                  gap={3}
                >
                  <Box>
                    <Text>Brand</Text> <Divider />
                    <b>{product?.details?.brand}</b>
                  </Box>
                  <Box>
                    <Text>Dimensions(In Inches)</Text> <Divider />
                    <b>{product?.details?.dimensions}</b>
                  </Box>
                  <Box>
                    <Text>Weight</Text> <Divider />
                    <b>{product?.details?.weight}</b>
                  </Box>
                  <Box>
                    <Text>Warranty</Text> <Divider />
                    <b>{product?.details?.warranty}</b>
                  </Box>
                  <Box>
                    <Text>Assembly</Text> <Divider />
                    <b>{product?.details?.assembly}</b>
                  </Box>
                  <Box>
                    <Text>Primary Material</Text> <Divider />
                    <b>
                      {product?.details
                        ? product.details["primary material"]
                        : null}
                    </b>
                  </Box>
                  <Box>
                    <Text>Room Type</Text> <Divider />
                    <b>
                      {product?.details ? product.details["room type"] : null}
                    </b>
                  </Box>
                  <Box>
                    <Text>Seater</Text> <Divider />
                    <b>{product.seater}</b>
                  </Box>
                  <Box>
                    <Text>Seating Height</Text> <Divider />
                    <b>
                      {product?.details
                        ? product.details["seating height"]
                        : null}
                    </b>
                  </Box>
                  <Box>
                    <Text>Product Rating</Text> <Divider />
                    <b>{}</b>
                  </Box>
                  <Box>
                    <Text>Sku</Text> <Divider />
                    <b>{product?._id}</b>
                  </Box>
                </SimpleGrid>
              </Flex>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack>
        <Box>
          <Text fontSize={"30px"} fontWeight={700}>
            Recently Viewed
          </Text>
        </Box>
        <SimpleGrid w="full" columns={{ base: 1, md: 5 }} spacing={3}>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "250px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-stool-in-rustic-teak-finish---mudramark-by-pepperfry-siramika-solid-wood-stool-i-qrar8c.jpg"
            />
            <Text>Siramika Solid Wood Stoo...</Text>
            <Text color={"#FF7135"}>₹ 10,499</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "250px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/z/e/494x544/zenzi-wing-chair-in-multi-colour-by-arra-zenzi-wing-chair-in-multi-colour-by-arra-wwutkd.jpg"
            />
            <Text>Zenzi Wing Chair In Multi C...</Text>
            <Text color={"#FF7135"}>₹ 28,151</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "250px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/the-begum-wing-chair-bohemian-paisleys-in-black-colour-by-chumbak-the-begum-wing-chair-bohemian-pais-x6dbfr.jpg"
            />
            <Text>The Begum Wing Chair in B...</Text>
            <Text color={"#FF7135"}>₹ 24,245</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "250px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/t/u/440x484/turquoise-ceramic-be-a-flamingo-table-vase-by-gaia-turquoise-ceramic-be-a-flamingo-table-vase-by-gai-sunyog.jpg"
            />
            <Text>Turquoise Ceramic Be A Fla...</Text>
            <Text color={"#FF7135"}>₹ 3,374</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "250px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/d/a/440x484/dark-brown-sheesham-wood-tree-of-life-book-end-book-end-by-exclusivelane-dark-brown-sheesham-wood-tr-bd0f1b.jpg"
            />
            <Text>Dark Brown Sheesham Wood...</Text>
            <Text color={"#FF7135"}>₹ 1,549</Text>
          </Box>
        </SimpleGrid>
      </Stack>
      <Divider my={"5%"} />
      <Stack>
        <Text fontSize={"20px"} fontWeight={"700"}>
          ASK A QUESTION
        </Text>
        <Text>Have questions regarding this product?</Text>
        <Input placeholder={"Type your question here"} />
        <Button
          rounded={"none"}
          w={"50%"}
          mt={8}
          size={"md"}
          h={"50px"}
          bg={"#FF7135"}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          Post Your Question
        </Button>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
