export const profile = {
  name: 'GengCanwei',
  title: 'Java 后端工程师（Spring Boot / 分布式 / 高并发）',
  tagline:
    '专注交易链路与消息系统：高并发、稳定性、分布式一致性与可观测；以指标验收交付。',
  location: '中国',
  availability: '到岗：2-4 周',
  links: {
    email: 'gengcanwei@gmail.com',
    github: 'https://github.com/gengcanwei',
    linkedin: 'https://www.linkedin.com/in/gengcanwei',
    blog: 'https://gengcanwei.com',
  },
  highlights: [
    { k: '交易链路治理', v: '峰值 20k+ QPS；P95 210ms → 95ms；稳定支撑大促峰值' },
    { k: 'Kafka 可靠消息', v: '幂等/顺序/重试/DLQ/回放；重复消费事故 3/月 → 0' },
    { k: '一致性闭环', v: 'Outbox + 对账 + 补偿编排；库存差异率 0.1% → 0.001%' },
    { k: '缓存与成本', v: 'Redis 多级缓存；命中率长期 95%+；热点隔离与请求合并' },
  ],
}

export const capabilityModel = [
  {
    name: '系统化交付能力',
    summary:
      '以 SLA 与错误预算驱动交付：容量模型、灰度发布、回滚预案与验收指标闭环。',
    signals: [
      '容量评估与压测基线（QPS/CPU/RT/错误率）',
      '灰度与回滚机制（分批放量、指标门禁）',
      '上线后数据复盘（SLA、告警、用户影响）',
    ],
  },
  {
    name: '分布式一致性与边界治理',
    summary:
      '明确事务边界与一致性策略：可靠消息、幂等去重、对账补偿，让问题可观测、可回放、可修复。',
    signals: ['Outbox / CDC（写入与事件一致）', '幂等键 + 去重表（Exactly-once 语义）', '对账与补偿编排（闭环修复）'],
  },
  {
    name: '高并发与性能工程',
    summary:
      '围绕瓶颈做系统性优化：热点隔离、慢 SQL 治理、线程池与缓存策略，结果以 P95/P99 与吞吐验证。',
    signals: ['限流/熔断/降级（峰值保护）', '多级缓存与热点隔离（击穿/雪崩治理）', '慢 SQL / 索引 / 读写路径优化'],
  },
  {
    name: '可观测与稳定性工程',
    summary:
      '用日志、指标、链路追踪定位故障根因；通过告警降噪与演练机制缩短 MTTR。',
    signals: ['Tracing（traceId 贯穿）', '告警分级与降噪（误报/重复告警治理）', '演练 + 复盘（故障域与预案）'],
  },
  {
    name: '工程化与影响力',
    summary:
      '平台化与标准化沉淀：统一治理口径、减少重复劳动、提升团队交付稳定性与效率。',
    signals: ['通用组件/SDK（复用与一致性）', '规范与模板（工程约束）', '评审机制与知识沉淀（质量闭环）'],
  },
]

