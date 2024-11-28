import ExperienceBlockType from "@/types/experience_block";
import Carousel from "@/components/experienceBlock/Carrousel/carousel";

interface ExperienceBlockProps {
    experienceBlock: ExperienceBlockType;
}

const ExperienceBlock = ({ experienceBlock }:ExperienceBlockProps) => {
    return (
        <div className={"mb-12 md:-mx-14 lg:mx-0"}>
            <h1 className={"text-4xl lg:text-5xl font-semibold mb-3 lg:mb-12"}>{experienceBlock.headline}</h1>
            <Carousel experience={experienceBlock.experiences} />
        </div>
    )
}

export default ExperienceBlock;