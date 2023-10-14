import {useEffect, useState} from "react";


const useScroll = () => {

    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };


    useEffect(() => {

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
}

export default useScroll
