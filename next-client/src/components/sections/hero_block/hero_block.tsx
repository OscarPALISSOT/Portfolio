import React from "react";
import styles from './hero_block.module.css';
import HeroBlock from "@/types/hero_block";


interface HeroBlockProps {
    heroBlock: HeroBlock;
}

export default function HeroBlock({heroBlock}: HeroBlockProps) {

    return (
        <>
            <div className={styles.hero_block}>
                <h1 className={styles.title}>{heroBlock.headline}</h1>
                <h2 className={styles.subtitle}>{heroBlock.sub_headline}</h2>
                <div className={styles.hero__middle__content}>
                    <div className={styles.image}>
                        <img className={styles.image} src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.image} alt="Oscar PALISSOT"/>
                    </div>
                    <div>
                        <p className={styles.text}>{heroBlock.description}</p>
                        <div className={styles.resumeBtnContainer}>
                            <a
                                className={styles.resumeBtn}
                                href={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.cv}
                                download
                                target="_blank"
                            >
                                {heroBlock.cv_button_label}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
