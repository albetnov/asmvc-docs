import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Code, List, ListItem, Text} from "@chakra-ui/react";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import Folder from "../../../../Components/Docs/Folder";
import File from "../../../../Components/Docs/File";
import TipsCard from "../../../../Components/Docs/TipsCard";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import {navigations, sessionConfig} from "./configModel";

export default function Configs() {
    return <Layout title="Configuration" subTitle="ASMVC Configuration" navigations={navigations}
                   navigatorTitle="What can you configure in ASMVC, Here is it:">
        <Section navigator={navigations[0]}>
            <Text>What is Configuration? Configurations is a bunch of file allows you to configure the ASMVC
                framework. But not only that, you can also use configuration for your own use. They&apos;re located
                in</Text>
            <List>
                <OpenFolder>
                    App
                    <List ml={2}>
                        <Folder>Config/ (Here)</Folder>
                    </List>
                </OpenFolder>
            </List>
            <Text>When you open folder above, you will see atleast these files:</Text>
            <List>
                <Folder>../App</Folder>
                <OpenFolder>
                    Config/
                    <List ml={2}>
                        <File>app.php (Contains configuration of your app state)</File>
                        <File>container.php (Contains configuration of PHP-DI configuration)</File>
                        <File>cors.php (Contains configuration regarding cors)</File>
                        <File>database.php (Contains configuration about database credentials and which one to connect
                            to)</File>
                        <File>log.php (Contains configuration to set log level minimum, etc)</File>
                        <File>providers.php (Contains configuration which driver you want to use)</File>
                        <File>redis.php (Contains configuration regarding Redis)</File>
                        <File>session.php (Contains configuration about session and it&apos; validation.</File>
                    </List>
                </OpenFolder>
            </List>
            <TipsCard>For now, we won&apos;t explore <Code>container.php</Code>, <Code>cors.php</Code> as they have
                their own page in this documentation.</TipsCard>
            <Text>File above contains all of your configuration entry!</Text>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>But how do we access them? Accessing each of the config is so simple. You simply can
                call <Code>config()</Code> helper function which take config file name as it&apos;s argument.
                Look at following example:</Text>
            <CodeMultiLine code={sessionConfig}/>
            <Text>To access an entry from <Code>session.php</Code> file you can
                do: <Code>config(&apos;session&apos;)</Code>. This will return all of the values
                of <Code>session.php</Code> file.
                Then, you can interact with these values normally as how you interact with normal associative
                array. Example: <Code>config(&apos;session&apos;)[&apos;type&apos;]</Code> will return <Code>php</Code>.</Text>
        </Section>
        <Section navigator={navigations[2]}>
            <Text>Remembering that <Code>provider.php</Code> config file was use widely in internal core system. We
                decided to make <Code>provider_config()</Code> which is just a simple wrapper
                around <Code>config()</Code>. This function allows you to directly
                perform <Code>config(&apos;provider&apos;)</Code> nothing else.</Text>
        </Section>
        <Section navigator={navigations[3]}>
            <Text>Defining your own config is very simple. All you need is to manually create a file
                inside <Code>Config/</Code> directory and you&apos;re set. You can even use <Code>config()</Code> helper
                to directly access your config file by putting <Code>config(&apos;filename&apos;)</Code>.</Text>
        </Section>
    </Layout>
}