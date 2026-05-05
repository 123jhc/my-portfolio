"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper } from "./SectionWrapper"

export function Timeline() {
  const { experiences } = portfolioData

  return (
    <SectionWrapper id="experience" title="个人经历" subtitle="教育背景与工作经历">
      <div className="relative space-y-8">
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] bg-[var(--color-border)]" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6"
          >
            <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)]" />
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <h3 className="font-semibold text-[var(--color-foreground)]">
                  {exp.company}
                </h3>
                <span className="text-xs text-[var(--color-muted)]">
                  {exp.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-[var(--color-primary)]">
                {exp.role}
              </p>
              <ul className="mt-2 space-y-1">
                {exp.description.map((desc, j) => (
                  <li
                    key={j}
                    className="text-sm text-[var(--color-muted)] leading-relaxed"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
