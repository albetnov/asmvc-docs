import {
    Accordion,
    Box,
    Button, Card, Code,
    Container,
    Divider,
    Grid,
    GridItem,
    Heading, Link,
    Stack,
    Text
} from "@chakra-ui/react";
import {ParallaxBanner} from "react-scroll-parallax";
import Layout from "../Components/Layout";
import MobileFeature from "../Components/Home/MobileFeature";
import DesktopFeature from "../Components/Home/DesktopFeature";
import QuestionAnswer from "../Components/Home/QuestionAnswer";


export default function Home() {
    return (
        <Layout title="ASMVC - Home">
            <Container
                maxW="full"
                gap={10}
                my={10}
                display={{base: "block", xl: "flex"}}
                justifyContent="space-between"
            >
                <ParallaxBanner
                    layers={[{image: "https://source.unsplash.com/1920x1080?code", speed: -20}]}
                    style={{aspectRatio: "2/1", borderRadius: 20}}
                />
                <Stack
                    textAlign="center"
                    align="center"
                    spacing={{base: 8, md: 10}}
                    py={{base: 20, md: 28}}
                >
                    <Box>
                        <Heading
                            fontWeight={600}
                            fontSize={{base: "3xl", sm: "4xl", md: "6xl"}}
                            lineHeight="110%"
                        >
                            ASMVC{" "}
                            <Text as={"span"} color={"blue.400"}>
                                Version 3
                            </Text>
                        </Heading>
                        <Divider borderColor="gray.600" my={2}/>
                        <Text fontSize="xl" textAlign="center" fontWeight="medium">A framework for joyers.</Text>
                    </Box>
                    <Text color="gray.500" maxW="3xl">
                        A framework reimagined with a complete rewrite through multiple core components.
                        Providing new, robust, yet still maintain easy to use Api&lsquo;s.
                    </Text>
                    <Button colorScheme="blue">Get Started!</Button>
                </Stack>
            </Container>
            <Container maxW="5xl">
                <Heading textAlign="center" fontSize="5xl" mt={3}>
                    What&lsquo;s new in ASMVC 3.0?
                </Heading>

                <section>
                    <MobileFeature/>
                    <DesktopFeature/>
                </section>

                <Box as="section" mt={100}>
                    <Heading textAlign="center">Examples</Heading>
                    <Grid templateColumns={{base: "1fr", xl: "repeat(3, 1fr)"}} gap={20} mt={5}>
                        {[1, 2, 3, 4, 5].map((item, i) => (
                            <GridItem key={i}>
                                <ParallaxBanner
                                    layers={[{image: "https://source.unsplash.com/500x500?code", speed: -20}]}
                                    style={{aspectRatio: "1/1"}}
                                />
                            </GridItem>
                        ))}
                    </Grid>
                </Box>

                <Box as="section" mt={10} borderY="1px solid" py={10} borderColor="gray.700">
                    <Heading textAlign="center">What do you waiting for?</Heading>
                    <Button variant="outline" colorScheme="blue" mx="auto" display="block" mt={10}>Learn Now!</Button>
                </Box>

                <Box as="section" mt={20}>
                    <Heading textAlign="center">Frequently Asked Questions (probably)</Heading>

                    <Card w="full" p={10} mt={5}>
                        <Accordion>
                            <QuestionAnswer question="What is Core files?">
                                <Code>Core/</Code> is a special directory where every internals core files
                                regarding the framework located. Or we can also say that <Code>Core/</Code>
                                is the framework itself.
                            </QuestionAnswer>
                            <QuestionAnswer question="Can I edit Core files?">
                                Yes you can! ASMVC gives you freedom towards <Code>Core/</Code> file.
                                That's also the reason why <Code>Core/</Code> exposed
                                and located in the same folder as your projects files. Please feel free to customize
                                anything you need to built your app.
                            </QuestionAnswer>
                            <QuestionAnswer question="Should I used this framework for production?">
                                Well ASMVC does have <Code>production</Code> mode. But what does "production" term mean
                                in here? ASMVC is a framework created with <b>Joy</b> in mind. It's never been for
                                production nor professional usage. I highly advised you to look up towards framework
                                like <Link href="https://laravel.com">Laravel</Link> and <Link
                                href="https://symfony.com">Symfony</Link> if you targeting
                                proffesionals/industrials.
                            </QuestionAnswer>
                            <QuestionAnswer question="Will version 4 came out?">
                                Nope. V3 is the final. Bug Fix or security issues will still maintained though.
                                However, something like deprecated package will depend on "Will there be any replacement
                                out there?" If yes, does this replacement easy to migrate to? If not, I think you should
                                stop using ASMVC then.
                            </QuestionAnswer>
                            <QuestionAnswer question="Where's the old documentation regarding v1 or v2?">
                                They bla bla bla bla...
                            </QuestionAnswer>
                            <QuestionAnswer question="Will old documentation be migrated to here?">
                                Nope.
                            </QuestionAnswer>
                        </Accordion>
                    </Card>
                </Box>
            </Container>
        </Layout>
    );
}
