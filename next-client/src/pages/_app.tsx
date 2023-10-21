import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import '@/styles/variable.css'
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import React from "react";
import Head from "next/head";




export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Oscar PALISSOT | Portfolio</title>
            </Head>
            <Navbar
                links={pageProps.links}
                logo={pageProps.logo}
            />
            <Component {...pageProps} />

            <Footer links={pageProps.links}/>
        </>
    )
}