import {
  Box,
  Card,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import ShopButton from "../shop-button/shop-button";
import { useRouter } from "next/router";
import { articlesNews } from "@/config/constains";

const Articles = () => {
  const router = useRouter();
  return (
    <Box>
      <TextField
        text={'Articles'}
        h="80px"
        fontFamily="sans-serif"
        children={
          <ShopButton
            children={"More Products"}
            fontSize="20px"
            fontFamily="sans-serif"
            onclick={() => router.push("/")}
            hover={{
              color: useColorModeValue("black", "white"),
              borderBottom: "2px solid ",
            }}
          />
        }
      />
      <Flex
        mt={5}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={{ sm: "space-between", md: "" }}
        alignItems={{ base: "center", sm: "" }}
      >
        {articlesNews.map((item, idx) => (
          <Card
            key={idx}
            w={{ base: "95%", sm: "48%", md: "100%" }}
            ml={{ base: 0, md: item.ml }}
            mt={{ base: 5, sm: 0 }}
          >
            <Image
              src={item.img}
              w={"100%"}
              style={{ borderRadius: "5px 5px 0 0" }}
            />
            <Text fontSize={"20px"} mt={4} pl={2}>
              {item.name}
            </Text>
            <ShopButton
              children={"Read More"}
              fontSize="18px"
              style={{
                width: "120px",
                marginBottom: "20px",
                marginTop: "10px",
                marginLeft: "10px",
                height: "30px",
              }}
              fontFamily="sans-serif"
              onclick={() => router.push("/")}
              hover={{
                color: useColorModeValue("black", "white"),
                borderBottom: "2px solid ",
              }}
            />
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Articles;
