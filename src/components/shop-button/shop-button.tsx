import React, { FC } from 'react'
import { shopButtonProps } from "./shop-button.props"
import { Button, useColorModeValue } from '@chakra-ui/react'
import { MdArrowRightAlt } from 'react-icons/md'

const ShopButton: FC<shopButtonProps> = ({ children,fontSize,fontFamily,onclick,hover,style}) => {
    return (
        <Button
            variant={"link"}
            rightIcon={<MdArrowRightAlt size={20} />}
            borderRadius={0}
            fontSize={fontSize}
            fontFamily={fontFamily}
            style={style}
            onClick={onclick}
            _hover={hover}
            color={useColorModeValue('gray.500', 'gray.600')}
        >
            {children}
        </Button>
    )
}

export default ShopButton