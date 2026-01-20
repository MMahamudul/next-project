import Link from 'next/link'
import ItemCard from '@/components/ItemCard'


const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ??
  process.env.NEXTAUTH_URL ??
  ''

export default async function ProductsSection() {
  const res = await fetch(`${API_BASE}/api/items`, { cache: 'no-store' })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('Failed to load products:', res.status, text)

    return (
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800">
            Featured Products
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Failed to load products.
          </p>
        </div>
      </section>
    )
  }

  const items = await res.json()
  const featured = items.slice(0, 4)

  return (
    <section className="bg-slate-50 py-16">
      <div>
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Featured Products
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/items"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
