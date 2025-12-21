"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState, useRef, KeyboardEvent } from "react"
import { ArrowLeft, Shield } from "lucide-react"

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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-5 py-10">
            <div className="w-full max-w-md">
                <Card className="border-none shadow-2xl px-5 py-10">
                    <CardHeader className="space-y-3 text-center">
                        <CardTitle className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Verify Your Email
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                            We've sent a 6-digit verification code to{" "}
                            <span className="font-semibold text-gray-900">john@example.com</span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
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
                                        className="h-14 w-12 rounded-lg border-2 border-gray-300 text-center text-xl font-bold focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                                    />
                                ))}
                            </div>
                        </div>

                        <Link href="/auth/reset-password">
                            <Button
                                className="w-full h-11 bg-emerald-600 text-base font-semibold hover:bg-emerald-700"
                                size="lg"
                            >
                                Verify Code
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
