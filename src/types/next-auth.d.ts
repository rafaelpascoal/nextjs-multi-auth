// src/types/next-auth.d.ts

// Extend the Session and User interfaces to include the provider property

import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      provider?: string | null
    }
  }
  
  interface User {
    provider?: string | null
  }
}
