// src/auth.config.js
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const protectedPaths = ['/items', '/add-item']
      const isProtected = protectedPaths.some(
        (p) => nextUrl.pathname === p || nextUrl.pathname.startsWith(p + '/')
      )

      if (isProtected) return isLoggedIn
      return true
    },
  },
  providers: [], // providers are added in auth.js
}
