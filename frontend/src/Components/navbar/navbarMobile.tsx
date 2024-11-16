"use client";

import React, {useEffect, useState} from "react";
import useScroll from "@/hooks/useScrool";
import Link from "next/link";
import Image from "next/image";
import useNavTo from "@/modules/navTo";

interface NavbarProps {
    links: string[];
    logo: string;
}

const NavbarMobile = ({links, logo}: NavbarProps) => {

    const scrollY = useScroll();
    const navTo = useNavTo();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <div
                className={`lg:hidden text-2xl transition duration-300 font-bold bg-background font-poppins sticky top-0 -mx-8 md:-mx-24 px-8 -left-8 flex flex-col justify-between w-screen z-40 ${!isMenuOpen && scrollY > 0 && 'shadow-[0_6px_12px_0_rgba(0,0,0,0.12)]'}`}>
                <div className={'flex flex-row justify-between items-center h-20 w-full'}>
                    <Link href="/">
                        <Image
                            className={'h-12 w-auto cursor-pointer hover:scale-105 duration-300 ease-out transition-all'}
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={128}
                            height={128}/>
                    </Link>
                    <div
                        className={'cursor-pointer py-2 overflow-hidden'}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div
                            className={`h-1 rounded w-8 bg-fontColor duration-300 ease-out transition-all before:content-[""] before:h-1 before:rounded before:w-8 before:absolute before:bg-fontColor after:content-[""] after:h-1 after:rounded after:w-8 after:absolute after:bg-fontColor before:-translate-y-2 after:translate-y-2 before:duration-300 before:transition-all before:ease-out after:duration-300 after:transition-all after:ease-out ${isMenuOpen && '-translate-x-8 bg-transparent before:translate-x-8 after:translate-x-8 before:rotate-45 before:translate-y-0 after:translate-y-[0] after:-rotate-45'}`}
                        />
                    </div>
                </div>
                <div
                    className={`h-0.5 -mx-8 md:-mx-24 bg-primary origin-right duration-500 scale-x-0 ease-in ${scrollY > 0 && 'scale-x-100'} ${isMenuOpen && 'hidden'}`}
                />

            </div>
            <div
                className={`flex flex-row justify-center top-20 left-0 fixed h-screen w-screen bg-background scale-y-0 duration-500 ease-in-out transition-all origin-top p-6 z-40 ${isMenuOpen && 'scale-y-100 duration-500'}`}>
                <ul className={'flex flex-col'}>
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                className={'mx-4 cursor-pointer relative mb-6'}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Link href={`/#${link}`}
                                      onClick={(e) => {
                                          navTo(e, link)
                                      }}
                                      className={'before:content-[""] before:absolute before:h-0.5 before:bottom-0.5 before:bg-primary before:transition-transform before:w-full before:left-0 before:ease-out before:duration-300 before:origin-bottom-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-bottom-left text-4xl font-poppins font-medium'}>
                                    {link}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default NavbarMobile