import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const token = await getToken({ req })

  if (!token && req.nextUrl.pathname.startsWith('/add-item')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

