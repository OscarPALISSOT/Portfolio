import "@/styles/globals.css";
import "@/styles/variable.css";
import {Poppins} from 'next/font/google';
import {Metadata} from "next";
import {ReactNode} from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import HeroBlockType from "@/types/hero_block";
import ExperienceBlockType from "@/types/experience_block";
import SkillBlockType from "@/types/skill_block";
import ContactBlockType from "@/types/contact_block";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--poppins'
})

export const metadata: Metadata = {
    title: 'Oscar PALISSOT | Portfolio data engineer',
}

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {

    const heroBlock = await client.request(
        readItems('hero_block', {
            fields: ['*', {}],
        })
    ) as unknown as HeroBlockType;

    const experienceBlock = await client.request(
        readItems('experience_block', {
            fields: ['link', {}],
        })
    ) as unknown as ExperienceBlockType;

    const skillBlock = await client.request(
        readItems('skill_block', {
            fields: ['link', {}],
        })
    ) as unknown as SkillBlockType;

    const contactBlock = await client.request(
        readItems('contact_block', {
            fields: ['link', {}],
        })
    ) as unknown as ContactBlockType;

    const links = [heroBlock.link, experienceBlock.link, skillBlock.link, contactBlock.link];
    const logo = heroBlock.logo;

    return (
        <html lang="en" className={`${poppins.variable}`}>
        <body>
        <div className={'bg-background px-8 md:px-24 2xl:px-64 h-fit min-h-[100vh]'}>
            <NavbarMobile
                links={links}
                logo={logo}
            />
            <Navbar
                links={links}
                logo={logo}
            />
            {children}
            <Footer links={links}/>
        </div>
        </body>
        </html>
);
}
