"use client"

import { motion, type Transition } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Code2, Layers, Zap, Shield } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
})

const cards = [
  {
    icon: Code2,
    title: "Java & Python",
    desc: "Scalable backend systems built with the right tool for the job.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    desc: "From database design to polished interfaces — end to end.",
  },
  {
    icon: Zap,
    title: "Data & AI",
    desc: "ETL pipelines, analytics, and AI integrations that drive decisions.",
  },
  {
    icon: Shield,
    title: "Security-First",
    desc: "Vulnerability analysis and secure development baked in from day one.",
  },
]

export function Heroe() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black">

     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.18),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      
      {[
        { top: "18%", right: "14%", size: "w-1.5 h-1.5", delay: 0 },
        { top: "32%", right: "22%", size: "w-1 h-1", delay: 0.6 },
        { bottom: "28%", left: "12%", size: "w-2 h-2", delay: 1.2 },
        { top: "55%", left: "30%", size: "w-1 h-1", delay: 0.4 },
        { bottom: "18%", right: "30%", size: "w-1.5 h-1.5", delay: 1.8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} rounded-full bg-violet-400/60 pointer-events-none`}
          style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: p.delay } as Transition}
        />
      ))}

      <div className="max-w-6xl mx-auto w-full relative z-10">

        
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            Available for new projects
          </span>
        </motion.div>

   
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-[88px] font-black leading-[1.02] tracking-tighter mb-6 text-white"
        >
          I Build Where{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
            Code, Data
          </span>
          <br />
          {"& "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              Security Meet.
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" } as Transition}
            />
          </span>
        </motion.h1>

    
        <motion.p
          {...fadeUp(0.25)}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light"
        >
          Full-stack developer focused on Java & Python — building at the intersection
          of web development, data pipelines, and AI.
          <span className="text-zinc-300 font-normal"> Security-first by default.</span>
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex items-center gap-4 mb-8 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Bogotá, Colombia
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>Mid-level Developer</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>UTC−5</span>
        </motion.div>

        <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-4 mb-20">
          <a href="/cv/Julian_CV_Harvard_v2_2.pdf" download="Julian_CV_.pdf">
            <Button className="gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 font-semibold px-8">
              Download CV
            </Button>
          </a>
          <a
            href="mailto:juliancamilorodriguezcamelo21@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href="https://github.com/JulianRodriguezCamelo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julian-rodriguez-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>

        
        <motion.div
          {...fadeUp(0.45)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: "easeOut" } as Transition}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md p-6 overflow-hidden hover:border-violet-500/40 transition-all duration-500"
            >
             
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/8 group-hover:to-fuchsia-600/5 transition-all duration-500 rounded-2xl pointer-events-none" />

             
              <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 border border-violet-500/20 flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-500">
                <div className="absolute inset-0 rounded-xl bg-violet-500/10 blur-sm" />
                <Icon className="w-5 h-5 text-violet-400 relative z-10" />
              </div>

              <h3 className="text-white font-semibold text-base mb-1.5 tracking-tight">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </div>

     
    </section>
  )
}
