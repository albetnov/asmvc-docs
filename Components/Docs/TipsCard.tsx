import {Card, Text, useColorMode} from "@chakra-ui/react";
import {AiFillBulb} from "react-icons/ai";
import {PropsWithChildren} from "react";

export default function TipsCard({children}: PropsWithChildren) {
    const {colorMode} = useColorMode();

    return (
        <Card display="flex" bg={colorMode === 'light' ? "blue.400" : "blue.600"} my={7} flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              px={{base: 5, xl: 10}} py={5} gap={{base: 3, xl: 10}}
              w="full">
            <AiFillBulb fontSize={50} color="#fbbf24" width="20%"/>
            <Text fontSize="lg" color="white" w="full">
                {children}
            </Text>
        </Card>
    )
}