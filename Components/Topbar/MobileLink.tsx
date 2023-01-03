import {Link, useColorMode} from "@chakra-ui/react";
import {PropsWithChildren} from "react";
import RouteLink from "../RouteLink";

interface MobileLinkProps extends PropsWithChildren {
    url: string;
    icon: React.ReactNode;
}

export default function MobileLink({url, children, icon}: MobileLinkProps) {
    const {colorMode} = useColorMode();

    return (
        <RouteLink
            bg={colorMode === "light" ? "gray.200" : "gray.600"} display="flex" alignItems="center" gap={3} p={3}
            rounded="lg"
            _active={{opacity: 0.7}} w="full"
            href={url}>{children} {icon}</RouteLink>
    );
}