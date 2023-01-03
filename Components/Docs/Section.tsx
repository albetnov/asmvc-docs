import {Box, Heading} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import {NavigatorList} from "./Navigator";

interface SectionProps extends PropsWithChildren {
    navigator: NavigatorList;
}

export default function Section({navigator, children}: SectionProps) {
    return (
        <Box as="section" mt={10} id={navigator.link}>
            <Heading>{navigator.title}</Heading>
            <Box mt={5}>
                {children}
            </Box>
        </Box>
    )
}