import styles from './skill_block.module.css'
import SkillBlockType from "@/types/skill_block";
import {useEffect, useState} from "react";
import Skills from "@/types/skills";
import SkillItem from "@/components/sections/skill_block/skill_item/skill_item";


interface SkillBlockProps {
    skillsBlock: SkillBlockType
}


const SkillBlock = ({skillsBlock}: SkillBlockProps) => {

    const [skills, setSkills] = useState<Skills[]>([])

    useEffect(() => {
        setSkills(skillsBlock.Skills.map(skill => skill.skill_id) as unknown as Skills[])
    }, [skillsBlock]);

    return (
        <>
            <h1 className={styles.title}>{skillsBlock.Headline}</h1>
            <div className={styles.skills_container}>
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill}/>
                ))}
            </div>
        </>
    )
}

export default SkillBlock