import {List, ListItem} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

interface NavLinkProps extends PropsWithChildren {
    isActive: boolean;
}

export default function NavLink({isActive, children}: NavLinkProps) {
    if (isActive) {
        return <List p={3} rounded="lg" border="2px solid" borderColor="blue.300">
            <ListItem>{children}</ListItem>
        </List>
    }

    return <List p={3} rounded="lg">
        <ListItem>{children}</ListItem>
    </List>
}