import {
    Box,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
    Text
} from "@chakra-ui/react";
import TipsCard from "../../Components/Docs/TipsCard";
import NextLink from "next/link";
import {BsListNested, BsViewList} from "react-icons/bs";
import Layout from "../../Components/Docs/Layout";

export default function Docs() {


    return (<Layout title="ASMVC Docs">
        <Box as="section" mt={10}>
            <Heading textAlign="center">Welcome to Documentation!</Heading>
            <Text mt={3}>This is where you find the full documentation of ASMVC Framework.</Text>
            <List mt={3}>
                <ListItem>
                    <ListIcon as={BsListNested}/>
                    <Link href="#definition">What is ASMVC?</Link>
                </ListItem>
            </List>
            <TipsCard>
                It's a good idea to start with the <Link as={NextLink} href="/guide">Guide</Link> if you still
                new
                with
                this PHP worlds.
            </TipsCard>
        </Box>
    </Layout>);
}