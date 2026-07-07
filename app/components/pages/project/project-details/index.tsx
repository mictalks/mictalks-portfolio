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
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail?.url ?? project.thumbnail.url}) no-repeat center/cover`
                }}
            />

            <SectionTitle
                subtitle="projetos"
                title={project.title}
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                <RichText content={project.description.raw} />
            </div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technologies.map((tech) => (
                    <TechBadge key={`${project.slug}-${tech.name}`} name={tech.name} />
                ))}
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="min-w-[180px] bg-violet-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-violet-500 transition-all"
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
                        className="min-w-[180px] bg-violet-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-violet-500 transition-all"
                    >
                        <FiGlobe size={20} />
                        Projeto Online
                    </a>
                )}
            </div>
            <Link href="/projects">
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>
        </section>
    )
}
