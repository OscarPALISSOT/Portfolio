"use client";

import React, {useEffect, useState} from "react";

import styles from './navbar.module.css';
import Image from "next/image";
import useScroll from "@/hooks/useScrool";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    const [headerBorderClass, setHeaderBorderClass] = useState<string>(styles.header__border);
    const [hamburger__toggle__class, setHamburger__toggle__class] = useState<string>(styles.hamburger__toggle);
    const [nav_menu__class, setNav_menu__class] = useState<string>(styles.nav_menu);
    const [header__class, setHeader__class] = useState<string>(styles.header);

    const scrollY = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 0) {
                setHeaderBorderClass(`${styles.header__border} ${styles.header__border__active}`);
                setHeader__class(`${styles.header} ${styles.header__scroll}`)
            } else {
                setHeaderBorderClass(styles.header__border);
                setHeader__class(styles.header)
            }
        };
    }, []);

    const toggleMenu = () => {
        setHamburger__toggle__class(hamburger__toggle__class === styles.hamburger__toggle ? `${styles.hamburger__toggle__expanded} ${styles.hamburger__toggle}` : styles.hamburger__toggle)
        setNav_menu__class(nav_menu__class === styles.nav_menu ? `${styles.nav_menu__expanded} ${styles.nav_menu}` : styles.nav_menu)
        setHeaderBorderClass(styles.header__border);
        document.body.classList.toggle(styles.noScroll);
    }

    const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        let url = new URL((e.target as HTMLAnchorElement).href);
        console.log(document.URL);
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -96;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }


    }

    return (
        <>
            <nav className={header__class}>

                <div className={styles.header__items}>

                    <div className={styles.header__left}>
                        <a href="/">
                            <Image className={styles.header__logo}
                                 src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={48} height={48}/>
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
                                        <a href={'/' + '#' + link} className={styles.nav__link} onClick={(e) => scrollToSection(e, link)}>
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

export default Navbar;
