"use client";
import {createDirectus, readItems} from '@directus/sdk';
import {rest} from '@directus/sdk/rest';
import React, {useEffect, useState} from "react";
import styles from './footer.module.css';

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default function Footer() {

    const [homePageContent, setHomePageContent] = useState<HomepageContent>()
    const [links, setLinks] = useState<string[]>([])


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
        if (homePageContent) {
            setLinks(homePageContent.translations[0].Sections.map(section => section.item.Link))
        }
    }, [homePageContent])

    //scrollto to add

    return (
        <>
            <footer className={styles.footer}>
                <ul className={styles.sitemap__list}>
                    {links.map(link => {
                        return (
                            <li key={link} className={styles.sitemap__item}>
                                <a>{link}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className={styles.copyright}>
                    <p>Oscar PALISSOT © 2023</p>
                </div>
            </footer>
        </>
    )
}
