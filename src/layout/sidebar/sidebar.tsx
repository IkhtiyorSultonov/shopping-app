import React, { FC } from "react";
import { SidebarProps } from "./sidebar.props";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { navigation, socialIco } from "@/config/constains";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/router";

const Sidebar: FC<SidebarProps> = ({ menu, OnToggleMenu }) => {
  const router = useRouter();
  const colorMode = useColorModeValue("#fff", "gray.800");
  return (
    <Box
      w={"90%"}
      pos={"absolute"}
      top={0}
      bottom={0}
      left={{ base: menu ? 0 : "-100%", lg: 0 }}
      display={{ md: "none" }}
      bg={colorMode}
      transition={"all 0.5s ease"}
    >
      <HStack justifyContent={"space-between"} m={5}>
        <Box>
          <Text fontSize={30} fontWeight={"bold"}>
            3legant.
          </Text>
        </Box>
        <Box>
          <Icon
            as={AiOutlineClose}
            onClick={OnToggleMenu}
            boxSize={6}
            cursor={"pointer"}
          />
        </Box>
      </HStack>
      <HStack>
        <Box m={5} w={"100%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={"10vh"}>
              <CiSearch color="gray.300" size={30} />
            </InputLeftElement>
            <Input type="text" placeholder="Search..." h={"10vh"} />
          </InputGroup>
        </Box>
      </HStack>
      <HStack>
        <Box m={5} mt={0} w={"100%"} minH={'38vh'}>
          <Accordion allowMultiple>
            {navigation.map((item, idx) => (
              <AccordionItem key={idx}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.label}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </HStack>
      <Box m={5} >
        <HStack justifyContent={"space-between"}>
          <Text color="#6C7275" _hover={{ color: "#fff" }}>
            Cart
          </Text>
          <Icon size={30} as={HiOutlineShoppingBag} />
        </HStack>
        <Divider mt={2} mb={2} />
        <HStack justifyContent={"space-between"}>
          <Text color="#6C7275" _hover={{ color: "#fff" }}>
            Wishlist
          </Text>
          <Icon size={30} as={FaRegHeart} />
        </HStack>
        <Divider mt={2} mb={3} />
        <Button variant={"solid"} w={"full"}>
          Sign In
        </Button>
        <HStack spacing={2} mt={2}>
          {socialIco.map((item, idx) => (
            <Icon
              w={6}
              h={6}
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
    </Box>
  );
};

export default Sidebar;
