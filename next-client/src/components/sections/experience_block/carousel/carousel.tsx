import Experience from "@/types/experience";
import Card from "@/components/sections/experience_block/carousel/card/card";

type CarouselProps = {
    experience: Experience[];
}

const Carousel = ({experience}: CarouselProps) => {
    return (
        <>
            <div>
                {experience.map((experience) => (
                        <div key={experience.id}>
                            <Card experience={experience} />
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default Carousel