import Skill from "@/components/skillBlock/skill";
import SkillType from "@/types/skill";

interface SkillLineProps {
    skills: SkillType[];
    side: "left" | "right";
}

const SkillLine = ({skills, side}: SkillLineProps) => {
    return (
        <div className={"relative flex flex-row gap-3 before:absolute before:top-0 before:left-0 before:w-20 lg:before:w-36 before:bg-gradient-to-r before:from-background before:h-full before:content-[''] before:z-10 after:absolute after:top-0 after:right-0 after:w-20 lg:after:w-36 after:bg-gradient-to-l after:from-background after:h-full after:content-[''] after:z-10"}>
            {[...Array(6)].map((_, index) => (
                <div key={index} className={`flex flex-row gap-3 my-3 flex-shrink-0 ${side === "left" ? "animate-slideLeft" : "animate-slideRight"}`}>
                    {skills.map((skill) => (
                        <Skill skill={skill} key={skill.id}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SkillLine;