// src/app/api/items/route.js
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'

export async function GET() {
  try {
    const db = await connectDB()
    const items = await db.collection('items').find().toArray()
    return NextResponse.json(items)
  } catch (err) {
    console.error('GET /api/items error:', err)
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const db = await connectDB()
    const result = await db.collection('items').insertOne(body)
    return NextResponse.json(result, { status: 201 })
  } catch (err) {
    console.error('POST /api/items error:', err)
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 })
  }
}
