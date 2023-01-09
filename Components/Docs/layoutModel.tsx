import {PropsWithChildren, useEffect, useState} from "react";
import {NavigatorList} from "./Navigator";
import {useRouter} from "next/router";
import {useBreakpoint, useDisclosure} from "@chakra-ui/react";
import {FiArrowLeft, FiArrowRight, FiChevronsLeft, FiChevronsRight} from "react-icons/fi";

export interface DocsLayoutProps extends PropsWithChildren {
    title?: string;
    desc?: string;
    subTitle: string;
    navigations: NavigatorList[];
    navigatorTitle: string;
}

interface RouteSchema {
    title: string;
    href: string;
}

interface RoutesSchema {
    definition: string;
    identifier: string[] | string;
    data: RouteSchema[]
}

const routes: RoutesSchema[] = [
    {
        definition: "Getting Started", identifier: ["/docs", "/docs/starting/new"], data: [
            {title: "Installation", href: "/docs"},
            {title: "What's new ?", href: "/docs/starting/new"},
            {title: "QuickStart: Hello World App", href: "/docs/starting/quickstart"},
            {title: "The Environment", href: "/docs/starting/environment"},
        ]
    },
    {
        definition: "Jump to Basics", identifier: "/docs/basics", data: [
            {title: "The CLI", href: "/docs/basics/commands"},
            {title: "Configurations", href: "/docs/basics/configs"},
            {title: "Routing", href: "/docs/basics/routings"},
            {title: "Logic or Controllers", href: "/docs/basics/controller"},
            {title: "Bridge of Data (Model)", href: "/docs/basics/models"},
            {title: "The Visual (Views)", href: "/docs/basics/views"}
        ]
    }
];

const indexedRoutes = routes.map(item => item.data).flat();

function useLayoutModel() {
    const router = useRouter();
    const determineRoute = () => {
        let result = 0;
        routes.forEach((route, i) => {
            if (Array.isArray(route.identifier)) {
                route.identifier.forEach(item => {
                    if (router.pathname.startsWith(item)) {
                        result = i;
                    }
                })
            } else if (router.pathname.startsWith(route.identifier)) {
                result = i;
            }
        })

        return result;
    }

    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        const index = indexedRoutes.findIndex(item => item.href === router.pathname);
        if (index > 0) {
            setHasPrevious(true);
        }

        if (index >= indexedRoutes.length - 1) {
            setHasNext(false);
        }

        setCurrentIndex(index);
    }, [router.pathname]);

    const index = determineRoute();

    const prevHandler = async () => {
        await router.push(indexedRoutes[currentIndex - 1].href);
    }

    const nextHandler = async () => {
        await router.push(indexedRoutes[currentIndex + 1].href);
    }

    const breakpoint = useBreakpoint();

    let leftNavIcon = <FiChevronsLeft fontSize={40}/>
    let rightNavIcon = <FiChevronsRight fontSize={40}/>

    const mobileBreakpoints = ['base', 'sm', 'lg'];

    if (mobileBreakpoints.includes(breakpoint)) {
        leftNavIcon = <FiArrowLeft fontSize={40}/>
        rightNavIcon = <FiArrowRight fontSize={40}/>
    }

    return {
        prevHandler,
        nextHandler,
        index,
        currentIndex,
        hasPrevious,
        hasNext,
        isOpen,
        onOpen,
        onClose,
        router,
        leftNavIcon,
        rightNavIcon
    };
}

export {useLayoutModel, indexedRoutes, routes};