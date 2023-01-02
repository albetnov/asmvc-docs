import {PropsWithChildren} from "react";
import Footer from "./Topbar/Footer";
import Topbar from "./Topbar/Topbar";
import Head from "next/head";

interface LayoutProps extends PropsWithChildren {
    title: string;
    desc?: string;
}

export default function Layout({title, desc, children}: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc ? desc : "A documentation for ASMVC"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Topbar/>
            {children}
            <Footer/>
        </>
    );
}
