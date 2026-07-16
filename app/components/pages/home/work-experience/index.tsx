'use client'

import { SectionTitle } from "@/app/components/section-title"
import { useLanguage } from "@/app/i18n/language-provider"

export const WorkExperience = () => {
    const { t } = useLanguage()

    return (
        <section className="container py-12 sm:py-16">
            <div className="mx-auto max-w-[1080px]">
                <SectionTitle
                    subtitle={t.process.eyebrow}
                    title=""
                    className="[&>h3]:hidden"
                />

                <div className="mt-8 grid gap-4 md:grid-cols-4">
                    {t.process.steps.map((step, index) => {
                        return (
                            <article
                                className="relative rounded-2xl bg-slate-950/55 p-5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]"
                                key={step.number}
                            >
                                {index < t.process.steps.length - 1 && (
                                    <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-violet-300/40 to-transparent md:block" />
                                )}

                                <div className="flex items-start justify-between gap-4">
                                    <span className="font-mono text-2xl text-violet-300">{step.number}</span>
                                </div>

                                <h3 className="mt-8 text-base font-medium text-gray-50">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-400">{step.description}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
