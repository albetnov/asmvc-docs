import Layout from "../../../../Components/Docs/Layout";
import {navigations} from "../../../../Models/DiveIn/lifecycle";
import Section from "../../../../Components/Docs/Section";
import {Code, List, Text} from "@chakra-ui/react";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Lifecycle() {
    return (
        <Layout title="Lifecycle" subTitle="ASMVC LifeCycle" navigations={navigations}
                navigatorTitle="The lifecycles of ASMVC">
            <Section navigator={navigations[0]}>
                <Text>ASMVC boot your application using the <Code>public/index.php</Code> file located in:</Text>
                <List>
                    <OpenFolder>
                        /
                        <List ml={2}>
                            <OpenFolder>
                                public/
                                <List ml={2}>
                                    <File>index.php</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>The file above responsible for booting the entire framework including registering Dependency
                    Injection, Routings, Sessions, autoloading, and much more.</Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>The first thing <Code>index.php</Code> include is <Code>bootstrap.php</Code> file which located
                    in:</Text>
                <List>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Core/
                                <List ml={2}>
                                    <File>bootstrap.php</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>This file is responsible for booting all internal core files. Like setting up
                    the <Code>env()</Code> function and reading corresponding <Code>.env</Code> file. Initiating Logger,
                    Exception handler, Booting Eloquent, Container, Translation Service, cache and preparing routing
                    which will be booted by <Code>index.php</Code> later.
                </Text>
                <TipsCard>For now, <Code>bootstrap.php</Code> is the best file when you need to boot or
                    registering a feature temporary until the official Boot Lifecycle interface is finish.</TipsCard>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>
                    All your request must be directed to <Code>public/index.php</Code> file as this file will handle the
                    routing needs of your application. To do this perfectly we highly recommend you to use Rewrite.
                    ASMVC already provide a simple <Code>.htaccess</Code> which take care the rewrite and redirection
                    automatically.
                </Text>
                <Text mt={3}>
                    The url path of user request will then be matched to registered route path available, If no match
                    found the 404 page is returned. ASMVC will also automatically validate a CSRF token only for
                    requests that transfering a data like <Code>POST</Code>, <Code>PUT</Code>, etc. If token is mismatch
                    500 page is returned. The returning is not always view, It depends on user
                    header <Code>Accept</Code>. If they request JSON, a json page will be returned.
                </Text>
                <Text mt={3}>
                    If the matched routes is founded, ASMVC will register a new session called for referencing Previous
                    URL. This step is necessary to ensure the <Code>back()</Code> function work correctly. After it the
                    Routing will also inject necessary dependencies to controllers. However, not
                    for closure. Except, parameters. Both controllers and closure approach is supported for parameters.
                </Text>
                <Text mt={3}>
                    The routing will also take care of serializing your return data of controller or even closure. It
                    will automatically serialize your return function if the user request so.
                </Text>
            </Section>
        </Layout>
    )
}