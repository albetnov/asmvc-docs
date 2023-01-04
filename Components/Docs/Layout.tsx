import {
    Accordion,
    Box, Button, Flex, Grid,
    GridItem, Heading, Text,
} from "@chakra-ui/react";
import MainLayout from "../Layout";
import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/router";
import AccordionLink from "./AccordionLink";
import Navigator, {NavigatorList} from "./Navigator";
import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs";

interface DocsLayoutProps extends PropsWithChildren {
    title?: string;
    desc?: string;
    subTitle: string;
    navigations: NavigatorList[];
    navigatorTitle: string;
}

const routes = [
    {title: "Installation", href: "/docs"},
    {title: "What's new ?", href: "/docs/starting/new"},
    {title: "QuickStart: Hello World App", href: "/docs/starting/quickstart"},
    {title: "The Environment", href: "/docs/starting/environment"},
    {title: "The CLI", href: "/docs/basics/commands"}
];

export default function Layout({title, desc, children, navigations, subTitle, navigatorTitle}: DocsLayoutProps) {
    const router = useRouter();
    const determineRoute = () => {
        if (router.pathname.startsWith("/docs/basics")) {
            return 1;
        }
        return 0;
    }

    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const index = routes.findIndex(item => item.href === router.pathname);
        if (index > 0) {
            setHasPrevious(true);
        }

        if (index === routes.length - 1) {
            setHasNext(false);
        }

        setCurrentIndex(index);
    }, []);

    const index = determineRoute();

    const prevHandler = async () => {
        await router.push(routes[currentIndex - 1].href);
    }

    const nextHandler = async () => {
        await router.push(routes[currentIndex + 1].href);
    }

    return (
        <MainLayout title={title ? 'ASMVC Docs | ' + title : "ASMVC Docs"} desc={desc}>
            <Grid templateColumns="20% 1fr">
                <GridItem borderRight="1px solid" borderColor="gray.300" my={3}>
                    <Accordion defaultIndex={index} allowToggle p={5}>
                        <AccordionLink title="Getting Started" links={routes.slice(0, 4)}/>
                        <AccordionLink title="Jump To Basics" links={routes.slice(4, 5)}/>
                    </Accordion>
                </GridItem>
                <GridItem px={40}>
                    <Box my={10}>
                        <Heading textAlign="center">{subTitle}</Heading>
                        <Navigator title={navigatorTitle} lists={navigations}/>
                    </Box>
                    {children}
                    <Flex mt={100} justifyContent="space-between">
                        {hasPrevious ? (
                            <Button onClick={prevHandler} variant="outline" colorScheme="blue" alignItems="center"
                                    gap={3} px={10} py={14}
                                    rounded="lg">
                                <BsChevronDoubleLeft fontSize={40}/>
                                <Text fontSize="xl">Previous: {routes[currentIndex - 1].title}</Text>
                            </Button>
                        ) : <Box/>}
                        {hasNext ? (
                            <Button onClick={nextHandler} variant="outline" colorScheme="blue" alignItems="center"
                                    gap={3} px={10} py={14}
                                    rounded="lg">
                                <Text fontSize="xl">Next: {routes[currentIndex + 1].title}</Text>
                                <BsChevronDoubleRight fontSize={40}/>
                            </Button>
                        ) : <Box/>}
                    </Flex>
                </GridItem>
            </Grid>
        </MainLayout>
    )
}