/* eslint-disable jsx-a11y/aria-proptypes */
import React, { useEffect, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
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
import { Link } from "react-router-dom";

const filterCard=(ele)=>{

  return(
    <div style={{width:"100px", border:"2px solid black"}}>
      <h2>
        {ele}
      </h2>
    </div>
  )
}


const getRatings = () => {
  let k=Math.floor((Math.random()*(5-3))+3)
  const stars = [];
  for (var i = 0; i < k; i++) {
    stars.push(
      <StarIcon mx={"2px"} w={4} h={4} color={"#FFAA1F"}  />
    );
  }
  return stars;
};
function productCard(product) {

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

    <Link to={"/ProductDetails"}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        // height: "500px",
        textAlign: "left",
        padding: "10px",
      }}
    >
      <div>
      <div style={{position: "relative", textAlign: "center",  color: "white"}}>
        
        <img style={{ width: "100%", height: "350px" }} src={img[0]} alt="Product"/>
      <div style={{position: "absolute",bottom: "8px",left: "16px"}}>Bottom Left</div>
      <div style={{position: "absolute",bottom: "22px",right: "8px"}}>{getRatings()}</div>
      <AiOutlineHeart />
        </div>
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
        <p style={{ padding: "10px 0px 0px 0px" }}>
          {`Ships in 1 day`}
        </p>
      </div>
      </div>
    </Link>
  );
}
const sortFunction=(sort, pageData)=>{
  if(sort!==""){
      if(sort=="lh"){
        pageData.sort((a,b)=>{
          return a.price-b.price
        })
      }else if(sort=="hl"){
        pageData.sort((a,b)=>{
          return b.price-a.price
        })
      }
    }else if(sort=="rel"){
      pageData.sort((a,b)=>{
        return a.price-b.price
      })
    }
    return pageData
}


const filterSort=(sort, priceFilters, pageData)=>{
  const processedData=pageData.filter(ele=> ele.price<=(+priceFilters))
  return sortFunction(sort, processedData)
}

export const ProductsPage = () => {
  const [sort, setSort] = useState("");
  const [productsData, setProductsData]=useState([])
  const [discount, setDiscount] = React.useState("");
  const [units, setUnits] = React.useState(false);
  const [depth, setDepth] =React.useState([0, 100]);
  const [width, setWidth] =React.useState([0, 100]);
  const [height, setHeight] =React.useState([0, 100]);
  const [pageData, setPageData]=React.useState([]);
  const [priceFilters, setPriceFilters]=React.useState(Infinity);



const handlePriceFiltering=(e)=>{
  if(e.target.checked){
     setPriceFilters(e.target.value)
  }
 
}
  useEffect(()=>{
    setPageData(filterSort(sort, priceFilters, productsData));
  },[sort,priceFilters])

  useEffect(()=>{
    fetch(`http://localhost:8080/furniture`)
    .then(res=>res.json())
    .then(data=>{setPageData(data.sofas)
    setProductsData(data.sofas)})
    .catch(err=>console.log(err))
  },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
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
            <RadioGroup onChange={setSort} sort={sort}>
              <Stack direction="column">
                <Radio size="lg" colorScheme="orange" value="rel">
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              padding: "0px",
              margin: "0px",
              overflow: "auto",
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
            <Checkbox size="lg" colorScheme="orange" value={5000} onChange={(e)=>{handlePriceFiltering(e)}}>Under ₹ 5,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={10000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 5,001 to 10,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={20000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 10,001 to 20,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={30000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 20,001 to 30,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={40000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 30,001 to 40,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={50000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 40,001 to 50,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={60000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 50,001 to 60,000 </Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={80000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 70,001 to 80,000</Checkbox>
            <br />
            <Checkbox size="lg" colorScheme="orange" value={90000} onChange={(e)=>{handlePriceFiltering(e)}}>₹ 80,001 to 90,000</Checkbox>
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
                overflow: "auto",
                height: "280px",
                onMouseOver: "this.style.overflow='scroll'",
                onMouseOut: "this.style.overflow='hidden'",
              }}
            >
              <Checkbox size="lg">Fabric</Checkbox>
              <br />
              <Checkbox size="lg">Velvet Fabric</Checkbox>
              <br />
              <Checkbox size="lg">Leatherette</Checkbox>
              <br />
              <Checkbox size="lg">Sheesham Wood</Checkbox>
              <br />
              <Checkbox size="lg">Polyester</Checkbox>
              <br />
              <Checkbox size="lg">Pine Wood</Checkbox>
              <br />
              <Checkbox size="lg">Leather </Checkbox>
              <br />
              <Checkbox size="lg">Half Leather</Checkbox>
              <br />
              <Checkbox size="lg">Rubber Wood </Checkbox>
              <br />
              <Checkbox size="lg">{"Fabric & Leatherette"}</Checkbox>
              <br />
              <Checkbox size="lg">{"Teak Wood "}</Checkbox>
              <br />
              <Checkbox size="lg">{"Engineered Wood"}</Checkbox>
              <br />
              <Checkbox size="lg">{"MDF"}</Checkbox>
              <br />
              <Checkbox size="lg">{"Mango Wood"}</Checkbox>
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
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value) => { setDepth(value) }} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((depth[0] / 20))) : (Math.round(((depth[0] / 20) * 12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((depth[1] / 20))) : (Math.round(((depth[1] / 20) * 12)))}
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
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value) => { setHeight(value) }} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((height[0] / 15))) : (Math.round(((height[0] / 15) * 12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((height[1] / 15))) : (Math.round(((height[1] / 15) * 12)))}
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
            <RangeSlider width="95%" aria-label={["min", "max"]} defaultValue={[1, 100]} onChange={(value) => { setWidth(value) }} colorScheme="orange">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((width[0] / 17))) : (Math.round(((width[0] / 17) * 12)))}
                  {units ? "ft" : "in"}
                </Text>
              </u>
              <u style={{ padding: "5px" }}>
                <Text fontSize="md" blockSize="max-content">
                  {units ? (Math.round((width[1] / 17))) : (Math.round(((width[1] / 17) * 12)))}
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
          {pageData?.map((ele) => productCard(ele))}
        </div>
      </div>
      <hr />
    </div>
  );
};
