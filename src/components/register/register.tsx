import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Form, Formik, FormikValues } from "formik";
import React, { FC } from "react";
import InputField from "../input-field/input-field";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RegisterProps } from "./register.props";
import Cookies from "js-cookie"
import { useRouter } from "next/router";
const register: FC<RegisterProps> = ({ onNavigateStateComponent }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter()
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
        Already have an account?{" "}
        <Button
          variant={"link"}
          fontFamily={"sans-serif"}
          fontSize={{ base: "16px", sm: "20px" }}
          colorScheme="teal"
          onClick={() => onNavigateStateComponent('login')}
        >
          Sign in
        </Button>
      </Text>
      <Box>
        <Formik initialValues={{}} onSubmit={onSubmit}>
          <Form>
            <InputField
              variant="flushed"
              label="Your name"
              name="name"
              placeholder="Your name"
            />
            <InputField
              variant="flushed"
              label="Username"
              name="username"
              placeholder="Username"
            />
            <InputField
              variant="flushed"
              label="Email"
              name="email"
              placeholder=" Email address"
            />
            <InputField
              variant="flushed"
              label="Password"
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
                  size={{ base: "sm", md: "lg" }}
                  fontFamily={"sans-serif"}
                >
                  I agree with <text style={{ fontWeight: 'bold' }}>Privacy Policy</text>{" "}
                  and <text style={{ fontWeight: 'bold' }}>Terms of Use</text>
                </Checkbox>
              </Box>
              <Box></Box>
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
              Sign Up
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default register