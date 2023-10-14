'use client';

import {createDirectus, readItems} from "@directus/sdk";
import {rest} from '@directus/sdk/rest';
import Section from "@/components/Section/section";
import HeroBlock from "@/components/Section/hero_block/hero_block";
import Footer from "@/components/footer/footer";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    heroBlock: HeroBlock;
    links: string[];
    logo: string;
}

const Home = ({heroBlock}: HomeProps) => {

    return (
        <>
            {heroBlock &&
                <Section id={heroBlock.Link}>
                    <HeroBlock
                        Content={heroBlock.Content}
                        Headline={heroBlock.Headline}
                        Image={heroBlock.Image}
                        SubTitle={heroBlock.SubTitle}
                    />
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
            links: (homePageContent as unknown as HomepageContent).translations[0].Sections.map(section => section.item.Link),
            logo: (homePageContent as unknown as HomepageContent).translations[0].Logo
        },
    };
}


export default Home