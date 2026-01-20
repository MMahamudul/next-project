import Link from 'next/link'

const CATEGORIES = [
  {
    id: 'phones',
    name: 'Smartphones',
    description: 'Latest flagship and budget phones from top brands.',
    icon: '📱',
    color: 'from-sky-500/10 to-sky-500/0',
    itemCount: 24,
  },
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Work, gaming, and ultra-portable laptops.',
    icon: '💻',
    color: 'from-violet-500/10 to-violet-500/0',
    itemCount: 18,
  },
  {
    id: 'audio',
    name: 'Audio & Headphones',
    description: 'Headphones, speakers, and audio accessories.',
    icon: '🎧',
    color: 'from-amber-500/10 to-amber-500/0',
    itemCount: 16,
  },
  {
    id: 'wearables',
    name: 'Wearables',
    description: 'Smart watches and fitness trackers.',
    icon: '⌚',
    color: 'from-emerald-500/10 to-emerald-500/0',
    itemCount: 9,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Chargers, cables, and everyday essentials.',
    icon: '🔌',
    color: 'from-rose-500/10 to-rose-500/0',
    itemCount: 32,
  },
  {
    id: 'home-office',
    name: 'Home & Office',
    description: 'Monitors, keyboards, and workspace upgrades.',
    icon: '🏠',
    color: 'from-indigo-500/10 to-indigo-500/0',
    itemCount: 11,
  },
]

export default function Categories() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-blue-800">
              Category
            </h2>
            <p className="mt-2  text-sm text-center text-blue-700">
              Quickly jump into the type of products you&apos;re interested in.
              Categories are powered by your items data, and can be wired to filters.
            </p>
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            
          </div>

          {/* Optional CTA */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/items"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:border-slate-400 hover:bg-slate-50"
            >
              View all items
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category }) {
  return (
    <Link
      href={`/items?category=${encodeURIComponent(category.id)}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {/* Soft background accent */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${category.color}`}
      />

      <div className="relative flex items-start gap-3">
        {/* Icon bubble */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
          <span className="text-xl" aria-hidden="true">
            {category.icon}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-900">
              {category.name}
            </h3>
            {typeof category.itemCount === 'number' && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                {category.itemCount} items
              </span>
            )}
          </div>

          <p className="mt-1 text-xs text-slate-600 line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>

      {/* Footer / micro CTA */}
      <div className="relative mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Curated for you
        </span>
        <span className="inline-flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
          Explore
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
