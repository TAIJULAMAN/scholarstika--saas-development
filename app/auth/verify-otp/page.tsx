"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState, useRef, KeyboardEvent } from "react"

export default function VerifyOtpPage() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
        const newOtp = [...otp]
        pastedData.forEach((char, index) => {
            if (index < 6 && /^\d$/.test(char)) {
                newOtp[index] = char
            }
        })
        setOtp(newOtp)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mb-4 text-3xl font-bold text-emerald-700">Scholarstika</div>
                    <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
                    <CardDescription>
                        We've sent a 6-digit code to your email
                        <br />
                        <span className="font-semibold text-gray-900">john@example.com</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* OTP Input */}
                    <div className="space-y-2">
                        <div className="flex justify-center gap-2" onPaste={handlePaste}>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => {
                                        inputRefs.current[index] = el
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="h-14 w-12 rounded-lg border-2 border-gray-300 text-center text-xl font-semibold focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Verify Button */}
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                        Verify Code
                    </Button>

                    {/* Resend Code */}
                    <div className="text-center text-sm">
                        Didn't receive the code?{" "}
                        <button className="font-semibold text-emerald-600 hover:underline">
                            Resend Code
                        </button>
                    </div>

                    {/* Timer */}
                    <div className="text-center text-sm text-gray-600">
                        Code expires in <span className="font-semibold text-gray-900">05:00</span>
                    </div>

                    {/* Back Link */}
                    <div className="text-center text-sm">
                        <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
                            Back to sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
