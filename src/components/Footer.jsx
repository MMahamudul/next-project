import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">NextPro</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            A modern product hub showcasing electronics and digital items
          </p>

          {/* Social links */}
          <div className="mt-5 flex items-center gap-4">
            <SocialLink
              href="https://github.com"
              label="GitHub"
              icon="🐙"
            />
            <SocialLink
              href="https://linkedin.com"
              label="LinkedIn"
              icon="💼"
            />
            <SocialLink
              href="https://twitter.com"
              label="Twitter"
              icon="🐦"
            />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-white transition">
                Items
              </Link>
            </li>
            <li>
              <Link href="/add-item" className="hover:text-white transition">
                Add Item
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Features</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Cheaper Price</li>
            <li>Reliable Products</li>
            <li>Longevity Assurance </li>
            <li>Warranty and Installments</li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Mission</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our mission is to provide best quality product in cheaper price.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextPro. All rights reserved.
      </div>
    </footer>
  )
}

/* Small reusable social link */
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-lg transition hover:bg-blue-600 hover:text-white"
    >
      <span aria-hidden="true">{icon}</span>
    </a>
  )
}
