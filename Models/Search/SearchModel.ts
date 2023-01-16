import {FormEvent, useEffect, useRef} from "react";
import {useRouter} from "next/router";

interface ServerItemResult {
    file: string;
    text: string;
}

export interface SearchResult {
    items: ServerItemResult[];
}

export default function SearchModel() {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (searchRef.current) {
            if (router.query.query) {
                searchRef.current.value = router.query.query as string;
            }
        }
    }, [router.query]);

    const searchItem = async (e: FormEvent) => {
        e.preventDefault();

        await router.push(`/docs/search?query=${searchRef.current?.value}`);
    };

    const navigateToFile = async (file: string) => {
        await router.push(file);
    }

    return {searchItem, searchRef, navigateToFile};
}

export const parseTitle = (link: string) => {
    let currentItem = link;

    if (link.includes("/")) {
        const paths = link.split("/");
        currentItem = paths[paths.length - 1];
    }

    return currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
}