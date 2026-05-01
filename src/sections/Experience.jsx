import { SectionHeader } from '../components/SectionHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { experience } from '../content/profile.js'

export function Experience() {
  return (
    <section id="experience" className="container-max scroll-mt-28 py-16 md:py-20">
      <SectionHeader
        eyebrow="Experience"
        title="工作经历"
        desc="围绕交易链路、消息系统与稳定性治理交付工程结果。"
      />

      <div className="mt-10 grid gap-4">
        {experience.map((e, idx) => (
          <Reveal key={e.company} className="panel p-5 md:p-6" delay={0.05 + idx * 0.05}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold tracking-tight text-ink-1 dark:text-slate-1">
                {e.company}
              </div>
              <div className="rounded-full border border-[color:var(--hairline)] bg-white/50 px-3 py-1 text-xs font-medium text-[color:var(--muted)] dark:bg-white/5">
                {e.period}
              </div>
            </div>
            <div className="mt-1 text-sm font-medium text-[color:var(--muted)]">{e.title}</div>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--muted)]">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-2 to-brand-3" />
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

