import { Login, Register } from "@/components";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const AuthPageComponents = () => {
  const [state, setState] = useState<"login" | "register">("login");
  const onNavigateStateComponent = (component: "login" | "register") =>
    setState(component);
  const renderStateComponent = () => {
    switch (state) {
      case "login":
        return <Login onNavigateStateComponent={onNavigateStateComponent} />;
        break;
      case "register":
        return <Register onNavigateStateComponent={onNavigateStateComponent} />;
        break;
    }
  };
  return (
    <Flex
      w={"100%"}
      h={{ base: "auto", lg: "100vh" }}
      overflow={"hidden"}
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ base: "100%", lg: "40%", xl: "50%" }}
        bgImage={"./images/auth.png"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"60%"}
        h={{ base: "450px", md: "450px", lg: "100%" }}
        bgColor={"#F3F5F7"}
      >
        <Text
          p={2}
          textAlign={"center"}
          color={"#000"}
          fontSize={"30px"}
          fontWeight={"bold"}
        >
          3legant.
        </Text>
      </Box>
      <Box
        w={{ base: "90%", md: "70%", lg: "40%", xl: "50%" }}
        mt={{ base: 5, lg: 0 }}
        mb={{ base: 5, lg: "" }}
      >
        {renderStateComponent()}
      </Box>
    </Flex>
  );
};

export default AuthPageComponents;
