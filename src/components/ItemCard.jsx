import Link from 'next/link'
import Image from 'next/image'

export default function ItemCard({ item }) {
  if (!item) return null

  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 flex flex-col">
      {item.image && (
        <div className="relative h-44 w-full">
          <Image
            src={item.image}
            alt={item.name || 'Product image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      )}

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>

        {item.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
        )}

        {item.price !== undefined && (
          <p className="mt-1 font-semibold">€ {item.price}</p>
        )}

        <Link
          href={`/items/${item._id}`}
          className="mt-2 inline-flex justify-center rounded-full bg-blue-950 px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
