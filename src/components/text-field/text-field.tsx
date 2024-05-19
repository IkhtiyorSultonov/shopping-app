import React, { FC } from 'react'
import { TextFieldProps } from './text-field.props'
import { Box, Flex, Text } from '@chakra-ui/react'

const TextField:FC<TextFieldProps> = ({children,text,text2,h}) => {
  return (
    <Box>
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justify={"space-between"}
      h={h}
      
      alignItems={{ base: "start", md: "center" }}
      mt={5}
    >
      <Box
        lineHeight={1}
        fontSize={{ base: "45px", sm: "60px" }}
        fontWeight={600}
        fontFamily={"sans-serif"}
      >
        <Text>{text}</Text>
        <Text>{text2}</Text>
      </Box>
      {children}
    </Flex>
  </Box>
  )
}

export default TextField