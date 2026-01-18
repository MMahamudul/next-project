'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (path) =>
    `px-4 py-2 rounded transition ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NextItems
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/items" className={linkClass('/items')}>Items</Link>
          <Link href="/add-item" className={linkClass('/add-item')}>Add Item</Link>
          <Link
            href="/login"
            className="ml-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
