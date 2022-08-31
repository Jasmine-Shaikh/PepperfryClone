import React from "react";
import { v4 as uuid } from "uuid";
import { StarIcon } from "@chakra-ui/icons";
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
    for (var i = 0; i <= product.rating; i++) {
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
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack scrollBehavior={"auto"} spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.name}
            </Heading>
            <Text color={"#FF7135"} fontWeight={900} fontSize={"2xl"}>
              By {product.details.brand}
            </Text>
          </Box>
          <Box>
            {getRatings()} ({Math.floor(Math.random() * 500) + 1} Ratings)
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
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                fontWeight={"900"}
              >
                ₹ {eval(Math.floor(price()), 0.001)} (
                {Math.floor((product.discount / product.mrp) * 100)}% off)
              </Text>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                left={0}
                fontWeight={"300"}
              >
                Save ₹ {product.mrp - price()} <s>MRP ₹ {product.mrp}</s> (Inc
                of all taxes)
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
                <Text fontWeight={"700"}>DELIVERY</Text>
                <VStack>
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
                </VStack>
              </InputGroup>
              <Divider />
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
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

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
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
              h={{ base: "100%", sm: "250px", lg: "300px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-stool-in-rustic-teak-finish---mudramark-by-pepperfry-siramika-solid-wood-stool-i-qrar8c.jpg"
            />
            <Text>Siramika Solid Wood Stoo...</Text>
            <Text color={"#FF7135"}>₹ 10,499</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "300px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/z/e/494x544/zenzi-wing-chair-in-multi-colour-by-arra-zenzi-wing-chair-in-multi-colour-by-arra-wwutkd.jpg"
            />
            <Text>Zenzi Wing Chair In Multi C...</Text>
            <Text color={"#FF7135"}>₹ 28,151</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "300px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/the-begum-wing-chair-bohemian-paisleys-in-black-colour-by-chumbak-the-begum-wing-chair-bohemian-pais-x6dbfr.jpg"
            />
            <Text>The Begum Wing Chair in B...</Text>
            <Text color={"#FF7135"}>₹ 24,245</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "300px" }}
              src="https://ii1.pepperfry.com/media/catalog/product/t/u/440x484/turquoise-ceramic-be-a-flamingo-table-vase-by-gaia-turquoise-ceramic-be-a-flamingo-table-vase-by-gai-sunyog.jpg"
            />
            <Text>Turquoise Ceramic Be A Fla...</Text>
            <Text color={"#FF7135"}>₹ 3,374</Text>
          </Box>
          <Box>
            <Image
              h={{ base: "100%", sm: "250px", lg: "300px" }}
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
