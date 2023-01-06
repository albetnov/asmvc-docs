import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Box, Button, Code, Flex, Link, ListItem, Text, UnorderedList, useColorMode} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import {MdClose, MdMinimize, MdWindow} from "react-icons/md";
import ListInfo from "../../../../Components/Docs/ListInfo";
import TipsCard from "../../../../Components/Docs/TipsCard";
import {navigations, terminalText} from "../../../../Models/Basics/commandModel";

export default function Commands() {
    const {colorMode} = useColorMode();

    const isLight = colorMode === 'light';

    return (
        <Layout title="Commands Interface" subTitle="Everything About ASMVC CLI" navigations={navigations}
                navigatorTitle="ASMVC Cli Contents">
            <Section navigator={navigations[0]}>
                <Text>Thanks to <Link
                    href="https://packagist.org/packages/symfony/console">Symfony/Console</Link>. ASMVC now have a
                    powerful yet customizable CLI. ASMVC CLI can help you by doing some boring stuff again and
                    again. For example, creating a template file (such as controllers, models, etc). But, not only that,
                    with CLI you also can do a lot of things! So let&apos;s jump right away. List the available
                    command using:</Text>
                <CodeOneLine text="php asmvc list"/>
                <Text>You should getting this output:</Text>
                <Box roundedTop="lg" border="1px solid" my={5} borderColor={isLight ? "gray.800" : "gray.600"}>
                    <Flex roundedTop="lg" bg={isLight ? "gray.800" : "gray.600"} py={1} px={5}
                          justifyContent="space-between"
                          alignItems="center">
                        <Text fontSize="lg" color="white">Terminal</Text>
                        <Flex>
                            <Button rounded="full" bg="none" p={3} _hover={{bg: isLight ? "gray.700" : "gray.500"}}>
                                <MdMinimize color="white"/>
                            </Button>
                            <Button rounded="full" bg="none" p={3} _hover={{bg: isLight ? "gray.700" : "gray.500"}}>
                                <MdWindow color="white"/>
                            </Button>
                            <Button rounded="full" bg="none" p={3} colorScheme="red"
                                    _hover={{bg: isLight ? "red.700" : "red.500"}}
                            >
                                <MdClose color="white"/>
                            </Button>
                        </Flex>
                    </Flex>
                    <Box p={5}>
                        {terminalText}
                    </Box>
                </Box>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>These symbols obviously has some meaning. E.g.</Text>
                <UnorderedList>
                    <ListInfo name="[options]" description="Is mean for arguments named options. And the square brackets
                    simply mean that it is required."/>
                    <ListInfo name="-h --help"
                              description="Command starting with single or double hyphen means that they're optional."/>
                    <ListInfo name="[make:command]"
                              description="These symbols mean that they're alias. The main command is 'create:command' and the
                              alias 'make:command'. The reason why alias used square brackets as well is because
                              there can be multiple aliases."/>
                </UnorderedList>
                <TipsCard>You can do something like <Code>php asmvc command --help</Code> To show details of command and
                    how to use them.</TipsCard>
            </Section>
        </Layout>
    )
}