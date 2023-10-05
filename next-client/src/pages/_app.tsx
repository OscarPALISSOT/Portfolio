import type {AppProps} from 'next/app'
import '../Styles/globals.css'
import '../Styles/variable.css'
import Navbar from "@/components/navbar/navbar";
import {createDirectus, readItems} from "@directus/sdk";
import {rest} from "@directus/sdk/rest";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());



export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Navbar
                links={pageProps.links}
                logo={pageProps.logo}
            />
            <Component {...pageProps} />
        </>
    )
}