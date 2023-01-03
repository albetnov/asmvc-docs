import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box, Grid,
    GridItem,
} from "@chakra-ui/react";
import MainLayout from "../Layout";
import {PropsWithChildren} from "react";
import NavLink from "./NavLink";
import {useRouter} from "next/router";
import AccordionLink from "./AccordionLink";

interface DocsLayoutProps extends PropsWithChildren {
    title?: string;
    desc?: string;
}

export default function Layout({title, desc, children}: DocsLayoutProps) {
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
                            {title: "QuickStart: Hello World App", href: "/docs/starting/quickstart"}
                        ]}/>
                    </Accordion>
                </GridItem>
                <GridItem px={40}>
                    {children}
                </GridItem>
            </Grid>
        </MainLayout>
    )
}