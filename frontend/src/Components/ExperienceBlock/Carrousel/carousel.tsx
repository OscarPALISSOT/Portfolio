'use client';

import Experience from "@/types/experience";
import React, {useEffect, useState} from "react";
import CarrouselBtn from "@/Components/ExperienceBlock/Carrousel/carrouselBtn";
import Card from "@/Components/ExperienceBlock/card";
import useDeviceSize from "@/hooks/useDeviceSize";
import CarrouselPagination from "@/Components/ExperienceBlock/Carrousel/carrouselPagination";

type CarouselProps = {
    experience: Experience[];
}

const Carousel = ({experience}: CarouselProps) => {

    const [slidesVisible, setSlidesVisible] = useState(3)
    const [ratio, setRatio] = useState(experience.length / slidesVisible)
    const [currentItem, setCurrentItem] = useState(0)
    const [width] = useDeviceSize()
    const [startTouchX, setStartTouchX] = useState(0);
    const [isTouching, setIsTouching] = useState(false);

    const goToItem = (index: number) => {
        if (index < 0) {
            currentItem == 0 ? setCurrentItem(experience.length - slidesVisible) : setCurrentItem(0);
        } else if (index >= experience.length - 1 || (experience[currentItem + slidesVisible] === undefined && index > currentItem)) {
            currentItem == experience.length - slidesVisible ? setCurrentItem(0) : setCurrentItem(experience.length - slidesVisible);
        } else {
            setCurrentItem(index)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            !isTouching &&
            goToItem(currentItem + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentItem, isTouching, goToItem]);

    useEffect(() => {
        document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / experience.length}%, 0, 0)`
    }, [currentItem]);

    useEffect(() => {
        if (isTouching) {
            document.getElementById('carrousel__container')!.style.transition = 'none';
        } else {
            document.getElementById('carrousel__container')!.style.transition = 'transform 500ms ease-in-out';
        }
    }, [isTouching]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsTouching(true);
        setStartTouchX(e.touches[0].clientX);
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentTouchX = e.touches[0].clientX;
        const touchDifference = startTouchX - currentTouchX;
        const swipeThreshold = document.body.clientWidth / 4;

        if (touchDifference > swipeThreshold || touchDifference < -swipeThreshold) {
            return;
        }

        if (currentItem === 0 && touchDifference < 0) {
            return;
        } else if (currentItem === experience.length - 1 && touchDifference > 0) {
            return;
        }

        const currentTranslateX = -currentItem * document.getElementById('carrousel__container')!.clientWidth / experience.length;

        document.getElementById('carrousel__container')!.style.transform = `translateX(${currentTranslateX - touchDifference}px)`;
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endTouchX = e.changedTouches[0].clientX;
        const touchDifference = startTouchX - endTouchX;
        const swipeThreshold = document.body.clientWidth / 4;

        if (currentItem === 0 && touchDifference < 0) {
            return;
        } else if (currentItem === experience.length - 1 && touchDifference > 0) {
            return;
        }

        if (touchDifference > swipeThreshold) {
            setIsTouching(false);
            goToItem(currentItem + slidesVisible);
        } else if (touchDifference < -swipeThreshold) {
            setIsTouching(false);
            goToItem(currentItem - slidesVisible);
        } else {
            setIsTouching(false);
            document.getElementById('carrousel__container')!.style.transition = 'transform 500ms ease-in-out';
            document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / experience.length}%, 0, 0)`
        }

    }


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
            <div
                className={'relative px-8'}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className={'w-full py-6 overflow-hidden'}>
                    <div id={'carrousel__container'} className={'flex flex-row items-center transition duration-500'}
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
                <CarrouselPagination
                    currentItem={Math.ceil(currentItem / slidesVisible)}
                    totalItems={Math.ceil(ratio)}
                />
                <CarrouselBtn direction={"left"} onClick={() => goToItem(currentItem - slidesVisible)}/>
                <CarrouselBtn direction={"right"} onClick={() => goToItem(currentItem + slidesVisible)}/>
            </div>
        </>
    )
}

export default Carousel