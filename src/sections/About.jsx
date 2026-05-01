import { SectionHeader } from '../components/SectionHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'

export function About() {
  return (
    <section id="about" className="container-max scroll-mt-28 py-16 md:py-20">
      <SectionHeader
        eyebrow="About"
        title="定位"
        desc="交易链路与消息系统方向后端工程师：以容量、稳定性、可观测与一致性为核心抓手，推动系统持续演进。"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Reveal className="panel p-5 md:p-6" delay={0.05}>
          <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
            以指标验收交付
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            以 P95/P99、吞吐、错误预算、命中率、重试成功率、差异率与 MTTR 作为验收基线；上线后用数据闭环复盘。
          </p>
        </Reveal>

        <Reveal className="panel p-5 md:p-6" delay={0.10}>
          <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
            一致性工程闭环
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            事务边界、幂等去重、可靠消息（Outbox/回放/DLQ）与对账补偿编排，形成可观测、可回放、可修复闭环。
          </p>
        </Reveal>

        <Reveal className="panel p-5 md:p-6" delay={0.15}>
          <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
            稳定性与可观测
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            压测与容量模型、峰值保护（限流/熔断/降级）、告警降噪与复盘机制，结合 traceId 贯穿的链路追踪提升定位与恢复效率。
          </p>
        </Reveal>
      </div>
    </section>
  )
}

