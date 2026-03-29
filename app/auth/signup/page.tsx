"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff, UserCircle, School, Building2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/user-context"
import { cn } from "@/lib/utils"

export default function SignUpPage() {
    const router = useRouter()
    const { login } = useUser()
    const [step, setStep] = useState(1)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [selectedRole, setSelectedRole] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        schoolName: "",
        password: "",
        confirmPassword: "",
        country: "",
        city: "",
        state: "",
        isOwner: "",
        ownerType: "",
        branches: "",
        termsAccepted: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value
        }))
    }

    const nextStep = () => {
        if (step === 1) {
            if (!formData.isOwner || !formData.ownerType || !formData.branches) {
                setError("Please answer all questions")
                return
            }

            // Auto-set role based on owner type
            if (formData.isOwner === "yes") {
                if (formData.ownerType === "single_institution") {
                    setSelectedRole("branch_manager")
                } else if (formData.ownerType === "multiple_institutions") {
                    setSelectedRole("institution_manager")
                }
            }

            setError("")
            setStep(2)
        }
    }

    const prevStep = () => {
        setStep(prev => prev - 1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // Validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !selectedRole || !formData.schoolName || !formData.country || !formData.state || !formData.city) {
            setError("Please fill in all fields")
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        if (!formData.termsAccepted) {
            setError("Please accept the terms and conditions")
            return
        }

        setLoading(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: selectedRole,
                schoolName: formData.schoolName,
                country: formData.country,
                state: formData.state,
                city: formData.city,
                avatar: `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 50) + 1}`
            }

            // Store in local storage
            localStorage.setItem("registeredUser", JSON.stringify(userData))

            router.push("/auth/signin")
        } catch (err) {
            setError("Failed to create account. Please try again.")
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
            <div className="w-full max-w-xl bg-gradient-to-br from-emerald-50 to-amber-50  px-5 py-10">
                <CardHeader className="space-y-1 text-center">
                    <h1 className="text-xl md:text-4xl font-bold">Join as a single or multiple institution owner.</h1>
                    <p className="text-sm md:text-base  my-5">
                        {step === 1 ? "Tell us about yourself." : "Enter your details."}
                    </p>
                </CardHeader>
                <CardContent>
                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <div className="space-y-6">


                            {/* Which type of owner you are? */}
                            <div className="space-y-3">
                                <Label className="text-base font-semibold">Which type of owner you are?</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div
                                        className={cn(
                                            "relative flex flex-col items-center justify-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 group",
                                            formData.ownerType === "single_institution"
                                                ? "border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/10"
                                                : "border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/20"
                                        )}
                                        onClick={() => setFormData(prev => ({
                                            ...prev,
                                            ownerType: "single_institution",
                                            isOwner: "yes",
                                            branches: "1"
                                        }))}
                                    >
                                        <div className={cn(
                                            "absolute top-3 right-3 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                                            formData.ownerType === "single_institution" ? "border-emerald-600 bg-emerald-600" : "border-gray-200"
                                        )}>
                                            {formData.ownerType === "single_institution" && <div className="h-2 w-2 rounded-full bg-white" />}
                                        </div>

                                        <div className={cn(
                                            "p-3 rounded-xl mb-3 transition-colors",
                                            formData.ownerType === "single_institution" ? "bg-emerald-100 text-emerald-600" : "bg-gray-50 text-gray-400 group-hover:text-emerald-500"
                                        )}>
                                            <School size={32} />
                                        </div>
                                        <span className={cn(
                                            "font-bold text-sm text-center px-2",
                                            formData.ownerType === "single_institution" ? "text-emerald-900" : "text-gray-600"
                                        )}>
                                            I own/manage single school
                                        </span>
                                    </div>

                                    <div
                                        className={cn(
                                            "relative flex flex-col items-center justify-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 group",
                                            formData.ownerType === "multiple_institutions"
                                                ? "border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/10"
                                                : "border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/20"
                                        )}
                                        onClick={() => setFormData(prev => ({
                                            ...prev,
                                            ownerType: "multiple_institutions",
                                            isOwner: "yes",
                                            branches: prev.ownerType === "multiple_institutions" ? prev.branches : "" // Clear if switching
                                        }))}
                                    >
                                        <div className={cn(
                                            "absolute top-3 right-3 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                                            formData.ownerType === "multiple_institutions" ? "border-emerald-600 bg-emerald-600" : "border-gray-200"
                                        )}>
                                            {formData.ownerType === "multiple_institutions" && <div className="h-2 w-2 rounded-full bg-white" />}
                                        </div>

                                        <div className={cn(
                                            "p-3 rounded-xl mb-3 transition-colors",
                                            formData.ownerType === "multiple_institutions" ? "bg-emerald-100 text-emerald-600" : "bg-gray-50 text-gray-400 group-hover:text-emerald-500"
                                        )}>
                                            <Building2 size={32} />
                                        </div>
                                        <span className={cn(
                                            "font-bold text-sm text-center px-2",
                                            formData.ownerType === "multiple_institutions" ? "text-emerald-900" : "text-gray-600"
                                        )}>
                                            I own/manage multiple school
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* How many branches of your school? */}
                            {formData.ownerType === "multiple_institutions" && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <Label htmlFor="branches" className="font-medium">How many branches of your school?</Label>
                                    <Input
                                        id="branches"
                                        type="number"
                                        placeholder="Enter number of branches"
                                        value={formData.branches}
                                        onChange={handleInputChange}
                                        min="1"
                                        className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                </div>
                            )}

                            <Button
                                onClick={nextStep}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4"
                                size="lg"
                            >
                                Next
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
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
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* School Name */}
                            <div className="space-y-2">
                                <Label htmlFor="schoolName">School Name</Label>
                                <div className="relative">
                                    <UserCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="schoolName"
                                        type="text"
                                        placeholder="Springfield Academy"
                                        className="pl-10"
                                        value={formData.schoolName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password and Confirm Password Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="pl-10 pr-10"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
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
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="pl-10 pr-10"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
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
                            </div>

                            {/* Country, State, City */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input
                                        id="country"
                                        type="text"
                                        placeholder="USA"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="state">State / Province</Label>
                                        <Input
                                            id="state"
                                            type="text"
                                            placeholder="California / Dhaka"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            type="text"
                                            placeholder="New York / Gulshan"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start space-x-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="termsAccepted"
                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    checked={formData.termsAccepted}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="termsAccepted" className="text-sm text-gray-600">
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-emerald-600 hover:underline">
                                        Terms
                                    </Link>{" "}
                                    &{" "}
                                    <Link href="/privacy" className="text-emerald-600 hover:underline">
                                        Privacy
                                    </Link>
                                </label>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="flex-1"
                                    onClick={prevStep}
                                    disabled={loading}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-[2] bg-emerald-600 hover:bg-emerald-700"
                                    disabled={loading}
                                >
                                    {loading ? "Creating..." : "Create Account"}
                                </Button>
                            </div>
                        </form>
                    )}

                    {/* Sign In Link */}
                    <div className="text-center text-sm mt-6">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="font-semibold text-emerald-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </div>
        </div>
    )
}
