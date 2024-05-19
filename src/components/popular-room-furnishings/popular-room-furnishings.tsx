import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ShopButton, TextField } from "..";
import Carousel from "react-multi-carousel";
import { roomFurnishingsCarousel } from "@/config/carousel";
import { PopularRoomFurnishingsCategory } from "@/config/room-furnishings-cetegory";
import ReactStars from "react-stars";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PopularRoomFurnishings = () => {
  const router = useRouter();
  const [isLike, setIsLike] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleOnMouseOver = () => setIsHover(true);
  const handleOnMouseOut = () => setIsHover(false);
  const cliclLike = () => setIsLike((prev) => !prev);
  return (
    <Box >
      <TextField
        h="120px"
        text={"New"}
        text2={"Arrivals"}
        fontFamily="sans-serif"
        children={
          <ShopButton
            children={"More Products"}
            fontSize="20px"
            fontFamily="sans-serif"
            onclick={() => router.push("/")}
            hover={{ color: useColorModeValue("black","white"), borderBottom: "2px solid " }}
          />
        }
      />
      <Box>
        <Carousel
          responsive={roomFurnishingsCarousel}
          arrows={false}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
        >
          {PopularRoomFurnishingsCategory.map((item, idx) => (
            <Stack key={idx}  borderRadius={5} p={1} mb={30}>
              <Box
                pos={'relative'}
                bgImage={item.img}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                bgSize={{base:'80%',md:'cover'}}
                bgColor={'#F3F5F7'}
                mt={{base:5,md:''}}
                h={{base:'400px' ,sm:'300px',md:'250px'}}
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
              >
                <Flex justifyContent={"space-between"} h={"auto"}>
                  <Box
                    w={"100px"}
                    p={3}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontFamily={"sans-serif"}
                  >
                    <Card>New</Card>
                    <Box
                      mt={2}
                      bg={"#38CB89"}
                      borderRadius={"5px"}
                      fontWeight={600}
                      color={"#fff"}
                    >
                      {" "}
                      - {item.discountpercentage} %
                    </Box>
                  </Box>
                  <IconButton
                    aria-label=""
                    borderRadius={"50%"}
                    bg={isLike?useColorModeValue('gray.200','gray.800'):useColorModeValue('white','gray.600')}
                    _hover={{bg:useColorModeValue('gray.200','gray.800')}}
                    w={"50px"}
                    h={"50px"}
                    m={3}
                    onClick={cliclLike}
                  >
                    {isLike ? <FcLike size={30} /> : <FaRegHeart size={25} />}
                  </IconButton>
                </Flex>
                {isHover && (
                  <Button
                    left={2.5}
                    pos={'absolute'}
                    bottom={2}
                    colorScheme={"blackAlpha"}
                    fontFamily={"sans-serif"}
                    ml={3}
                    width={'90%'}
                    leftIcon={<HiOutlineShoppingBag />}
                  >
                    Add to cart
                  </Button>
                )}
              </Box>
              <ReactStars
                count={5}
                size={20}
                value={item.rating}
                color2={useColorModeValue("gray.900", "gray.200")}
                half={false}
              />
              <Text fontWeight={"bold"} lineHeight={0} fontSize={"18px"} fontFamily={'sans-serif'}>
                {item.name}
              </Text>
              <Text fontWeight={"bold"} fontFamily={'sans-serif'} mt={2}>
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                <text
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "5px",
                    fontWeight: "lighter",
                    fontSize: "12px",
                  }}
                >
                  {(item.oldprice === 0
                    ? "Sale"
                    : item.oldprice
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </text>
              </Text>
            </Stack>
          ))}
        </Carousel>
          {/* <ShopButton /> */}
      </Box>
    </Box>
  );
};

export default PopularRoomFurnishings;
