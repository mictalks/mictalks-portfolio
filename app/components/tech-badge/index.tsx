type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
    return(
        <span className="rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs text-gray-300 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)]">
            {name}
        </span>
    )
}
