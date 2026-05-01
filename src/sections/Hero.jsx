import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content/profile.js'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-light" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:theme(backgroundImage.grid-faint)] [background-size:44px_44px]" />

      <div className="container-max">
        <div className="panel px-5 py-8 md:px-8 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-sm font-medium text-[color:var(--muted)]"
              >
                {profile.location} · {profile.availability}
              </motion.p>

              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
                className="mt-4 text-4xl font-semibold tracking-tighter2 text-ink-1 dark:text-slate-1 md:text-5xl"
              >
                {profile.name}
                <span className="block text-[0.62em] font-medium tracking-tight text-[color:var(--muted)] md:mt-2">
                  {profile.title}
                </span>
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
                className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] md:text-[17px]"
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <button
                  type="button"
                  onClick={() => scrollToId('projects')}
                  className="focus-ring rounded-xl bg-ink-1 px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white dark:text-black"
                >
                  核心项目
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId('contact')}
                  className="focus-ring rounded-xl border border-[color:var(--hairline)] bg-white/60 px-4 py-2 text-sm font-semibold text-ink-1 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white/5 dark:text-slate-1"
                >
                  联系方式
                </button>
              </motion.div>
            </div>

            <div className="grid gap-3 md:justify-items-end">
              {profile.highlights.map((h, idx) => (
                <motion.div
                  key={h.k}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: 0.12 + idx * 0.06,
                  }}
                  className="w-full rounded-2xl border border-[color:var(--hairline)] bg-white/70 px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,.04)] dark:bg-white/5 md:max-w-[360px]"
                >
                  <div className="text-xs font-semibold tracking-tight text-ink-1 dark:text-slate-1">
                    {h.k}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{h.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

