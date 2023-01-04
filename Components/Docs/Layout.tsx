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

interface RouteSchema {
    title: string;
    href: string;
}

interface RoutesSchema {
    definition: string;
    identifier: string[] | string;
    data: RouteSchema[]
}

const routes: RoutesSchema[] = [
    {
        definition: "Getting Started", identifier: ["/docs", "/docs/starting/new"], data: [
            {title: "Installation", href: "/docs"},
            {title: "What's new ?", href: "/docs/starting/new"},
            {title: "QuickStart: Hello World App", href: "/docs/starting/quickstart"},
            {title: "The Environment", href: "/docs/starting/environment"},
        ]
    },
    {
        definition: "Jump to Basics", identifier: "/docs/basics", data: [
            {title: "The CLI", href: "/docs/basics/commands"}
        ]
    }
];

const indexedRoutes = routes.map(item => item.data).flat();

export default function Layout({title, desc, children, navigations, subTitle, navigatorTitle}: DocsLayoutProps) {
    const router = useRouter();
    const determineRoute = () => {
        let result = 0;
        routes.forEach((route, i) => {
            if (Array.isArray(route.identifier)) {
                route.identifier.forEach(item => {
                    if (router.pathname.startsWith(item)) {
                        result = i;
                    }
                })
            } else if (router.pathname.startsWith(route.identifier)) {
                result = i;
            }
        })

        return result;
    }

    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const index = indexedRoutes.findIndex(item => item.href === router.pathname);
        if (index > 0) {
            setHasPrevious(true);
        }
        console.log(index, indexedRoutes.length);
        if (index >= indexedRoutes.length - 1) {
            setHasNext(false);
        }

        setCurrentIndex(index);
    }, [router.pathname]);

    const index = determineRoute();
    console.log(index);

    const prevHandler = async () => {
        await router.push(indexedRoutes[currentIndex - 1].href);
    }

    const nextHandler = async () => {
        await router.push(indexedRoutes[currentIndex + 1].href);
    }

    return (
        <MainLayout title={title ? 'ASMVC Docs | ' + title : "ASMVC Docs"} desc={desc}>
            <Grid templateColumns="20% 1fr">
                <GridItem borderRight="1px solid" borderColor="gray.300" my={3}>
                    <Accordion defaultIndex={index} allowToggle p={5}>
                        {routes.map(item => <AccordionLink key={item.definition} title={item.definition}
                                                           links={item.data}/>)}
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
                                <Text fontSize="xl">Previous: {indexedRoutes[currentIndex - 1].title}</Text>
                            </Button>
                        ) : <Box/>}
                        {hasNext ? (
                            <Button onClick={nextHandler} variant="outline" colorScheme="blue" alignItems="center"
                                    gap={3} px={10} py={14}
                                    rounded="lg">
                                <Text fontSize="xl">Next: {indexedRoutes[currentIndex + 1].title}</Text>
                                <BsChevronDoubleRight fontSize={40}/>
                            </Button>
                        ) : <Box/>}
                    </Flex>
                </GridItem>
            </Grid>
        </MainLayout>
    )
}