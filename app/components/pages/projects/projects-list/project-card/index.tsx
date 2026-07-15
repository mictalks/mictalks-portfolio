import { Project } from "@/app/types/projects"
import Image from "next/image"
import { HiArrowNarrowUp } from "react-icons/hi"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-slate-950/55 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(167,139,250,0.14)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(124,58,237,0.18),inset_0_0_0_1px_rgba(167,139,250,0.32)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-slate-900">
                <Image
                    width={760}
                    height={480}
                    src={project.thumbnail.url}
                    alt={`Thumbnail do projeto ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className="mb-3 block font-mono text-xs uppercase tracking-[0.18em] text-violet-300">Case</span>
                        <strong className="text-xl font-medium leading-tight text-gray-50 transition-all group-hover:text-violet-200">
                            {project.title}
                        </strong>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/80 text-lg text-gray-300 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-colors group-hover:text-violet-200">
                        <HiArrowNarrowUp className="rotate-45" />
                    </span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {project.shortDescription}
                </p>

                <span className="mt-auto block truncate pt-8 text-xs text-gray-500">
                    {project.technologies.map((tech) => tech.name).join(' / ')}
                </span>
            </div>
        </article>
    )
}
