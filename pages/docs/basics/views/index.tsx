import Layout from "../../../../Components/Docs/Layout";
import {generalFn, latteFn, navigations, viewsHelpersFn} from "../../../../Models/Basics/viewsModel";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text} from "@chakra-ui/react";
import TipsCard from "../../../../Components/Docs/TipsCard";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import RouteLink from "../../../../Components/RouteLink";

export default function Views() {
    return (
        <Layout title="View Engine" subTitle="The World of ASMVC" navigations={navigations}
                navigatorTitle="All about the views">
            <Section navigator={navigations[0]}>
                <Text>Views play an important role in part of MVC (Models-Views-Controllers). In this case, the view
                    of course act as a visual representation of your app to the end user. With that being said,
                    ASMVC offer you yet another two options to creating a view, depend on your likes. If you can&lsquo;t
                    choose we recommend you to use <Link href="#latte">Latte View Engine</Link> which supported out
                    of the box by ASMVC. Your views folder is located at:</Text>
                <List>
                    <OpenFolder>
                        App/
                        <List ml={2}>

                            <OpenFolder>
                                Views/ (here)
                                <List ml={2}>
                                    <File>home.latte</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    ASMVC uses latte as it&lsquo;s default engine. Latte allows you to leverage your complex
                    requirement regarding Views in an easy and concise syntax. The Latte Engine in the other hand
                    also already injected with several helpful function to help you boost up your development.
                </Text>
                <TipsCard>For more information about Latte you can visit their Official Documentation <Link
                    href="https://latte.nette.org/">here</Link>.</TipsCard>
                <Text>Where as available Helper Function you can use are:</Text>
                <List>
                    <ListItem>
                        <CodeMultiLine code={latteFn.flash}/>
                        <Text>Access a <Code>Flash</Code> class instance directly.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={latteFn.url}/>
                        <Text>Get a base url or build a url from given path</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={latteFn.match}/>
                        <Text>Return a string given in <Code>$className</Code> when current url
                            match <Code>$urlPath</Code>.</Text>
                    </ListItem>
                </List>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>ASMVC also has a native built-in engine which make a good use of PHP as it&lsquo;s main
                    templating engine. This engine however require activation by simply changing line:</Text>
                <CodeOneLine text="APP_VIEW_ENGINE=latte"/>
                <Text>to:</Text>
                <CodeOneLine text="APP_VIEW_ENGINE=asmvc"/>
                <Text>After that you need to make sure that your file not longer ends
                    with <Code>.latte</Code> instead <Code>.php</Code>. Doing this will also allows you to
                    use <Code>views()</Code> helpers to work with ASMVC Native View. Available methods are:</Text>
                <List>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.include}/>
                        <Text>Just another convenient wrapper around PHP&lsquo;s <Code>include</Code>.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.section}/>
                        <Text>A helper method to help you defining an section.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.endSection}/>
                        <Text>A Section however must end with <Code>endSection</Code>. Else your code won&lsquo;t behave
                            correctly.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.sectionOneLiner}/>
                        <Text>Alternatively you can use oneliner section, whereas the <Code>$content</Code> must be a
                            string. This can be useful if you need to make a dynamic <Code>title</Code>.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.extends}/>
                        <Text>This method will extends the current view to specified <Code>$viewPath</Code>. Just
                            like <Code>extends</Code> in OOP.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.getSection}/>
                        <Text>Is a method to get a section which only be able to be called in parent view.</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={viewsHelpersFn.match}/>
                        <Text>Return a string given in <Code>$className</Code> when current url
                            match <Code>$urlPath</Code>.</Text>
                    </ListItem>
                </List>
            </Section>
            <Section navigator={navigations[3]}>
                <Text>To make sure an attack won&lsquo;t occur when an user submitting a form through the app. ASMVC
                    provide basic security like CSRF Protection.</Text>
                <TipsCard>To learn more about CSRF Protection, please consult CSRF Documentation <RouteLink
                    href="/">here</RouteLink>.</TipsCard>
                <Text>Because of that ASMVC provides both globals helpers:</Text>
                <List>
                    <ListItem>
                        <CodeMultiLine code={generalFn.csrf_field}/>
                        <Text>To render HTML Input CSRF Token (ASMVC View)</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={latteFn.csrf}/>
                        <Text>To render HTML Input CSRF Token (Latte View)</Text>
                    </ListItem>
                    <ListItem>
                        <CodeMultiLine code={generalFn.getErrorMsg}/>
                        <Text>And this is not CSRF, instead this is a validation getters. Which we going to look forward
                            in section <RouteLink href="/">Validations</RouteLink></Text>
                    </ListItem>
                </List>
            </Section>
        </Layout>
    )
}