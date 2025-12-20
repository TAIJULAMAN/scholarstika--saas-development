"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Forgot Password?</CardTitle>
                    <CardDescription>
                        No worries! Enter your email and we'll send you a reset link
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    <Link className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900" href="/auth/reset-password">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                            Send Reset Link
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
