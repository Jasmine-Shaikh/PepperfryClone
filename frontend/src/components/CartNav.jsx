import React from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Center,
    Flex,
    Image,
} from '@chakra-ui/react'

import logo from '../images/pf-logo-21.svg';

function CartNav() {
    return (
        <>
            <Flex justify={"space-between"} margin={"20px 60px"} >
                <Box  >
                    <Image boxSize={"90%"} src={logo} alt="" />
                </Box>

                <Center margin={"0 250px"}>
                    <Breadcrumb separator='-----------------'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Address</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Center>

            </Flex>
        </>
    )
}

export default CartNav