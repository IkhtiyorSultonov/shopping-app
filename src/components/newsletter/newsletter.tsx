import { Box, Button, InputRightElement, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import InputField from "../input-field/input-field";
import { Form, Formik } from "formik";
import { CiMail } from "react-icons/ci";

const NewsLetter = () => {
    const onSubmit = () => { };
    return (
        <Box
            h={"auto"}
            p={{ base: 10, md: 50 }}
            pb={{ base: 10, md: '' }}
            bgImage={useColorModeValue("./images/home/newslatter.png", "")}
            bgColor={"gray.700"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            mt={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box w={{ base: '100%', sm: '90%', md: '60%', lg: '40%' }} h={"200px"}>
                <Text
                    fontFamily={"sans-serif"}
                    fontSize={{ base: '30px', md: "40px" }}
                    textAlign={"center"}
                    lineHeight={"35px"}
                >
                    Join Our Newsletter
                </Text>
                <Text textAlign={"center"} fontSize={{ base: '15px', sm: '16px', md: "20px" }} >
                    Sign up for deals, new products and promotions
                </Text>
                <Box>
                    <Formik initialValues={{}} onSubmit={onSubmit}>
                        <Form>
                            <InputField
                                border="none"
                                label="Email"
                                name="email"
                                borderBottom="1px solid #000"
                                placeholder="Email addres"
                                leftIco={<CiMail size={30} />}
                                children={
                                    <InputRightElement mt={2} mr={5}>
                                        <Button variant={"link"} type="submit">
                                            Sign Up
                                        </Button>
                                    </InputRightElement>
                                }
                            />
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default NewsLetter;
