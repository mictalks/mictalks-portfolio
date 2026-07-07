import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="relative flex min-h-[460px] w-full flex-col items-center justify-center overflow-hidden px-6 pt-24">
            <div className="absolute inset-0 z-[-2] bg-hero-image bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(2,6,23,0.24),rgba(2,6,23,0.96)),radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.28),transparent_28%)]" />

            <SectionTitle
                subtitle="projetos"
                title="Meus Projetos"
                className="text-center items-center [&>h3]:text-3xl sm:[&>h3]:text-4xl"
            />
            <div className="flex flex-col items-center">
                <p className="my-6 max-w-[640px] text-center text-sm leading-relaxed text-gray-400 sm:text-base">
                    Uma seleção dos projetos que desenvolvi para praticar arquitetura front-end, integração com APIs, experiência do usuário e interfaces responsivas.
                </p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}
