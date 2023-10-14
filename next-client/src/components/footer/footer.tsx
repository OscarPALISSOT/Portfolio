"use client";

import React from "react";
import styles from './footer.module.css';

interface FooterProps {
    links: string[];
}

export default function Footer({links}: FooterProps) {

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
