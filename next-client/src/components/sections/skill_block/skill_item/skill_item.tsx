import Skills from "@/types/skills";
import styles from './skill_item.module.css'
import Image from "next/image";
import React from "react";

interface SkillItemProps {
    skill: Skills
}


const skillItem = ({skill}: SkillItemProps) => {
    return (
        <>
            <div className={styles.skill_item}>
                <div className={styles.icon}>
                    <Image className={styles.header__logo}
                           src={process.env.NEXT_PUBLIC_ASSETS_URL + skill.Icon + '?key=skill'} alt={skill.Name} width={48}
                           height={48}/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{skill.Name}</h1>
                    <p className={styles.description}>{skill.Description}</p>
                </div>
            </div>
        </>
    )
}

export default skillItem