// src/app/api/items/[id]/route.js
import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { connectDB } from '@/lib/db'

export async function GET(_req, { params }) {
  try {
    const { id } = await params
    const db = await connectDB()
    const item = await db
      .collection('items')
      .findOne({ _id: new ObjectId(id) })

    if (!item) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(item)
  } catch (error) {
    console.error('GET /api/items/[id] error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    )
  }
}

