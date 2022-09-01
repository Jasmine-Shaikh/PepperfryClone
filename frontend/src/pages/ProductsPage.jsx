import React from "react";
import {
  border,
  Heading,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const productDetails = [
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
    total_savings: "71,000 (38% Off)",
    price: 113999,
    seater: 3,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
      weight: "64 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      primary_material: "Half Leather",
      room_type: "Living Room",
      seating_height: 18,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
    total_savings: "71,000 (38% Off)",
    price: 113999,
    seater: 3,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
      weight: "64 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      primary_material: "Half Leather",
      room_type: "Living Room",
      seating_height: 18,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
    total_savings: "71,000 (38% Off)",
    price: 113999,
    seater: 3,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
      weight: "64 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      primary_material: "Half Leather",
      room_type: "Living Room",
      seating_height: 18,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
    total_savings: "71,000 (38% Off)",
    price: 113999,
    seater: 3,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
      weight: "64 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      primary_material: "Half Leather",
      room_type: "Living Room",
      seating_height: 18,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
];

function ProductCard(product) {
  const {
    id,
    name,
    img,
    madeBy,
    offer_price,
    actual_price,
    total_savings,
    price,
    seater,
    details,
  } = product;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        height: "580px",
        textAlign: "left",
        padding: "10px",
      }}
    >
      <div>
        <img
          style={{ width: "100%", height: "350px" }}
          src={img[0]}
          alt="Product Image"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "left",
          padding: "10px",
        }}
      >
        <Text fontSize="lg" padding="10px 0px 0px 0px">
          {name}
        </Text>
        <p style={{ color: "gray", padding: "10px 0px 0px 0px" }}>{madeBy}</p>
        <div
          style={{
            display: "flex",
            width: "55%",
            justifyContent: "space-between",
            margin: "0px",
            padding: "10px 0px 0px 0px",
          }}
        >
          {
            <>
              <Heading as="h5" size="sm" color="tomato">
                {"₹ " + offer_price}
              </Heading>
              <s style={{ color: "grey" }}>
                {" "}
                <p>{"₹ " + actual_price}</p>
              </s>
            </>
          }
        </div>
        <Heading as="h6" size="xs" color="green.500" padding="10px 0px 0px 0px">
          {total_savings}
        </Heading>
        <p style={{ padding: "10px 0px 0px 0px" }}>
          {"Earn cashback ₹ " + Math.floor(price / 2)}
        </p>
      </div>
    </div>
  );
}

