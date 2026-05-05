"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl px-6"
      >
        {title && (
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-2 text-[var(--color-muted)]">{subtitle}</p>
        )}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </motion.div>
    </section>
  )
}
