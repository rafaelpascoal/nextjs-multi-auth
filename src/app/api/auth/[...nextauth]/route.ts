// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login", // Redirect to login page after authentication
    },
    callbacks: {
        async redirect() {
            return "/success"
        },
        async jwt({ token, account }: { token: any; account: any }) {
            // Add provider to token on login
            if (account) {
                token.provider = account.provider
            }
            return token
        },
        async session({ session, token }: { session: any; token: any }) {
            // pass provider to session
            session.user.provider = token.provider as string
            return session
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };