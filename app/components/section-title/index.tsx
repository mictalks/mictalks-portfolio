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
        <div className={cn('flex flex-col gap-4', className)}>
        <span className="font-mono text-sm text-cyan-300">{`../${subtitle}`}</span>
        <h3 className="text-2xl font-medium sm:text-3xl">{title}</h3>
        </div>
    )
}
