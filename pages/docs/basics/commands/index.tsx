import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Box, Button, Code, Flex, Link, ListItem, Text, UnorderedList, useColorMode} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import {MdClose, MdMinimize, MdWindow} from "react-icons/md";
import ListInfo from "../../../../Components/Docs/ListInfo";
import TipsCard from "../../../../Components/Docs/TipsCard";

const navigations = [
    {link: "the-cli", title: "The CLI"},
    {link: "symbols-mean", title: "What are those symbols?"}
];

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
                        <Text>
                            ASMVC 3.0-dev <br/>
                            <br/>
                            Usage: <br/>
                            command [options] [arguments]<br/>
                            <br/>
                            Options:<br/>
                            -h, --help Display help for the given command. When no command is given display help for the
                            list command <br/>
                            -q, --quiet Do not output any message<br/>
                            -V, --version Displa this application version<br/>
                            --ansi|--no-ansi Force (or disable --no-ansi) ANSI output<br/>
                            -n, --no-interaction Do not ask any interactive question<br/>
                            -v|vv|vvv, --verbose Increase the verbosity of messages: 1 for normal output, 2 for more
                            verbose output and 3 for debug<br/>
                            <br/>
                            Available commands:<br/>
                            completion Dump the shell completion script<br/>
                            help Display help for a command<br/>
                            list List commands<br/>
                            repl Enable the ASMVC REPL.<br/>
                            serve Serve the web application<br/>
                            setup Setting up your web project&apos;s environment in matter of seconds.<br/>
                            version [ver] Show framework version<br/>
                            cache<br/>
                            &nbsp;cache:config [config:cache] Cache the config file<br/>
                            create<br/>
                            &nbsp;create:command [make:command] Create a command file for you.<br/>
                            &nbsp;create:controller [make:controller] Create a controller file for you.<br/>
                            &nbsp;create:middleware [make:middleware] Create a middleware file for you.<br/>
                            &nbsp;create:migration [make:migration] Create a migration file for you.<br/>
                            &nbsp;create:model [make:model] Create a model file for you.<br/>
                            &nbsp;create:seeder [make:seeder] Create a seeder file for you.<br/>
                            &nbsp;create:test [make:test] Create a test file for you.<br/>
                            export<br/>
                            &nbsp;export:core Export cores file<br/>
                            install<br/>
                            &nbsp;install:bootstrap Install Bootstrap Framework to your web app<br/>
                            rollback<br/>
                            &nbsp;rollback:migration [migrate:rollback] Rollback your migration<br/>
                            run<br/>
                            &nbsp;run:migration [migrate] Migrate your database<br/>
                            &nbsp;run:seeder [seed:db] Seed your database entry<br/>
                            &nbsp;run:test [test] Run your test file<br/>
                        </Text>
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