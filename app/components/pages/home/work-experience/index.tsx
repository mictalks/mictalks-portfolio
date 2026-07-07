import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

const experiences = [
    {
        company: 'Projetos pessoais',
        companyUrl: '/projects',
        role: 'Desenvolvimento Front-End',
        period: 'Prática contínua',
        description: 'Criação de interfaces responsivas, integração com CMS e APIs, organização de componentes e publicação de projetos web.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
]

export const WorkExperience = () => {
    return (
        <section className="container flex flex-col gap-10 py-14 sm:py-20 md:flex-row md:gap-8 lg:gap-14">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="trajetória" title="Experiência Profissional"/>
                <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Um resumo das práticas e experiências que conectam meus projetos ao tipo de trabalho que busco desenvolver: interfaces claras, código organizado e boa experiência para quem usa.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences.map((experience) => (
                    <ExperienceItem key={experience.company} experience={experience} />
                ))}
            </div>
        </section>
    )
}
