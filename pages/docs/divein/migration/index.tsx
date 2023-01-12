import Layout from "../../../../Components/Docs/Layout";
import {
    migrationFile,
    migrationFileArray,
    navigations,
    seederFileArray,
    sorterFile
} from "../../../../Models/DiveIn/migration";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import TipsCard from "../../../../Components/Docs/TipsCard";
import RouteLink from "../../../../Components/RouteLink";

export default function Migration() {
    return (
        <Layout title="Database Migration" subTitle="Migrate a Database in ASMVC" navigations={navigations}
                navigatorTitle="Migration Contents">
            <Section navigator={navigations[0]}>
                <Text>When you need to install an application to different computer, having to dump and import an SQL
                    can be tricky. Issues like compatibility can occur and halt application development. That&lsquo;s
                    why ASMVC provide you Database Migration. Powered by <Link
                        href="https://packagist.org/packages/illuminate/database">Eloquent</Link> under the
                    hood. Now, let&lsquo;s see ASMVC Migration in action.</Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>As usual, ASMVC has an certain standard for migration file. This standard ensure that the
                    migration can be run and executed successfully by ASMVC CLI. The file must return a class that
                    contains two methods consisting <Code>up()</Code> and <Code>down()</Code> method. This method should
                    execute <Code>$this-&gt;schema</Code> which contain some method that can be used to handle Database
                    Migration. With that being said, ASMVC provide a CLI Helper to build the file for you. Simply
                    execute:</Text>
                <CodeOneLine text="php asmvc create:migration MigrationName"/>
                <Text>Your file should generated at:</Text>
                <List mt={3}>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Database/
                                <List ml={2}>
                                    <OpenFolder>
                                        Migrations/
                                        <List ml={2}>
                                            <File>MigrationName_$timestamp.php &lt;- Your migration file with
                                                timestamp</File>
                                        </List>
                                    </OpenFolder>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text mt={2}>This is how your file should look like:</Text>
                <CodeMultiLine code={migrationFile}/>
                <TipsCard>
                    As of ASMVC 3.0 migration file are set to default to Anonymous class. This allows you to generate
                    multiple migration file without to care about Class Name Collision just like Latest Laravel
                    Migrations.
                </TipsCard>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>If you have an experience with Laravel before, you should be familiar about how Migration File in
                    ASMVC works. But in case you&lsquo;re not, here&lsquo;s a little summary:</Text>
                <UnorderedList>
                    <ListItem>
                        <Code>up()</Code>
                        <Text>A method that will be executed when migration is running.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>down()</Code>
                        <Text>The inverse of <Code>up()</Code>. A method that will executed when migration execution
                            run in reverse order.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>$this-&gt;schema</Code>
                        <Text>A helper that contains Eloquent methods of schema.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[3]}>
                <Text>Running a migration file is pretty straightforward. All you need is to execute:</Text>
                <CodeOneLine text="php asmvc run:migration"/>
                <Text>The above command will run a migration to entire file and smartly chose which has been migrated
                    and which has not. If you want to clean database and then migrate using <Code>fresh</Code> flag is
                    advised:</Text>
                <CodeOneLine text="php asmvc run:migration --fresh"/>
                <TipsCard>
                    As of ASMVC 3.0 moving to anonymous class. Using argument to choose a specific table to migrate is
                    not longer possible. Therefore the <Code>php asmvc run:migration</Code> command also not longer
                    accepting argument.
                </TipsCard>
            </Section>
            <Section navigator={navigations[4]}>
                <Text>ASMVC run your migration file randomly, regardless the timestamp given. In case something mess up
                    (Usually relation related migration) you have to manually define the order of migration. For that,
                    ASMVC provide <Code>Sorter.php</Code> file which contain:</Text>
                <CodeMultiLine code={sorterFile}/>
                <Text>The file contains a class that have two methods:</Text>
                <UnorderedList mt={3}>
                    <ListItem>
                        <Code>migrations()</Code>
                        <Text>This method must return an array where the order of array define the order of migration it
                            self. The array must a string which contain the file name of given migration. E.g.</Text>
                        <CodeMultiLine code={migrationFileArray}/>
                    </ListItem>
                    <ListItem>
                        <Code>seeders()</Code>
                        <Text>Just like <Code>migrations()</Code>. This method must return an array that define the
                            seeders order.</Text>
                        <CodeMultiLine code={seederFileArray}/>
                    </ListItem>
                </UnorderedList>
                <TipsCard>Learn more about <RouteLink href="/docs/divein/seeders">Seeders</RouteLink>.</TipsCard>
            </Section>
        </Layout>
    )
}