import Layout from "../../../../Components/Docs/Layout";
import {logCfg, navigations} from "../../../../Models/Advanced/logger";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import Folder from "../../../../Components/Docs/Folder";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Logger() {
    return (
        <Layout title="Logging" subTitle="Logging in ASMVC" navigations={navigations} navigatorTitle="Logger Contents">
            <Section navigator={navigations[0]}>
                <Text>Logging plays important role not only for developing an apps, but also for tracking errors when
                    the app in production too. With that being said, ASMVC provide a simple logger interface that
                    used{" "} <Link href="https://packagist.org/packages/monolog/monolog">Monolog</Link> under the hood.</Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    Configuring Monolog can be achieved by editing <Code>Config/log.php</Code> located in:
                </Text>
                <List my={3}>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <Folder>Config/ &lt;- here</Folder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>The configuration file should look like this:</Text>
                <CodeMultiLine code={logCfg}/>
                <Text>
                    The <Code>record_log</Code> determine if the Log of ASMVC must be recorded or not. Disabling this
                    option will also make <Code>Logger</Code> class of ASMVC not work. Since ASMVC just a simple wrapper
                    around Monolog. You can use Monolog Directly to replace it.
                </Text>
                <Text mt={2}>
                    Meanwhile the <Code>minimum_level</Code> are used to determine which level the log should listen
                    into. Most of app structure in ASMVC used Info debug level. This is the best setting to configure if
                    you want to turn off ASMVC Internal logger by excluding <Code>info</Code> in minimum level.
                </Text>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>Logger interface is not really encouraged for you to use as it&lsquo;s being widely used in Core
                    Internal File. But of course you still can used it. The Logger interface is just a simple wrapper
                    around Monolog that only turns Monolog Api&lsquo;s to singleton and allows you to call some of
                    Monolog method statically.</Text>
                <UnorderedList mt={3}>
                    <ListItem>
                        <Code>info($message, $context)</Code>
                        <Text>Put a log with info as it&lsquo;s debug level</Text>
                    </ListItem>
                    <ListItem>
                        <Code>debug($message, $context)</Code>
                        <Text>Put a log with debug as it&lsquo;s debug level</Text>
                    </ListItem>
                    <ListItem>
                        <Code>warning($message, $context)</Code>
                        <Text>Put a log with warning as it&lsquo;s debug level</Text>
                    </ListItem>
                    <ListItem>
                        <Code>error($message, $context)</Code>
                        <Text>Put a log with error as it&lsquo;s debug level</Text>
                    </ListItem>
                    <ListItem>
                        <Code>Logger::$log</Code>
                        <Text>Return Monolog instance</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    );
}