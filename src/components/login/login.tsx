import InputField from "../input-field/input-field";
import React, { FC } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Form, Formik, FormikValues } from "formik";
import { LoginProps } from "./login.props";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const login: FC<LoginProps> = ({ onNavigateStateComponent }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const onSubmit = (formdata: FormikValues) => {
    Cookies.set("email", formdata.email);

    router.push("/");
  };
  return (
    <Box ml={{ base: "0", lg: "10%" }} w={{ base: "auto", lg: "500px" }}>
      <Text
        fontSize={{ base: "30px", sm: "50px" }}
        fontWeight={600}
        fontFamily={"sans-serif"}
        lineHeight={{ base: "40px", sm: "80px" }}
      >
        Sign In
      </Text>
      <Text fontSize={{ base: "16px", sm: "20px" }} color={"#6C7275"}>
        Don’t have an accout yet?{" "}
        <Button
          variant={"link"}
          fontFamily={"sans-serif"}
          fontSize={{ base: "16px", sm: "20px" }}
          colorScheme="teal"
          onClick={() => onNavigateStateComponent("register")}
        >
          Sign Up
        </Button>
      </Text>
      <Box>
        <Formik initialValues={{}} onSubmit={onSubmit}>
          <Form>
            <InputField
              variant="flushed"
              label="Uresname or Email"
              name="email"
              placeholder="Your usernam or email address"
            />
            <InputField
              variant="flushed"
              label="Uresname or Email"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              children={
                <InputRightElement mt={8} mr={2}>
                  <Icon
                    h={{ base: 6, sm: 8 }}
                    w={{ base: 6, sm: 8 }}
                    as={show ? FaRegEyeSlash : FaRegEye}
                    cursor={"pointer"}
                    onClick={handleClick}
                  />
                </InputRightElement>
              }
            />
            <HStack justifyContent={"space-between"} mt={10}>
              <Box>
                <Checkbox
                  checked={false}
                  color={"#6C7275"}
                  size={{ base: "md", md: "lg" }}
                  fontFamily={"sans-serif"}
                >
                  Remember me
                </Checkbox>
              </Box>
              <Box>
                <Button
                  variant={"link"}
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "14px", sm: "16px" }}
                  fontWeight={"bold"}
                  borderRadius={0}
                  _hover={{ color: "black", borderBottom: "1px solid" }}
                >
                  Forgot password?
                </Button>
              </Box>
            </HStack>
            <Button
              color={"#fff"}
              bgColor={"#000"}
              _hover={{ bgColor: "teal" }}
              w={"100%"}
              mt={10}
              h={{ base: "50px", sm: "60px" }}
              fontSize={"xl"}
              fontFamily={"sans-serif"}
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default login;
