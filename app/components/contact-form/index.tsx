'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
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
        <section id="contact" className="px-6 py-14 md:py-24">
            <div className="container">
                <div className="mx-auto grid max-w-[900px] gap-8 rounded-2xl bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.45),inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:p-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <SectionTitle
                            subtitle="contato"
                            title="Vamos trabalhar juntos?"
                        />
                        <p className="mt-5 text-sm leading-relaxed text-gray-400">
                            Me envie uma mensagem com o contexto do projeto, vaga ou colaboração. Respondo assim que possível.
                        </p>
                    </div>

                    <form
                        className="flex w-full flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <input
                                placeholder="Nome"
                                className="h-14 w-full rounded-lg bg-slate-950/80 p-4 text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] placeholder:text-gray-500 focus:outline-none focus:ring-2 ring-violet-500/70"
                                {...register('name')}
                            />
                            {errors.name && <span className="mt-1 block text-sm text-red-400">{errors.name.message}</span>}
                        </div>
                        <div>
                            <input
                                placeholder="E-mail"
                                type="email"
                                className="h-14 w-full rounded-lg bg-slate-950/80 p-4 text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] placeholder:text-gray-500 focus:outline-none focus:ring-2 ring-violet-500/70"
                                {...register('email')}
                            />
                            {errors.email && <span className="mt-1 block text-sm text-red-400">{errors.email.message}</span>}
                        </div>
                        <div>
                            <textarea
                                placeholder="Mensagem"
                                className="h-[138px] w-full resize-none rounded-lg bg-slate-950/80 p-4 text-gray-50 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] placeholder:text-gray-500 focus:outline-none focus:ring-2 ring-violet-500/70"
                                maxLength={500}
                                {...register('message')}
                            />
                            {errors.message && <span className="mt-1 block text-sm text-red-400">{errors.message.message}</span>}
                        </div>

                        <Button className="mt-2 h-max w-max shadow-button">
                            Enviar Mensagem
                            <HiArrowNarrowRight size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
