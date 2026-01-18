// src/auth.js
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'

// hardcoded demo user
const HARD_CODED_USER = {
  id: '1',
  name: 'Demo User',
  email: 'test@example.com',
  password: '123456',
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email
        const password = credentials?.password

        if (
          email === HARD_CODED_USER.email &&
          password === HARD_CODED_USER.password
        ) {
          return {
            id: HARD_CODED_USER.id,
            name: HARD_CODED_USER.name,
            email: HARD_CODED_USER.email,
          }
        }

        return null
      },
    }),
  ],
})
