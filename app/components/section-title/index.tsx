import { cn } from "../lib/utils";

type SectionTitleProps = {
    title: string;
    subtitle: string;
    className?: string
}

export const SectionTitle = ({
    title,
    subtitle,
    className
}: SectionTitleProps) => {
    return (
        <div className={cn('flex flex-col gap-3', className)}>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" />
            {subtitle}
        </span>
        <h3 className="max-w-[620px] text-2xl font-medium leading-tight text-gray-50 sm:text-3xl">{title}</h3>
        </div>
    )
}
