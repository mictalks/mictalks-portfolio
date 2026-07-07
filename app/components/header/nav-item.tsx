import Link from "next/link"
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils'

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm font-medium font-mono hover:text-gray-100 transition-colors",
            isActive && 'bg-violet-500/15 text-gray-50'
        )}>
            <span className="text-cyan-300">/</span>
            {label}
        </Link>
    )
}
