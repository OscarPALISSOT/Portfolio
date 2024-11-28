"use client";

import React from "react";
import {usePathname, useRouter} from "next/navigation";

const useNavTo = () => {

    const router = useRouter();
    const pathname = usePathname();

    return (e: React.MouseEvent<HTMLElement>, link: string) => {
        e.preventDefault();
        window.history.replaceState(null, "", "/");
        const moveTo = (link: string) => {
            const section = document.getElementById(link);
            if (section) {
                const yOffset = -96;
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
        if (pathname !== '/') {
            router.push('/#' + link);
        }
        moveTo(link);
    }
}

export default useNavTo;