import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import Mentions from "@/types/mentions";
import ScrollToTopFix from "@/components/scroolToTopFix";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

async function MentionsLegales() {

    const mentions = await client.request(
        readItems('mentions_legales', {
            fields: ['*', {}],
        })
    ) as unknown as Mentions;

    return (
        <>
            <ScrollToTopFix/>
            <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-poppins font-bold text-fontColor mb-8 mt-14'}>Mentions légales</h1>
            <div
                className={'mb-10 xl:mb-44 prose prose-h1:text-xl prose-h1:lg:text-2xl prose-h1:xl:text-4xl prose-h1:font-poppins prose-h1:font-bold prose-h1:text-fontColor prose-h1:mb-3 prose-h1:mt-10 prose-p:text-lg prose-p:lg:text-xl prose-p:text-fontColor prose-p:my-0 prose-a:cursor-pointer prose-a:text-md lg:text-lg prose-a:text-fontColor hover:prose-a:text-primary prose-a:transition-all hover:prose-a:decoration-0 prose-a:duration-150 prose-a:ease-in-out prose-a:underline prose-a:decoration-2 prose-a:decoration-primary'}
                dangerouslySetInnerHTML={{__html: mentions.mentions}}
            />
        </>
    );
}

export default MentionsLegales;