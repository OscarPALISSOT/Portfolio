import React from "react";
import styles from './hero_block.module.css';


interface HeroBlockProps {
    heroBlock: HeroBlock;
}

export default function HeroBlock({heroBlock}: HeroBlockProps) {

    return (
        <>
            <div className={styles.hero_block}>
                <h1 className={styles.title}>{heroBlock.Headline}</h1>
                <h2 className={styles.subtitle}>{heroBlock.SubTitle}</h2>
                <div className={styles.hero__middle__content}>
                    <div className={styles.image}>
                        <img className={styles.image} src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.Image} alt="picture of me"/>
                    </div>
                    <div>
                        <p className={styles.text}>{heroBlock.Content}</p>
                        <div className={styles.resumeBtnContainer}>
                            <a
                                className={styles.resumeBtn}
                                href={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.Resume}
                                download
                                target="_blank"
                            >
                                {heroBlock.ResumeBtn}
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
