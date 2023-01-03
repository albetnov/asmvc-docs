import {Link, LinkProps} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface RouteLinkProps extends LinkProps {
    href: string;
    children: React.ReactNode;
}

export default function RouteLink({href, children, ...props}: RouteLinkProps) {
    return <Link href={href} as={NextLink} {...props}>{children}</Link>
}