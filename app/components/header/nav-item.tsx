import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils'

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();
    const [activeHash, setActiveHash] = useState('home')

    useEffect(() => {
        const updateActiveHash = () => {
            const hash = window.location.hash.replace('#', '')
            setActiveHash(hash || 'home')
        }

        updateActiveHash()
        window.addEventListener('hashchange', updateActiveHash)

        return () => window.removeEventListener('hashchange', updateActiveHash)
    }, [])

    const hrefHash = href.split('#')[1]
    const isActive = pathname === '/' && hrefHash === activeHash;

    return (
        <a href={href} className={cn(
            "nav-scroll-link flex items-center gap-0.5 rounded-full px-1.5 py-2 font-mono text-[0.6rem] font-medium text-gray-400 transition-colors hover:text-gray-100 min-[380px]:text-[0.64rem] sm:gap-2 sm:px-3 sm:text-sm",
            isActive && 'bg-violet-500/15 text-gray-50'
        )}>
            <span className="text-cyan-300">/</span>
            {label}
        </a>
    )
}
