import React from "react";

const navTo = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault();
    let url = new URL((e.target as HTMLAnchorElement).href);
    console.log(document.URL);
    const section = document.getElementById(link);
    if (section) {
        const yOffset = -96;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

export default navTo;