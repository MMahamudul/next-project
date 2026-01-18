import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">NextItems</h2>
          <p className="mt-3 text-sm">
            Simple full-stack demo app built with Next.js and Express.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/items" className="hover:text-white">Items</Link></li>
            <li><Link href="/add-item" className="hover:text-white">Add Item</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Project</h3>
          <p className="text-sm">
            Built using Next.js App Router, Express API and MongoDB.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} NextItems. All rights reserved.
      </div>
    </footer>
  )
}
