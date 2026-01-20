'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddItemForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name.trim()) {
      setError('Name is required')
      return
    }
    if (price === '' || isNaN(Number(price))) {
      setError('Price must be a valid number')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          price: Number(price),
          image: image.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to add item')
      }

      setSuccess('Item added successfully!')
      setName('')
      setDescription('')
      setPrice('')
      setImage('')

      router.push('/items')
      router.refresh() // helpful if items page is server-rendered
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Write Product Name Here"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price (€)<span className="text-red-500">*</span>
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Add Image Here (optional)"
        />
        <p className="mt-1 text-xs text-gray-500">
          Example: https://picsum.photos/id/180/400/300
        </p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-full bg-blue-950 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {loading ? 'Adding…' : 'Add Item'}
      </button>
    </form>
  )
}
