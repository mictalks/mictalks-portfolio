import { ProjectSection } from "@/app/types/projects"
import Image from "next/image"

type ProjectSectionsProps = {
    sections: ProjectSection[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
    return (
        <section className="container my-12 flex flex-col gap-10 md:my-16 md:gap-16">
            {sections.map(section => (
                <div key={section.title} className="mx-auto flex w-full max-w-[1080px] flex-col gap-5">
                    <h2 className="text-xl font-medium text-gray-50 md:text-2xl">
                        {section.title}
                    </h2>
                    <div className="overflow-hidden rounded-[1.7rem] bg-slate-950/55 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.42),inset_0_0_0_1px_rgba(148,163,184,0.09)]">
                        <Image
                            src={section.image.url}
                            width={1080}
                            height={672}
                            className="aspect-auto w-full rounded-[1.2rem] object-cover"
                            alt={`Imagem da seção ${section.title}`}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}
