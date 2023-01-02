import {AccordionButton, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";
import NavLink from "./NavLink";

interface AccordionLinks {
    href: string;
    title: string;
}

interface AccordionLinkProps {
    title: string;
    links: AccordionLinks[];
}

export default function AccordionLink({title, links}: AccordionLinkProps) {
    return (<AccordionItem border="none" rounded="lg">
        <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    {title}
                </Box>
            </AccordionButton>
        </h2>
        <AccordionPanel>
            {links.map(item => <NavLink href={item.href} key={item.href}>{item.title}</NavLink>)}
        </AccordionPanel>
    </AccordionItem>)
}