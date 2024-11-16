"use client";

import { useEffect, useState } from 'react';

const useCurrentSection = (links: string[]) => {
    const [currentSection, setCurrentSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link));
            let currentId = "";

            sections.forEach(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentId = section.id;
                    }
                }
            });

            setCurrentSection(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [links]);

    return currentSection;
};

export default useCurrentSection;