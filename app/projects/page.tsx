import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { Project } from "../types/projects";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getProjects = async (): Promise<Project[]> => {
    const query = `
        query ProjectsQuery {
            projects {
                slug
                thumbnail {
                    url
                }
                title
                shortDescription
                technologies {
                    name
                }
            }
        }
    `

    const data = await fetchHygraphQuery(query, 60 * 60 * 24)

    return data?.projects ?? []
}

export default async function Projects() {
    const projects = await getProjects()

    return (
        <>
            <PageIntroduction />
            <ProjectsList projects={projects} />
        </>
    )
}
