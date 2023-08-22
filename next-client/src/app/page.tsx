'use client';

import Navbar from "@/app/components/navbar/navbar";
import {useEffect, useState} from "react";
import {createDirectus, readItems} from "@directus/sdk";
import {rest} from '@directus/sdk/rest';
import Section from "@/app/components/Section/section";
import Footer from "@/app/components/footer/footer";
import HeroBlock from "@/app/components/Section/hero_block/hero_block";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());
export default function Home() {

    const [homePageContent, setHomePageContent] = useState<HomepageContent>()
    const [hero_block, setHero_block] = useState<HeroBlock>()

    useEffect(() => {
        client.request(
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
        ).then(data => {
            setHomePageContent(data as unknown as HomepageContent)
        })
    }, [])

    useEffect(() => {
        setHero_block(homePageContent?.translations[0].Sections[0].item as unknown as HeroBlock)
    }, [homePageContent])

    return (
        <>
            <Navbar/>

            {hero_block &&
                <Section id={hero_block.Link}>
                    <HeroBlock
                        Content={hero_block.Content}
                        Headline={hero_block.Headline}
                        Image={hero_block.Image}
                        SubTitle={hero_block.SubTitle}
                    />
                </Section>
            }
            <Footer/>
        </>
    )
}
