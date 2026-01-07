import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Language, Translation } from '@/@types/i18n.d'
import { translations } from '@/utils/translations'

interface LanguageContextType {
  language: Language
  t: Translation
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language')
    return (saved as Language) || 'pt'
  })

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === 'pt' ? 'en' : 'pt'
      localStorage.setItem('portfolio-language', newLang)
      return newLang
    })
  }, [])

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('portfolio-language', lang)
  }, [])

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
    setLanguage: handleSetLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