export const ProductsPage = () => {
  const [sort, setSort] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [units, setUnits] = React.useState(false);
  const [depth, setDepth] =React.useState(false);
  const [width, setWidth] =React.useState(false);
  const [height, setHeight] =React.useState(false)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
      <div>Navbar</div>
      <hr />
      <div>below the navbar</div>
      <hr />
      <div>filters section</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "330px",
            borderRight: "0.1px solid grey",
            marginLeft: "100px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "centre",
              // border: "2px solid red",
              alignItems: "centre"
            }}
          >
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Sort by
            </Heading>
            <h4 style={{ textAlign: "left" }}></h4>
            <RadioGroup onChange={setSort} sort={sort}>
              <Stack direction="column">
                <Radio
                  size="lg"
                  colorScheme="orange"
                  value="rel"
                  defaultChecked
                >
                  Relevance
                </Radio>
                <Radio size="lg" colorScheme="orange" value="hl">
                  Highest Priced First
                </Radio>
                <Radio size="lg" colorScheme="orange" value="lh">
                  Lowest Priced First
                </Radio>
                <Radio size="lg" colorScheme="orange" value="fs">
                  Fastest Shipping
                </Radio>
                <Radio size="lg" colorScheme="orange" value="new">
                  Newest
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Brand
            </Heading>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              padding: "0px",
              margin: "0px",
              overflow: "hidden",
              height: "280px",
              onMouseOver: "this.style.overflow='scroll'",
              onMouseOut: "this.style.overflow='hidden'",
            }}
          >
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Price
            </Heading>
            <Checkbox size="md">Under ₹ 5,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 5,001 to 10,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 10,001 to 20,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 20,001 to 30,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 30,001 to 40,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 40,001 to 50,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 50,001 to 60,000 </Checkbox>
            <br />
            <Checkbox size="md">₹ 70,001 to 80,000</Checkbox>
            <br />
            <Checkbox size="md">₹ 80,001 to 90,000</Checkbox>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Primary Material
            </Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                padding: "0px",
                margin: "0px",
                overflow: "hidden",
                height: "280px",
                onMouseOver: "this.style.overflow='scroll'",
                onMouseOut: "this.style.overflow='hidden'",
              }}
            >
              <Checkbox size="md">Fabric</Checkbox>
              <br />
              <Checkbox size="md">Velvet Fabric</Checkbox>
              <br />
              <Checkbox size="md">Leatherette</Checkbox>
              <br />
              <Checkbox size="md">Sheesham Wood</Checkbox>
              <br />
              <Checkbox size="md">Polyester</Checkbox>
              <br />
              <Checkbox size="md">Pine Wood</Checkbox>
              <br />
              <Checkbox size="md">Leather </Checkbox>
              <br />
              <Checkbox size="md">Half Leather</Checkbox>
              <br />
              <Checkbox size="md">Rubber Wood </Checkbox>
              <br />
              <Checkbox size="md">{"Fabric & Leatherette"}</Checkbox>
              <br />
              <Checkbox size="md">{"Teak Wood "}</Checkbox>
              <br />
              <Checkbox size="md">{"Engineered Wood"}</Checkbox>
              <br />
              <Checkbox size="md">{"MDF"}</Checkbox>
              <br />
              <Checkbox size="md">{"Mango Wood"}</Checkbox>
            </div>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Style
            </Heading>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Color Swatch
            </Heading>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Dimension
            </Heading>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>Depth</p>
              <div style={{ display: "flex", padding: "0px", margin: "0px" }}>
                <label>
                  Units in "in"
                  <Switch
                    size="sm"
                    isChecked={units}
                    onChange={() => {
                      setUnits(!units);
                    }}
                    colorScheme="orange"
                  />
                  Ft
                </label>
              </div>
            </div>
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value: number): void => {setDepth(value)}} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{padding:"5px"}}>
                <Text fontSize="md"  blockSize="max-content">
                  {units? (Math.round((depth[0]/20))) : (Math.round(((depth[0]/20)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{padding:"5px"}}>
                <Text fontSize="md" blockSize="max-content">
                  {units? (Math.round((depth[1]/20))) : (Math.round(((depth[1]/20)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>Height</p>
              <div
                style={{ display: "flex", padding: "0px", margin: "0px" }}
              ></div>
            </div>
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value: number): void => {setHeight(value)}} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{padding:"5px"}}>
                <Text fontSize="md"  blockSize="max-content">
                  {units? (Math.round((height[0]/15))) : (Math.round(((height[0]/15)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{padding:"5px"}}>
                <Text fontSize="md" blockSize="max-content">
                  {units? (Math.round((height[1]/15))) : (Math.round(((height[1]/15)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>Width</p>
              <div
                style={{ display: "flex", padding: "0px", margin: "0px" }}
              ></div>
            </div>
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value: number): void => {setWidth(value)}} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{padding:"5px"}}>
                <Text fontSize="md"  blockSize="max-content">
                  {units? (Math.round((width[0]/17))) : (Math.round(((width[0]/17)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{padding:"5px"}}>
                <Text fontSize="md" blockSize="max-content">
                  {units? (Math.round((width[1]/17))) : (Math.round(((width[1]/17)*12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
            </div>
          </div>
          <hr />
          <div>
            <Heading
              as="h5"
              size="sm"
              textAlign="left"
              padding="15px 0px 15px 0px"
            >
              Discount
            </Heading>
            <RadioGroup onChange={setDiscount} discount={discount}>
              <Stack direction="column">
                <Radio size="lg" colorScheme="orange" value="10">
                  10% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="20">
                  20% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="30">
                  30% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="40">
                  40% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="50">
                  50% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="60">
                  60% and Above{" "}
                </Radio>
                <Radio size="lg" colorScheme="orange" value="70">
                  70% and Above{" "}
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
          <hr />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "15px",
            marginRight: "80px",
          }}
        >
          {productDetails.map((ele) => ProductCard(ele))}
        </div>
      </div>
      <div>above the footer</div>
      <div>footer</div>
    </div>
  );
};
