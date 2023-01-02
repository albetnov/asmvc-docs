import {ListItem} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface NavLinkProps {
    text: string;
    link: string;
    icon: React.ReactNode
}

export default function NavLink({text, link, icon}: NavLinkProps) {
    return (
        <ListItem
            _hover={{
                textDecoration: "underline",
                cursor: "pointer",
            }}
            fontSize="lg"
            display="flex"
            alignItems="center"
            gap={3}
        >
            <Link href={link}>{text}</Link>
            {icon}
        </ListItem>
    );
}
