import Layout from "../../../../Components/Docs/Layout";
import {navigations, usageExample} from "../../../../Models/Advanced/container";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Container() {
    return (
        <Layout title="Container" subTitle="Guide on Dependency Injection" navigations={navigations}
                navigatorTitle="How to inject in ASMVC. Contents:">
            <Section navigator={navigations[0]}>
                <Text>
                    Dependency Injection is one of Design Pattern used in Software Development. With Dependency
                    Injection, a Class nor Object can be standalone in creation. For example, invoking your controller
                    method without manually have to find what parameters your method needs and ensuring no exception
                    thrown because parameter injected are less than defined.
                </Text>
                <Text mt={3}>
                    Dependency Injection can be painful to manage with. If you manage it manually of course. ASMVC has
                    out of box support with <Link href="https://php-di.org/">PHP-DI</Link>. Which making it painless to
                    perform dependency injection. Not until there, ASMVC also wrap around to PHP-DI
                    with <Code>Container</Code> interface, which allow PHP-DI to become singleton.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>The <Code>Container</Code> is a utility class that wrap around PHP-DI. These class has 3 useful
                    methods that you may want to use:</Text>
                <UnorderedList my={3}>
                    <ListItem>
                        <Code>getContainer()</Code>
                        <Text>Give you the powerful PHP-DI Container Api&lsquo;s</Text>
                    </ListItem>
                    <ListItem>
                        <Code>inject(class | method $reference, array $inject)</Code>
                        <Text>This method allows you to fulfill the dependencies of a class or method while injecting
                            additional parameters explicitly using <Code>$inject</Code>.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>fulfill(class | method $reference)</Code>
                        <Text>Just like <Code>inject()</Code>. But this method won&lsquo;t allow you to inject
                            additional parameters.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>This is the usage example of Container being used in Routing Engine of ASMVC.</Text>
                <CodeMultiLine code={usageExample}/>
                <Text>As you can see, the array given in inject first method define that we&lsquo;re also calling an
                    method <Code>($handler[1])</Code> to that class <Code>($handler[0])</Code> and as you might
                    guess <Code>$args</Code> is the router parameter like <Code>&#123;id&#125;</Code>.</Text>
            </Section>
        </Layout>
    )
}