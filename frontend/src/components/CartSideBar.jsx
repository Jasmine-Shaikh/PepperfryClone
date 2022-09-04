import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Box,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'

export default function CartSideBar({ isOpen, onOpen, onClose }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button> */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"white"} />
                    <DrawerHeader
                        bgColor={"black"}
                        color={"white"}
                    >
                        <Text fontSize={"sm"} fontWeight={"400"}>
                            Showing Availibity At &nbsp;<input style={{ "height": "40px" }} /> &nbsp; Check
                        </Text>

                    </DrawerHeader>

                    <DrawerBody padding={"0"}>
                        <Tabs variant='enclosed'>
                            <Box bgColor={"black"} color="white">
                            <TabList  >
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >MY CART</Tab>
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >MY WISHLIST</Tab>
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >RECENTLY VIEWED</Tab>
                            </TabList>
                            </Box>
                            <TabPanels>
                                <TabPanel>
                                    <p>CART!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Wishlist!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button width={"full"}   colorScheme='orange'>PROCEED TO PAY SECURELY</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

