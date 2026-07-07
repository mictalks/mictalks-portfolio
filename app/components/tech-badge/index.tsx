type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
    return(
        <span className="rounded-full bg-violet-950/70 px-3 py-1 text-xs text-violet-200 shadow-[inset_0_0_0_1px_rgba(167,139,250,0.14)] sm:text-sm">
            {name}
        </span>
    )
}
