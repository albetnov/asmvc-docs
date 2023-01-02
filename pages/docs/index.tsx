import {
    Box, Code,
    Heading,
    Link, ListItem,
    Text, UnorderedList, useColorMode
} from "@chakra-ui/react";
import TipsCard from "../../Components/Docs/TipsCard";
import NextLink from "next/link";
import Layout from "../../Components/Docs/Layout";
import Navigator from "../../Components/Docs/Navigator";
import Section from "../../Components/Docs/Section";

``
import Badge from "../../Components/Docs/Badge";
import CodeOneLine from "../../Components/Docs/CodeOneLine";

const navigations = [
    {link: "definition", title: "What is ASMVC?"},
    {link: "installation", title: "Installation"}
]

export default function Docs() {
    const {colorMode} = useColorMode();

    return (
        <Layout>
            <Box as="section" mt={10}>
                <Heading textAlign="center">Welcome to Documentation!</Heading>
                <Text border="1px solid" borderColor={colorMode === "light" ? "black" : "white"} py={3} px={10} mb={7}
                      mt={3} w="fit-content">v3</Text>
                <Navigator title="This is where you find the full documentation of ASMVC Framework."
                           lists={navigations}/>
                <TipsCard>
                    It's a good idea to start with the <Link as={NextLink} href="/guide">Guide</Link> if you still
                    new with the PHP worlds.
                </TipsCard>
                <Section title={navigations[0].title} id={navigations[0].link}>
                    <Text>
                        ASMVC is a framework created by {" "}
                        <Link href="https://github.com/albetnov">AlbetNov</Link>.
                        Clearly for fun and of course to develop skill. This framework is developed with <b>fun</b> in
                        mind and of course <b>for fun</b>. That's why this framework targeted for those who just want to
                        try out any random open source project out there, including this framework.
                    </Text>
                </Section>
                <Section title={navigations[1].title} id={navigations[1].link}>
                    <Text>
                        Installing ASMVC is dead simple. But before that make sure your machine has requirement as
                        below:
                    </Text>
                    <Badge>Requiresments:</Badge>
                    <UnorderedList>
                        <ListItem>PHP 8.0 and UP (It is recommended to use PHP 8.1)</ListItem>
                        <ListItem>Composer</ListItem>
                    </UnorderedList>
                    <Badge>Optional:</Badge>
                    <UnorderedList>
                        <ListItem>Ext: <Code>exec()</Code>, <Code>system()</Code> (For the ASMVC Cli)</ListItem>
                    </UnorderedList>
                    <Text>
                        If above requirements met, you can simply install asmvc by running:
                    </Text>
                    <CodeOneLine text="composer create-project albet/asmvc project-name"/>
                </Section>
            </Box>
        </Layout>
    );
}