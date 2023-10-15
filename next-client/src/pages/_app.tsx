import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import '@/styles/variable.css'
import Navbar from "@/components/navbar/navbar";
import {createDirectus} from "@directus/sdk";
import {rest} from "@directus/sdk/rest";
import Footer from "@/components/footer/footer";
import React from "react";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());



export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Navbar
                links={pageProps.links}
                logo={pageProps.logo}
            />
            <Component {...pageProps} />

            <Footer links={pageProps.links}/>
        </>
    )
}