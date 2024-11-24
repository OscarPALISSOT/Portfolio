'use client';

import SkillBlockType from "@/types/skill_block";
import skillType from "@/types/skill";
import SkillLine from "@/components/skillBlock/SkillLine";
import {useEffect, useState} from "react";
import useDeviceSize from "@/hooks/useDeviceSize";

interface SkillBlockProps {
    skillBlock: SkillBlockType;
}

const SkillBlock = ({skillBlock}: SkillBlockProps) => {

    const [chunkSize, setChunkSize] = useState(4);
    const [width] = useDeviceSize();

    useEffect(() => {
        switch (true) {
            case width < 640:
                setChunkSize(4)
                break
            case width < 1440:
                setChunkSize(6)
                break
            default:
                setChunkSize(6)
                break
        }
    }, [width]);

    const chunkedArray: skillType[][] = [];
    for (let i = 0; i < skillBlock.skills.length; i += chunkSize) {
        chunkedArray.push(skillBlock.skills.slice(i, i + 6));
    }
    return (
        <div className={"mb-12"}>
            <h1 className={"text-4xl lg:text-5xl font-semibold mb-6 lg:mb-12"}>{skillBlock.headline}</h1>
            {chunkedArray.map((skills, index) => (
                <div
                    key={index}
                    className={"2xl:-mx-64 md:-mx-24 -mx-8 overflow-hidden"}
                >
                    <SkillLine
                        skills={skills}
                        side={index % 2 === 0 ? "left" : "right"}
                    />
                </div>
            ))}
        </div>
    )
}

export default SkillBlock;