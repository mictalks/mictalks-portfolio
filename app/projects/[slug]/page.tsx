import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { Project } from "@/app/types/projects";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { notFound } from "next/navigation";

type ProjectPageProps = {
    params: {
        slug: string
    }
}

const getProject = async (slug: string): Promise<Project | null> => {
    const query = `
        query ProjectQuery($slug: String!) {
            project(where: { slug: $slug }) {
                slug
                title
                shortDescription
                thumbnail {
                    url
                }
                pageThumbnail {
                    url
                }
                technologies {
                    name
                }
                description {
                    raw
                }
                liveProjectUrl
                githubUrl
                sections {
                    title
                    image {
                        url
                    }
                }
            }
        }
    `

    const { project } = await fetchHygraphQuery(query, 60 * 60 * 24, { slug })

    return project
}

export default async function Project({ params }: ProjectPageProps) {
    const project = await getProject(params.slug)

    if (!project) {
        notFound()
    }

    return (
        <>
            <ProjectDetails project={project} />
            <ProjectSections sections={project.sections} />
        </>
    )
}
