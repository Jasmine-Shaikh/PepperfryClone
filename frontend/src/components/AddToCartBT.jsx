import React from 'react'
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
const AddToCartBT = (props) => {

  return (
    <Button 
      rounded={"none"}
      w={"full"}
      mt={8}
      size={"lg"}
      h={"60px"}
      bg={props?.color?("#FF7135"):"none"}
      border="1px solid black"
      color={props?.color? "white": null }
      textTransform={"uppercase"}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
    >
      Add to cart
    </Button>
  );
}

export default AddToCartBT