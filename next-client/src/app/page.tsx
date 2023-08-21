'use client';

import Navbar from "@/app/components/navbar/navbar";
import {useEffect, useState} from "react";
import {createDirectus, readItems} from "@directus/sdk";
import {rest} from '@directus/sdk/rest';
import Section from "@/app/components/Section/section";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());
export default function Home() {

    const [homePageContent, setHomePageContent] = useState<HomepageContent>()
    const [sections, setSections] = useState<Section[]>()

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
            setSections((data as unknown as HomepageContent).translations[0].Sections)
        })
    }, [])
    return (
        <>
            <Navbar/>

            {sections?.map(section => {
                return (
                    <Section key={section.id} id={section.item.Link}>
                        <h1>{section.item.Headline}</h1>
                    </Section>
                )
            })}

        </>
    )
}
