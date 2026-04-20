"use client"

import { motion, type Transition } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight, Send } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: "easeOut" } as Transition,
})

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/4 border border-violet-500/15 text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-300 text-sm"

export default function Contact() {
  const [state, handleSubmit] = useForm("mgorzope")

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-black">

      {/* Background blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(139,92,246,0.14),transparent)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Floating particles */}
      {[
        { top: "20%", right: "12%", size: "w-1.5 h-1.5", delay: 0 },
        { top: "40%", right: "25%", size: "w-1 h-1", delay: 0.8 },
        { bottom: "30%", left: "10%", size: "w-2 h-2", delay: 1.4 },
        { top: "60%", left: "28%", size: "w-1 h-1", delay: 0.3 },
        { bottom: "20%", right: "32%", size: "w-1.5 h-1.5", delay: 2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} rounded-full bg-violet-400/60 pointer-events-none`}
          style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: p.delay } as Transition}
        />
      ))}

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(167,139,250,0.9)]" />
            Contact
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white mb-4"
        >
          Ready to{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
            collaborate?
          </span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-lg text-white/50 max-w-xl mb-12 leading-relaxed font-light">
          I&apos;m always open to new opportunities and exciting projects. Whether you have a question or just want to say hi —{" "}
          <span className="text-white/80 font-normal">I&apos;ll get back to you.</span>
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] gap-12 items-start">

          {/* Left — contact info */}
          <motion.div {...fadeUp(0.25)} className="flex flex-col gap-5">
            <div className="group rounded-2xl border border-violet-500/15 bg-white/3 backdrop-blur-sm p-6 flex items-center gap-4 hover:border-violet-500/35 hover:bg-violet-500/5 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/25 to-fuchsia-600/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300">
                <Mail className="w-5 h-5 text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">Email</p>
                <span className="text-white/80 text-sm break-all">juliancamilorodriguezcamelo21@gmail.com</span>
              </div>
            </div>

          

            <div className="mt-2 rounded-2xl border border-violet-500/10 bg-violet-500/5 p-6">
              <p className="text-xs text-white/25 uppercase tracking-widest mb-3">Response time</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Usually within <span className="text-violet-400 font-medium">24 hours</span>. For urgent requests, email is fastest.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.3)}>
            {state.succeeded ? (
              <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm p-12 flex flex-col items-center justify-center gap-4 text-center min-h-[360px]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 border border-violet-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                  <Send className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-white/50 text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-violet-500/15 bg-white/3 backdrop-blur-sm p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" required placeholder="Julian Rodriguez" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className={inputClass} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" placeholder="Let's build something together" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 font-semibold mt-1 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {state.submitting ? "Sending…" : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
