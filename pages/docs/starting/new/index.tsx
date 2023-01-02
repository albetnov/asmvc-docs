import Layout from "../../../../Components/Docs/Layout";
import Section from "../../../../Components/Docs/Section";
import {Badge, Box, Code, Heading, Link, Text} from "@chakra-ui/react";
import TipsCard from "../../../../Components/Docs/TipsCard";
import Navigator from "../../../../Components/Docs/Navigator";

const navigations = [
    {link: "type-safety", title: "Type Safety"},
    {link: "new-csrf", title: "New CSRF (Symfony CSRF)"},
    {link: "predis", title: "Predis instead of Redis-Ext"},
    {link: "anon-migration", title: "Anonymous Migration Class as default"},
    {link: "new-route", title: "New Routing Engine"}
];

export default function New() {
    return <Layout title="What's New in 3.0!">
        <Box my={10}>
            <Heading textAlign="center">What's New?</Heading>
            <Navigator title="See what's new in ASMVC!" lists={navigations}/>
        </Box>
        <Section title={navigations[0].title} id={navigations[0].link}>
            <Badge colorScheme="red" my={2}>Severity: High</Badge>
            <Text>We priority type safety in version 3.0. With this changes potentially your app can be affected.
                We apply most of our types in <Code>Core/</Code> files.</Text>
        </Section>
        <Section title={navigations[1].title} id={navigations[1].link}>
            <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
            <Text>Previously, ASMVC has both built-in method of CSRF and
                <Link target="_blank" href="https://packagist.org/packages/paragonie/anti-csrf">Paragonie
                    Anti-CSRF</Link>.
                However, these two has weakness. First ASMVC implementation is simple, the second one migrating to
                Paragonie needs to put a routes to route action, Which may be good for csrf protection but not effecient
                for us as a Developer. That's why we choose to migrate to{" "}
                <Link target="_blank" href="https://packagist.org/packages/symfony/security-csrf">Symfony CSRF
                    Security</Link>. With this new migration, changing your code is unnecessary, no matter previously
                you've used ASMVC built in csrf or paragonie.</Text>
            <TipsCard>Deprection: ASMVC Session Driver and Paragonie Anti-CSRF is not longer exist. As well
                as the CSRF_DRIVER option in .env too will have no effect.</TipsCard>
        </Section>
        <Section title={navigations[2].title} id={navigations[2].link}>
            <Badge colorScheme="yellow" my={2}>Severity: Low</Badge>
            <Text>This severity rated as Low. As this got nothing to do if you used ASMVC wrapper around. However there
                may be some effect if you used Redis external method which are not wrapped by ASMVC. Of course, to
                simply fix this issue, you can revert to Redis-Ext again. But, please note that you may need to change
                the code to not using ASMVC wrapper as some adjustment has been applied that only works with
                predis.</Text>
        </Section>
        <Section title={navigations[3].title} id={navigations[3].link}>
            <Badge colorScheme="blue" my={2}>Severity: No Effects</Badge>
            <Text>As of ASMVC 3.0. Migration not longer has a class name. This unfortunately breaks the feature of the
                ability to be able migrate a single file. But no code adjustment is needed, You can still use and run
                your named class based migration normally.</Text>
        </Section>
        <Section title={navigations[4].title} id={navigations[4].link}>
            <Badge colorScheme="orange" my={2}>Severity: Medium</Badge>
            <Text>ASMVC empower {" "}
                <Link href="https://packagist.org/packages/nikic/fast-route"
                      target="_blank">Nikic/Fast-Route</Link>. It's also changes from previously static route declaring
                to closure based declaring. However, you shouldn't be worried. As migration to new routing engine is
                surely advised to unlock full framework integration experience. You can still use old routing. More info
                can be found <Link href="/">Here</Link>.</Text>
        </Section>
    </Layout>;
}