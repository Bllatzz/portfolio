import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'

export function Projects() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = t.projects.items

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-purple/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
            {t.projects.title}
          </span>
        </motion.h2>

        {/* Cards Carousel */}
        <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            className="absolute left-4 md:left-10 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextProject}
            className="absolute right-4 md:right-10 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Cards */}
          <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] perspective-1000">
            <AnimatePresence mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index = getProjectIndex(offset)
                const project = projects[index]
                const isCenter = offset === 0

                return (
                  <motion.div
                    key={`${project.id}-${offset}`}
                    className="absolute left-1/2 top-1/2"
                    initial={{ 
                      opacity: 0,
                      x: offset * 250,
                      scale: 0.8
                    }}
                    animate={{ 
                      opacity: isCenter ? 1 : 0.4,
                      x: offset * (window.innerWidth < 768 ? 100 : 200),
                      y: '-50%',
                      scale: isCenter ? 1 : 0.75,
                      zIndex: isCenter ? 10 : 5,
                      rotateY: offset * -15
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.8
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 30 
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      marginLeft: '-125px',
                    }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    >
                      <motion.div
                        className={`relative w-[250px] md:w-[300px] h-[350px] md:h-[420px] rounded-2xl overflow-hidden ${
                          isCenter 
                            ? 'shadow-2xl shadow-accent-cyan/20' 
                            : 'shadow-xl'
                        }`}
                        whileHover={isCenter ? { scale: 1.02 } : {}}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent" />
                        
                        {isCenter && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {project.name}
                            </h3>
                            <p className="text-accent-cyan font-mono text-sm mb-3">
                              {project.year}
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {project.description}
                            </p>
                            {project.link !== '#' && (
                              <div className="mt-4 flex items-center gap-2 text-accent-cyan font-medium text-sm">
                                <span>{t.projects.viewProject}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    </a>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-cyan w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

