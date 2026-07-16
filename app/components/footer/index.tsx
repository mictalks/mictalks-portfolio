'use client'

import { IoMdHeart } from 'react-icons/io'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { useLanguage } from '@/app/i18n/language-provider'

export const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className="relative h-28 w-full overflow-hidden text-xs text-gray-500 sm:text-sm">
            <a
                href="#top"
                className="group absolute left-1/2 top-2 inline-flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-slate-950/60 px-4 py-2 text-sm font-medium text-gray-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)] transition-colors hover:text-white"
            >
                {t.footer.back}
                <HiArrowNarrowUp className="text-cyan-200 transition-transform group-hover:-translate-y-0.5" />
            </a>
            <span className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1.5 whitespace-nowrap font-mono">
                {t.footer.madeWith}
                <IoMdHeart size={13} className="text-violet-400"/>
                {t.footer.by}
                <strong className="font-medium text-violet-200">{'</mictalks>'}</strong>
            </span>
        </footer>
    )
}
