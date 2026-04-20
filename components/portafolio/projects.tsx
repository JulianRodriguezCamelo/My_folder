"use client"

import { motion, type Transition } from "framer-motion"
import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/registry/magicui/interactive-grid-pattern"
import { ExternalLink, Code2, Lock } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
})

const projects = [
  {
    title: "Athena — Hallazgos ERO",
    description:
      "Full-stack findings management system for operational risk at Fiduprevisora. Excel import, role-based access control, and KPI dashboard with charts and timeline.",
    tags: ["Next.js 16", "Flask", "PostgreSQL", "Docker"],
    github: "https://github.com/JulianRodriguezCamelo/Athena_Hallazgos",
    live: "#",
    type: "enterprise" as const,
  },
  {
    title: "Ayrton",
    description:
      "Productivity app inspired by Ayrton Senna. Task management, smart prioritization, streak-based challenges, reminders, and an integrated payment gateway — built as a monorepo.",
    tags: ["Next.js", "Spring Boot", "GraphQL", "PostgreSQL"],
    github: "https://github.com/Azkoien07/Ayrton",
    live: "#",
    type: "personal" as const,
  },
  {
    title: "Mark 18 — Vulnerability Pipeline",
    description:
      "Automated pipeline that reads Nessus Excel reports, enriches each vulnerability with LLaMA via Groq, generates Word remediation plans, and uploads them to Google Drive. 94% token savings through multi-level caching.",
    tags: ["Python", "Groq / LLaMA", "Google Drive API", "pandas"],
    github: "https://github.com/JulianRodriguezCamelo/mark18sistema_procesamiento_de_vulnerabilidades",
    live: "#",
    type: "enterprise" as const,
  },
  {
    title: "CIS Benchmark Playbooks",
    description:
      "Ansible playbooks for automated CIS Benchmark hardening across RHEL 6/7/8/9, Ubuntu, Oracle Solaris, and CentOS. Audit logging, backup, and multi-framework compliance (NIST, PCI-DSS, DISA-STIG).",
    tags: ["Ansible", "Linux", "CIS Benchmark", "Security"],
    github: "https://github.com/JulianRodriguezCamelo/Playbooks",
    live: "#",
    type: "enterprise" as const,
  },
  {
    title: "OpenW",
    description:
      "Open-source, self-hostable CRM with native WhatsApp integration. AI-powered conversation tracking via pgVector semantic search — no SaaS subscription, your data stays yours.",
    tags: ["Next.js 16", "Flask", "pgVector", "WhatsApp API"],
    github: "https://github.com/Cairon29/OpenW",
    live: "#",
    type: "opensource" as const,
  },
  {
    title: "SenaSoft — Support Chatbot",
    description:
      "Monolithic web chatbot for victims and people at risk. Classifies messages into categories (domestic violence, harassment, mental health, emergencies) and responds empathetically using NLP and ML models.",
    tags: ["Python", "Flask", "HuggingFace", "scikit-learn"],
    github: "https://github.com/Julian7689/SenaSoftProyect",
    live: "#",
    type: "personal" as const,
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    
    <motion.div
      {...fadeUp(0.1 + index * 0.08)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-violet-500/15 bg-black p-6 min-h-[260px]"
    >
      <InteractiveGridPattern
        width={36}
        height={36}
        squares={[16, 10]}
        className={cn(
          "[mask-image:radial-gradient(280px_circle_at_50%_50%,white,transparent)]"
        )}
      />

      <div className="relative z-10 flex flex-col h-full gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
              {project.title}
            </h3>
            {project.type === "enterprise" && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400 shrink-0">
                <Lock size={9} />
                Enterprise
              </span>
            )}
            {project.type === "opensource" && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shrink-0">
                Open Source
              </span>
            )}
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border border-violet-500/25 bg-violet-500/8 text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2 border-t border-white/8">
          {project.type === "enterprise" ? (
            <span className="flex items-center gap-1.5 text-xs text-white/20 cursor-default select-none">
              <Lock size={13} />
              Private repo
            </span>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-200"
            >
              <Code2 size={13} />
              Code
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-violet-300 transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black">
      {/* fade de entrada desde About */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.10),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            Projects
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-4"
        >
          Things I&apos;ve{" "}
          <span className="text-violet-400">built</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="text-white/40 text-base max-w-xl mb-14"
        >
          A selection of projects across data engineering, security, and full-stack development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
