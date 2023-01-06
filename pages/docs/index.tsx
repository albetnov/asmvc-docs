import {
    Box, Code,
    Heading,
    Link, ListItem,
    Text, UnorderedList, useColorMode
} from "@chakra-ui/react";
import TipsCard from "../../Components/Docs/TipsCard";
import Layout from "../../Components/Docs/Layout";
import Section from "../../Components/Docs/Section";

``
import Badge from "../../Components/Docs/Badge";
import CodeOneLine from "../../Components/Docs/CodeOneLine";
import RouteLink from "../../Components/RouteLink";
import {navigations} from "../../Models/docsModel";

export default function Docs() {
    const {colorMode} = useColorMode();

    return (
        <Layout
            subTitle="Welcome to Documentation!"
            navigatorTitle="This is where you find the full documentation of ASMVC Framework."
            navigations={navigations}>
            <Heading textAlign="center"></Heading>
            <Text border="1px solid" borderColor={colorMode === "light" ? "black" : "white"} py={3} px={10} mb={7}
                  mt={3} w="fit-content">v3</Text>
            <TipsCard>
                It&lsquo;s a good idea to start with the <RouteLink href="/guide">Guide</RouteLink> if you still
                new with the PHP worlds.
            </TipsCard>
            <Section navigator={navigations[0]}>
                <Text>
                    ASMVC is a framework created by {" "}
                    <Link href="https://github.com/albetnov">AlbetNov</Link>.
                    Clearly for fun and of course to develop skill. This framework is developed with <b>fun</b> in
                    mind and of course <b>for fun</b>. That&lsquo;s why this framework targeted for those who just
                    want to
                    try out any random open source project out there, including this framework.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
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
        </Layout>
    );
}