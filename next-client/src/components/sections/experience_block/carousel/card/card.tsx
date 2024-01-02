import Experience from "@/types/experience";

type CardProps = {
    experience: Experience;
}

const Card = ({experience}: CardProps) => {
    return (
        <div className={'w-[300px] md:w-[400px] border border-border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer hover:scale-[102%]'}>
            <div className={'h-auto w-full bg-[secondary]'}>
                <img className={'h-auto w-full object-cover'} src={process.env.NEXT_PUBLIC_ASSETS_URL + experience.thumbnail} alt={experience.title}/>
            </div>
            <div className={'p-4 w-full bg-light'}>
                <h3 className={'text-fontColor font-bold text-xl'}>{experience.title}</h3>
            </div>
        </div>
    )
}

export default Card