import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram.jsx'
import { projects } from '../content/profile.js'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hairline)] bg-white/60 px-3 py-1 text-xs font-semibold text-ink-1 dark:bg-white/5 dark:text-slate-1">
      {children}
    </span>
  )
}

function Metric({ k, v }) {
  return (
    <div className="rounded-2xl border border-[color:var(--hairline)] bg-white/60 px-4 py-3 dark:bg-white/5">
      <div className="text-xs font-medium text-[color:var(--muted)]">{k}</div>
      <div className="mt-1 text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
        {v}
      </div>
    </div>
  )
}

function ProjectCard({ p, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="panel p-5 md:p-6">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-ink-1 dark:text-slate-1">
              {p.name}
            </h3>
            <span className="rounded-full border border-[color:var(--hairline)] bg-white/50 px-2.5 py-1 text-xs font-medium text-[color:var(--muted)] dark:bg-white/5">
              {p.period}
            </span>
          </div>

          <div className="mt-2 text-sm font-medium text-[color:var(--muted)]">{p.role}</div>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{p.oneLiner}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:w-[360px]">
          {p.metrics.map((m) => (
            <Metric key={m.k} k={m.k} v={m.v} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
          关键工作
        </div>
        <ul className="grid gap-2 text-sm leading-6 text-[color:var(--muted)]">
          {p.what.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
              <span className="min-w-0">{x}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--hairline)] bg-white/60 px-3 py-2 text-sm font-semibold text-ink-1 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white/5 dark:text-slate-1"
        >
          {open ? '收起架构图' : '展开架构图'}
          <span aria-hidden className="text-[color:var(--muted)]">
            {open ? '↑' : '↓'}
          </span>
        </button>

        {open ? (
          <div className="mt-4">
            <ArchitectureDiagram nodes={p.architecture.nodes} edges={p.architecture.edges} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="container-max scroll-mt-28 py-16 md:py-20">
      <SectionHeader
        eyebrow="Projects"
        title="核心项目"
        desc="以架构、机制与指标呈现：负责域、关键决策、工程实现与可量化结果。"
      />

      <div className="mt-10 grid gap-4">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={0.03 + idx * 0.05}>
            <ProjectCard p={p} defaultOpen={idx === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

