import Layout from "../../../../Components/Docs/Layout";
import {enFileExample, navigations} from "../../../../Models/Advanced/translation";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Translation() {
    return (
        <Layout title="Multi Lingual" subTitle="Going Multi Lingual!" navigations={navigations}
                navigatorTitle="Multi Lingual (Translation) with ASMVC:">
            <Section navigator={navigations[0]}>
                <Text>
                    Multi-Lingual is an important features an global or international application should have. Although,
                    I personally not recommending you to build an production ready app using this framework, not to
                    mention global scale here. But, if you want to then why not? ASMVC integrates well with
                    <Link href="https://packagist.org/packages/symfony/translation">Symfony/Translation</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    Currently, ASMVC only limits to single approach of building an Multi Lingual Applicaton. The
                    limitation is the translation must from array based PHP file stored in:
                </Text>
                <List my={3}>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Languages/
                                <List ml={2}>
                                    <File>en.php &lt;- here (english)</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>The file should look like this:</Text>
                <CodeMultiLine code={enFileExample}/>
                <Text>Your are free to make as much file as you want though. This file will later automatically
                    registered by ASMVC and can instantly used with:</Text>
                <CodeMultiLine code="__($key, $locale)"/>
                <Text>Where the <Code>$key</Code> is pointed to your array keys. The <Code>__</Code> function also
                    accept second optional parameter which used to determine which file locale to use. E.g. <Code>$locale
                        = en</Code> pointed to <Code>en.php</Code>.</Text>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>
                    The Translation Interface is a helper that wrap around Symfony/Translation. Provide some methods
                    such as:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>Translation::setLocale($locale)</Code>
                        <Text>Use to globally set default locale to entire application translation</Text>
                    </ListItem>
                    <ListItem>
                        <Code>(new Translation)-&gt;trans($key, $locale)</Code>
                        <Text>Just like <Code>__()</Code> function.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>getTranslationServiceInstance</Code>
                        <Text>Return Symfony\Component\Translation\Translator instance.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    )
}