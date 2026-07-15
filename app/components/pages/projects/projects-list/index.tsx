import Link from "next/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"

type ProjectsListProps = {
    projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <section className="container py-12 sm:py-16">
            <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 lg:grid-cols-2">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug}>
                            <ProjectCard project={project} />
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-sm text-gray-400 lg:col-span-2">
                        Nenhum projeto cadastrado no momento.
                    </p>
                )}
            </div>
        </section>
    )
}
