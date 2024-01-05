import Experience from "@/types/experience";
import Card from "@/components/sections/experience_block/carousel/card";
import {useEffect, useState} from "react";
import useDeviceSize from "@/hooks/useDeviceSize";
import CarrouselBtn from "@/components/sections/experience_block/carousel/carrouselBtn";

type CarouselProps = {
    experience: Experience[];
}

const Carousel = ({experience}: CarouselProps) => {

    const [slidesVisible, setSlidesVisible] = useState(3)
    const [ratio, setRatio] = useState(experience.length / slidesVisible)

    const [width] = useDeviceSize()


    useEffect(() => {
        switch (true) {
            case width < 640:
                setSlidesVisible(1)
                break
            case width < 1440:
                setSlidesVisible(2)
                break
            default:
                setSlidesVisible(3)
                break
        }
    }, [width]);

    useEffect(() => {
        setRatio(experience.length / slidesVisible)
    }, [slidesVisible]);

    return (
        <>
            <div className={'w-full py-6 relative'}>
                <div className={'flex flex-row items-center'} style={{width: (ratio * 100) + "%"}}>
                    {experience.map((experience) => (
                        <div
                            key={experience.id}
                            className={'flex flex-row items-center justify-center'}
                            style={{width: ((100 / slidesVisible) / ratio) + "%"}}>
                            <Card experience={experience}/>
                        </div>
                    ))}
                </div>
                <CarrouselBtn direction={"left"} onClick={() => {}}/>
                <CarrouselBtn direction={"right"} onClick={() => {}}/>
            </div>
        </>
    )
}

export default Carousel