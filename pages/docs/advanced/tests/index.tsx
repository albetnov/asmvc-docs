import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {dummyTestFile, navigations} from "../../../../Models/Advanced/tests";
import {Code, List, Text} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Tests() {
    return (
        <Layout title="Testing" subTitle="PHPUnit with ASMVC" navigations={navigations}
                navigatorTitle="Unit Testing Contents">
            <Section navigator={navigations[0]}>
                <Text>Even though ASMVC doesn&lsquo;t have even 1% of test coverage. We still provide you an integration
                    with PHPUnit to make your own tests. So yeah a replacement. Creating a test in ASMVC is the same as
                    how you do it using raw PHPUnit, since ASMVC also not provide a wrapper for this. But we do
                    configured the PHPUnit already so it will compatible with the entire ASMVC ecosystem.</Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>To generate a tests simply make a test as how you do it using raw PHPUnit
                    in <Code>App/Tests</Code> directory. Or if you prefer Code Generation:</Text>
                <CodeOneLine text="php asmvc create:test SomeTest"/>
                <Text>And following file will be generated at:</Text>
                <List mt={3}>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Tests/
                                <List ml={2}>
                                    <File>SomeTest.php &lt;- Here.</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>Your file should look like this:</Text>
                <CodeMultiLine code={dummyTestFile}/>
                <Text>For running it:</Text>
                <CodeOneLine text="php asmvc run:test"/>
            </Section>
        </Layout>
    );
}