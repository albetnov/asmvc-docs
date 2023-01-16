import Layout from "../../../../Components/Docs/Layout";
import {navigations} from "../../../../Models/Advanced/cache";
import Section from "../../../../Components/Docs/Section";
import {Code, Link, ListItem, Text, UnorderedList} from "@chakra-ui/react";

export default function Cache() {
    return (
        <Layout title="Caching" subTitle="Caching in ASMVC" navigations={navigations} navigatorTitle="Caching Contents">
            <Section navigator={navigations[0]}>
                <Text>
                    Sometimes you may need a temporary storage but also need it fast. This is where Cache is important.
                    Cache allows you to store literally everything temporary and access it later. Cache also fast too!
                    Under the hood ASMVC utilize <Link href="https://www.phpfastcache.com/">PhpFastCache</Link> to
                    perform some quick and easy caching.
                </Text>
            </Section>
            <Section navigator={navigations[1]}>
                <Text>
                    With that being said, ASMVC provides <Code>Cache</Code> class which simply just another wrapper
                    around PhpFastCache. This wrapper includes some method:
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Code>cache(string $key, ?string $value = null)</Code>
                        <Text>Either get or set a cache. The rule is simple. If you fill <Code>$value</Code> then the it
                            will set a cache and not returning anything. Otherwise the cache will be returned if exist.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>exist(string $key)</Code>
                        <Text>Use this function to check it exist.</Text>
                    </ListItem>
                    <ListItem>
                        <Code>getCacheInstance()</Code>
                        <Text>Return PhpFastCache PSR-16 Cache Adapter.</Text>
                    </ListItem>
                </UnorderedList>
            </Section>
        </Layout>
    );
}