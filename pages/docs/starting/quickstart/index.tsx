import Layout from "../../../../Components/Docs/Layout";
import {Code, List, Text} from "@chakra-ui/react";
import Section from "../../../../Components/Docs/Section";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import RouteLink from "../../../../Components/RouteLink";
import Folder from "../../../../Components/Docs/Folder";
import File from "../../../../Components/Docs/File";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import Browser from "../../../../Components/Docs/Browser";
import TipsCard from "../../../../Components/Docs/TipsCard";
import {navigations, routes, helloRoute} from "../../../../Models/Starting/quickStartModel";

export default function QuickStart() {
    return (
        <Layout title="QuickStart" subTitle="Quick Start: Creating Hello World App" navigations={navigations}
                navigatorTitle="Creating Hello World app contents">
            <Section navigator={navigations[0]}>
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
            <Section navigator={navigations[1]}>
                <Text>
                    If the install succeed, you can open <Code>hello-world</Code> folder and should see the followings
                    structure:
                </Text>
                <List>
                    <OpenFolder>
                        App/ - The app directory (Where you code)
                        <List ml={5}>
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
                    </OpenFolder>
                    <Folder>public/ - The file that&apos;s exposed to end user.</Folder>
                    <File>.env.example - <RouteLink href="/docs/starting/environment">Environment</RouteLink></File>
                    <File>asmvc - The ASMVC Cli</File>
                    <File>composer.json - package information</File>
                    <File>rector.php - Rector configuration file</File>
                    <File>tailwind.config.js - Tailwind Configuration file</File>
                </List>
            </Section>
            <Section navigator={navigations[2]}>
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