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
            return "/success"; // Redirect to success page after authentication
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };