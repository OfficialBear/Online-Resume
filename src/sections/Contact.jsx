import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { profile } from '../content/profile.js'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

function LinkCard({ label, value, href }) {
  return (
    <a
      className="focus-ring block rounded-2xl border border-[color:var(--hairline)] bg-white/60 px-4 py-3 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white/5"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-xs font-medium text-[color:var(--muted)]">{label}</div>
      <div className="mt-1 truncate text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
        {value}
      </div>
    </a>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  return (
    <section id="contact" className="container-max scroll-mt-28 py-16 md:py-20">
      <SectionHeader
        eyebrow="Contact"
        title="联系方式"
        desc="可直接邮件联系，或通过公开主页查看项目与技术沉淀。"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal className="panel p-5 md:p-6">
          <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
            邮箱
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            {profile.links.email}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="focus-ring rounded-xl bg-ink-1 px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white dark:text-black"
              href={`mailto:${profile.links.email}`}
            >
              发邮件
            </a>
            <button
              type="button"
              className="focus-ring rounded-xl border border-[color:var(--hairline)] bg-white/60 px-4 py-2 text-sm font-semibold text-ink-1 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white/5 dark:text-slate-1"
              onClick={async () => {
                const ok = await copyText(profile.links.email)
                setCopied(ok)
                window.setTimeout(() => setCopied(false), 1400)
              }}
            >
              {copied ? '已复制' : '复制邮箱'}
            </button>
          </div>
        </Reveal>

        <div className="grid gap-3">
          <Reveal delay={0.04}>
            <LinkCard label="GitHub" value={profile.links.github} href={profile.links.github} />
          </Reveal>
          <Reveal delay={0.08}>
            <LinkCard label="LinkedIn" value={profile.links.linkedin} href={profile.links.linkedin} />
          </Reveal>
          <Reveal delay={0.12}>
            <LinkCard label="Blog / Notes" value={profile.links.blog} href={profile.links.blog} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

