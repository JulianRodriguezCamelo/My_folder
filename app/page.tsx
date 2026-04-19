import { Navbar } from "@/components/portafolio/Navbar"
import { Heroe } from "@/components/portafolio/heroe"
import { About } from "@/components/portafolio/about"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Heroe />
      <About />
    </main>
  )
}
  