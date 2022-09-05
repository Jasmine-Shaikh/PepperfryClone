import React, { useEffect, useState } from 'react'
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
import { Link, useParams } from 'react-router-dom';
import { appliances, beds, carpets, decor, dinning, furnishing, furniture, garden, light, sofa, storage, wall } from '../components/productCategoryElements';

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
    const [title, setTitle] = useState("Furniture")
    const [img, setImg] = useState("https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_Clp_web_banner_04082022.jpg")
    const [types, setTypes] = useState([
        "Sofas and Recliners",
        "Seating",
        "Chairs",
        "Beds",
        "Cabinetry",
        "Tables",
        "Dining",
        "Kids and Teens",
        "Home Office",
        "Sofa Chairs"])
    const [alwaysInTrendImgs, setAlwaysInTrendImgs] = useState(furniture)
    const n = useParams()
    function setSplitWithImg() {
        if (n.name === "furniture" || "modular") {
            setAlwaysInTrendImgs(furniture)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Furniture_Clp_web_banner_04082022.jpg")
            setTitle("Furniture")
            setTypes(["Sofas and Recliners",
                "Seating",
                "Chairs",
                "Beds",
                "Cabinetry",
                "Tables",
                "Dining",
                "Kids and Teens",
                "Home Office",
                "Sofa Chairs"])
        }
        if (n.name === "sofas") {
            setAlwaysInTrendImgs(sofa)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_2_Sofa&Recliners_2386X686_2x_160522.jpg")
            setTitle("Sofas & Recliners")
            setTypes(["3 Seater Sofas",
                "2 Seater Sofas",
                "1 Seater Sofas",
                "Sofa Sets",
                "Sectional Sofas",
                "Recliners",
                "Chaise Loungers",
                "Sofa Cum Beds",
                "Futons"])
        }
        if (n.name === "beds") {
            setAlwaysInTrendImgs(beds)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_4_Bed&Mattresses_2386X686_2x_160522.jpg")
            setTitle("Beds & Mattresses")
            setTypes(["Queen Size Beds",
                "King Size Beds",
                "Single Beds",
                "Mattresses",
                "Queen Size Bed Mattresses",
                "King size bed Mattresses",
                "Single Bed Mattresses",
                "Upholstered Beds",
                "Kids Beds",
                "Bunk Beds"])
        }
        if (n.name === "storage") {
            setAlwaysInTrendImgs(storage)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_3_Storage_2386X686_2x_160522.jpg")
            setTitle("Storage")
            setTypes([
                "Wardrobes",
                "Cabinets & Sideboards",
                "Chest of Drawers",
                "Shoe Racks",
                "Book Shelves",
                "Book Cases",
                "Wall Shelves",
                "Wall Cabinets",
                "Table Organizers"
            ])
        }
        if (n.name === "dining") {
            setAlwaysInTrendImgs(dinning)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_48_Tableware_2386X686_2x_170522.jpg")
            setTitle("Dining & Bar")
            setTypes([
                "Dinnerware",
                "Serveware",
                "Drinkware",
                "Barware",
                "Teaware",
                "Bakeware",
                "Table Linen",
                "Dining Furniture",
                "Bar Furniture",
            ])
        }
        if (n.name === "wall") {
            setAlwaysInTrendImgs(wall)
            setImg("https://ii1.pepperfry.com/media/wysiwyg/banners/Web_6_WallAccents_2386X686_2x_160522.jpg")
            setTitle("Wall Accents")
            setTypes(["Mirrors",
                "Clocks",
                "Photo Frames",
                "Wall Shelves",
                "Wall Cabinets",
                "Canvas Paintings",
                "Wall Art"])
        }
        if (n.name === "decor") {
            setAlwaysInTrendImgs(decor)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_7_Decor_2386X686_2x_160522.jpg")
            setTitle("Decor")
            setTypes([
                "Table Decor",
                "Wall Shelves & Cabinets",
                "Wall Art",
                "Spiritual",
                "Kids Decor",
                "Mirrors",
                "Clocks",
                "Home Garden",
                "Tableware",
                "Screens & Dividers",
            ])
        }
        if (n.name === "light") {
            setAlwaysInTrendImgs(light)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_8_Lighting_2386X686_2x_160522.jpg")
            setTitle("Lighting")
            setTypes(["Floor Lamps",
                "Table Lamps",
                "Wall Lights",
                "Ceiling Lights",
                "Chandeliers",
                "LED Lights",
                "Smart Lights",
                "Outdoor Lights",
                "Festive Lights",
                "Lampshades",])
        }
        if (n.name === "furnishing") {
            setAlwaysInTrendImgs(furnishing)
            setImg("https://ii1.pepperfry.com/media/wysiwyg/banners/Furnishings_2386-X-686-27012021.jpg")
            setTitle("Furnishings")
            setTypes(["Bed Linen",
                "Curtains",
                "Blankets & Comforters",
                "Cushions & Covers",
                "Carpets & Dhurries",
                "Bath Linen",
                "Kids Furnishings",
                "Table Linen",
                "Organisers",
                "Essentials",])
        }
        if (n.name === "carpet") {
            setAlwaysInTrendImgs(carpets)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_10_Carpet_2386X686_2x_160522.jpg")
            setTitle("Carpets and Dhurries")
            setTypes(["Carpets",
                "Dhurries",
                "Runners",
                "Doormats",])
        }
        if (n.name === "garden") {
            setAlwaysInTrendImgs(garden)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_11_Garden_Outdoor_2386X686_2x_210622.jpg")
            setTitle("Garden and Outdoor")
            setTypes([
                "Pots & Planters",
                "Planter Stands",
                "Natural Plants",
                "Artificial Plants & Flowers",
                "Garden Decor",
                "Outdoor Furniture",
            ])
        }
        if (n.name === "appliances") {
            setAlwaysInTrendImgs(appliances)
            setImg("https://ii2.pepperfry.com/media/wysiwyg/banners/Web_AppliancesCLP_2X_TopBanner_080822.jpg")
            setTitle("Appliances")
            setTypes(["Mixers & Processors",
                "Breakfast Appliances",
                "OTGs",
                "Cooktops",
                "Chimneys",
                "Heating & Cooling",
                "Televisions",
                "Home Audio",
                "Refrigerators",
                "Laundry"])
        }

    }

    useEffect(() => {
      setSplitWithImg()
    }, [n])
    
    console.log(n)
    return (
        <Container maxW={'90%'}>
            <SplitWithImage categoryName={n?.name} title={title} img={img} types={types} />
            <AlwaysInTrend categoryName={n?.name} items={alwaysInTrendImgs} />
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



function SplitWithImage({ categoryName, title = "Beds and Mattress", types = ["Single Bed, Mattresses",
    "Queen Size Bed Mattresses",
    "King size bed Mattresses",
    "Single Bed Mattresses",
    "Upholstered Beds",
    "Kids Beds",
    "Bunk Beds",
    "Bedding",
    "Blankets and Comforters"], img = "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_4_Bed&Mattresses_2386X686_2x_160522.jpg" }) {
    return (
        <Container p={0} maxW={'100%'}>
            <Link to={`/ProductsPage/${categoryName}`}>
            <SimpleGrid templateColumns={'repeat(6, 1fr)'} columns={{ base: 1, md: 3 }}>
                <GridItem >
                    <Stack>
                        <Text fontWeight={"800"} fontFamily={"Playfair Display"} size={"1.25rem"}>{title}</Text>
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
                        src={img}
                    />
                </GridItem>
            </SimpleGrid>
            </Link>
        </Container>
    );
}

function AlwaysInTrend({categoryName, items = [{ imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_01_2X_29042022.jpg", title: "Dreamy Poster Beds" }, { imgUrl: "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_02_2X_29042022.jpg", title: "Oh-So-Plush" }, { imgUrl: "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_03_2X_29042022.jpg", title: "Easy Lift" }, { imgUrl: "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Beds_Trends_04_2X_29042022.jpg", title: "Spine Loving" }]
}) {
    return (
        <Container p={"40px 0 0 0"} maxW={"full"} >
            <Heading pb={"15px"}  >Always In Trend</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {
                    items?.map(item =>
                        <GridItem w='100%' >
                            <Link to={`/ProductsPage/${categoryName}`}>
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