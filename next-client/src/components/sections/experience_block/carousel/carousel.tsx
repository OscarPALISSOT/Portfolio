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
    const [currentItem, setCurrentItem] = useState(0)
    const [width] = useDeviceSize()

    const goToItem = (index: number) => {
        if (index < 0) {
            currentItem == 0 ? setCurrentItem(experience.length - slidesVisible) : setCurrentItem(0);
        } else if (index >= experience.length || (experience[currentItem + slidesVisible] === undefined && index > currentItem)) {
            setCurrentItem(0);
        } else {
            setCurrentItem(index)
        }
    }

    useEffect(() => {
        document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / experience.length}%, 0, 0)`
    }, [currentItem]);


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
        console.log('slides', slidesVisible)
    }, [width]);

    useEffect(() => {
        setRatio(experience.length / slidesVisible)
    }, [slidesVisible]);

    return (
        <>
            <div className={'relative px-8'}>
                <div className={'w-full py-6 overflow-hidden'}>
                    <div id={'carrousel__container'} className={'flex flex-row items-center transition duration-300'}
                         style={{width: (ratio * 100) + "%"}}>
                        {experience.map((experience) => (
                            <div
                                key={experience.id}
                                className={'flex flex-row items-center justify-center'}
                                style={{width: ((100 / slidesVisible) / ratio) + "%"}}>
                                <Card experience={experience}/>
                            </div>
                        ))}
                    </div>
                </div>
                <CarrouselBtn direction={"left"} onClick={() => goToItem(currentItem - slidesVisible)}/>
                <CarrouselBtn direction={"right"} onClick={() => goToItem(currentItem + slidesVisible)}/>
            </div>
        </>
    )
}

export default Carousel