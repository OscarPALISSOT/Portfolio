import type { MetadataRoute } from 'next'
import {createDirectus, readItems, rest} from "@directus/sdk";
import HeroBlockType from "@/types/hero_block";
import ExperienceBlockType from "@/types/experience_block";
import SkillBlockType from "@/types/skill_block";
import ContactBlockType from "@/types/contact_block";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const heroBlock = await client.request(
        readItems('hero_block', {
            fields: ['link'],
        })
    ) as unknown as HeroBlockType;

    const experienceBlock = await client.request(
        readItems('experience_block', {
            fields: ['link', {
                experiences :['id']
            }],
        })
    ) as unknown as ExperienceBlockType;

    const skillBlock = await client.request(
        readItems('skill_block', {
            fields: ['link'],
        })
    ) as unknown as SkillBlockType;

    const contactBlock = await client.request(
        readItems('contact_block', {
            fields: ['link'],
        })
    ) as unknown as ContactBlockType;

    const links = [heroBlock.link, experienceBlock.link, skillBlock.link, contactBlock.link];

    return [
        {
            url: 'https://data.oscarpalissot.fr',
            lastModified: new Date()
        },
        ...links.map(link => ({
            url: 'https://data.oscarpalissot.fr/#' + link,
            lastModified: new Date()
        })),
        ...experienceBlock.experiences.map(experience =>({
            url: 'https://data.oscarpalissot.fr/experience/' + experience.id,
            lastModified: new Date()
        }))
    ]
}