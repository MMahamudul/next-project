// src/components/sections/StatsSection.jsx

const STATS = [
  {
    id: 1,
    label: 'Items in catalog',
    value: '128',
    change: '+24 this week',
    trend: 'up',
  },
  {
    id: 2,
    label: 'Active users',
    value: '842',
    change: '+12%',
    trend: 'up',
  },
  {
    id: 3,
    label: 'Avg. rating',
    value: '4.8',
    change: 'Based on 320+ reviews',
    trend: 'neutral',
  },
  {
    id: 4,
    label: 'Uptime',
    value: '99.9%',
    change: 'Last 30 days',
    trend: 'neutral',
  },
]

export default function Stat() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16">
      {/* subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-center">
            Statistics
          </h2>
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-4xl text-center">
            Numbers that show our contribution
          </h2>
        {/* Header */}
        <div className="max-w-xl space-y-3">
         
          
        </div>

        {/* Stats grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

      
      </div>
    </section>
  )
}

function StatCard({ stat }) {
  const trendColor =
    stat.trend === 'up'
      ? 'text-emerald-400'
      : stat.trend === 'down'
      ? 'text-rose-400'
      : 'text-slate-300'

  const trendSymbol =
    stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '•'

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm transition hover:border-blue-500/80 hover:bg-slate-900/80">
      {/* subtle hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />
      </div>

      <div className="relative space-y-3">
        <p className="text-xs font-medium text-slate-400">{stat.label}</p>

        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-semibold text-white">{stat.value}</p>
        </div>

        <p className={`flex items-center gap-1 text-[11px] ${trendColor}`}>
          <span aria-hidden="true">{trendSymbol}</span>
          <span>{stat.change}</span>
        </p>

        {/* Mini progress bar just for visual flair */}
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800">
          <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 w-3/4" />
        </div>
      </div>
    </div>
  )
}
