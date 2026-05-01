import { SectionHeader } from '../components/SectionHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { capabilityModel } from '../content/profile.js'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hairline)] bg-white/60 px-2.5 py-1 text-xs font-medium text-[color:var(--muted)] dark:bg-white/5">
      {children}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="container-max scroll-mt-28 py-16 md:py-20">
      <SectionHeader
        eyebrow="Skills"
        title="核心能力"
        desc="系统化交付、分布式一致性、高并发性能、可观测稳定性与工程化平台能力。"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {capabilityModel.map((m, idx) => (
          <Reveal key={m.name} className="panel p-5 md:p-6" delay={0.05 + idx * 0.05}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold tracking-tight text-ink-1 dark:text-slate-1">
                  {m.name}
                </div>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{m.summary}</p>
              </div>

              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--hairline)] bg-white/70 text-sm font-semibold text-ink-1 shadow-[0_1px_0_rgba(15,23,42,.04)] dark:bg-white/5 md:flex">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {m.signals.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

