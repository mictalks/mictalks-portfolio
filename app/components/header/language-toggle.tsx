'use client'

import { TbLanguage } from 'react-icons/tb'
import { useLanguage } from '@/app/i18n/language-provider'

export const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage()
  const label = language === 'pt' ? 'PT' : 'EN'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.toggleLabel}
      title={t.nav.toggleLabel}
      className="nav-scroll-link inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-slate-950/50 px-2 font-mono text-[0.58rem] font-medium text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.12)] transition-colors hover:bg-slate-900/80 hover:text-white min-[380px]:text-[0.62rem] sm:h-9 sm:px-3 sm:text-xs"
    >
      <TbLanguage className="text-sm sm:text-base" />
      <span>{label}</span>
    </button>
  )
}
