import Layout from "../../../../Components/Docs/Layout";
import {apiFile, navigations} from "../../../../Models/Advanced/rest";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Rest() {
    return (
        <Layout title="Restful" subTitle="Going Restful With ASMVC" navigations={navigations}
                navigatorTitle="Restful Contents">
            <Section navigator={navigations[0]}>
                <Text>
                    Often you may need to build a restful api&lsquo;s in order to separate both frontend and backend.
                    And to do so you will need a Restful API which allows both of these stack to exchange their data.
                    From Frontend to Backend and the vice versa. That&lsquo;s why ASMVC brings first class support
                    for creating your own Restful API!
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    ASMVC provide <Code>api.php</Code> file to store your Api Routes definition. This file located in:
                </Text>
                <List my={3}>
                    <OpenFolder>
                        App/
                        <OpenFolder>
                            Routes/
                            <List ml={2}>
                                <File>api.php &lt;- This.</File>
                                <File>routes.php</File>
                            </List>
                        </OpenFolder>
                    </OpenFolder>
                </List>
                <Text>
                    All routes from <Code>api.php</Code> will have csrf security off by default. This allows your api to
                    be stateless. ASMVC will map all routes to have <Code>api/</Code> at the start. Example:
                </Text>
                <CodeMultiLine code={apiFile}/>
                <Text>The above <Code>/hello</Code> route will be accessible with <Code>/api/hello</Code>.
                    Not <Code>/hello</Code>.</Text>
                <TipsCard>
                    Did you know, ASMVC can automatically serialize your response of controller or even closure. For
                    example if your method or closure return an associative array, ASMVC can serialize it to JSON if the
                    user wants so.
                </TipsCard>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>
                    ASMVC also provide you a simple wrapper class <Code>REST</Code> which contain some helpful
                    boilerplate. The accessible method are:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>json(array $data, ?int $statusCode = 200)</Code>
                        <Text>This parameter will return json response from <Code>$data</Code> with status code
                            from <Code>$statusCode</Code></Text>
                    </ListItem>
                    <ListItem>
                        <Code>setAcceptJson()</Code>
                        <Text>This will set the app header to accept json then kill the app.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[3]}>
                <Text>
                    If you building an app that integrating with other app using Restful Api as well. ASMVC provide
                    out of the box integration with <Link
                    href="https://packagist.org/packages/guzzlehttp/guzzle">GuzzleHttp/Guzzle</Link>. Which allows you
                    to:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>setUrl(string $url)</Code>
                        <Text>Set target url from <Code>$url</Code></Text>
                    </ListItem>
                    <ListItem>
                        <Code>makeItAsync()</Code>
                        <Text>Make the request asynchronous using Guzzle Promises.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>disableAsync()</Code>
                        <Text>Return it back to synchronous.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>withBasicAuth(string $username, string $password)</Code>
                        <Text>Include basic authentication to the request</Text>
                    </ListItem>
                    <ListItem>
                        <Code>withDigestAuth(string $username, string $password)</Code>
                        <Text>Include digest authentication to the request</Text>
                    </ListItem>
                    <ListItem>
                        <Code>withBearerAuth(string $token)</Code>
                        <Text>Include bearer authentication to the request</Text>
                    </ListItem>
                    <ListItem>
                        <Code>withoutAuth()</Code>
                        <Text>Disable Auth</Text>
                    </ListItem>
                    <ListItem>
                        <Code>request(string $method, ?array $data = [])</Code>
                        <Text>Request to target url with specified <Code>$method</Code> and data from <Code>$data</Code>.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    )
}