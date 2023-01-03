import Layout from "../../../../Components/Docs/Layout";
import {Badge, Box, Code, Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Navigator from "../../../../Components/Docs/Navigator";
import Section from "../../../../Components/Docs/Section";
import TipsCard from "../../../../Components/Docs/TipsCard";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

const navigations = [
    {link: "definition", title: "What is Enviroment?"},
    {link: "the-file", title: "The .env File"},
    {link: "what-is-that", title: "Definitions of each line"}
];

const envFile = `APP_ENV=development
APP_MODELS_DRIVER=asmvc
APP_VIEW_ENGINE=latte
ROUTING_DRIVER=new

DATABASE_HOST=localhost
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=asmvc

SESSION_TYPE=php
REDIS_SERVER=127.0.0.1
REDIS_PORT=6379
REDIS_DB_NUMBER=0
REDIS_AUTH_PASS=`;

export default function Environment() {
    return (<Layout subTitle="The Environment" title="Environment" navigations={navigations}
                    navigatorTitle="All about environments">
        <Section navigator={navigations[0]}>
            <Text>Environment is a file used to define and configure the ASMVC framework.</Text>
            <TipsCard>Enviroment and Configs is not the same thing. Although above stated that environment used to
                define and configure ASMVC. It&apos;s basically mean the configuration concerning environment. Nothing
                else. Like Database connection cresidentials for instance.</TipsCard>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>In fresh install, you won&apos;t get any <Code>.env</Code> file. Instead, they must be copied
                from <Code>.env.example</Code> or used <Code>php asmvc setup</Code> so the cli can generate them for
                you. Now let&apos;s generate one, run command below:</Text>
            <CodeOneLine text="php asmvc setup"/>
            <TipsCard>ASMVC will no longer greet you with setup. Instead you must call command above
                whenever you feel needs a setup. Command above may not work if <Code>.env</Code> file already exist
                before.</TipsCard>
            <Text>Your <Code>.env</Code> file will look like this:</Text>
            <CodeMultiLine code={envFile} lang="plain"/>
        </Section>
        <Section navigator={navigations[2]}>
            <UnorderedList>
                <ListItem>
                    <Code>APP_ENV</Code>
                    <Text>Used to determine the status of application. Development mode will show all the error while
                        production will hide them with 500.</Text>
                    <Text>Possible Values:</Text>
                    <Flex gap={3}>
                        <Badge>development</Badge>
                        <Badge>production</Badge>
                    </Flex>
                </ListItem>
            </UnorderedList>
        </Section>
    </Layout>)
}