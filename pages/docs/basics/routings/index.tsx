import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Code, Heading, List, Text, UnorderedList} from "@chakra-ui/react";
import ListInfo from "../../../../Components/Docs/ListInfo";
import TipsCard from "../../../../Components/Docs/TipsCard";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import {navigations, routesPhp, completeRoute, viewRoute} from "./routingModel";

export default function Routings() {
    return <Layout subTitle="Routing Basics" navigations={navigations} navigatorTitle="How to do routing contents">
        <Section navigator={navigations[0]}>
            <Text>Being an MVC Traditional PHP Framework make it important to have a routing. ASMVC provide you not one
                but two way to do routing. Of course, these way has their own advantages and disadvantages. But
                don&lsquo;t you worry. ASMVC will not force you to choose. But if you have to:</Text>
            <UnorderedList my={3}>
                <ListInfo name="Fast Route"
                          description="By default ASMVC use Nikic/FastRoute library under the hood to boost up your
                           routing performance. But not only that. Using this new route allows you to write a Route
                           definition more fluently. "/>
                <ListInfo name="ASMVC Native" description="ASMVC also has an native or standalone implementation of
                Routing. But this routing has some limitations: lack of fluently, unsupported optional parameter,
                no restful api support."/>
            </UnorderedList>
            <TipsCard>Of course if you new, starting with <Code>Fast Route</Code> is completely a right
                choice.</TipsCard>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>The routers is defined in <Code>routes.php</Code> or <Code>api.php</Code> file. And as you can guess
                from the name
                the <Code>routes.php</Code> stands for traditional MVC Route, while <Code>api.php</Code> stands for
                Restful API Route.</Text>
            <List>
                <OpenFolder>
                    App
                    <List ml={2}>
                        <OpenFolder>
                            Routes/
                            <List ml={2}>
                                <File>routes.php - the routing for mvc</File>
                                <File>api.php - the routing for rest api</File>
                            </List>
                        </OpenFolder>
                    </List>
                </OpenFolder>
            </List>
            <Text>First, we will see what <Code>routes.php</Code> contain:</Text>
            <CodeMultiLine code={routesPhp}/>
            <Text>The new routes definition look almost identical to old routes definition. The difference is in this
                new routings we use Closure to provide user a convenient way of declaring a route. For more information
                please look below:</Text>
            <Heading size="lg" mt={5}>The Route Instance</Heading>
            <CodeMultiLine code="Route::class"/>
            <Text>The route instance contains some of helpful method which are chainable. These method could help you
                define your routes interface. Example: <Code>get()</Code>, <Code>post()</Code>, etc.</Text>
            <Heading size="lg" mt={5}>The Http Method Interface</Heading>
            <CodeMultiLine code="$router->get($path, $closureOrArrayOfControllerAndMethod, $fluentMiddleware);"/>
            <TipsCard>Aside from <Code>get()</Code>. There&lsquo;s still bunch of HTTP Method that exist
                like: <Code>post</Code>, <Code>put</Code>, <Code>patch</Code>, <Code>delete</Code>, <Code>head</Code>,
                and <Code>options</Code>. All of them
                have identical parameters.</TipsCard>
            <Text>Those method has 4 parameters where:</Text>
            <UnorderedList>
                <ListInfo name="$path" description="Stands for your url path (E.g. '/')"/>
                <ListInfo name="$closureOrArrayOfControllerAndMethod" description="Can be either closure function or
                an array where first index is a controller namespace and second is the method to execute.
                (E.g. [HomeController::class, 'index'])"/>
                <ListInfo name="$fluentMiddleware" description="Is an instance of FluentMiddleware class. Please consult
                Middleware Docs for detail on usage"/>
            </UnorderedList>
            <Text>A complete route definition would look like this</Text>
            <CodeMultiLine code={completeRoute}/>
            <Heading size="lg" my={5}>The ViewRouteBuilder Instance</Heading>
            <Text>ViewRouteBuilder are only for acting as type hint. There&lsquo;s a method called:</Text>
            <CodeMultiLine code="$router->view($path, $stringOrClosure, $fluentMiddleware)"/>
            <Text>To use above method is so simple.</Text>
            <UnorderedList>
                <ListInfo name="$path" description="Stands for your url path (E.g. '/')"/>
                <ListInfo name="$stringOrClosure" description="Can either be closure function or a string where the
                string represent path of the view file to render."/>
                <ListInfo name="$fluentMiddleware" description="Is an instance of FluentMiddleware class. Please consult
                Middleware Docs for detail on usage"/>
            </UnorderedList>
            <Text>
                As you can see from the statement above the second parameter <Code>$stringOrClosure</Code> can either
                be a view path or closure. In order to get a data rendered in your view as well. You need to pass a
                Closure to correctly inject the data. This is where <Code>ViewRouteBuilder</Code> comes in handy.
                With <Code>ViewRouteBuilder</Code> you can fluenly inject any data you need in your view file.
                Example Usage:
            </Text>
            <CodeMultiLine code={viewRoute}/>
        </Section>
    </Layout>
}