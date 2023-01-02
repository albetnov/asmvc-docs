import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box, Grid,
    GridItem,
    List,
    ListItem
} from "@chakra-ui/react";
import MainLayout from "../Layout";
import {PropsWithChildren} from "react";

interface DocsLayoutProps extends PropsWithChildren {
    title: string;
    desc?: string;
}

export default function Layout({title, desc, children}: DocsLayoutProps) {
    return (
        <MainLayout title={title} desc={desc}>
            <Grid templateColumns="20% 1fr">
                <GridItem borderRight="1px solid" borderColor="gray.300" my={3}>
                    <Accordion allowToggle p={5}>
                        <AccordionItem border="none" rounded="lg">
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Getting Started
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <List p={3} rounded="lg" border="2px solid" borderColor="blue.300">
                                    <ListItem>Installation</ListItem>
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
                <GridItem px={10}>
                    {children}
                </GridItem>
            </Grid>
        </MainLayout>
    )
}