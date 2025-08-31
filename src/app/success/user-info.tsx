"use client"

import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { FaSignOutAlt } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function UserInfo() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)

  // Simulate delay to show the skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  // If the session is loading or the loading state is true, return null
  if (status === "loading" || loading) {
    return null // fallback is managed by the Suspense in the server
  }

  // If no user session is found, return a message
  if (!session?.user) {
    return <p className="text-center">No user session found.</p>
  }

  // If the user session is found, return the user info
  return (
    // User info container
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Login successful 🎉</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4">

      {/* User name and email */}
      <p><span className="font-medium">Name:</span> {session.user.name}</p>

      {/* User email */}
      <p><span className="font-medium">Email:</span> {session.user.email}</p>

      {/* User image */}
      {session.user.image && (
        <img
          src={session.user.image}
          alt={session.user.name || "User"}
          className="w-16 h-16 rounded-full mx-auto mt-4"
        />
      )}

      {/* Sign out button */}
      <Button variant="outline" className="w-full mt-4" onClick={() => signOut()}>
        <FaSignOutAlt className="size-4 mr-2" />
        Sign out
      </Button>
      </CardContent>
    </Card>
  )
}
