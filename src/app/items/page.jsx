import ItemCard from '@/components/ItemCard'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000'

export default async function ItemsPage() {
  const res = await fetch(`${API_BASE}/items`, { cache: 'no-store' })

  if (!res.ok) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-4 text-red-600">Failed to load products.</p>
      </main>
    )
  }

  const items = await res.json()

  return (
    <main className="max-w-7xl mx-auto px-1 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-800">All Products</h1>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </main>
  )
}

