import { Project } from "@/app/types/projects"
import Image from "next/image"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl bg-slate-900/80 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] transition-all hover:-translate-y-1 hover:bg-slate-900 hover:shadow-[inset_0_0_0_1px_rgba(167,139,250,0.22),0_24px_80px_rgba(15,23,42,0.35)]">
            <div className="h-52 w-full overflow-hidden">
                <Image
                    width={560}
                    height={320}
                    src={project.thumbnail.url}
                    alt={`Thumbnail do projeto ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Case</span>
                <strong className="text-xl font-medium leading-tight text-gray-50/90 transition-all group-hover:text-violet-200">
                    {project.title}
                </strong>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-400">
                    {project.shortDescription}
                </p>
                <span className="mt-auto block truncate pt-8 text-sm font-medium text-gray-300">
                    {project.technologies.map((tech) => tech.name).join(', ')}
                </span>
            </div>
        </article>
    )
}
