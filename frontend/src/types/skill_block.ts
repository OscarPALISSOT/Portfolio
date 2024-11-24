import SkillType from "./skill";


interface SkillBlockType {
    id: number;
    skills: SkillType[];
    headline: string;
    link: string;
}

export default SkillBlockType;