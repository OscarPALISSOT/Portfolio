'use client';

import Navbar from "@/app/components/navbar/navbar";
import {useEffect, useState} from "react";
import {createDirectus, readItems} from "@directus/sdk";
import {rest} from '@directus/sdk/rest';

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());
export default function Home() {

    const [homePageContent, setHomePageContent] = useState<HomepageContent>()

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
        ).then(data  => {
            setHomePageContent(data as unknown as HomepageContent)
        })
    }, [])
    return (
        <>
            <Navbar/>

            <p>Home page</p>
            {homePageContent && homePageContent.translations[0].Sections.map(section => {
                return (
                    <div key={section.id}>
                        <p>{section.item.Headline}</p>
                        <p>{section.item.Content}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                )
            })}

        </>
    )
}
