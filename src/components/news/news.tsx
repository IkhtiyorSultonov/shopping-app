import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { ShopButton } from "..";

const News = () => {
  return (
    <Flex
      h={{ base: "auto", lg: 560 }}
      w={"100%"}
      mt={10}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "50%" }} overflow={"hidden"}>
        <Image src="./images/home/new.png" h={"100%"} w={"100%"} />
      </Box>
      <Box
        w={{ base: "100%", lg: "50%" }}
        bg={useColorModeValue("#F3F5F7", "gray.600")}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        pl={{ base: 3, md: 5, lg: 20 }}
        pt={{ base: 4, md: 10, lg: 20 }}
      >
        <Text
          fontWeight={600}
          fontSize={{ base: "16px", md: "18px" }}
          color={"#377DFF"}
        >
          SALE UP TO 35% OFF
        </Text>
        <Text
          mt={{ base: 3, sm: 5 }}
          fontSize={{ base: "35px", sm: "50px" }}
          fontFamily={"sans-serif"}
          lineHeight={{ base: "40px", sm: "50px" }}
          w={{ base: "300px", sm: "450px" }}
        >
          HUNDREDS of New lower prices!
        </Text>
        <Text
          mt={{ base: 3, sm: 5 }}
          w={{ base: "300px", sm: "350px" }}
          fontSize={{ base: "18", sm: "20" }}
          lineHeight={{ base: "25px", sm: "30px" }}
        >
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </Text>
        <ShopButton
          children={"Shop Now"}
          hover={{ color: "black", borderBottom: "2px solid " }}
          style={{
            width: "120px",
            marginTop: "20px",
            height: "30px",
            marginBottom: "20px",
          }}
          fontSize="20"
        />
      </Box>
    </Flex>
  );
};

export default News;
