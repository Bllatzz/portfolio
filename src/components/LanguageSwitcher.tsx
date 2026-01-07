import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className=" flex items-center gap-2 rounded-full bg-dark-100/80 px-4 py-2 backdrop-blur-md border border-white/10 hover:border-accent-cyan/50 transition-all duration-300 group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`text-sm font-medium transition-colors ${language === 'pt' ? 'text-accent-cyan' : 'text-gray-400'}`}>
        PT
      </span>
      <div className="relative w-12 h-6 bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-1 w-4 h-4 bg-accent-cyan rounded-full shadow-lg"
          animate={{ left: language === 'pt' ? '4px' : '28px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>
      <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-accent-cyan' : 'text-gray-400'}`}>
        EN
      </span>
    </motion.button>
  )
}

