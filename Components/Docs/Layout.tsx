import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box, Grid,
    GridItem, Heading,
} from "@chakra-ui/react";
import MainLayout from "../Layout";
import {PropsWithChildren} from "react";
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
    const index = router.pathname === "/docs" || router.pathname.startsWith("/docs/starting") ? 0 : 1;

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