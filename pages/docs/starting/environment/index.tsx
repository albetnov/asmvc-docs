import Layout from "../../../../Components/Docs/Layout";
import {Badge, Box, Code, Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Navigator from "../../../../Components/Docs/Navigator";
import Section from "../../../../Components/Docs/Section";
import TipsCard from "../../../../Components/Docs/TipsCard";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import ListInfo from "../../../../Components/Docs/ListInfo";

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
            <UnorderedList display="flex" flexDir="column" gap={2}>
                <ListInfo name="APP_ENV" description="Used to determine the status of application.
                        Development mode will show all the error while production will hide them with 500."
                          values={["development", "production"]}
                />
                <ListInfo name="APP_MODELS_DRIVER"
                          description="Determine which model provider you want to use, built in or eloquent.
                          Changes also applies on CLI File generation as well"
                          values={["eloquent (Default)", "asmvc"]}
                />
                <ListInfo name="APP_VIEW_ENGINE"
                          description="Determine which view engine provider you want to use, built in or latte"
                          values={["latte (Default)", "asmvc"]}/>
                <ListInfo name="ROUTING_DRIVER"
                          description="Determine which routing driver you want to use, this is just for compatibility
                          layer. It is therefore not recommended to use other settings than 'new'."
                          values={["new (Default)", "old"]}/>
                <ListInfo name="DATABASE_HOST"
                          description="Your database server host name, it can be localhost or a domain."/>
                <ListInfo name="DATABASE_USERNAME" description="Your database username credential"/>
                <ListInfo name="DATABASE_PASSWORD" description="Your database password credential.
                Can be left empty if you want passwordless login"/>
                <ListInfo name="DATABASE_NAME" description="The database name your want this app connect to"/>
                <ListInfo name="SESSION_TYPE" description="ASMVC provides you with two types of session.
                Either on same machine 'PHP'. Or 'Redis' to multi host support. Your choice."
                          values={["redis", "php (default)"]}/>
                <ListInfo name="REDIS_SERVER" description="Just like database host but for Redis"/>
                <ListInfo name="REDIS_PORT" description="The port of your redis instance"/>
                <ListInfo name="REDIS_DB_NUMBER" description="The database identifier of your redis"/>
                <ListInfo name="REDIS_AUTH_PASS" description="The password of your redis instance"/>
            </UnorderedList>
        </Section>
    </Layout>)
}