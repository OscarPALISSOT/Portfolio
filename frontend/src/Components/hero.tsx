import HeroBlockType from "@/types/hero_block";
import Button from "@/Components/button";
import Image from "next/image";

interface HeroBlockProps {
    heroBlock: HeroBlockType;
}

const HeroBlock =({heroBlock}: HeroBlockProps) => {
    return (
        <div className={"flex flex-col lg:flex-row lg:items-center"}>
            <div className={"flex flex-col lg:w-1/2"}>
                <h1 className={"text-4xl lg:text-5xl font-semibold mb-3"}>{heroBlock.headline}</h1>
                <h2 className={"text-2xl lg:text-3xl font-semibold mb-4 lg:mb-16"}>{heroBlock.sub_headline}</h2>
                <p className={"text-lg lg:text-xl mb-4"}>{heroBlock.description}</p>
                <Button
                    text={heroBlock.cv_button_label}
                />
            </div>
            <div className={"flex justify-center items-center lg:w-1/2"}>
                <Image className={"hidden lg:block"} src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.image} alt="Oscar PALISSOT" width={500} height={420}/>
            </div>
        </div>
    )
}

export default HeroBlock;