import {Link, List, ListItem} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import {useRouter} from "next/router";
import RouteLink from "../RouteLink";

interface NavLinkProps extends PropsWithChildren {
    href: string;
}

export default function NavLink({href, children}: NavLinkProps) {
    const router = useRouter();

    if (router.pathname === href) {
        return <List p={3} rounded="lg" border="2px solid" borderColor="blue.300">
            <ListItem><RouteLink display="block" _hover={{textDecoration: "none"}} w="full"
                                 href={href}>{children}</RouteLink></ListItem>
        </List>
    }

    return <List p={3} rounded="lg">
        <ListItem><RouteLink w="full" display="block" _hover={{textDecoration: "none"}}
                             href={href}>{children}</RouteLink></ListItem>
    </List>
}