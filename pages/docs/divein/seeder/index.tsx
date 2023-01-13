import Layout from "../../../../Components/Docs/Layout";
import {navigations, seederFile} from "../../../../Models/DiveIn/seeder";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import Alert from "../../../../Components/Alert";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Seeder() {
    return (
        <Layout title="Seeders" subTitle="Mocking Database Data" navigations={navigations}
                navigatorTitle="Mocking Database Contents">
            <Section navigator={navigations[0]}>
                <Text>
                    Sometimes when we need to quick prototyping. Have to manually inserting dummy data is time
                    consuming and painful. With that being said, ASMVC provide &quot;Seeding&quot; which will do that
                    chores for you. Easily fake data with out of the box Eloquent + <Link
                    href="https://packagist.org/packages/fakerphp/faker">Faker</Link> integration making it painless to
                    generate tons dummy data for your apps.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>To generate a seeder, you can execute:</Text>
                <CodeOneLine text="php asmvc create:seeder SeederName"/>
                <Text>Your seeder file should be generated at:</Text>
                <List>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Database/
                                <List ml={2}>
                                    <OpenFolder>
                                        Seeders/
                                        <List ml={2}>
                                            <File>SeederName.php &lt;- here</File>
                                        </List>
                                    </OpenFolder>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text mt={3}>
                    Your generated file should look like this:
                </Text>
                <CodeMultiLine code={seederFile}/>
                <TipsCard>
                    If you prefer manually, you seeder file should have <Code>run()</Code> method. This method should
                    file <Code>setTable</Code> method.
                </TipsCard>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>Writing Seeder is becoming more painless thanks to Fluent Seeder from ASMVC 3. Fluent Seeder
                    allows you to write a seeder fluently. Let&lsquo;s dive in to methods:</Text>
                <UnorderedList>
                    <ListItem>
                        <Code>setLang(string $lang)</Code>
                        <Text>Used to set a language/locale for Faker. To take effect, make sure to call it before
                            calling <Code>fake()</Code> method.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>fake(int $count, Closure $faker)</Code>
                        <Alert status="warning">
                            Using this method will override the payload.
                        </Alert>
                        <Text>A method to generate a fake payload. This method is compatible
                            with <Code>addPayload()</Code> method. This method will generate fake data as much as
                            your <Code>$count</Code>. The <Code>$faker</Code> used to define which faker to use. The
                            closure must return an array.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setTable(string $table)</Code>
                        <Text>Define table you want to fill with this method.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>addPayload(array $payload)</Code>
                        <Text>This method can be helpful if you want to append payload. Please do note
                            that <Code>fake()</Code> method generates payload and yes you can append it with your
                            own custom data.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setPayload(array $payload)</Code>
                        <Text>If you want to set or override a payload. Simply use this method. This method will
                            override the entire payload.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>done()</Code>
                        <Text>Call this method if you&lsquo;re finish structuring.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    )
}