import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req) {
  const { email, password } = await req.json()

  if (email === 'test@example.com' && password === '123456') {
    cookies().set('auth', 'true', {
      httpOnly: true,
      path: '/',
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
