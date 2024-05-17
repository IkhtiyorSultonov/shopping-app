import React, { FC } from "react";
import { HeaderProps } from "./heder.props";
import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoCloudyNight, IoPartlySunnySharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { navigation, navigationIco } from "@/config/constains";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const Header: FC<HeaderProps> = ({ toggle,OnToggleMenu }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const activRoute = useColorModeValue("black", "#38CB89");
  return (
    <Container
      maxW={'7xl'}
      pos={"relative"}
      mt={toggle ? 2 : '8vh'}
    >
      <Box
        height={"60px"}
        display={{base:'none',md:"flex"}}
        justifyContent={"space-between"}
      >
        <HStack>
          <Text fontSize={30} fontWeight={"bold"}>
            3legant.
          </Text>
        </HStack>
        <HStack >
          {navigation.map((item, idx) => {
            const active = `/${router.pathname.split("/")[1]}` == item.route;
            return (
              <Box key={idx} p={"10px"} >
                <Button
                  fontSize={"18px"}
                  fontWeight={active ? "bold" : "light"}
                  cursor={"pointer"}
                  onClick={() => router.push(item.route)}
                  variant={active ? "black" : "link"}
                  color={active ? activRoute : ""}
                >
                  {item.label}
                </Button>
              </Box>
            );
          })}
        </HStack>
        <HStack >
          {navigationIco.map((item, idx) => (
            <Icon
              as={item.icon}
              onClick={() => router.push(item.route)}
              key={idx}
              boxSize={8}
              cursor={"pointer"}
            />
          ))}
          <IconButton
            cursor={"pointer"}
            boxSize={1}
            w={8}
            h={8}
            as={colorMode === "light" ? IoCloudyNight : IoPartlySunnySharp}
            onClick={toggleColorMode}
            variant={"facebook"}
            aria-label="mode"
          />
        </HStack>
      </Box>
      <Box
        height={"60px"}
        display={{base:'flex',md:"none"}}
        justifyContent={"space-between"}
      >
          <HStack>
          <Icon as={AiOutlineMenu}
              onClick={OnToggleMenu}
              boxSize={6}
              cursor={"pointer"}
            />
          <Text fontSize={30} fontWeight={"bold"}>
            3legant.
          </Text>
        </HStack>
        <HStack>
        <Icon
              as={HiOutlineShoppingBag}
              onClick={() => router.push('/cart')}
              boxSize={8}
              cursor={"pointer"}
            />
              <IconButton
            cursor={"pointer"}
            boxSize={1}
            w={8}
            h={8}
            as={colorMode === "light" ? IoCloudyNight : IoPartlySunnySharp}
            onClick={toggleColorMode}
            variant={"facebook"}
            aria-label="mode"
          />
        </HStack>
        </Box>
    </Container>
  );
};

export default Header;
