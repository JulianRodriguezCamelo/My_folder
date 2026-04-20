"use client"

import { motion, Transition } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
})

const skills = ["Java", "Python", "Data Engineering", "AI", "Security", "TypeScript"]

function ProfilePhoto() {
  return (
    <div className="relative w-full flex justify-center">
      {/* glow animado detrás */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[580px] bg-violet-600 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[460px] bg-fuchsia-500 rounded-full blur-[80px] pointer-events-none"
      />

      {/* entrada con fadeUp + float continuo */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        className="relative w-80 md:w-96 lg:w-[420px]"
      >
        {/* float suave */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-violet-400/50 via-fuchsia-400/30 to-violet-600/50 pointer-events-none" />

          {/* imagen con hover zoom */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.45),0_0_160px_rgba(139,92,246,0.18)]"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/WhatsApp Image 2026-04-19 at 7.09.41 PM.jpeg"
                alt="Julian Rodriguez"
                fill
                className="object-cover object-[center_30%]"
                priority
              />
              {/* fade inferior solo sobre la imagen */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-black pointer-events-none" />
            </div>
            {/* shimmer al hover */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "100%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          <div className="absolute inset-0 rounded-3xl ring-1 ring-violet-400/40 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black">

   
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_110%,rgba(139,92,246,0.14),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">


        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            About
          </span>
        </motion.div>

       
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 items-center">

          <div>
            <motion.p {...fadeUp(0.05)} className="text-white/40 text-sm font-medium tracking-widest uppercase mb-3">
              Julian Camilo Rodriguez
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-4xl md:text-5xl lg:text-[88px] font-bold leading-none mb-8"
            >
              I&apos;m a{" "}
              <br />
              <TypeAnimation
                sequence={[
                  "Full-Stack Dev.", 2000,
                  "Data Engineer.",  2000,
                  "Security Builder.", 2000,
                  "AI Thinker.",     2000,
                ]}
                repeat={Infinity}
                className="text-violet-400"
              />
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-white/60 leading-relaxed max-w-xl mb-4"
            >
              Mid-level full-stack developer based in Bogotá, Colombia. Java, Python, data, AI, security —
              not as separate skills, but as{" "}
              <span className="text-white/90 font-medium">one way of thinking.</span>
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } }
              }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden:  { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Columna derecha — carrusel de fotos */}
          <motion.div {...fadeUp(0.4)} className="hidden lg:flex items-center justify-center">
            <ProfilePhoto />
          </motion.div>

        </div>

      </div>
    </section>
  )
}