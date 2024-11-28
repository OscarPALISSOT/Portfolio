import {createDirectus, readItems, rest} from "@directus/sdk";
import HeroBlockType from "@/types/hero_block";
import ExperienceBlockType from "@/types/experience_block";
import Section from "@/components/section";
import HeroBlock from "@/components/hero";
import ExperienceBlock from "@/components/experienceBlock/experienceBlock";
import SkillBlockType from "@/types/skill_block";
import SkillBlock from "@/components/skillBlock/skillBlock";
import ContactBlockType from "@/types/contact_block";
import ContactBlock from "@/components/contact";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

async function Home() {
    const heroBlock = await client.request(
        readItems('hero_block', {
            fields: ['*', {}],
        })
    ) as unknown as HeroBlockType;

    const experienceBlock = await client.request(
        readItems('experience_block', {
            fields: ['*', {
                experiences: ['*', {}]
            }],
        })
    ) as unknown as ExperienceBlockType;

    const skillBlock = await client.request(
        readItems('skill_block', {
            fields: ['*', {
                skills: ['*', {}]
            }],
        })
    ) as unknown as SkillBlockType;

    const contactBlock = await client.request(
        readItems('contact_block', {
            fields: ['*', {}],
        })
    ) as unknown as ContactBlockType;

    const links = [heroBlock.link, experienceBlock.link, skillBlock.link, contactBlock.link];

    return (
        <>
            <Section id={heroBlock.link}>
                <HeroBlock heroBlock={heroBlock}/>
            </Section>
            <Section id={experienceBlock.link}>
                <ExperienceBlock experienceBlock={experienceBlock}/>
            </Section>
            <Section id={skillBlock.link}>
                <SkillBlock skillBlock={skillBlock}/>
            </Section>
            <Section id={contactBlock.link}>
                <ContactBlock contactBlock={contactBlock}/>
            </Section>
        </>
    );
}

export default Home;
