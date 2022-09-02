import React from 'react'
import {
    Container,
    SimpleGrid,
    Image,
    Heading,
    Text,
    Stack,
    GridItem,
    Grid,
    Img,
    Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const inWithTheNew = [
    {
        imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_NewArrivals_01_2X_29042022.jpg", title: 'A Hint of Print', subTitle: "Printed Bedding Shets"
    },
    {
        imgUrl: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_NewArrivals_02_2X_29042022.jpg', title: 'Mattress Protectors', subTitle: "Make Mattress Last Longer"
    },
    {
        imgUrl: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_NewArrivals_03_2X_29042022.jpg', title: 'Sleepy Time', subTitle: "Kid's Beds"
    }
]


const happyCustomer = [
    {
        imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg", title: "Bought these two grey puffy stools from pepperfry. Found them to be surprisingly strong", subTitle: "Suman Senapatia  Visakhapatnam"
    },
    {
        imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png", title: "I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks awesome and", subTitle: "Satya Madhana Secunderabad"
    },
    {
        imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg", title: "Purchased an ergonomic chair, I thought it would not be fitting for me but once it got", subTitle: "Baba Kattubadi Hyderabad"
    }
]

const topBrands = [{ imgUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_01_2X_29042022.jpg' }, { imgUrl: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_02_2X_29042022.jpg' }, { imgUrl: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_03_2X_29042022.jpg' }, { imgUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_04_2X_29042022.jpg' }, { imgUrl: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_05_2X_29042022.jpg' }, { imgUrl: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_TopBrands_06_2X_29042022.jpg' }]

const needHelp = [{ imgUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg', subTitle: `Here's How To Choose The Right Sofa` },
{ imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg", subTitle: "How To Buy A Perfect Bed For Your Room" },
{ imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg", subTitle: "Your Guide To Buy The Perfect Mattress" },
{ imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg", subTitle: "Everything About Cabinets And" },
{ imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg", subTitle: "What To Look For While Buying A Chair" },
{ imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg", subTitle: "" }]

function ProductCategory() {
    return (
        <Container maxW={'90%'}>
            <SplitWithImage />
            <AlwaysInTrend />
            <GridImgSplit />
            <GridImgSplit2 />
            <ThreePartImg items={inWithTheNew} heading={"In With The New"} />
            <SixPartImg items={topBrands} heading={"Top Brands To Choose From"} />
            <ThreePartImg items={happyCustomer} heading={"Happy Customers, Happy Us"} />
            <SixPartImg items={needHelp} heading={"Need Help Buying?"} />
        </Container>
    )
}

export default ProductCategory



function SplitWithImage({ title = "Beds and Mattress", types = ["Single Bed, Mattresses",
    "Queen Size Bed Mattresses",
    "King size bed Mattresses",
    "Single Bed Mattresses",
    "Upholstered Beds",
    "Kids Beds",
    "Bunk Beds",
    "Bedding",
    "Blankets and Comforters"] }) {
    return (
        <Container p={0} maxW={'100%'}>
            <SimpleGrid templateColumns={'repeat(6, 1fr)'} columns={{ base: 1, md: 3 }}>
                <GridItem >
                    <Stack>
                        <Heading size={"md"}>{title}</Heading>
                        <Stack h={"60"} overflowY={"auto"}>
                            {
                                types.map((type) => {
                                    return <Text>{type}</Text>
                                })
                            }
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem colSpan={"5"}>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_4_Bed&Mattresses_2386X686_2x_160522.jpg'
                        }
                    />
                </GridItem>
            </SimpleGrid>
        </Container>
    );
}

function AlwaysInTrend({ items = [{ imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_01_2X_29042022.jpg", title: "Dreamy Poster Beds" }, { imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_02_2X_29042022.jpg", title: "Oh-So-Plush" }, { imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_03_2X_29042022.jpg", title: "Easy Lift" }, { imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_04_2X_29042022.jpg", title: "Spine Loving" }]
}) {
    return (
        <Container p={"40px 0 0 0"} maxW={"full"} >
            <Heading pb={"15px"}  >Always In Trend</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {
                    items?.map(item =>
                        <GridItem w='100%' >
                            <Link to={"/ProductsPage"}>
                                <Img src={item.imgUrl} />
                                <Text fontSize={"xl"} >{item.title}</Text>
                            </Link>
                        </GridItem>
                    )
                }
            </Grid>
        </Container>
    )
}

function GridImgSplit({ items = [
    { imgUrl: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_Bedroom_01_2X_29042022.jpg', title: "Bed Sheets" },
    {
        imgUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_Bedroom_03_2X_29042022.jpg', title: 'Quilts & Comforters'
    },
    { imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_Bedroom_02_2X_29042022.jpg", title: "Queen Size Beds" },
    { imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_Bedroom_04_2X_29042022.jpg", title: "King Size Beds" }] }) {
    return (
        <Container p={"40px 0 0 0"} maxW={"full"} >
            <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={6}>
                <GridItem rowSpan={2} colSpan={2} >
                    <Img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_BedroomBasics_Banner_2x_290420022.jpg' />
                    <Box pos={"relative"} top={"-481px"} left={"41px"}>
                        <Heading>Bedroom Basics</Heading>
                        <Text fontSize={"lg"}>All you need to design a bedroom of your dreams.</Text>
                    </Box>
                </GridItem>
                {
                    items.map(item => (
                        <GridItem colSpan={1}  >
                            <Img src={item.imgUrl} />
                            <Text fontSize={"xl"} >{item.title}</Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </Container>
    )
}




function GridImgSplit2({ items = [{ imgUrl: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Beds_Room_Block_Mattresses_web_24012022_1.jpg', title: "King Size Mattresses" }, { imgUrl: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Beds_Room_Block_Mattresses_web_24012022_3.jpg', title: 'Single Mattresses' }, { imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/Beds_Room_Block_Mattresses_web_24012022_2.jpg", title: "Queen Size Mattresses" }, { imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/Beds_Room_Block_Mattresses_web_24012022_4.jpg", title: "Memory Foam Mattresses" }] }) {
    return (
        <Container p={"40px 0 0 0"} maxW={"full"} >
            <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={6}>
                <GridItem colSpan={1}  >
                    <Img src={items[0].imgUrl} />
                    <Text fontSize={"xl"} >{items[0].title}</Text>
                </GridItem>
                <GridItem colSpan={1}  >
                    <Img src={items[1].imgUrl} />
                    <Text fontSize={"xl"} >{items[1].title}</Text>
                </GridItem>

                <GridItem rowSpan={2} colSpan={2} >
                    <Img src='https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Rooms_GoodSleepStartshere_Banner_2x_290420022.jpg' />
                    <Box pos={"relative"} top={"-481px"} left={"41px"}>
                        <Heading>Good Sleep Starts Here</Heading>
                        <Text fontSize={"lg"}>Your mattress plays a major role in one's sleep cycle. The right <br /> mattress will ensure you get a good night's sleep every night.</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}  >
                    <Img src={items[2].imgUrl} />
                    <Text fontSize={"xl"} >{items[2].title}</Text>
                </GridItem>
                <GridItem colSpan={1}  >
                    <Img src={items[3].imgUrl} />
                    <Text fontSize={"xl"} >{items[3].title}</Text>
                </GridItem>
            </Grid>
        </Container>
    )
}




function ThreePartImg({ items, heading }) {
    return (
        <>
            <Heading padding={"40px 0 10px 0"} >{heading}</Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    items.map(item => (
                        <GridItem>
                            <Img src={item.imgUrl} />
                            <Text fontSize={"2xl"} fontWeight={"500"}>{item.title}</Text>
                            <Text fontSize={"lg"} color={"gray"} >{item.subTitle}</Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </>
    )
}


function SixPartImg({ items, heading }) {
    return (
        <>
            <Heading margin={"40px 0 20px 0"}>{heading}</Heading>
            <Grid margin={"0 0 40px 0"} templateColumns='repeat(6, 1fr)' gap={6}>

                {
                    items.map(item => (
                        <GridItem>
                            <Img src={item.imgUrl} />
                            <Heading fontSize={"2xl"} fontWeight={"500"}>{item.title}</Heading>
                            <Text fontSize={"lg"} color={"gray"} >{item.subTitle}</Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </>

    )
}