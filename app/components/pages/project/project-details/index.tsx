import { RichText } from "@/app/components/rich-text"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "@/app/components/link"

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <section className="relative flex min-h-[660px] w-full flex-col items-center justify-end overflow-hidden px-6 pb-12 pt-28 sm:pb-16">
            <div
                className="absolute inset-0 z-[-2]"
                style={{
                    background: `url(${project.pageThumbnail?.url ?? project.thumbnail.url}) no-repeat center/cover`
                }}
            />
            <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(2,6,23,0.72),rgba(2,6,23,0.98)_72%),radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.22),transparent_30%)]" />

            <div className="mx-auto flex max-w-[820px] flex-col items-center rounded-[1.8rem] bg-slate-950/58 p-6 text-center shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(148,163,184,0.09)] backdrop-blur sm:p-8">
                <SectionTitle
                    subtitle="projeto"
                    title={project.title}
                    className="items-center text-center sm:[&>h3]:text-4xl"
                />
                <div className="my-5 max-w-[640px] text-sm leading-relaxed text-gray-400 sm:text-base">
                    <RichText content={project.description.raw} />
                </div>
                <div className="flex max-w-[520px] flex-wrap items-center justify-center gap-2">
                    {project.technologies.map((tech) => (
                        <TechBadge key={`${project.slug}-${tech.name}`} name={tech.name} />
                    ))}
                </div>
                <div className="my-6 flex flex-col items-center gap-3 sm:flex-row">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-slate-900/75 px-5 py-3 text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                        >
                            <TbBrandGithub size={20} />
                            Repositório
                        </a>
                    )}
                    {project.liveProjectUrl && (
                        <a
                            href={project.liveProjectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-gray-50 shadow-button transition-all hover:-translate-y-0.5 hover:bg-violet-400"
                        >
                            <FiGlobe size={20} />
                            Projeto online
                        </a>
                    )}
                </div>
                <Link href="/projects" className="rounded-full bg-slate-950/55 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] hover:text-cyan-200">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para projetos
                </Link>
            </div>
        </section>
    )
}
