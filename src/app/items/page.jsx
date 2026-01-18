import ItemCard from '@/components/ItemCard'

export default async function ItemsPage() {
  const res = await fetch('http://localhost:5000/items', { cache: 'no-store' })
  const items = await res.json()

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {items.map(item => (
  <ItemCard key={item._id} item={item} />
))}
    </div>
  )
}

