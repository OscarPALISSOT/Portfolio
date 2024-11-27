import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import HeroBlockType from "@/types/hero_block";
import ExperienceBlockType from "@/types/experience_block";
import SkillBlockType from "@/types/skill_block";
import ContactBlockType from "@/types/contact_block";
import Mentions from "@/types/mentions";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

async function MentionsLegales ()  {
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

    const mentions = await client.request(
        readItems('mentions_legales', {
            fields: ['*', {}],
        })
    ) as unknown as Mentions;

    const links = [heroBlock.link, experienceBlock.link, skillBlock.link, contactBlock.link];
    const logo = heroBlock.logo;

    return (
        <>
            <div className={'bg-background px-8 md:px-24 2xl:px-64 h-fit snap-start'}>
                <NavbarMobile
                    links={links}
                    logo={logo}
                />
                <Navbar
                    links={links}
                    logo={logo}
                />

                <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-poppins font-extrabold text-fontColor mb-8 mt-14'}>Mentions légales</h1>
                <div
                    className={'mb-10 xl:mb-44 prose prose-h1:text-xl prose-h1:lg:text-2xl prose-h1:xl:text-4xl prose-h1:font-poppins prose-h1:font-extrabold prose-h1:text-fontColor prose-h1:mb-3 prose-h1:mt-10 prose-p:text-lg prose-p:lg:text-xl prose-p:text-fontColor prose-p:my-0 prose-a:cursor-pointer prose-a:text-md lg:text-lg prose-a:text-fontColor hover:prose-a:text-primary prose-a:transition-all hover:prose-a:decoration-0 prose-a:duration-150 prose-a:ease-in-out prose-a:underline prose-a:decoration-2 prose-a:decoration-primary'}
                    dangerouslySetInnerHTML={{ __html: mentions.mentions }}
                />
                <Footer links={links}/>
            </div>
        </>
    );
}

export default MentionsLegales;