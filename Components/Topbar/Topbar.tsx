import {
    Button,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerFooter, DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    UnorderedList, useColorMode,
    useDisclosure
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import {FiCompass, FiDatabase, FiExternalLink, FiMenu, FiMoon, FiSun} from "react-icons/fi";
import {useRef} from "react";
import MobileLink from "./MobileLink";
import Link from "next/link";

const links = [
    {
        link: "/docs",
        icon: <FiDatabase/>,
        text: "Documentation"
    },
    {
        link: "https://github.com/albetnov/asmvc",
        icon: <FiExternalLink/>,
        text: "Github"
    },
    {
        link: "/guides",
        icon: <FiCompass/>,
        text: "Guides"
    }
];

export default function Topbar() {
    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <header>
            <Flex justifyContent="space-around" shadow="base" alignItems="center">

                <Flex p={5} alignItems="center" gap={{base: 5, lg: 10}}>
                    <Heading fontSize={{base: "xl", lg: "4xl"}} fontWeight="bold">
                        <Link href="/">ASMVC</Link>
                    </Heading>
                    <UnorderedList display={{base: "none", lg: "flex"}} gap={{base: 3, lg: 7}}
                                   listStyleType="none">
                        {links.map((item, i) => (
                            <NavLink key={i} text={item.text} link={item.link} icon={item.icon}/>
                        ))}
                    </UnorderedList>
                </Flex>

                <Flex gap={5} alignItems="center">
                    <Button display={{base: "none", lg: "block"}} colorScheme="messenger" variant="outline">
                        Get Started
                    </Button>

                    <Button ref={btnRef} display={{base: "block", lg: "none"}} onClick={onOpen} bg="transparent"
                            rounded="full">
                        <FiMenu fontSize={27}/>
                    </Button>

                    <Button p={3} bg="transparent" rounded="full" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <FiMoon fontSize={20}/> : <FiSun fontSize={20}/>}
                    </Button>
                </Flex>
                <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody display="flex" flexDir="column" gap={3}>
                            {links.map((item, i) => (
                                <MobileLink key={i} url={item.link} icon={item.icon}>{item.text}</MobileLink>
                            ))}
                        </DrawerBody>
                        <DrawerFooter>
                            ASMVC - Framework for <b style={{marginLeft: 5}}>Joyers</b>.
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </Flex>
        </header>
    );
}
