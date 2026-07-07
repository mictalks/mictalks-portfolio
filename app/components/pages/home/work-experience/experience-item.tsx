import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import Link from "next/link";

type Experience = {
    company: string
    companyUrl: string
    role: string
    period: string
    description: string
    technologies: string[]
}

type ExperienceItemProps = {
    experience: Experience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-slate-900 p-2 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)]">
                    <Image
                        src="/images/icons/project-title-icon.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <Link
                        href={experience.companyUrl}
                        className="text-gray-500 hover:text-violet-300 transition-colors"
                    >
                        @ {experience.company}
                    </Link>
                    <h4 className="text-gray-300">{experience.role}</h4>
                    <span className="text-gray-500">
                        {experience.period}
                    </span>
                    <p className="text-gray-400">{experience.description}</p>
                </div>

                <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {experience.technologies.map((technology) => (
                        <TechBadge key={technology} name={technology}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
