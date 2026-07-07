import { cn } from "../lib/utils"

type HorizontalDividerProps = {
    className?: string
}

export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
 return (
        <div className={cn('my-8 h-px w-full bg-slate-800/50')} />
    )
}
   
