import React from "react";
import styles from './hero_block.module.css';


interface HeroBlockProps {
    Content: string;
    Headline: string;
    Image: string;
    SubTitle: string;
}

export default function HeroBlock({Content, Headline, Image, SubTitle}: HeroBlockProps) {
    return (
        <>
            <div className={styles.hero_block}>
                <h1 className={styles.title}>{Headline}</h1>
                <h2 className={styles.subtitle}>{SubTitle}</h2>
                <div className={styles.hero__middle__content}>
                    <div className={styles.image}>
                        <img className={styles.image} src={process.env.NEXT_PUBLIC_ASSETS_URL + Image} alt="picture of me"/>
                    </div>
                    <p className={styles.text}>{Content}</p>
                </div>
                <a>
                    resume
                </a>
            </div>

        </>
    )
}
