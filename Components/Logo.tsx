import {Badge, Heading} from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
    return <Heading fontSize={{base: "xl", lg: "4xl"}} fontWeight="bold">
        <Link href="/">ASMVC</Link>
        <Badge colorScheme="yellow" ml={3}>BETA</Badge>
    </Heading>;
}
