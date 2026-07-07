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
        <header className="fixed top-0 w-full z-20 flex items-center justify-center px-4 py-4">
            <div className="container flex items-center justify-between">
                <Link href="/" className="rounded-full bg-slate-950/75 px-4 py-2 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-md transition-colors hover:bg-slate-900/80">
                    <Image
                        width={76}
                        height={39}
                        src="/images/logo.svg"
                        alt="MicTalks Logo"
                    />
                </Link>

                <nav className="flex items-center gap-1 rounded-full bg-slate-950/75 p-1 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-md">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
            </div>
        </header>
    )
}
