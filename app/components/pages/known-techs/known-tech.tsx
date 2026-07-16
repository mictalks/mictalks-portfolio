import { KnownTech as IKnownTech } from "@/app/types/projects"
import {
    TbBrandJavascript,
    TbBrandNextjs,
    TbBrandReact,
    TbBrandTailwind,
    TbBrandTypescript,
} from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"

type KnownTechProps = {
    tech: IKnownTech
}

const iconMap = {
    JavaScript: TbBrandJavascript,
    TypeScript: TbBrandTypescript,
    React: TbBrandReact,
    'Tailwind CSS': TbBrandTailwind,
    'Node.js': FaNodeJs,
    MongoDB: SiMongodb,
    'Next.js': TbBrandNextjs,
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const Icon = iconMap[tech.name as keyof typeof iconMap]

    return (
        <div className="group flex min-h-[128px] flex-col items-center justify-center gap-4 rounded-2xl bg-slate-950/55 p-5 text-center text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] transition-all hover:-translate-y-1 hover:bg-slate-900/80 hover:text-violet-100 hover:shadow-[0_18px_50px_rgba(124,58,237,0.12),inset_0_0_0_1px_rgba(167,139,250,0.24)]">
            <div className="skill-tech-icon text-[2rem] text-cyan-200 opacity-90 transition-colors group-hover:text-violet-200 group-hover:opacity-100">
                {tech.name === 'MongoDB' && Icon ? (
                    <span className="relative inline-flex">
                        <Icon strokeWidth={1.45} />
                        <span className="absolute left-1/2 top-[42%] h-[54%] w-px -translate-x-1/2 rounded-full bg-slate-950/95" />
                    </span>
                ) : Icon ? (
                    <Icon strokeWidth={1.45} />
                ) : (
                    <span className="font-mono text-2xl font-semibold">{tech.name.slice(0, 2)}</span>
                )}
            </div>

            <p className="text-sm font-medium text-gray-100">{tech.name}</p>
        </div>
    )
}
