import HeroBlockType from "@/types/hero_block";
import Button from "@/Components/button";
import Image from "next/image";

interface HeroBlockProps {
    heroBlock: HeroBlockType;
}

const HeroBlock =({heroBlock}: HeroBlockProps) => {
    return (
        <div className={"flex flex-col lg:flex-row lg:items-center lg:gap-6 my-3 mb-12"}>
            <div className={"flex flex-col lg:w-2/3"}>
                <h1 className={"text-4xl lg:text-5xl font-semibold mb-3"}>{heroBlock.headline}</h1>
                <h2 className={"text-2xl lg:text-3xl font-semibold mb-4 lg:mb-12"}>{heroBlock.sub_headline}</h2>
                <p className={"text-lg lg:text-xl mb-4 lg:mb-12"}>{heroBlock.description}</p>
                <Image
                    className={"lg:hidden w-full mb-3"}
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.image}
                    alt="Oscar PALISSOT"
                    width={500}
                    height={420}
                />
                <span className={"flex w-full justify-center lg:block"}>
                    <Button
                        text={heroBlock.cv_button_label}
                        href={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.cv}
                    />
                </span>
            </div>
            <div className={"flex justify-center items-center lg:w-1/3"}>
                <Image
                    className={"hidden lg:block w-full"}
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.image}
                    alt="Oscar PALISSOT"
                    width={500}
                    height={420}
                />
            </div>
        </div>
    )
}

export default HeroBlock;