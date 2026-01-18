import Link from 'next/link'
import Image from 'next/image'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000'

export default async function ItemDetailsPage({ params }) {
  const { id } = await params

  const res = await fetch(`${API_BASE}/items/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/items" className="text-gray-600 hover:text-black">
          ← Back to all products
        </Link>
        <p className="mt-4 text-red-600">Failed to load product.</p>
      </main>
    )
  }

  const item = await res.json()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/items" className="text-gray-600 hover:text-black">
        ← Back to all products
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {item.image && (
          <div className="relative h-100 w-full">
            <Image
              src={item.image}
              alt={item.name || 'Product image'}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}

        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="mt-2 text-xl font-semibold">€ {item.price}</p>
          <p className="mt-4 text-gray-700">{item.description}</p>
        </div>
      </div>
    </main>
  )
}
