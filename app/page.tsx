import { Navbar } from "@/components/portafolio/Navbar"
import { Heroe } from "@/components/portafolio/heroe"
import { About } from "@/components/portafolio/about"
import { Skills } from "@/components/portafolio/Skills"
import Projects from "@/components/portafolio/projects"
import Contact from "@/components/portafolio/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Heroe />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
  