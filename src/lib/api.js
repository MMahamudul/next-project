// lib/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000'

export async function getItems() {
  const res = await fetch(`${API_BASE}/items`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json()
}

export async function getItem(id) {
  const res = await fetch(`${API_BASE}/items/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch item')
  return res.json()
}
