import { Box, Container, Image, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TextField } from "..";
const SliderSection = () => {
  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} boxSizing="border-box">
        <AliceCarousel autoPlay={false} infinite={true}>
          <Image
            src="./images/slider1.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
          <Image
            src="./images/slider2.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
          <Image
            src="./images/product.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
        </AliceCarousel>
      </Box>
      <Box h={"350px"} display={{ base: "blck", md: "none" }} >
        <AliceCarousel autoPlay infinite={true} animationDuration={2000}>
          <Image
            src="./images/slider1.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
          <Image
            src="./images/slider2.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
          <Image
            src="./images/product.png"
            w={"100%"}
            h={350}
            objectFit={"cover"}
          />
        </AliceCarousel>
      </Box>
      <TextField
        h="150px"
        text={"Simply Unique/"}
        text2={"Simply Better."}
        fontFamily="sans-serif"
        children={
          <Box w={300} mt={{ base: "5", md: "" }}>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              <text style={{ fontWeight: "bold" }}>3legant</text> is a gift &
              decorations store based in HCMC, Vietnam. Est since 2019.
            </Text>
          </Box>
        }
      />
    </Box>
  );
};

export default SliderSection;
