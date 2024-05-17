import {
    Box,
    Button,
    HStack,
    Icon,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { RiCoupon2Line } from "react-icons/ri";
import { NotificationBarProps } from "./notification-bar.props";

const NotificationBar: FC<NotificationBarProps> = ({ OnToggle, toggle }) => {
    const colorMode = useColorModeValue('#F3F5F7', 'gray.400')
    return (
        <Box
            bg={colorMode}
            color={"black"}
            pos={'fixed'}
            h={'40px'}
            w={'100%'}
            top={toggle ? '-100%' : '0'}
            transition={"all 1s ease"}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <HStack></HStack>
            <HStack textTransform={'capitalize'}>
                <RiCoupon2Line size={20} />
                <Text fontSize={{base:'12px',sm:'16px'}} >30% off storewide — Limited time!</Text>
                <Button fontSize={{base:'12px',sm:'16px'}} rightIcon={<GoArrowRight />} variant={'link'} color={'#377DFF'}> Shop Now</Button>
            </HStack>
            <HStack mr={2}>
                <Icon
                    w={{base:6,sm:8}}
                    _hover={{ color: 'red.400' }}
                    transition={'all 0.2s ease'}
                    h={{base:6,sm:8}}
                    as={IoCloseSharp}
                    aria-label="close"
                    cursor={"pointer"}
                    onClick={OnToggle}
                />
            </HStack>
        </Box>
    );
};

export default NotificationBar;
