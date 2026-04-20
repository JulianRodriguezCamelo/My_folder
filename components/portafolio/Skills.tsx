"use client"

import { motion, type Transition } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/registry/magicui/interactive-grid-pattern"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
})

type Skill = {
  name: string
  project: string
  level: number 
}

type Domain = {
  id: string
  label: string
  description: string
  skills: Skill[]
  gradient: string
}

const domains: Domain[] = [
  {
    id: "web",
    label: "Web & Backend",
    description: "Full-stack development with modern frameworks",
    gradient: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Next.js", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "React", project: "Ayrton", level: 5 },
      { name: "TypeScript", project: "Ayrton", level: 5 },
      { name: "Tailwind CSS", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "Apollo Client", project: "Ayrton", level: 4 },
      { name: "GraphQL", project: "Ayrton", level: 4 },
      { name: "Python / Flask", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "Java / Spring Boot", project: "Ayrton", level: 4 },
      { name: "REST APIs", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "WhatsApp Cloud API", project: "OpenW", level: 4 },
    ],
  },
  {
    id: "ai",
    label: "Data & AI",
    description: "Machine learning, NLP, and data pipelines",
    gradient: "from-cyan-500 to-violet-500",
    skills: [
      { name: "Groq / LLaMA 3.1", project: "Mark 18 — Vulnerability Pipeline", level: 5 },
      { name: "Prompt Engineering", project: "Mark 18 — Vulnerability Pipeline", level: 5 },
      { name: "pandas", project: "Mark 18 — Vulnerability Pipeline", level: 5 },
      { name: "openpyxl / xlrd", project: "Athena — Hallazgos ERO", level: 4 },
      { name: "python-docx", project: "Mark 18 — Vulnerability Pipeline", level: 4 },
      { name: "Recharts", project: "Athena — Hallazgos ERO", level: 4 },
      { name: "pgVector", project: "OpenW", level: 4 },
      { name: "HuggingFace", project: "SenaSoft — Support Chatbot", level: 4 },
      { name: "scikit-learn", project: "SenaSoft — Support Chatbot", level: 4 },
      { name: "NLP", project: "SenaSoft — Support Chatbot", level: 4 },
    ],
  },
  {
    id: "security",
    label: "Security",
    description: "Authentication, compliance, and hardening",
    gradient: "from-rose-500 to-violet-500",
    skills: [
      { name: "JWT", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "OAuth2", project: "Ayrton", level: 4 },
      { name: "RBAC", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "CIS Benchmark", project: "CIS Benchmark Playbooks", level: 5 },
      { name: "Linux Hardening", project: "CIS Benchmark Playbooks", level: 5 },
      { name: "NIST / PCI-DSS", project: "CIS Benchmark Playbooks", level: 4 },
      { name: "Vulnerability Analysis", project: "Mark 18 — Vulnerability Pipeline", level: 5 },
    ],
  },
  {
    id: "infra",
    label: "Tools & Infra",
    description: "DevOps, databases, and automation",
    gradient: "from-amber-500 to-violet-500",
    skills: [
      { name: "Ansible", project: "CIS Benchmark Playbooks", level: 5 },
      { name: "Docker Compose", project: "Athena — Hallazgos ERO", level: 5 },
      { name: "PostgreSQL", project: "Ayrton", level: 5 },
      { name: "SQLAlchemy", project: "Athena — Hallazgos ERO", level: 4 },
      { name: "Google Drive API", project: "Mark 18 — Vulnerability Pipeline", level: 4 },
      { name: "pnpm monorepo", project: "Ayrton", level: 4 },
      { name: "Git / GitHub", project: "Athena — Hallazgos ERO", level: 5 },
    ],
  },
]

function SkillNode({ skill, index, isActive }: { skill: Skill; index: number; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className={cn(
          "relative cursor-default",
          "px-4 py-2 rounded-xl",
          "border backdrop-blur-sm",
          "transition-all duration-300",
          isActive
            ? "border-violet-400/40 bg-violet-500/15 text-violet-200"
            : "border-white/10 bg-white/5 text-white/60 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{skill.name}</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 h-1 rounded-full transition-colors duration-300",
                  i < skill.level
                    ? isActive || isHovered
                      ? "bg-violet-400"
                      : "bg-violet-400/50"
                    : "bg-white/20"
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 4,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
      >
        <div className="px-3 py-1.5 rounded-lg bg-zinc-900/95 border border-violet-500/30 backdrop-blur-md whitespace-nowrap">
          <p className="text-xs text-violet-300 font-medium">{skill.project}</p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-zinc-900/95 border-r border-b border-violet-500/30" />
      </motion.div>
    </motion.div>
  )
}

function DomainSection({ domain, index }: { domain: Domain; index: number }) {
  const [isExpanded, setIsExpanded] = useState(true)
  
  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.1)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-violet-500/15 bg-black/80 backdrop-blur-sm">
        <InteractiveGridPattern
          width={32}
          height={32}
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_50%_50%,white,transparent)]",
            "opacity-40"
          )}
        />
        

        <div className={cn(
          "absolute top-0 left-0 right-0 h-px",
          "bg-gradient-to-r",
          domain.gradient,
          "opacity-50"
        )} />
        
        <div className="relative z-10 p-6">

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between mb-4 group/header"
          >
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white group-hover/header:text-violet-300 transition-colors">
                {domain.label}
              </h3>
              <p className="text-xs text-white/40">{domain.description}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-violet-400/60 font-medium">
                {domain.skills.length} skills
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-white/40"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </button>
          
       
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 pt-2">
              {domain.skills.map((skill, i) => (
                <SkillNode 
                  key={skill.name} 
                  skill={skill} 
                  index={i}
                  isActive={true}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}


function SkillStats() {
  const totalSkills = domains.reduce((acc, d) => acc + d.skills.length, 0)
  const avgLevel = (
    domains.reduce(
      (acc, d) => acc + d.skills.reduce((a, s) => a + s.level, 0),
      0
    ) / totalSkills
  ).toFixed(1)
  
  return (
    <motion.div
      {...fadeUp(0.15)}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
    >
      {[
        { label: "Total Skills", value: totalSkills, suffix: "+" },
        { label: "Domains", value: domains.length, suffix: "" },
        { label: "Avg. Proficiency", value: avgLevel, suffix: "/5" },
        { label: "Projects Applied", value: "6", suffix: "+" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.05 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative px-4 py-3 rounded-xl border border-violet-500/10 bg-black/50 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">
              {stat.value}
              <span className="text-violet-400">{stat.suffix}</span>
            </p>
            <p className="text-xs text-white/40">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      

      <div className="absolute top-1/4 left-10 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            </span>
            Technical Arsenal
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Tools I&apos;ve{" "}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400">
              mastered
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-fuchsia-400/20 to-violet-400/20 blur-2xl" />
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="text-white/40 text-base md:text-lg max-w-2xl mb-10"
        >
          A comprehensive stack built through real-world projects. 
          <span className="text-violet-300/60"> Hover any skill to discover where I applied it.</span>
        </motion.p>


        <SkillStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {domains.map((domain, i) => (
            <DomainSection key={domain.id} domain={domain} index={i} />
          ))}
        </div>
        
       
        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}
