import Skills from "@/types/skill";
import Image from "next/image";

interface SkillProps {
    skill: Skills;
}

const Skill = ({skill}: SkillProps) => {
    return (
        <div className={"flex-shrink-0 bg-light px-6 py-2 rounded-full border-[3px] border-primary shadow text-xl font-medium flex flex-row items-center gap-4"}>
            <div className={"h-[32px] lg:h-[48px]"}>
                <Image
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className={"h-full w-auto object-cover"}
                />
            </div>
            <p>{skill.name}</p>
        </div>
    )
}

export default Skill;