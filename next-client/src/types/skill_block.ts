interface Skill {
    id: number;
    Name: string;
    Icon: string;
    Description: string;
}


interface SkillBlock {
    id: number;
    Skills: Skill[];
    Headline: string;
    Link: string;
}