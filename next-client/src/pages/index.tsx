'use client';

import {createDirectus, readItems} from "@directus/sdk";
import {rest} from '@directus/sdk/rest';
import Section from "@/components/Section/section";
import HeroBlock from "@/components/Section/hero_block/hero_block";
import React from "react";
import SkillBlock from "@/components/Section/skill_block/skill_block";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    heroBlock: HeroBlock;
    skillsBlock: SkillBlock;
    links: string[];
    logo: string;
}

const Home = ({heroBlock, skillsBlock}: HomeProps) => {

    return (
        <>
            {heroBlock &&
                <Section id={heroBlock.Link}>
                    <HeroBlock heroBlock={heroBlock}/>
                </Section>
            }
            {skillsBlock &&
                <Section id={skillsBlock.Link}>
                    <SkillBlock skillsBlock={skillsBlock}/>
                </Section>
            }
        </>
    )
}

export async function getServerSideProps() {

    const homePageContent = await client.request(
        readItems('homepage_content', {
            deep: {
                translations: {
                    _filter: {
                        languages_code: {_eq: 'fr-FR'},
                    },
                },
            },
            fields: ['*', {
                translations: ['*', {
                    Sections: ['*', {
                        item: ['*']
                    }]
                }]
            }],
        })
    )

    return {
        props: {
            heroBlock: (homePageContent as unknown as HomepageContent).translations[0].Sections[0].item as unknown as HeroBlock,
            skillsBlock: (homePageContent as unknown as HomepageContent).translations[0].Sections[1].item as unknown as SkillBlock,
            links: (homePageContent as unknown as HomepageContent).translations[0].Sections.map(section => section.item.Link),
            logo: (homePageContent as unknown as HomepageContent).translations[0].Logo
        },
    };
}


export default Home