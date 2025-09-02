// app/success/page.tsx

import { Suspense } from "react"                                     
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"  
import { Skeleton } from "@/components/ui/skeleton"                  
import UserInfo from "./user-info"                                   

export default function SuccessPage() {                             
  return (                                                           
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-md shadow-lg">                  
        <CardContent className="w-full">                                               
          <Suspense fallback={<SuccessSkeleton />}>                  
            <UserSection />                                         
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

// UserSection component - This is the component that will be used to display the user information
async function UserSection() {                                      
  await new Promise((r) => setTimeout(r, 1000))                       
  return <UserInfo />                                               
}

// SuccessSkeleton component - This is the component that will be used to display the loading skeleton
function SuccessSkeleton() {                                        
  return (                                                          
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[240px] transition-all duration-300 ease-in-out">

      {/* Title skeleton */}  
      <Skeleton className="h-15 w-56" />
      
      {/* Name skeleton */}
      <Skeleton className="h-6 w-48 mt-10" />
      
      {/* Email skeleton */}
      <Skeleton className="h-6 w-56" />
      
      {/* User image skeleton */}
      <Skeleton className="w-16 h-16 rounded-full mt-4" />
      
      {/* Sign out button skeleton */}
      <Skeleton className="h-9 w-full mt-4" />
    </div>
  )
}
