import {Link, List, ListItem} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import {useRouter} from "next/router";
import NextLink from "next/link";

interface NavLinkProps extends PropsWithChildren {
    href: string;
}

export default function NavLink({href, children}: NavLinkProps) {
    const router = useRouter();

    if (router.pathname === href) {
        return <List p={3} rounded="lg" border="2px solid" borderColor="blue.300">
            <ListItem><Link display="block" as={NextLink} _hover={{textDecoration: "none"}} w="full"
                            href={href}>{children}</Link></ListItem>
        </List>
    }

    return <List p={3} rounded="lg">
        <ListItem><Link w="full" display="block" _hover={{textDecoration: "none"}} as={NextLink}
                        href={href}>{children}</Link></ListItem>
    </List>
}