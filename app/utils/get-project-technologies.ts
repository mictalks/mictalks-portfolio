import { Project } from "../types/projects"

const projectTechnologyOverrides: Record<string, string[]> = {
    'user-management': ['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB']
}

export const getProjectTechnologies = (project: Project) => {
    return [
        ...project.technologies.map((tech) => tech.name),
        ...(projectTechnologyOverrides[project.slug] ?? [])
    ].filter((tech, index, technologies) => (
        technologies.findIndex((currentTech) => currentTech.toLowerCase() === tech.toLowerCase()) === index
    ))
}
