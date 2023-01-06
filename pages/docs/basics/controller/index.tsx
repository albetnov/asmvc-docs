import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Code, Heading, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import {controllerFile, navigations, newRouterController, oldRouterController} from "./controllerModel";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import TipsCard from "../../../../Components/Docs/TipsCard";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import RouteLink from "../../../../Components/RouteLink";

export default function Controller() {
    return <Layout title="Controllers" subTitle="What is Controller?" navigations={navigations}
                   navigatorTitle="Controllers Contents">
        <Section navigator={navigations[0]}>
            <Text>
                Controller is a part of MVC (Model-View-Controller) design system. Where Controller acts as
                business logic. Basically, controller is a place where you call your model, do some calculation,
                prepare the data, then deliver it to the view.
            </Text>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>In ASMVC, Controller look like this:</Text>
            <CodeMultiLine code={controllerFile}/>
            <Text>Above code is an example controller of <Code>HomeController</Code> which come with the setup of
                ASMVC as well.</Text>
        </Section>
        <Section navigator={navigations[2]}>
            <Text>Since controller must be a class which contains a method. ASMVC provide you a helper to generate one.
                So you don&lsquo;t have to hassle by writing code from scratch by your own anymore. To make one simply
                run:</Text>
            <CodeOneLine text="php asmvc create:controller ControllerName"/>
            <TipsCard>Please do note that ASMVC has a convention in naming. Ensure that the Controller name is typed
                in{" "} <Code>Pascal Case</Code> to comply with <Link href="https://www.php-fig.org/psr/psr-4/">PSR-4
                    Autoloading</Link>.
            </TipsCard>
            <Text>Your file will then generated at:</Text>
            <List>
                <OpenFolder>
                    App/
                    <List ml={2}>
                        <OpenFolder>
                            Controllers/
                            <List ml={2}>
                                <File>HomeController.php</File>
                                <File>ControllerName.php (here)</File>
                            </List>
                        </OpenFolder>
                    </List>
                </OpenFolder>
            </List>
        </Section>
        <Section navigator={navigations[3]}>
            <Text>ASMVC Controllers also support Dependency Injection to fullfil any dependency you may need. Simply
                pass them in either constructor or method. They will be automatically injected.</Text>
            <Heading my={2} size="md">The Request Instance</Heading>
            <Text>The Request Instance is also defined if you try to create controller
                with <Code>create:controller</Code> command. Request is a common dependency which are going to be
                injected. More details regarding Request can be found <RouteLink href="/">here</RouteLink>.</Text>
            <Heading my={2} size="md">The REST Instance</Heading>
            <Text>Just like Request. Rest instance is also commonly used if you working with Restful API. And their
                documentation can also be founded <RouteLink href="/">here</RouteLink>.</Text>
        </Section>
        <Section navigator={navigations[4]}>
            <Text>Using Controllers in your ASMVC app is relatively simple.
                In <Code>$closureOrArrayOfControllerAndMethod</Code> {" "}
                you just need to pass <Code>[ControllerName::class, &apos;methodName&apos;]</Code> where ControllerName
                is your controller namespace class reference and methodName is a string representing what method to
                invoke. The dependency need will also automatically fulfilled using Dependency Injection above.
                Example:
            </Text>
            <UnorderedList>
                <ListItem>
                    <Text>New Routing</Text>
                    <CodeMultiLine code={newRouterController}/>
                </ListItem>
                <ListItem>
                    <Text>Old Routing</Text>
                    <CodeMultiLine code={oldRouterController}/>
                </ListItem>
            </UnorderedList>
        </Section>
    </Layout>
}