"use client"

import { motion, AnimatePresence, type Transition } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" } as Transition}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5"
      >
        <div
          className={cn(
            "w-full max-w-4xl rounded-2xl border transition-all duration-500 px-6 py-3 flex items-center justify-between",
            isScrolled
              ? "bg-zinc-950/80 backdrop-blur-xl border-zinc-800/80 shadow-[0_0_40px_rgba(139,92,246,0.08)]"
              : "bg-zinc-950/40 backdrop-blur-md border-zinc-800/40"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="text-lg font-black tracking-tighter text-white">
              dev
            </span>
            <span className="text-lg font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              .
            </span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.9)]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" } as Transition}
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg group block"
                >
                  {activeItem === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                      transition={{ duration: 0.2 } as Transition}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 px-5"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-400 hover:text-white hover:bg-violet-500/10 rounded-xl transition-all"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 } as Transition}
            className="fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-2xl md:hidden flex flex-col"
          >
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative flex items-center justify-between px-6 pt-6 pb-4 border-b border-zinc-800/50">
              <a href="#" className="flex items-center gap-1">
                <span className="text-lg font-black tracking-tighter text-white">dev</span>
                <span className="text-lg font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">.</span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-zinc-400 hover:text-white hover:bg-violet-500/10 rounded-xl"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <ul className="relative flex flex-col gap-2 flex-1 justify-center px-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" } as Transition}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 py-3"
                  >
                    <span className="w-8 h-px bg-gradient-to-r from-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-4xl font-black tracking-tighter text-zinc-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="relative px-8 pb-10">
              <Button
                size="lg"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 font-bold text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
