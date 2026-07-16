'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/app/i18n/language-provider"

export const Header = () => {
    const { t } = useLanguage()
    const navItems = [
        {
            label: t.nav.home,
            href: '/#home'
        },
        {
            label: t.nav.projects,
            href: '/#selected-work'
        },
        {
            label: t.nav.about,
            href: '/#about'
        },
        {
            label: t.nav.contact,
            href: '/#contact'
        }
    ]

    return (
        <header className="fixed top-0 z-20 flex w-full items-center justify-center px-4 py-4">
            <div className="flex w-full max-w-[980px] items-center justify-between gap-1 rounded-full bg-slate-950/78 px-2 py-2 shadow-[0_18px_60px_rgba(2,6,23,0.34),inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-xl sm:gap-2 sm:px-3">
                <Link href="/#home" className="shrink-0 rounded-full px-1.5 py-1.5 transition-colors hover:bg-slate-900/80 sm:px-3">
                    <Image
                        width={68}
                        height={35}
                        src="/images/logo.svg"
                        alt="MicTalks Logo"
                        className="h-auto w-[46px] min-[380px]:w-[56px] sm:w-[68px]"
                    />
                </Link>

                <nav className="flex shrink-0 items-center rounded-full bg-slate-900/55 p-0.5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)] sm:gap-1 sm:p-1">
                    {navItems.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                    <LanguageToggle />
                </nav>
            </div>
        </header>
    )
}
