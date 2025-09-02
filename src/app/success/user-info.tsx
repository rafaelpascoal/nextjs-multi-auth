// app/success/user-info.tsx

"use client"

import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { FaSignOutAlt } from "react-icons/fa"

import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


export default function UserInfo() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const router = useRouter()

  // Remove the additional client-side delay to avoid double loading
  useEffect(() => {
    setLoading(false)
  }, [])

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      // Sign out the user without automatic redirect
      await signOut({ redirect: false })
      // Manually redirect to login page
      router.push("/login")
    } catch (error) {
      console.error("Error signing out:", error)
      setIsSigningOut(false)
    }
  }

  if (status === "loading" || loading || isSigningOut) {
    return null // fallback is managed by the Suspense in the server
  }

  if (!session?.user) {
    return <p className="text-center">No user session found.</p>
  }

  return (
    <Card className="flex flex-col items-center justify-center space-y-4 min-h-[240px] transition-all duration-300 ease-in-out">
      <CardHeader className="w-full">
        <CardTitle className="text-2xl text-center">Login Successful 🎉</CardTitle>
      </CardHeader>

      <CardContent className="w-full">
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[240px] transition-all duration-300 ease-in-out">
            {/* User name */}
            <p><span className="font-medium">Name:</span> {session.user.name}</p>

            {/* User email */}
            <p><span className="font-medium">Email:</span> {session.user.email}</p>

            {/* User image */}
            {session.user.image ? (
                <img src={session.user.image} alt={session.user.name || "User"} className="w-16 h-16 rounded-full mt-4" />
            ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mt-4">
                    <span className="text-gray-500 text-xs">No Image</span>
                </div>
            )}

            {/* Sign out button */}
            <Button 
                variant="default" 
                className="w-full mt-4" 
                onClick={handleSignOut}
                disabled={isSigningOut}
            >
                <FaSignOutAlt className="size-4 mr-2" />
                {isSigningOut ? "Signing out..." : "Sign out"}
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}
