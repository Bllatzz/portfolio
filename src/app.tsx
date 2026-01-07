import { LanguageProvider } from '@/hooks/useLanguage'
import { AppRoutes } from '@/routes'

export function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  )
}

