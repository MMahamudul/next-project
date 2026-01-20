// src/lib/db.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI

if (!uri) {
  throw new Error(' MONGO_URI not defined in environment variables')
}

let client
let db

export async function connectDB() {
  if (db) return db

  if (!client) {
    client = new MongoClient(uri)
  }

  await client.connect()
  db = client.db() // use DB from connection string

  return db
}
