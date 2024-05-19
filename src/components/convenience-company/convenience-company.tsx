import { ConvenientCompanyAbout } from "@/config/constains";
import { Box, Card, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ConvenienceOfTheCompany = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontFamily={"sans-serif"}
      flexWrap={"wrap"}
    >
      {ConvenientCompanyAbout.map((item, idx) => (
        <Card
          p={{base:6,sm:4, md:10,}}
          pr={0}
          key={idx}
          mt={4}
          h={{base:'auto',sm:'"200px"'}}
          bg={useColorModeValue("#F3F5F7", "gray.600")}
          w={{ base:'49%',xl:'300px'}}
        >
          <Image src={item.img} w={50} />
          <Text fontWeight={"bold"} fontSize={{base:'16px',md:"25px"}} mt={2}>
            {item.name}
          </Text>
          <Text color={"#6C7275"} fontSize={"14px"}>
            {item.about}
          </Text>
        </Card>
      ))}
    </Box>
  );
};
export default ConvenienceOfTheCompany;
