
import { NextResponse } from 'next/server'
import { AUTH_COOKIE_NAME, HARD_CODED_USER } from '@/lib/auth'

export async function POST(req) {
  const { email, password } = await req.json()

  const ok =
    email === HARD_CODED_USER.email && password === HARD_CODED_USER.password

  if (!ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })

  // Store credentials state in cookies (simple mock auth)
  res.cookies.set(AUTH_COOKIE_NAME, '1', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  })

  return res
}
