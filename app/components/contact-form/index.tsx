'use client'

import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const contactFormSchema = z.object({
    name: z.string().min(3, 'Informe seu nome').max(100),
    email: z.string().email('Informe um e-mail válido'),
    message: z.string().min(1, 'Escreva uma mensagem').max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? ''
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? ''

export const ContactForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = (data: ContactFormData) => {
        const subject = encodeURIComponent(`Contato pelo portfólio - ${data.name}`)
        const body = encodeURIComponent(`${data.message}\n\nNome: ${data.name}\nE-mail: ${data.email}`)

        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    }

    return (
        <section id="contact" className="px-6 py-12 md:py-16">
            <div className="container">
                <div className="mx-auto max-w-[1080px] rounded-[1.8rem] bg-slate-950/60 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45),inset_0_0_0_1px_rgba(148,163,184,0.09)] sm:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div>
                            <SectionTitle
                                subtitle="contato"
                                title="Vamos construir algo incrível?"
                            />
                            <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-gray-400">
                                Estou disponível para projetos e oportunidades.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-xl text-gray-500">
                            <a
                                href={githubUrl || "#contact"}
                                target={githubUrl ? "_blank" : undefined}
                                rel={githubUrl ? "noreferrer" : undefined}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                                aria-label="Abrir GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={`mailto:${contactEmail}`}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-all hover:-translate-y-0.5 hover:text-cyan-200"
                                aria-label="Enviar e-mail"
                            >
                                <HiOutlineMail />
                            </a>

                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/60 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-all hover:-translate-y-0.5 hover:text-violet-200"
                                aria-label="Abrir Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <form
                        className="mx-auto mt-7 flex w-full max-w-[760px] flex-col items-center gap-3"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="w-full">
                            <input
                                placeholder="Nome"
                                className="h-14 w-full appearance-none rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 text-sm text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)] placeholder:text-gray-500 focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-500/35"
                                {...register('name')}
                            />
                            {errors.name && <span className="mt-1 block text-sm text-red-400">{errors.name.message}</span>}
                        </div>
                        <div className="w-full">
                            <input
                                placeholder="E-mail"
                                type="email"
                                className="h-14 w-full appearance-none rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 text-sm text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)] placeholder:text-gray-500 focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-500/35"
                                {...register('email')}
                            />
                            {errors.email && <span className="mt-1 block text-sm text-red-400">{errors.email.message}</span>}
                        </div>
                        <div className="w-full">
                            <textarea
                                placeholder="Mensagem"
                                className="h-32 w-full resize-none appearance-none rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 py-4 text-sm text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)] placeholder:text-gray-500 focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-500/35"
                                maxLength={500}
                                {...register('message')}
                            />
                            {errors.message && <span className="mt-1 block text-sm text-red-400">{errors.message.message}</span>}
                        </div>

                        <Button className="mt-3 h-max w-full justify-center rounded-full bg-violet-500 px-10 py-4 text-sm shadow-button transition-all hover:-translate-y-0.5 hover:bg-violet-400 sm:w-max">
                            Enviar mensagem
                            <HiArrowNarrowRight size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
