"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff, UserCircle } from "lucide-react"
import { useState } from "react"

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [selectedRole, setSelectedRole] = useState("")

    const roles = [
        { value: "admin", label: "Admin" },
        { value: "student", label: "Student" },
        { value: "parent", label: "Parent" },
        { value: "teacher", label: "Teacher" },
        { value: "branch_manager", label: "Branch Manager" },
        { value: "institution_manager", label: "Institution Manager" },
    ]

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
            <Card className="w-full max-w-md shadow-xl px-5 py-10">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>Enter your details to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="pl-10"
                            />
                        </div>
                    </div>

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

                    {/* Role Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="role">Select Role</Label>
                        <Select value={selectedRole} onValueChange={setSelectedRole}>
                            <SelectTrigger className="w-full">
                                <div className="flex items-center gap-2">
                                    <UserCircle className="h-5 w-5 text-gray-400" />
                                    <SelectValue placeholder="Choose your role" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {roles.map((role) => (
                                    <SelectItem key={role.value} value={role.value}>
                                        {role.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
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

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-10 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the{" "}
                            <Link href="/terms" className="text-emerald-600 hover:underline">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-emerald-600 hover:underline">
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                        Create Account
                    </Button>

                    {/* Sign In Link */}
                    <div className="text-center text-sm my-2">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="font-semibold text-emerald-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
