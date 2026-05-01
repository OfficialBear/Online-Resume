import { TopNav } from './components/TopNav.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { About } from './sections/About.jsx'
import { Skills } from './sections/Skills.jsx'
import { Projects } from './sections/Projects.jsx'
import { Experience } from './sections/Experience.jsx'
import { Contact } from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <TopNav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

