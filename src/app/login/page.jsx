'use client'
export const dynamic = 'force-dynamic'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/items'

  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: next,
    })

    setLoading(false)

    if (!res?.ok) {
      setError('Invalid email or password')
      return
    }

    router.replace(next)
  }

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Demo credentials:
          <br /> <b>test@example.com</b> / <b>123456</b>
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            disabled={loading}
            className="w-full rounded-full bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}
