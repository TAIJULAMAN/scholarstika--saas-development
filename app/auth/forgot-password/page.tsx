"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50">
            <div className="w-full max-w-md shadow-xl p-5 bg-white rounded-md">
                <div className="space-y-1 text-center">
                    <h1 className="text-2xl font-bold">Forgot Password?</h1>
                    <p className="text-sm text-gray-600">
                        No worries! Enter your email and we'll send you a reset link
                    </p>
                </div>
                <div className="space-y-4 pt-10">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
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

                    {/* Send Reset Link Button */}
                    <Link className="flex items-center justify-center gap-2 my-2 text-sm text-gray-600 hover:text-gray-900" href="/auth/verify-otp">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                            Send OTP
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
