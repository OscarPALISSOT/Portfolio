import styles from './experience_block.module.css'
import ExperienceBlockType from "@/types/experience_block";
import Carousel from "@/components/sections/experience_block/carousel/carousel";

interface ExperienceBlockProps {
    experienceBlock: ExperienceBlockType;
}
const ExperienceBlock = ({experienceBlock}: ExperienceBlockProps) => {
    return (
        <>
            <h1 className={styles.title}>{experienceBlock.Headline}</h1>
            <Carousel />
        </>
    )
}

export default ExperienceBlock