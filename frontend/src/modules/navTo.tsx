"use client";

import React from "react";
import {useRouter} from "next/navigation";

const useNavTo = () => {

    const router = useRouter();

    return (e: React.MouseEvent<HTMLElement>, link: string) => {
        e.preventDefault();
        const moveTo = (link: string) => {
            const section = document.getElementById(link);
            if (section) {
                const yOffset = -82;
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }

        if (window.location.pathname !== '/') {
            router.push('/');
            moveTo(link);
        } else {
            moveTo(link);
        }

    }
}

export default useNavTo;