import {Box, Heading, Text} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

interface SectionProps extends PropsWithChildren {
    title: string;
}

export default function Section({title, children}: SectionProps) {
    return (
        <Box as="section" mt={10} id="definition">
            <Heading>{title}</Heading>
            <Text mt={5}>
                {children}
            </Text>
        </Box>
    )
}