import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box, Grid,
    GridItem, Heading,
} from "@chakra-ui/react";
import MainLayout from "../Layout";
import {PropsWithChildren, useEffect, useLayoutEffect, useState} from "react";
import NavLink from "./NavLink";
import {useRouter} from "next/router";
import AccordionLink from "./AccordionLink";
import Navigator, {NavigatorList} from "./Navigator";

interface DocsLayoutProps extends PropsWithChildren {
    title?: string;
    desc?: string;
    subTitle: string;
    navigations: NavigatorList[];
    navigatorTitle: string;
}

export default function Layout({title, desc, children, navigations, subTitle, navigatorTitle}: DocsLayoutProps) {
    const router = useRouter();
    const determineRoute = () => {
        if (router.pathname.startsWith("/docs/basics")) {
            return 1;
        }
        return 0;
    }

    const [index, setIndex] = useState(() => determineRoute());

    return (
        <MainLayout title={title ? 'ASMVC Docs | ' + title : "ASMVC Docs"} desc={desc}>
            <Grid templateColumns="20% 1fr">
                <GridItem borderRight="1px solid" borderColor="gray.300" my={3}>
                    <Accordion defaultIndex={index} allowToggle p={5}>
                        <AccordionLink title="Getting Started" links={[
                            {title: "Installation", href: "/docs"},
                            {title: "What's new ?", href: "/docs/starting/new"},
                            {title: "QuickStart: Hello World App", href: "/docs/starting/quickstart"},
                            {title: "The Environment", href: "/docs/starting/environment"}
                        ]}/>
                        <AccordionLink title="Jump To Basics" links={[
                            {title: "The CLI", href: "/docs/basics/commands"}
                        ]}/>
                    </Accordion>
                </GridItem>
                <GridItem px={40}>
                    <Box my={10}>
                        <Heading textAlign="center">{subTitle}</Heading>
                        <Navigator title={navigatorTitle} lists={navigations}/>
                    </Box>
                    {children}
                </GridItem>
            </Grid>
        </MainLayout>
    )
}