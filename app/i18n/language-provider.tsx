'use client'

import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Language, TranslationDictionary, translations } from './translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: TranslationDictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const storageKey = 'mictalks-language'

type LanguageProviderProps = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('pt')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey)

    if (storedLanguage === 'pt' || storedLanguage === 'en') {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(storageKey, nextLanguage)
    document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en'
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }, [language, setLanguage])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  }), [language, setLanguage, toggleLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
