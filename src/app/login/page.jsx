import { Suspense } from 'react'
import LoginForm from './LoginForm'

export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <Suspense fallback={<p className="text-sm text-gray-500">Loading login…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  )
}
