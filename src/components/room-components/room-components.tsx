import { roomCategory } from "@/config/constains";
import {
  Box,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { ShopButton } from "..";

const RoomComponents = () => {
  const router=useRouter()
  
  return (
    <Box h={"auto"} mt={{base:5 ,sm:20,md:5}}>
      <Grid
        pos={"relative"}
        templateAreas={{base:`
        "livingRoom"
        "bedRoom"
        "kitchen"`
        ,md:`
        "livingRoom bedRoom"
        "livingRoom kitchen"`}}
        gridTemplateRows={{base:'',md:"50% 1fr 0px "}}
        gridTemplateColumns={{base:'100% 1fr',sm:'',md:"40% 1fr"}}
        h={"100%"}
        gap={{base:"5",sm:"10",md:'2'}}
      >
        {roomCategory.map((card, idx) => (
          <GridItem
            key={idx}
            area={card.areas}
            borderRadius={"5px"}
            cursor={"pointer"}
            bgImage={card.img}
            h={{base:card.resH,sm:card.h}}
            bgPos={"center"}
            bgColor={"#F3F5F7"}
            bgSize={"70%"}
            bgRepeat={"no-repeat"}
            _hover={{ bgSize: "90%", transition: "all 0.5s ease-in-out" }}
          >
            <Box p={{base:3,sm:10}} fontFamily={"sans-serif"} color={'black'}>
              <Text fontSize={"35px"} fontWeight={600}>
                {card.label}
              </Text>
              <ShopButton children={'Shop Now'} onclick={()=>router.push('/')} hover={{color:'black',borderBottom: "2px solid " }}/>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomComponents;
