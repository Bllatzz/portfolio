import { Header, Hero, Projects, Courses, Contact} from '@/components'

export function Home() {
  return (
    <main className="relative bg-dark-500 min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Projects />
      <Courses />
      <Contact />
    </main>
  )
}

