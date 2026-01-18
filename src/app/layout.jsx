import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from './providers'

export const metadata = {
  title: 'NextItems',
  description: 'Items app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

