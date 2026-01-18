'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) router.push('/items')
    else setError('Invalid credentials')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
  )
}
