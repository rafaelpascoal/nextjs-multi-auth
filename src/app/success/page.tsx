import { Suspense } from "react"
import UserInfo from "@/app/success/user-info"
import { Skeleton } from "@/components/ui/skeleton"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Suspense fallback={<SuccessSkeleton />}>
          <UserInfo />
        </Suspense>
      </div>
    </div>
  )
}

function SuccessSkeleton() {
  return (
    <div className="space-y-4 p-6 border rounded-lg shadow">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  )
}
