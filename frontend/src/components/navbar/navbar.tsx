"use client";

import React, {useEffect} from "react";
import useScroll from "@/hooks/useScrool";
import Link from "next/link";
import Image from "next/image";
import useCurrentSection from "@/hooks/useCurrentSection";
import useNavTo from "@/modules/navTo";
import {usePathname} from "next/navigation";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    const scrollY = useScroll();
    const currentSection = useCurrentSection(links);
    const navTo = useNavTo();
    const pathname = usePathname();

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (pathname === "/"){
            htmlElement.classList.add("lg:snap-y", "lg:snap-mandatory");
        } else {
            htmlElement.classList.remove("lg:snap-y", "lg:snap-mandatory");
        }
        return () => {
            htmlElement.classList.remove("lg:snap-y", "lg:snap-mandatory");
        };
    }, [pathname]);

    return (
        <>
            <div
                className={`hidden lg:flex text-2xl transition duration-300 font-medium bg-background font-poppins sticky top-0 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex-col justify-between z-50 ${scrollY > 3 && 'shadow-[0_6px_12px_0_rgba(0,0,0,0.12)] '}`}>
                <div className={'flex flex-row justify-between items-center h-24'}>
                    <span className={"flex items-center gap-6"}>
                        <Link href="/">
                        <Image
                            className={'h-12 w-auto cursor-pointer hover:scale-105 duration-300 ease-out transition-all'}
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={128}
                            height={128}/>
                    </Link>
                    <Link href="/">
                        <h1 className={"text-3xl cursor-pointer hover:scale-105 duration-300 ease-out transition-all"}>Oscar PALISSOT</h1>
                    </Link>
                    </span>
                    <div>
                        <ul className={'flex flex-row'}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className={'mx-4 cursor-pointer relative'}>
                                        <Link
                                            href={`/#${link}`}
                                            onClick={(e) => {
                                              navTo(e, link)
                                            }}
                                            className={`before:content-[""] before:absolute before:h-[3px] before:bottom-[-3px] before:bg-primary before:transition-transform before:w-full before:left-0 before:ease-out before:duration-300 before:origin-bottom-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-bottom-left ${currentSection === link && 'before:scale-x-100 before:origin-bottom-left'}`}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className={`h-[3px] -mx-8 md:-mx-24 2xl:-mx-64 bg-black origin-right duration-500 scale-x-0 ease-in ${scrollY > 3 && 'scale-x-100'}`}/>
            </div>
        </>
    )
}
export default Navbar