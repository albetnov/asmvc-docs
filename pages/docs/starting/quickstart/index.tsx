import Layout from "../../../../Components/Docs/Layout";
import {Box, Code, Heading, List, Text} from "@chakra-ui/react";
import Navigator from "../../../../Components/Docs/Navigator";
import Section from "../../../../Components/Docs/Section";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import RouteLink from "../../../../Components/RouteLink";
import Folder from "../../../../Components/Docs/Folder";
import File from "../../../../Components/Docs/File";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import Browser from "../../../../Components/Docs/Browser";
import TipsCard from "../../../../Components/Docs/TipsCard";

const navigations = [
    {link: "install", title: "Installing the framework"},
    {link: "directory-structure", title: "Directory Structure"},
    {link: "hello-world", title: "Displaying Hello World"}
];

const routes = `<?php

/**
 * Welcome to a new Routing Interface.
 * This is a new Routing Interface which can be setted using ENV in ROUTE_DRIVER.
 * The new routing interface use Nikic/FastRoute as it's routing engine.
 * Making the routing of ASMVC blazing fast while providing convenient and readable API interface.
 * 
 * This file must return a anonymous function.
 */

use App\\Asmvc\\Controllers\\HomeController;
use App\\Asmvc\\Core\\Routing\\Route;
use App\\Asmvc\\Core\\Middleware\\MiddlewareRouteBuilder;
use App\\Asmvc\\Core\\Views\\ViewRouteBuilder;

return static function (Route $router, MiddlewareRouteBuilder $mwBuilder): void {
    $router->get('/', [HomeController::class, 'index']);
};
`;

const helloRoute = `$router->get('/hello', function() {
    echo "Hello World!";
});
`;

export default function QuickStart() {
    return (
        <Layout title="QuickStart">
            <Box my={10}>
                <Heading textAlign="center">Quick Start: Creating Hello World App</Heading>
                <Navigator title="Creating Hello World App Contents" lists={navigations}/>
            </Box>
            <Section title={navigations[0].title} id={navigations[0].link}>
                <Text>
                    Before dive in to creating the app using this framework. The first thing you need to do is obviously
                    installing the framework. Doing so is as simple as snapping a finger. Simply copy below line to
                    terminal.
                </Text>
                <CodeOneLine text="composer create-project albet/asmvc project-name"/>
                <Text>
                    and you&lsquo;re set. Please note though that you can change the <Code>project-name</Code> to any
                    name you wants. In this case is <Code>hello-world</Code>. So let&lsquo;s see teh complete command.
                </Text>
                <CodeOneLine text="composer create-project albet/asmvc hello-world"/>
                <Text>If you having issue running command above, consulting <RouteLink href="/docs">Installation
                    Section</RouteLink> may right
                    for you.</Text>
            </Section>
            <Section title={navigations[1].title} id={navigations[1].link}>
                <Text>
                    If the install succeed, you can open <Code>hello-world</Code> folder and should see the followings
                    structure:
                </Text>
                <List>
                    <Folder>Cache/ - Is where all cache files located. Excluding Views cache.</Folder>
                    <Folder>Commands/ - Your custom commands</Folder>
                    <Folder>Config/ - Application config file</Folder>
                    <Folder>Controllers/ - Your controllers</Folder>
                    <Folder>Core/ - The framework</Folder>
                    <Folder>Database/ - Your migrations/seeders file</Folder>
                    <Folder>Languages/ - Your languages</Folder>
                    <Folder>Middleware/ - Your middlewares</Folder>
                    <Folder>Models/ - Your models</Folder>
                    <Folder>Routes/ - Your routes (including api and web)</Folder>
                    <Folder>Tests/ - Your tests file</Folder>
                    <Folder>Views/ - Your views (including latte cache)</Folder>
                    <File>.htaccess - The config for apache.</File>
                </List>
            </Section>
            <Section title={navigations[2].title} id={navigations[2].link}>
                <Text>Then, how do we display Hello World? Simple! First of all, you need to go
                    to <Code>routes.php</Code> located in:</Text>
                <List>
                    <OpenFolder>
                        Routes/
                        <List ml={5}>
                            <File>routes.php (this)</File>
                            <File>api.php</File>
                        </List>
                    </OpenFolder>
                </List>
                <Text>Then, you&lsquo;ll get the following contents:</Text>
                <CodeMultiLine code={routes}/>
                <Text>As you can see from the code above, ASMVC already provide basic examples of how to define
                    a <Code>get</Code> route. Then, in order to display Hello World, it&lsquo;s as simple as adding:
                </Text>
                <CodeMultiLine code={helloRoute}/>
                <Text>Now all you need is typing below in terminal</Text>
                <CodeOneLine text="php asmvc serve"/>
                <Text mb={3}>And open <Code>http://localhost:9090/hello</Code> and voila!</Text>
                <Browser/>
                <TipsCard>Above quick start is just a simple introduction through framework, and not complement MVC
                    Structure. Is it highly recommended for you to follow <RouteLink
                        href="/guides">guides</RouteLink> if you want to know more about
                    MVC.</TipsCard>
            </Section>
        </Layout>
    )
}