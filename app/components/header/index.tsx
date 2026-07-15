'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <header className="fixed top-0 z-20 flex w-full items-center justify-center px-4 py-4">
            <div className="flex w-full max-w-[980px] items-center justify-between rounded-full bg-slate-950/78 px-3 py-2 shadow-[0_18px_60px_rgba(2,6,23,0.34),inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-xl">
                <Link href="/" className="rounded-full px-3 py-1.5 transition-colors hover:bg-slate-900/80">
                    <Image
                        width={76}
                        height={39}
                        src="/images/logo.svg"
                        alt="MicTalks Logo"
                    />
                </Link>

                <nav className="flex items-center gap-1 rounded-full bg-slate-900/55 p-1 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)]">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
            </div>
        </header>
    )
}
