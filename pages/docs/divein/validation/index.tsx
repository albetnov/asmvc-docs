import Layout from "../../../../Components/Docs/Layout";
import {navigations, validatorExample} from "../../../../Models/DiveIn/validation";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import TipsCard from "../../../../Components/Docs/TipsCard";
import RouteLink from "../../../../Components/RouteLink";

export default function Validation() {
    return <Layout title="Validation" subTitle="Validating in ASMVC" navigations={navigations}
                   navigatorTitle="Validating User Input Lists">
        <Section navigator={navigations[0]}>
            <Text>
                Is it highly recommended for you to validating your user inputs. This is a basic yet have a big impact
                on application securities. By validating user input you can secure your app through multiple script
                injection attempt. ASMVC provide <Link
                href="https://packagist.org/packages/rakit/validation">Rakit/Validator</Link> Integration to help you
                validating your user input.
            </Text>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>Meanwhile to validating user input. You can use <Code>Validator</Code> class. Simply
                call <Code>Validator::make()</Code> and put your rules there. Example:</Text>
            <CodeMultiLine code={validatorExample}/>
            <Text mt={2}><Code>Validator</Code> will automatically takes <Code>Request::getInput()</Code> for the
                request data.
                So you don&lsquo;t need to pass requests manually. The <Code>Validator</Code> will also make a session
                for old fields. Which can be helpful if you need to put validation error in traditional view.</Text>
            <Text mt={2}><Code>Validator</Code> will also redirect the user automatically to previous page (Before
                submitting
                form) if the validations fails. Of course this behaviour can be disabled by
                putting <Code>$redirect</Code> argument to false.</Text>
        </Section>
        <Section navigator={navigations[2]}>
            <Text><Code>Validator</Code> is a helper class that help integrates ASMVC with Rakit Validation. This class
                contain many helpful method including:</Text>
            <List>
                <ListItem>
                    <CodeMultiLine code="Validator::make(array $data, ?array $customMsg, ?bool $redirect): bool"/>
                    <Text>Create a validation</Text>
                    <UnorderedList ml={2}>
                        <ListItem>
                            <Code>$data</Code>
                            <Text>Contains array of data. With key as field and value as rules. E.g.
                                <Code>([&apos;name&apos; =&gt; &apos;required&apos;])</Code> will set name to required
                                field.</Text>
                        </ListItem>
                        <ListItem>
                            <Code>$customMsg</Code>
                            <Text>Contains array of data where key is the identifier of field message you want to
                                customized and value is the custom message.
                                E.g. <Code>{`(['name.required' => 'Name is required sir!'])`}</Code></Text>
                        </ListItem>
                        <ListItem>
                            <Code>$redirect</Code>
                            <Text>Set auto redirection</Text>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    <CodeMultiLine
                        code="Validator::validMsg(string $field, ?string $ulClass, ?string $liClass): string"/>
                    <Text>Get validation error message</Text>
                    <UnorderedList ml={2}>
                        <ListItem>
                            <Code>$field</Code>
                            <Text>Field name to get message</Text>
                        </ListItem>
                        <ListItem>
                            <Code>$ulClass</Code>
                            <Text><Code>{`<ul>`}</Code> element class</Text>
                        </ListItem>
                        <ListItem>
                            <Code>$liClass</Code>
                            <Text><Code>{`<li>`}</Code> element class</Text>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    <CodeMultiLine code="Validator::checkError(string $field): bool"/>
                    <Text>Check field validation error</Text>
                    <UnorderedList ml={2}>
                        <ListItem>
                            <Code>$field</Code>
                            <Text>Field name to check has error or not</Text>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </List>
        </Section>
        <Section navigator={navigations[3]}>
            <Text>If calling above class is too long for you, you can just use helpers method ASMVC provide. Which
                simply a function that wraps <Code>Validator</Code> instance. Available helpers which you can use
                are:</Text>
            <UnorderedList mt={3}>
                <ListItem>
                    <Code>old($field)</Code>
                    <Text>Get previous value (before validation) of given <Code>$field</Code>.</Text>
                </ListItem>
                <ListItem>
                    <Code>set_old($field, $value)</Code>
                    <Text>Explicitly set old value to given <Code>$field</Code>.</Text>
                </ListItem>
                <ListItem>
                    <Code>flush_old()</Code>
                    <Text>Explicitly clean all old values.</Text>
                </ListItem>
                <ListItem>
                    <Code>makeValidate()</Code>
                    <Text>A wrapper around <Code>Validator::make()</Code></Text>
                </ListItem>
                <ListItem>
                    <Code>checkError()</Code>
                    <Text>A wrapper around <Code>Validator::checkError()</Code></Text>
                </ListItem>
                <ListItem>
                    <Code>getErrorMsg()</Code>
                    <Text>A wrapper around <Code>Validator::validMsg()</Code></Text>
                </ListItem>
            </UnorderedList>
            <TipsCard>More info on how to use validation in view can be found here: <RouteLink
                href="/docs/basics/views">View</RouteLink></TipsCard>
        </Section>
        <Section navigator={navigations[4]}>
            <Text>By default ASMVC&lsquo;s <Code>Validator</Code> instance built to work with requests and responses. If
                none present, it won&lsquo;t work. But, there&lsquo;s an alternative.
                Using <Code>Rakit/Validation</Code> directly. More info on how to use it, <Link
                    href="https://packagist.org/packages/rakit/validation">Rakit
                    Documentation</Link></Text>
        </Section>
    </Layout>
}