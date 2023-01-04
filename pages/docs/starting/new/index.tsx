import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Badge, Code, Link, Text} from "@chakra-ui/react";
import TipsCard from "../../../../Components/Docs/TipsCard";
import {navigations} from "./newModel";

export default function New() {
    return (
        <Layout title="What's New in 3.0!" subTitle="What&lsquo;s New?" navigations={navigations}
                navigatorTitle="See what's new in ASMVC 3.0!">
            <Section navigator={navigations[0]}>
                <Badge colorScheme="red" my={2}>Severity: High</Badge>
                <Text>
                    We priority type safety in version 3.0. With this changes potentially your app can be affected.
                    We apply most of our types in <Code>Core/</Code> files.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Badge colorScheme="red" my={2}>Severity: Critical</Badge>
                <Text>
                    ASMVC not longer namespaced under my name xD. Previously: <Code>Albet\Asmvc\</Code>. Now you get
                    more generic names: <Code>App\Asmvc\</Code>. Marked as Critical because the entire namespace has
                    been migrated to that. Fixing this issue on the other hand is very simple though. Simply
                    find & replace all files and you&lsquo;re done.
                </Text>
            </Section>
            <Section navigator={navigations[2]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    Previously, ASMVC has both built-in method of CSRF and
                    <Link target="_blank" href="https://packagist.org/packages/paragonie/anti-csrf">Paragonie
                        Anti-CSRF</Link>.
                    However, these two has weakness. First ASMVC implementation is simple, the second one migrating to
                    Paragonie needs to put a routes to route action, Which may be good for csrf protection but not
                    effecient for us as a Developer. That&lsquo;s why we choose to migrate to{" "}
                    <Link target="_blank" href="https://packagist.org/packages/symfony/security-csrf">Symfony CSRF
                        Security</Link>. With this new migration, changing your code is unnecessary, no matter
                    previously you&lsquo;ve used ASMVC built in csrf or paragonie.
                </Text>
                <TipsCard>Deprection: ASMVC Session Driver and Paragonie Anti-CSRF is not longer exist. As well
                    as the CSRF_DRIVER option in .env too will have no effect.</TipsCard>
            </Section>
            <Section navigator={navigations[3]}>
                <Badge colorScheme="yellow" my={2}>Severity: Low</Badge>
                <Text>
                    This severity rated as Low. As this got nothing to do if you used ASMVC wrapper around. However
                    there may be some effect if you used Redis external method which are not wrapped by ASMVC. Of
                    course, to simply fix this issue, you can revert to Redis-Ext again. But, please note that you may
                    need to change the code to not using ASMVC wrapper as some adjustment has been applied that only
                    works with predis.
                </Text>
            </Section>
            <Section navigator={navigations[4]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    As of ASMVC 3.0. Migration not longer has a class name. This unfortunately breaks the feature of
                    the ability to be able migrate a single file. But no code adjustment is needed, You can still use
                    and run your named class based migration normally.
                </Text>
            </Section>
            <Section navigator={navigations[5]}>
                <Badge colorScheme="orange" my={2}>Severity: Medium</Badge>
                <Text>
                    ASMVC empower {" "}
                    <Link href="https://packagist.org/packages/nikic/fast-route"
                          target="_blank">Nikic/Fast-Route</Link>. It&lsquo;s also changes from previously static route
                    declaring to closure based declaring. However, you shouldn&lsquo;t be worried. As migration to new
                    routing engine is surely advised to unlock full framework integration experience. You can still use
                    old routing. More info can be found <Link href="/">Here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[6]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    To complement with PSR-7&lsquo;s HTTP Interface, <Link
                    href="https://packagist.org/packages/laminas/laminas-diactoros">Laminas
                    Diactoros</Link> was chosen to serve the entire HTTP interface of ASMVC. This changes marked as No
                    Changes in severities as ASMVC still provide the old way of interacting with request, of course this
                    old way is updated to use Laminas Diactoros Api&lsquo;s.
                </Text>
            </Section>
            <Section navigator={navigations[7]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    To support an even wider range of possibility of dependencies you may want to inject, ASMVC moved to
                    <Link href="https://packagist.org/packages/php-di/php-di">PHP-DI</Link> library to fulfill the
                    containers of ASMVC. This also brings support for you to use Dependency Injection Container directly
                    by accessing <Code>App/Asmvc/Core/Containers/Container</Code>. More info can be found <Link
                    href="/">Here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[8]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    To help you debug your app more easily, ASMVC brings support of logging powered by
                    <Link href="https://packagist.org/packages/monolog/monolog">Monolog</Link>. ASMVC also provides
                    you a <Code>App/Asmvc/Core/Logger/Logger</Code> interface to log into your app more easily.
                    Of course, detail about logging can be found <Link href="/">here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[9]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    Previously, ASMVC provides <Link href="https://getbootstrap.com/">Bootstrap</Link> and Vanilla CSS
                    if you choose to opt-in Bootstrap. However, in v3 ASMVC not longer shipped you with Vanilla CSS if
                    you decided to opt-in Bootstrap. Instead, we use TailwindCSS and DaisyUI as default styling.
                    Of course, you can choose to overwrite the entire thing to your own implementation by using{" "}
                    <Code>export:core</Code> Commands.
                </Text>
            </Section>
            <Section navigator={navigations[10]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    In v3, ASMVC shipped with <Link href="https://packagist.org/packages/symfony/console">Symfony
                    Console</Link> and <Link
                    href="https://packagist.org/packages/nunomaduro/termwind">Termwind</Link>{" "}
                    also <Link href="https://packagist.org/packages/nunomaduro/collision">Collision</Link>{" "}
                    to gives you more eye refreshing experience whenever you need to interact with
                    ASMVC CLI. Moving to these libraries also gives you a new feature to add your own commands.
                    Detail regarding commands can be found <Link href="/">here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[11]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    Now ASMVC allows you to make a multilingual web app using <Link
                    href="https://packagist.org/packages/symfony/translation">Symfony/Translation</Link> library.
                    ASMVC also provides helpers like <Code>__()</Code> function. More detail can be found <Link
                    href="/">here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[12]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    To improves your web quality in decreasing the possibility of having bugs on your code. ASMVC
                    provides <Link href="https://packagist.org/packages/phpstan/phpstan">PHPStan</Link>{" "}
                    and <Link href="https://packagist.org/packages/rector/rector">Rector</Link> integration
                    to help you finding bugs and refactor your code automatically.
                    More detail about these two can be found <Link href="/">here</Link>.
                </Text>
            </Section>
            <Section navigator={navigations[13]}>
                <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
                <Text>
                    To help you building a REST App. ASMVC provides REST interfaces to work easily with technologies
                    like <Link href="https://jwt.io/">JWT</Link> and <Link href="https://docs.guzzlephp.org/">Guzzle
                    HTTP</Link>. More detail about REST can be found <Link href="/">here</Link>.
                </Text>
            </Section>
        </Layout>
    );
}