export const projects = [
  {
    name: '交易下单链路：高并发与一致性治理',
    role: 'Owner / Tech Lead（后端）',
    period: '2024.06 - 2025.03',
    stack: ['Spring Boot', 'MySQL', 'Redis', 'Kafka', 'Sentinel', 'OpenTelemetry'],
    oneLiner: '主导下单链路治理：高并发承载、可观测落地、数据一致性闭环与故障演练。',
    metrics: [
      { k: 'P95 延迟', v: '210ms → 95ms' },
      { k: '峰值吞吐', v: '6k QPS → 20k+ QPS' },
      { k: '库存一致性', v: '超卖率 0.1% → 0.001%（对账闭环）' },
    ],
    what: [
      '设计并实现订单状态机：写入路径短事务 + 异步化；读路径缓存 + 预聚合，降低核心链路 RT。',
      '落地 Kafka 事件驱动解耦：下单/支付/履约分层；实现幂等键、顺序约束、重试与 DLQ 回收。',
      '构建 Redis 多级缓存体系：热点 Key 隔离、请求合并、穿透/击穿/雪崩治理；命中率长期 95%+。',
      '稳定性工程：限流/熔断/降级策略与容量模型；traceId 全链路追踪与告警降噪，缩短故障定位时间。',
    ],
    architecture: {
      nodes: [
        { id: 'web', title: 'Web / App', caption: '用户请求' },
        { id: 'gw', title: 'API Gateway', caption: '鉴权/路由/限流' },
        { id: 'order', title: 'Order Service', caption: '状态机/写路径' },
        { id: 'redis', title: 'Redis', caption: '多级缓存/热点隔离' },
        { id: 'mysql', title: 'MySQL', caption: '订单/库存/去重表' },
        { id: 'kafka', title: 'Kafka', caption: '事件总线' },
        { id: 'pay', title: 'Payment', caption: '异步回调' },
        { id: 'ful', title: 'Fulfillment', caption: '履约/发货' },
        { id: 'obs', title: 'Observability', caption: 'Logs/Metrics/Tracing' },
      ],
      edges: [
        ['web', 'gw'],
        ['gw', 'order'],
        ['order', 'redis'],
        ['order', 'mysql'],
        ['order', 'kafka'],
        ['kafka', 'pay'],
        ['kafka', 'ful'],
        ['order', 'obs'],
        ['gw', 'obs'],
        ['pay', 'obs'],
      ],
    },
  },
  {
    name: '消息可靠性平台：重试、回放与对账',
    role: '核心开发',
    period: '2023.08 - 2024.05',
    stack: ['Kafka', 'Spring Boot', 'MySQL', 'Redis'],
    oneLiner: '构建 Kafka 可靠消息能力：重试编排、死信回收、精准回放与一致性对账。',
    metrics: [
      { k: '重复消费', v: '线上事故月均 3 次 → 0 次' },
      { k: '回放效率', v: '小时级 → 分钟级（按业务键精准回放）' },
      { k: '定位耗时', v: '30-60min → 5-10min（关联追踪）' },
    ],
    what: [
      '设计消息协议与幂等规范：businessKey + eventId；去重表与 TTL 策略，约束消费语义。',
      '实现统一重试编排：指数退避、最大重试、DLQ；支持人工回收与审计追踪。',
      '实现精准回放与对账：按业务键回放、时间窗补偿；差异对账闭环与修复编排。',
    ],
    architecture: {
      nodes: [
        { id: 'svc', title: '业务服务', caption: '生产/消费事件' },
        { id: 'kafka', title: 'Kafka', caption: 'Topic/Partition' },
        { id: 'retry', title: 'Retry Orchestrator', caption: '重试/退避/DLQ' },
        { id: 'work', title: 'Console', caption: '回放/追踪/工单' },
        { id: 'store', title: 'MySQL', caption: '去重/状态/审计' },
        { id: 'cache', title: 'Redis', caption: '热数据/加速查询' },
      ],
      edges: [
        ['svc', 'kafka'],
        ['kafka', 'svc'],
        ['kafka', 'retry'],
        ['retry', 'kafka'],
        ['retry', 'store'],
        ['work', 'retry'],
        ['work', 'store'],
        ['work', 'cache'],
      ],
    },
  },
]

export const experience = [
  {
    company: '头部互联网公司',
    title: '高级后端工程师',
    period: '2023 - 至今',
    bullets: [
      '负责交易/订单域关键链路：容量模型、压测基线、峰值保护策略与故障演练体系落地。',
      '主导 Kafka 事件驱动拆分：沉淀幂等、顺序与重试框架，降低跨团队协作与问题定位成本。',
      '建设可观测体系：traceId 贯穿、告警降噪与复盘机制，故障定位与恢复效率提升。',
    ],
  },
  {
    company: '成长型公司 / 业务中台',
    title: '后端工程师',
    period: '2021 - 2023',
    bullets: [
      '核心服务性能优化：慢 SQL、索引与缓存策略优化；线程池与限流治理，提升吞吐与稳定性。',
      '一致性治理：对账、补偿任务与巡检体系建设，形成可量化质量指标与修复闭环。',
    ],
  },
]

