
// middleware.js
export { auth as default } from './src/auth'

export const config = {
  matcher: ['/items/:path*', '/add-item/:path*'],
}

