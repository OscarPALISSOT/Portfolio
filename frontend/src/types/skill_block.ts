import Skills from "./skills";


interface SkillBlockType {
    id: number;
    Skills: SkillsId[];
    Headline: string;
    Link: string;
}

interface SkillsId {
    id: number;
    skill_bloc_id: number;
    skill_id: Skills[];
}

export default SkillBlockType;