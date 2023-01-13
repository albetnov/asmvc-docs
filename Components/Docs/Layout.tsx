import {
    Accordion,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    GridItem,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import AccordionLink from "./AccordionLink";
import Navigator from "./Navigator";
import {FiChevronRight, FiMenu, FiSearch} from "react-icons/fi";
import Footer from "../Topbar/Footer";
import Logo from "../Logo";
import SwitchMode from "../Topbar/SwithMode";
import {DocsLayoutProps, indexedRoutes, routes, useLayoutModel} from "./layoutModel";
import RouteLink from "../RouteLink";
import Head from "next/head";


export default function Layout({title, desc, children, navigations, subTitle, navigatorTitle}: DocsLayoutProps) {
    const {
        index,
        prevHandler,
        nextHandler,
        hasNext,
        hasPrevious,
        currentIndex,
        isOpen,
        onOpen,
        onClose,
        router,
        leftNavIcon,
        rightNavIcon
    } = useLayoutModel();

    return (
        <>
            <Head>
                <title>{title ? "ASMVC Docs | " + title : "ASMVC Documentation"}</title>
                <meta name="description" content={desc ? desc : "A documentation for ASMVC"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header>
                <Flex shadow="base" p={10} justifyContent="space-between">
                    <Logo/>
                    <Flex gap={5} alignItems="center">
                        <Button display={{base: "block", xl: "none"}} bg="none" onClick={onOpen}><FiMenu/></Button>
                        <Drawer isOpen={isOpen} onClose={onClose}>
                            <DrawerOverlay/>
                            <DrawerContent>
                                <DrawerCloseButton/>
                                <DrawerHeader>Menu</DrawerHeader>
                                <DrawerBody display="flex" flexDir="column" gap={3}>
                                    {routes.map((item) => (
                                        <UnorderedList key={item.definition}>
                                            <ListItem py={3} borderBottom="1px solid"
                                                      borderColor="gray.600"><Text
                                                fontSize="lg">{item.definition}</Text>
                                                <List mt={1}>
                                                    {item.data.map(route => (
                                                        <ListItem key={route.href}>
                                                            {router.pathname === route.href &&
                                                                <ListIcon as={FiChevronRight}/>
                                                            }
                                                            <RouteLink
                                                                href={route.href}>
                                                                {route.title}
                                                            </RouteLink>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </ListItem>
                                        </UnorderedList>
                                    ))}
                                </DrawerBody>
                                <DrawerFooter>
                                    ASMVC - Framework for <b style={{marginLeft: 5}}>Joyers</b>.
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <Button bg="none" onClick={() => router.push("/docs/search")}><FiSearch/></Button>
                        <SwitchMode/>
                    </Flex>
                </Flex>
            </header>
            <Grid templateColumns={{base: "1fr", xl: "20% 1fr"}}>
                <GridItem display={{base: "none", xl: "block"}} borderRight="1px solid" borderColor="gray.300" my={3}>
                    <Accordion defaultIndex={index} allowToggle p={5}>
                        {routes.map(item => <AccordionLink key={item.definition} title={item.definition}
                                                           links={item.data}/>)}
                    </Accordion>
                </GridItem>
                <GridItem px={{base: 5, xl: 40}}>
                    <Box my={10}>
                        <Heading textAlign="center">{subTitle}</Heading>
                        <Navigator title={navigatorTitle} lists={navigations}/>
                    </Box>
                    <Box overflowY="hidden">
                        {children}
                    </Box>
                    <Flex mt={100} justifyContent="space-between">
                        {hasPrevious ? (
                            <Button maxW="50%" onClick={prevHandler} variant="outline" colorScheme="blue"
                                    alignItems="center"
                                    gap={3} px={7} py={10}
                                    rounded="lg">
                                {leftNavIcon}
                                <Text fontSize="lg"
                                      display={{
                                          base: "none",
                                          xl: "inline"
                                      }}>Previous: {indexedRoutes[currentIndex - 1].title}</Text>
                            </Button>
                        ) : <Box/>}
                        {hasNext ? (
                            <Button
                                maxW="50%"
                                onClick={nextHandler} variant="outline" colorScheme="blue" alignItems="center"
                                gap={3} px={7} py={10}
                                rounded="lg">
                                <Text fontSize="lg"
                                      display={{
                                          base: "none",
                                          xl: "inline"
                                      }}>Next: {indexedRoutes[currentIndex + 1].title}</Text>
                                {rightNavIcon}
                            </Button>
                        ) : <Box/>}
                    </Flex>
                </GridItem>
            </Grid>
            <Footer/>
        </>
        // </MainLayout>
    )
}