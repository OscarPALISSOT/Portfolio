import styles from './experience_block.module.css'
import ExperienceBlockType from "@/types/experience_block";

interface ExperienceBlockProps {
    experienceBlock: ExperienceBlockType;
}
const ExperienceBlock = ({experienceBlock}: ExperienceBlockProps) => {
    return (
        <>
            <h1 className={styles.title}>{experienceBlock.Headline}</h1>
        </>
    )
}

export default ExperienceBlock