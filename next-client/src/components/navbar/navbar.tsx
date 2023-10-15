"use client";

import React, {useEffect, useState} from "react";

import styles from './navbar.module.css';
import Image from "next/image";
import useScroll from "@/hooks/useScrool";
import navTo from "@/modules/navTo";
import Link from "next/link";
import useDeviceSize from "@/hooks/useDeviceSize";

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
    const [width, height] = useDeviceSize();

    useEffect(() => {
        if (scrollY > 0) {
            setHeaderBorderClass(`${styles.header__border} ${styles.header__border__active}`);
            setHeader__class(`${styles.header} ${styles.header__scroll}`)
        } else {
            setHeaderBorderClass(styles.header__border);
            setHeader__class(styles.header)
        }
    }, [scrollY]);

    const toggleMenu = () => {
        setHamburger__toggle__class(hamburger__toggle__class === styles.hamburger__toggle ? `${styles.hamburger__toggle__expanded} ${styles.hamburger__toggle}` : styles.hamburger__toggle)
        setNav_menu__class(nav_menu__class === styles.nav_menu ? `${styles.nav_menu__expanded} ${styles.nav_menu}` : styles.nav_menu)
        setHeaderBorderClass(styles.header__border);
        document.body.classList.toggle(styles.noScroll);
    }

    return (
        <>
            <nav className={header__class}>

                <div className={styles.header__items}>

                    <div className={styles.header__left}>
                        <Link href="/">
                            <Image className={styles.header__logo}
                                   src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={48}
                                   height={48}/>
                        </Link>
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
                                        <Link
                                            href={'/' + '#' + link}
                                            className={styles.nav__link}
                                            onClick={(e) => {
                                                navTo(e, link)
                                                width < 992 && toggleMenu()
                                            }}
                                        >
                                            {link}
                                        </Link>
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
