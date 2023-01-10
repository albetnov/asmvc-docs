import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {middlewareFile, navigations, paramUsageExample, putApi, routeMw} from "../../../../Models/DiveIn/middleware";
import {Code, List, Text} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Middleware() {
    return (
        <Layout title="Middleware" subTitle="The Bridge of Request Response" navigations={navigations}
                navigatorTitle="What on bridge?">
            <Section navigator={navigations[0]}>
                <Text>Middleware acts as a bridge between your user request and how the application will respond later
                    on. This basically means that Middleware will be executed after user request but before application
                    respond. With this you can do much thing like validating user role, recording user visits, even
                    changing application behaviour like translation.</Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>ASMVC also offer middleware feature. To make middleware you can simply make a class that extends
                    <Code>App\Amsvc\Core\Middleware</Code> and override the method. And as usual ASMVC also provide you
                    a command:</Text>
                <CodeOneLine text="php asmvc create:middleware MiddlewareName"/>
                <Text>Above command will generate a middleware file in:</Text>
                <List>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Middleware/
                                <List ml={2}>
                                    <File>MiddlewareName.php (here)</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>Your generated middleware file should look like this:</Text>
                <CodeMultiLine code={middlewareFile}/>
            </Section>
            <Section navigator={navigations[2]}>
                <Text><Code>middleware()</Code> is a method that you must override
                    from <Code>Middleware</Code> class. This method will be executed right after the user request
                    and before the application response. The return type of this function must be void or never.</Text>
                <Text mt={3}>
                    This means you can stop an user from going forward through your request by throwing an exception or
                    just stop the application or just redirect your user to certain url.
                </Text>
                <TipsCard>The <Code>denied()</Code> method is not longer exist since ASMVC 3.0.</TipsCard>
            </Section>
            <Section navigator={navigations[3]}>
                <Text>
                    Starting ASMVC 3.0 the <Code>$this-&gt;db</Code> has change to <Code>$this-&gt;db()</Code>.
                    <Code>db()</Code> is a method to access a database&lsquo;s query builder. It can automatically
                    giving corresponding query builder based on model provider. This can be helpful whenever your
                    middleware need to interact with database.
                </Text>
            </Section>
            <Section navigator={navigations[4]}>
                <Text>
                    The <Code>$this</Code> in ASMVC has some scope that you might need. First, it&lsquo;s an access to
                    Database using <Code>db()</Code> method which already discussed above. But the last but important is
                    <Code>$this-&gt;params</Code> and <Code>$this-&gt;inject()</Code>.
                </Text>
                <Text mt={3}>
                    Why would you need this? The <Code>params</Code> variable will give you access to parameters that
                    going to be injected to Middleware. This can be helpful if you want to make a generic middleware
                    like Role for instance. To inject a parameter you will need to
                    access <Code>$this-&gt;inject()</Code> or
                    simply let ASMVC inject it for you. You mind found out about more in below section.
                </Text>
            </Section>
            <Section navigator={navigations[5]}>
                <Text>
                    In ASMVC, Middleware applied with per-routes scope meaning that they only be able to be applied to a
                    routes. To use Middleware, you need to use <Code>MiddlewareRouteBuilder</Code> which injected by
                    default in closure function of <Code>Routes/routes.php</Code> as <Code>$mwBuilder</Code>.
                    Here&lsquo;s some example:
                </Text>
                <CodeMultiLine code={routeMw}/>
                <Text>
                    The <Code>MiddlewareRouteBuilder</Code> only has one accessible API. Called <Code>put()</Code>. This
                    function receive two argument where the first one is the Middleware Class References and the second
                    one being parameters to inject to middleware (This is optional). Here&lsquo;s the summary:
                </Text>
                <CodeMultiLine code={putApi}/>
                <Text>
                    The injected parameters will then be accessible using <Code>$this-&gt;params</Code>. In above case:
                </Text>
                <CodeMultiLine code={paramUsageExample}/>
                <TipsCard>
                    ASMVC now support multiple middleware. Simply chain <Code>put()</Code> method again until you see
                    fit.
                </TipsCard>
            </Section>
        </Layout>
    )
}