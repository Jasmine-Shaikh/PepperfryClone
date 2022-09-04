import React from 'react'

const AddToCartBT = () => {
  return (
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
  );
}

export default AddToCartBT