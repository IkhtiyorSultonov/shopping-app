import {
  Articles,
  ConvenienceOfTheCompany,
  News,
  NewsLetter,
  PopularRoomFurnishings,
  RoomComponents,
  SliderSection,
} from "@/components";
import { withLayout } from "@/layout/layout";
import { Box, Container } from "@chakra-ui/react";
import React from "react";

const HomePageComponents = () => {
  return (
    <Box>
      <Container maxW={"7xl"} mt={-10}>
        <SliderSection />
        <RoomComponents />
        <PopularRoomFurnishings />
        <ConvenienceOfTheCompany />
      </Container>
      <News />
      <Container maxW={"7xl"}>
        <Articles />
      </Container>
      <NewsLetter/>
    </Box>
  );
};

export default withLayout(HomePageComponents);
