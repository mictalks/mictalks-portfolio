import Link from "next/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"

type ProjectsListProps = {
    projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-20 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:py-28">
            {projects.length > 0 ? (
                projects.map((project) => (
                    <Link href={`/projects/${project.slug}`} key={project.slug}>
                        <ProjectCard project={project} />
                    </Link>
                ))
            ) : (
                <p className="text-center text-sm text-gray-400 sm:col-span-2">
                    Nenhum projeto cadastrado no momento.
                </p>
            )}
        </section>
    )
}
