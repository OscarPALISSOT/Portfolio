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
    const [headerBorderClass, setHeaderBorderClass] = useState<string>(styles.header__border);
    const [hamburger__toggle__class, setHamburger__toggle__class] = useState<string>(styles.hamburger__toggle);
    const [nav_menu__class, setNav_menu__class] = useState<string>(styles.nav_menu);
    const [header__class, setHeader__class] = useState<string>(styles.header);

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
            setLogo(homePageContent.translations[0].Logo)
        }
    }, [homePageContent])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderBorderClass(`${styles.header__border} ${styles.header__border__active}`);
                setHeader__class(`${styles.header} ${styles.header__scroll}`)
            } else {
                setHeaderBorderClass(styles.header__border);
                setHeader__class(styles.header)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setHamburger__toggle__class(hamburger__toggle__class === styles.hamburger__toggle ? `${styles.hamburger__toggle__expanded} ${styles.hamburger__toggle}` : styles.hamburger__toggle)
        setNav_menu__class(nav_menu__class === styles.nav_menu ? `${styles.nav_menu__expanded} ${styles.nav_menu}` : styles.nav_menu)
        document.body.classList.toggle(styles.noScroll);
    }

    return (
        <>
            <nav className={header__class}>

                <div className={styles.header__items}>

                    <div className={styles.header__left}>
                        <a href="/">
                            <img className={styles.header__logo}
                                 src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo"/>
                        </a>
                        <h1 className={styles.header__title}>Oscar PALISSOT</h1>
                    </div>

                    <div className={hamburger__toggle__class} onClick={toggleMenu}>
                        <div className={styles.hamburger__btn}></div>
                    </div>


                    <div className={nav_menu__class}>
                        <ul className={styles.nav__list}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className={styles.nav__item}>
                                        <a href={link} className={styles.nav__link}>
                                            {link}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

                <div className={headerBorderClass}></div>

            </nav>
        </>
    )
}
