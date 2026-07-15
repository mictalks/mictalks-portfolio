import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="relative flex min-h-[440px] w-full flex-col items-center justify-center overflow-hidden px-6 pt-28">
            <SectionTitle
                subtitle="projetos"
                title="Cases, interfaces e aplicações em evolução"
                className="items-center text-center [&>h3]:max-w-[720px] [&>h3]:text-3xl sm:[&>h3]:text-4xl"
            />
            <div className="flex flex-col items-center">
                <p className="my-6 max-w-[620px] text-center text-sm leading-relaxed text-gray-400 sm:text-base">
                    Uma seleção dos projetos que desenvolvi com foco em experiência do usuário, componentes, integrações e arquitetura web.
                </p>
                <Link href="/" className="rounded-full bg-slate-950/55 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)] hover:text-cyan-200">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}
