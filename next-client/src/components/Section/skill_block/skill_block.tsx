import styles from './skill_block.module.css'


interface SkillBlockProps {
    skillsBlock: SkillBlock
}


const SkillBlock = ({skillsBlock}: SkillBlockProps) => {

    return (
        <>
            <h1 className={styles.title}>{skillsBlock.Headline}</h1>
        </>
    )
}

export default SkillBlock