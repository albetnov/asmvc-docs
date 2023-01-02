import {PropsWithChildren} from "react";
import {Text, useColorMode} from "@chakra-ui/react";

export default function Badge({children}: PropsWithChildren) {
    const {colorMode} = useColorMode();

    return <Text as="span" display="block" my={3} p={3} bg={colorMode === "light" ? "blue.200" : "blue.400"}
                 w="fit-content"
                 rounded="md" borderLeft="7px solid"
                 borderColor={colorMode === "light" ? "blue.400" : "blue.600"}>{children}</Text>
}