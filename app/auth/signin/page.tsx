"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
            <Card className="w-full max-w-md shadow-xl px-5 py-10">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <CardDescription>Sign in to your account to continue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="pl-10"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm text-emerald-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-10 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <Link href="/">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                            Sign In
                        </Button>
                    </Link>

                    {/* Sign Up Link */}
                    <div className="text-center text-sm my-2">
                        Don't have an account?{" "}
                        <Link href="/auth/signup" className="font-semibold text-emerald-600 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
