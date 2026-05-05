"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Hero() {
  const { personalInfo } = portfolioData

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-[var(--color-border)]">
          <div className="flex h-full items-center justify-center text-3xl text-[var(--color-muted)]">
            {personalInfo.name.charAt(0)}
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {personalInfo.name}
        </h1>
        <p className="mt-3 text-lg text-[var(--color-muted)]">
          {personalInfo.title}
        </p>
        <p className="mt-4 max-w-md text-[var(--color-muted)]">
          {personalInfo.description}
        </p>
        <div className="mt-8 flex items-center gap-4">
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <FileText size={16} />
              下载简历
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-border)]"
          >
            联系我
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-[var(--color-muted)]"
      >
        <span className="text-xs">向下滚动</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}
