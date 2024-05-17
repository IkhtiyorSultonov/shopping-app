import { navigation, socialIco } from "@/config/constains";
import { Box, Container, Divider, HStack, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <Box
      h={{ base: "auto", md: "25vh", lg: "200px" }}
      bg={"gray.900"}
      p={{ base: 5, md: 0 }}
    >
      <Container
        maxW={{ md: "4xl", lg: "7xl" }}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box
          display={{ base: "block", lg: "flex" }}
          justifyContent={"space-between"}
        >
          <HStack color={"white"} flexDirection={{ base: "column", md: "row" }}>
            <Text
              fontSize={25}
              fontWeight={"bold"}
              pr={{ base: 0, md: 5 }}
              borderRight={{ base: "none", md: "1px solid #6C7275" }}
            >
              3legant.
            </Text>
            <Divider w={20} display={{ base: "block", md: "none" }} />
            <Text fontSize={20} fontWeight={"light"} pl={{ base: 0, md: 5 }}>
              Gift & Decoration Store
            </Text>
          </HStack>
          <HStack flexDirection={{ base: "column", md: "row" }}>
            {navigation.map((item, idx) => {
              return (
                <Box key={idx} p={"10px"}>
                  <Text
                    color="#6C7275"
                    fontSize={"18px"}
                    fontWeight={"light"}
                    _hover={{ color: "#fff" }}
                    cursor={"pointer"}
                    onClick={() => router.push(item.route)}
                    transition={"all 0.5s ease"}
                  >
                    {item.label}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </Box>
        <Divider mt={4} mb={4} />
        <Box
          display={{ base: "none", md: "block", lg: "flex" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={4} fontWeight={"bold"}>
            <Text fontWeight={"light"} color={"#6C7275"}>
              Copyright © 2023 3legant. All rights reserved
            </Text>
            <Text color={"#ffff"} cursor={"pointer"}>
              Privacy Policy
            </Text>
            <Text color={"#ffff"} cursor={"pointer"}>
              Terms of Use
            </Text>
          </HStack>
          <HStack spacing={6} mt={{ base: 3, lg: "0" }}>
            {socialIco.map((item, idx) => (
              <Icon
                w={8}
                h={8}
                color="#6C7275"
                as={item.icon}
                onClick={() => router.push(`https://${item.route}`)}
                key={idx}
                cursor={"pointer"}
                _hover={{ color: "#fff" }}
              />
            ))}
          </HStack>
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          justifyContent={"space-between"}
        >
          <HStack spacing={6} justify={"center"}>
            {socialIco.map((item, idx) => (
              <Icon
                w={8}
                h={8}
                color="#6C7275"
                as={item.icon}
                onClick={() => router.push(`https://${item.route}`)}
                key={idx}
                cursor={"pointer"}
                _hover={{ color: "#fff" }}
              />
            ))}
          </HStack>
          <HStack justify={"center"} spacing={4} mt={4}>
            <Text color={"#ffff"} cursor={"pointer"}>
              Privacy Policy
            </Text>
            <Text color={"#ffff"} cursor={"pointer"}>
              Terms of Use
            </Text>
          </HStack>
          <Text
            fontWeight={"light"}
            color={"#6C7275"}
            textAlign={"center"}
            mt={4}
          >
            Copyright © 2023 3legant. All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
