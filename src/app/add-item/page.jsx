'use client'

import { useState } from 'react'

export default function AddItem() {

  async function submit(e) {
    e.preventDefault()

    await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        price: e.target.price.value,
        image: e.target.image.value,
        description: e.target.description.value,
      }),
    })

    toast.success('Item added!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="price" placeholder="Price" />
      <input name="image" placeholder="Image URL" />
      <textarea name="description" />
      <button>Add Item</button>
      {msg && <p>{msg}</p>}
    </form>
  )
}
