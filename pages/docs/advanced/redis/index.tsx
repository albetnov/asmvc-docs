import Layout from "../../../../Components/Docs/Layout";
import {navigations} from "../../../../Models/Advanced/redis";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import RouteLink from "../../../../Components/RouteLink";
import TipsCard from "../../../../Components/Docs/TipsCard";

export default function Redis() {
    return <Layout title="Redis" subTitle="Redis Database or Session" navigations={navigations}
                   navigatorTitle="Redis Contents">
        <Section navigator={navigations[0]}>
            <Text>
                Sometime you may wish to have more complex mechanism over Caching. Or you might deploy your app
                somewhere separately from main instance. This can be a pain since basic session from PHP are not made
                for sharing. You might find this article helpful: <Link
                href="https://dev.to/bornfightcompany/php-session-quirks-3da0">PHP Session Quirks</Link>. Although Redis
                can solve them all, But I guess better than nothing?
            </Text>
        </Section>
        <Section navigator={navigations[1]}>
            <Text>
                ASMVC provide first class integration when it comes to Redis and Session. Simply
                configure <Code>SESSION_DRIVER</Code> to <Code>redis</Code> in your <Code>.env</Code> File. And all of
                your session is running in Redis Cluster. No matter you&lsquo;re using <Code>SessionManager</Code> or
                <Code>session()</Code> function or the built in <Code>$_SESSION</Code>.
            </Text>
            <TipsCard>
                ASMVC also come with several configuration around redis. You can find more about them in <RouteLink
                href="/docs/starting/environment">The Environment</RouteLink> section.
            </TipsCard>
        </Section>
        <Section navigator={navigations[2]}>
            <Text>In case you need more than a cache but fast like a cache and yet still temporary. Redis as a storage
                driver is the answer. In order to use Redis as a storage ASMVC provide <Link
                    href="https://packagist.org/packages/predis/predis">Predis</Link> integration.
                With <Code>Redis</Code> interface as it&lsquo;s wrapper class.</Text>
            <Text mt={3}>
                Regardless, here&lsquo;s a list of available methods in <Code>Redis</Code> class:
            </Text>
            <UnorderedList>
                <ListItem>
                    <Code>connect()</Code>
                    <Text>Connect to Redis cluster using cresidentials from <Code>.env</Code>.</Text>
                </ListItem>
                <ListItem>
                    <Code>checkKey(string $key, bool $get = false)</Code>
                    <Text>Use to check if the key is exist from given <Code>$key</Code>. If it&lsquo;s exist return
                        boolean true if <Code>$get</Code> is false, otherwise return the value from
                        given <Code>$key</Code>.</Text>
                </ListItem>
                <ListItem>
                    <Code>redisKey(string $key, mixed $value, bool $list, int $expire)</Code>
                    <Text>Used to get a value from given <Code>$key</Code> if only that parameters is filled.
                        If <Code>$value</Code> also filled then set a value to given <Code>$key</Code>.
                        If <Code>$list</Code> is true then mark the given <Code>$key</Code> as list. Last,
                        if <Code>$expire</Code> filled, then the key will vanish after given time
                        from <Code>$expire</Code>.</Text>
                </ListItem>
                <ListItem>
                    <Code>getExpires(string $key)</Code>
                    <Text>Get the time when the <Code>$key</Code> vanish.</Text>
                </ListItem>
                <ListItem>
                    <Code>flush(?string $key)</Code>
                    <Text>Remove a key if <Code>$key</Code> filled, otherwise remove the database.</Text>
                </ListItem>
            </UnorderedList>
        </Section>
    </Layout>
}