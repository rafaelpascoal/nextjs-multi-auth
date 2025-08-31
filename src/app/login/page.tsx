import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { CiMail} from "react-icons/ci";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-semibold">
                        Sign in to your account
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                {/* Email Login*/}
                <form className="space-y-4">
                    <Input 
                        type="email" 
                        placeholder="email@example.com" 
                        required
                        aria-label="Email Address"
                    />
                    <Button type="submit" className="w-full">   
                        <CiMail className="size-4 mr-2" />    
                        Login with Email
                    </Button>
                </form>

                {/* Separator */}
                <div className="flex items-center space-x-2">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">
                        OR CONTINUE WITH
                    </span>
                    <Separator className="flex-1" />
                </div>

                {/* OAuth Buttons */}
                <div className="grid gap-3">
                    <Button variant="outline" className="w-full">
                        <FaGoogle className="size-4 mr-2" />
                        Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <FaGithub className="size-4 mr-2" />
                        Continue with GitHub
                    </Button>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}