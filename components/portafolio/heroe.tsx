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

      {/* Deep background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.18),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Floating particles */}
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

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            Available for new projects
          </span>
        </motion.div>

        {/* Main heading */}
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

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light"
        >
          Full-stack developer focused on Java & Python — building at the intersection
          of web development, data pipelines, and AI.
          <span className="text-zinc-300 font-normal"> Security-first by default.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-4 mb-20">
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 font-semibold px-8"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800/60 hover:border-violet-500/50 hover:text-white backdrop-blur-sm transition-all duration-300 px-8"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
        </motion.div>

        {/* Feature cards grid — inspired by image layout */}
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
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/8 group-hover:to-fuchsia-600/5 transition-all duration-500 rounded-2xl pointer-events-none" />

              {/* Icon with glow */}
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
