// components/sections/ProductsSection.js
import Link from 'next/link'
import ItemCard from '@/components/ItemCard'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000'

export default async function ProductsSection() {
  const res = await fetch(`${API_BASE}/items`, { cache: 'no-store' })

  if (!res.ok) {
    // you can make this fancier later
    return (
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <p className="mt-2 text-sm text-red-600">
            Failed to load products from the API.
          </p>
        </div>
      </section>
    )
  }

  const items = await res.json()
  const featured = items.slice(0, 4)

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <p className="mt-1 text-sm text-gray-600">
              Pulled live from your Express + MongoDB backend.
            </p>
          </div>

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
