export async function getItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/items`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json()
}

export async function getItem(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/items/${id}`,
    { cache: 'no-store' }
  )
  if (!res.ok) throw new Error('Failed to fetch item')
  return res.json()
}
