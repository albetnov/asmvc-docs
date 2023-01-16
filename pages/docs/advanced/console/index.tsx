import Layout from "../../../../Components/Docs/Layout";
import {cliBoilerplate, consoleBuilderApis, navigations} from "../../../../Models/Advanced/console";
import Section from "../../../../Components/Docs/Section";
import {Badge, Code, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import CodeOneLine from "../../../../Components/Docs/CodeOneLine";
import OpenFolder from "../../../../Components/Docs/OpenFolder";
import File from "../../../../Components/Docs/File";
import CodeMultiLine from "../../../../Components/Docs/CodeMultiLine";

export default function Console() {
    return (
        <Layout title="Console" subTitle="The ASMVC Console Interface" navigations={navigations}
                navigatorTitle="The CLI Contents">
            <Section navigator={navigations[0]}>
                <Text>
                    ASMVC Console has been completely rewritten from scratch using <Link
                    href="https://packagist.org/packages/symfony/console">Symfony/Console</Link>. Thus providing ASMVC
                    to leverage commands to include more stricter rules while providing powerful api&lsquo;s which also
                    includes building your own commands.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    Thanks to Symfony Console. ASMVC CLI Interface now have a powerful documentation built-in to the CLI
                    using:
                </Text>
                <CodeOneLine text="php asmvc help"/>
                <Text>
                    And of course:
                </Text>
                <CodeOneLine text="php asmvc help <command>"/>
                <Text>Which allows you to show help for specific command in detail. For more info regarding CLI we
                    highly encourage you to visit: <Link href="https://symfony.com/doc/current/console.html">Symfony
                        Console Docs</Link></Text>
            </Section>
            <Section navigator={navigations[2]}>
                <Text>
                    Generating your own CLI is even more easier thanks to Symfony Console Library. Under the hood ASMVC
                    also provide:
                </Text>
                <CodeOneLine text="php asmvc create:command CommandName"/>
                <Text>
                    Above allows you to generate a template boilerplate of a Command that ASMVC dan detect and inject
                    directly. Regardless your command should be generated at:
                </Text>
                <List>
                    <OpenFolder>
                        App/
                        <List ml={2}>
                            <OpenFolder>
                                Commands/
                                <List ml={2}>
                                    <File>CommandName.php</File>
                                </List>
                            </OpenFolder>
                        </List>
                    </OpenFolder>
                </List>
                <Text>And it should look like this:</Text>
                <CodeMultiLine code={cliBoilerplate}/>
            </Section>
            <Section navigator={navigations[3]}>
                <Text>Wow, Above is kinda a lot Api&lsquo;s. But don&lsquo;t worry. The reason why ASMVC has these
                    Api&lsquo;s is to provide you to make a more fluent command and taking advantages of IDE
                    Autocomplete! These allow to speed up your command generation! Let&lsquo;s take a look at these
                    Api&lsquo;s</Text>
                <CodeMultiLine code={consoleBuilderApis.extending}/>
                <Text>Your class &quot;MUST&quot; extend <Code>Command</Code> class from ASMVC. Not Symfony one.
                    Because the Symfony may or may not work (untested).</Text>
                <CodeMultiLine code={consoleBuilderApis.setup}/>
                <Text>The setup is a abstract method in which you &quot;MUST&quot; override. As the name suggest,
                    the <Code>Setup</Code> method is used to define your command name parameter and much more. This
                    method take <Code>$builder</Code> as parameters and it will auto injected by ASMVC.</Text>
                <CodeMultiLine code={consoleBuilderApis.fluentBuilder}/>
                <Text>This is the Console Command Builder Api&lsquo;s which contain some helpful method that
                    chainable and designed carefully to fully enhanced Developer Experience over IDE&lsquo;s. Some API
                    you can use are:</Text>
                <UnorderedList mt={3}>
                    <ListItem>
                        <Code>setName(string $name)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the name to your command. This method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setDesc(string $desc)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the description of your command which will be shown in help. This method take one
                            string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setAliases(string|array $aliases)</Code>
                        <Text>
                            Set the alias name of your command. This method takes either string or an array as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setHelp(string $help)</Code>
                        <Text>
                            Set help text of your command. This method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>addParam(Closure $fn)</Code>
                        <Text>
                            Set parameters of your command. This method take on Closure that must
                            return <Code>FluentParamBuilder</Code>. The Closure will have one
                            argument <Code>FluentParamBuilder</Code> that auto injected by ASMVC.
                            The resulting param will be like:
                        </Text>
                        <CodeOneLine text="php asmvc command param"/>
                    </ListItem>
                    <ListItem>
                        <Code>addOptionalParam(Closure $fn)</Code>
                        <Text>
                            Set optional parameters of your command. This method take on Closure that must
                            return <Code>FluentOptionalParamBuilder</Code>. The Closure will have one
                            argument <Code>FluentOptionalParamBuilder</Code> that auto injected by ASMVC.
                            The resulting param will be like:
                        </Text>
                        <CodeOneLine text="php asmvc command --param"/>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[4]}>
                <Text>
                    The <Code>FluentParamBuilder</Code> is an Api Interface to building a optional parameter
                    of your command. This interface contains:
                </Text>
                <UnorderedList mt={3}>
                    <ListItem>
                        <Code>setName(string $name)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the name to your optional command parameter. This method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setDesc(string $desc)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the description of your optional command parameter which will be shown in help. This
                            method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setDefault(string $default)</Code>
                        <Text>
                            Set the default value to your optional command parameter. This method take one string as
                            argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeOptional()</Code>
                        <Text>Mark the parameters values as optional. Can either be filled or not.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeRequired()</Code>
                        <Text>Mark the parameters values as required.</Text>
                        <CodeOneLine text="php asmvc command param"/>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[5]}>
                <Text>The <Code>FluentOptionalParamBuilder</Code> is an Api Interface to building a optional parameter
                    of your command. This interface contains:</Text>
                <UnorderedList mt={3}>
                    <ListItem>
                        <Code>setName(string $name)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the name to your optional command parameter. This method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setDesc(string $desc)</Code>
                        <Badge ml={2} colorScheme="red">Required</Badge>
                        <Text>
                            Set the description of your optional command parameter which will be shown in help. This
                            method take one string as argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setDefault(string $default)</Code>
                        <Text>
                            Set the default value to your optional command parameter. This method take one string as
                            argument.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Code>setShortcut(string|array $shortcut)</Code>
                        <Text>
                            Set the shortcut name of your optional command parameter. This method takes either string or
                            an array as argument.
                            Example:
                        </Text>
                        <CodeOneLine text="php asmvc command -f"/>
                        <Text>Equivalent to:</Text>
                        <CodeOneLine text="php asmvc command --force"/>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeNone()</Code>
                        <Text>Set the optional param to accept no value</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeArray()</Code>
                        <Text>Set the optional param to accept array values</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeNegatable()</Code>
                        <Text>Set the optional param to accept negatable. Example:</Text>
                        <CodeOneLine text="php asmvc command --with-imgs"/>
                        <Text>with negatable:</Text>
                        <CodeOneLine text="php asmvc command --no-with-imgs"/>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeOptional()</Code>
                        <Text>Mark the parameters values as optional. Can either be filled or not.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>setInputTypeRequired()</Code>
                        <Text>Mark the parameters values as required.</Text>
                        <CodeOneLine text="php asmvc command --id=1"/>
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section navigator={navigations[6]}>
                <Text>
                    ASMVC not only ships with Symfony Console. But also <Link
                    href="https://packagist.org/packages/nunomaduro/termwind">Termwind</Link> which enchant the power of
                    beauty right to the UI. ASMVC well integrate with Termwind and also expose some Api&lsquo;s for you
                    use and other things you may need:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>render(string $html)</Code>
                        <Text>Give the render instance of termwind.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>error(string $message)</Code>
                        <Text>Stylized error message</Text>
                    </ListItem>
                    <ListItem>
                        <Code>success(string $message)</Code>
                        <Text>Stylized success message</Text>
                    </ListItem>
                    <ListItem>
                        <Code>badgeWarn(string $message)</Code>
                        <Text>Stylized warning message with same line</Text>
                    </ListItem>
                    <ListItem>
                        <Code>badgeSuccess(string $message)</Code>
                        <Text>Stylized success message with same line</Text>
                    </ListItem>
                    <ListItem>
                        <Code>badgeError(string $message)</Code>
                        <Text>Stylized error message with same line</Text>
                    </ListItem>
                    <ListItem>
                        <Code>badgeInfo(string $message)</Code>
                        <Text>Stylized info message with same line</Text>
                    </ListItem>
                    <ListItem>
                        <Code>badge(string $message, string $badgeTitle, BadgeColor $color)</Code>
                        <Text>A configurable stylized badge</Text>
                    </ListItem>
                    <ListItem>
                        <Code>ask(string $question, ?array $autoComplete = null, ?string $defaultValue = null): string |
                            bool</Code>
                        <Text>A stylized question prompt that features Termwind&lsquo;s auto completion and a default
                            value if user answer is invalid. Return <Code>false</Code> if user input invalid with no
                            default value given.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>prompt(string $question, PromptableValue $defaultValue = PromptableValue::YES):
                            PromptableValue|bool</Code>
                        <Text>
                            Just like <Code>ask()</Code> but user limited to y, yes, n, no.
                            Return <Code>PromptableValue</Code> if user input is valid and otherwise <Code>false</Code>.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    );
}