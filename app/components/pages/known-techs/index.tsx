import { SectionTitle } from "../../section-title"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { KnownTech } from "./known-tech"

type KnownTechsProps = {
    techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps ) => {
    return (
        <section className="container py-14 sm:py-20">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
                {techs?.map((tech) => (
                    <KnownTech key={tech.name} tech={tech} />
                ))}
            </div>
        </section>
    )
}
