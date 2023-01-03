import {Box, Heading} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

interface SectionProps extends PropsWithChildren {
    title: string;
    id: string;
}

export default function Section({title, id, children}: SectionProps) {
    return (
        <Box as="section" mt={10} id={id}>
            <Heading>{title}</Heading>
            <Box mt={5}>
                {children}
            </Box>
        </Box>
    )
}