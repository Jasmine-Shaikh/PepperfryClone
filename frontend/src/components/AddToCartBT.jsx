import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import CartSideBar from './CartSideBar';
const AddToCartBT = (props) => {
  const dispatch = useDispatch()
  const { isOpen: cartSideBarIsOpen, onOpen: cartSideBarOnOpen, onClose: cartSideBarOnClose } = useDisclosure()
  return (
    <>
    <Button 
      onClick={() => {
        dispatch(addItem(props.product));
        cartSideBarOnOpen();
      }}
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
      <CartSideBar isOpen={cartSideBarIsOpen} onOpen={cartSideBarOnOpen} onClose={cartSideBarOnClose} />
    </>
  );
}

export default AddToCartBT