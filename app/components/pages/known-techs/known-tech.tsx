import { KnownTech as IKnownTech } from "@/app/types/projects"
import { getRelativeTimeString } from "../../../utils/get-relative-time"
import { CMSIcon } from "../../cms-icon"

type KnownTechProps = {
    tech: IKnownTech
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate), 'pt-BR',
    ).replace('há ', '')

    return (
        <div className="rounded-2xl bg-slate-900/70 p-5 text-gray-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] transition-all hover:bg-violet-950/30 hover:text-violet-100 hover:shadow-[inset_0_0_0_1px_rgba(167,139,250,0.22)]">
            <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-gray-100">{tech.name}</p>
                <CMSIcon icon={tech.iconSvg} />
            </div>

            <span className="mt-3 block text-xs sm:text-sm">{relativeTime} de experiência</span>
        </div>
    )
}
