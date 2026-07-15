import { SectionTitle } from "../../section-title"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { KnownTech } from "./known-tech"

type KnownTechsProps = {
    techs: IKnownTech[]
}

const featuredTechs = [
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'MongoDB',
]

export const KnownTechs = ({ techs }: KnownTechsProps ) => {
    const normalizedTechs = featuredTechs.map((techName) => {
        const cmsTech = techs?.find((tech) => tech.name.toLowerCase() === techName.toLowerCase())

        return {
            name: techName,
            iconSvg: cmsTech?.iconSvg ?? '',
            startDate: cmsTech?.startDate ?? '',
        }
    })

    return (
        <section className="container pb-8 pt-10 sm:pb-10 sm:pt-12">
            <div className="mx-auto max-w-[1080px]">
                <SectionTitle
                    subtitle="competências"
                    title=""
                    className="[&>h3]:hidden"
                />

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {normalizedTechs.map((tech) => (
                        <KnownTech key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    )
}
