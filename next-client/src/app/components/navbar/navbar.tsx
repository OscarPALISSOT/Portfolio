"use client";
import {createDirectus, readItems} from '@directus/sdk';
import {rest} from '@directus/sdk/rest';
import {useEffect, useState} from "react";

import styles from './navbar.module.css'

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());


export default function Navbar() {

    const [links, setLinks] = useState<string[]>([])
    const [homePageContent, setHomePageContent] = useState<HomepageContent>()
    const [logo, setLogo] = useState<string>('')
    const [headerBorderClass, setHeaderBorderClass] = useState<string>('');
    const [hamburger__toggle__class, setHamburger__toggle__class] = useState<string>(styles.hamburger__toggle);

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

    useEffect(() => {
        if (homePageContent) {
            setLinks(homePageContent.translations[0].Sections.map(section => section.item.Link))
            setLogo(homePageContent.translations[0].Logo)
        }
    }, [homePageContent])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderBorderClass(styles.header__border__active);
            } else {
                setHeaderBorderClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setHamburger__toggle__class(hamburger__toggle__class === styles.hamburger__toggle ? `${styles.hamburger__toggle__expanded} ${styles.hamburger__toggle}` : styles.hamburger__toggle)
    }

    return (
        <>
            <nav className={styles.header}>

                <div className={styles.header__items}>

                    <a href="/" >
                        <img className={styles.header__logo} src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo"/>
                    </a>

                    <div className={hamburger__toggle__class} onClick={toggleMenu}>
                        <div className={styles.hamburger__btn}></div>
                    </div>

                    <div className={styles.nav_menu}>
                        <ul className="nav__list">
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className="nav__item">
                                        <a href={link} className="nav__link">
                                            {link}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className={`${styles.header__border} ${headerBorderClass}`}></div>
                </div>


            </nav>
        </>
    )
}
