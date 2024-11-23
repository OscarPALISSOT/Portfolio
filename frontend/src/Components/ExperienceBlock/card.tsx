import Experience from "@/types/experience";
import Image from "next/image";

type CardProps = {
    experience: Experience;
}

const Card = ({experience}: CardProps) => {
    return (
        <div className={'md:mx-3 w-[300px] lg:w-[400px] border border-border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer hover:scale-[102%]'}>
            <div className={'h-[168px] lg:h-[224px] w-full'}>
                <Image
                    className={'h-full w-full object-cover'}
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + experience.thumbnail}
                    width={888}
                    height={500}
                    alt={experience.title}
                />
            </div>
            <div className={'p-4 w-full bg-light'}>
                <h3 className={'text-fontColor font-bold text-xl truncate'}>{experience.title}</h3>
            </div>
        </div>
    )
}

export default Card