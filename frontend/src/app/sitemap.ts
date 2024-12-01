import type { MetadataRoute } from 'next'
import {createDirectus, readItems, rest} from "@directus/sdk";
import ExperienceBlockType from "@/types/experience_block";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const experienceBlock = await client.request(
        readItems('experience_block', {
            fields: ['link', {
                experiences :['id']
            }],
        })
    ) as unknown as ExperienceBlockType;

    return [
        {
            url: 'https://data.oscarpalissot.fr',
            lastModified: new Date()
        },
        ...experienceBlock.experiences.map(experience =>({
            url: 'https://data.oscarpalissot.fr/experience/' + experience.id,
            lastModified: new Date()
        }))
    ]
}