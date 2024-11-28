import {createDirectus, readItem, rest} from "@directus/sdk";
import ExperienceType from "@/types/experience";
import Image from "next/image";
import React from "react";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface ExperienceProps {
    params: Promise<{ id: string }>
}

async function Experience({params}: ExperienceProps) {
    const id = (await params).id

    const experience = await client.request(readItem('experience', id)) as ExperienceType;

    return (
        <div className={"mt-4"}>
            <h1 className={"text-4xl lg:text-5xl font-semibold mb-8"}>{experience.title}</h1>
            <Image
                className={'h-[168px] lg:h-[224px] 2xl:h-[281px] w-auto mb-6 object-cover rounded-xl shadow-md'}
                src={process.env.NEXT_PUBLIC_ASSETS_URL + experience.thumbnail}
                width={888}
                height={500}
                alt={experience.title}
            />
            <div
                className={'w-full !max-w-none mb-10 xl:mb-44 prose prose-p:w-full prose-h1:text-xl prose-h1:lg:text-2xl prose-h1:xl:text-4xl prose-h1:font-poppins prose-h1:font-bold prose-h1:text-fontColor prose-h1:mb-3 prose-h1:mt-10 prose-p:text-lg prose-p:lg:text-xl prose-p:text-fontColor prose-p:my-0 prose-a:cursor-pointer prose-a:text-md lg:text-lg prose-a:text-fontColor hover:prose-a:text-primary prose-a:transition-all hover:prose-a:decoration-0 prose-a:duration-150 prose-a:ease-in-out prose-a:underline prose-a:decoration-2 prose-a:decoration-primary prose-img:h-[168px] prose-img:lg:h-[224px] prose-img:2xl:h-[281px] prose-img:w-auto prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto prose-img:lg:mx-0'}
                dangerouslySetInnerHTML={{__html: experience.description}}
            />
        </div>
    )
}

export default Experience;