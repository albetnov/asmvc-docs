import {Box, Button, Flex, Input, Text, useColorMode} from "@chakra-ui/react";
import {
    AiFillFile,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineClose,
    AiOutlinePlus,
    AiOutlineReload
} from "react-icons/ai";
import {MdClose, MdMinimize, MdWindow} from "react-icons/md";

export default function Browser() {
    const {colorMode} = useColorMode();

    const isLight = colorMode === 'light';

    return <Box rounded="lg" border="1px solid" borderColor="gray.600" overflowX="hidden" maxW="87vw">
        <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" gap={3}>
                <Flex bg={isLight ? "gray.200" : "gray.600"} p={3} roundedTop="lg"
                      alignItems="center" gap={2}>
                    <AiFillFile/> <Text>localhost:9090/hello</Text> <AiOutlineClose/>
                </Flex>
                <Button rounded="full" p={3}>
                    <AiOutlinePlus/>
                </Button>
            </Flex>
            <Flex>
                <Button rounded="full" bg="none" p={3}>
                    <MdMinimize/>
                </Button>
                <Button rounded="full" bg="none" p={3}>
                    <MdWindow/>
                </Button>
                <Button mr={3} rounded="full" bg="none" p={3} colorScheme="red" color={isLight ? "black" : "white"}>
                    <MdClose/>
                </Button>
            </Flex>
        </Flex>
        <Flex gap={2} py={2} px={3} bg={isLight ? "gray.200" : "gray.600"}>
            <Button rounded="full" p={3}>
                <AiOutlineArrowLeft/>
            </Button>
            <Button rounded="full" p={3}>
                <AiOutlineArrowRight/>
            </Button>
            <Button rounded="full" p={3}>
                <AiOutlineReload/>
            </Button>
            <Input borderColor={isLight ? "black" : "gray.500"} _hover={{}} disabled
                   value="http://localhost:9090/hello"/>
        </Flex>
        <Box p={10}>
            <Text>Hello World</Text>
        </Box>
    </Box>;
}