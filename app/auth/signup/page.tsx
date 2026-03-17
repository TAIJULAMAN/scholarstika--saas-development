"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff, UserCircle } from "lucide-react"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/user-context"
import { 
    calculateAnnualPrice, 
    getCountryCategory, 
    PRICING_RULE_VERSION, 
    WESP_VERSION,
    LocationType,
    DevelopmentCategory
} from "@/lib/pricing"

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
        isOwner: "",
        ownerType: "",
        branches: "",
        locationType: "URBAN" as LocationType,
        devCategory: "AUTO" as DevelopmentCategory | "AUTO",
        studentCount: "250",
        termsAccepted: false,
    })

    const annualPrice = useMemo(() => {
        if (!formData.country || !formData.locationType || !formData.studentCount) return 0;
        const category = formData.devCategory === "AUTO" ? undefined : formData.devCategory;
        return calculateAnnualPrice(formData.country, formData.locationType, Number(formData.studentCount), category);
    }, [formData.country, formData.locationType, formData.studentCount, formData.devCategory]);

    const roles = [
        { value: "student", label: "Student" },
        { value: "parent", label: "Parent" },
        { value: "teacher", label: "Teacher" },
        { value: "branch_manager", label: "Branch Admin" },
        { value: "institution_manager", label: "Global Admin" },
        { value: "bursar", label: "Finance Administrator" },
        { value: "nurse", label: "School Nurse" },
    ]

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
        } else if (step === 2) {
            if (!formData.name || !formData.email || !formData.schoolName || !formData.country || !formData.city || !formData.password || !formData.confirmPassword) {
                setError("Please fill in all fields")
                return
            }
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match")
                return
            }
            setError("")
            setStep(3)
        }
    }

    const prevStep = () => {
        setStep(prev => prev - 1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // Validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !selectedRole || !formData.schoolName || !formData.country || !formData.city) {
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
                city: formData.city,
                // Pricing Info
                locationType: formData.locationType,
                studentCount: Number(formData.studentCount),
                annualPriceUsd: annualPrice,
                pricingRuleVersion: PRICING_RULE_VERSION,
                countryDevTier: formData.devCategory === "AUTO" ? getCountryCategory(formData.country) : formData.devCategory,
                wespVersion: WESP_VERSION,
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
            <Card className="w-full max-w-md shadow-xl px-5 py-10">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        {step === 1 ? "Tell us a bit about yourself" : step === 2 ? "Enter your details" : "Pricing & Enrollment"}
                    </CardDescription>
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
                            {/* Are you an owner? */}
                            <div className="space-y-3">
                                <Label>Are you an owner?</Label>
                                <Select 
                                    value={formData.isOwner} 
                                    onValueChange={(val) => setFormData(prev => ({ ...prev, isOwner: val }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Which type of owner you are? */}
                            <div className="space-y-3">
                                <Label>Which type of owner you are?</Label>
                                <Select 
                                    value={formData.ownerType} 
                                    onValueChange={(val) => setFormData(prev => ({ ...prev, ownerType: val }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="single_institution">Single Institution</SelectItem>
                                        <SelectItem value="multiple_institutions">Multiple Institutions</SelectItem>
                                     
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* How many branches of your school? */}
                            <div className="space-y-3">
                                <Label htmlFor="branches">How many branches of your school?</Label>
                                <Input
                                    id="branches"
                                    type="number"
                                    placeholder="Number of branches"
                                    value={formData.branches}
                                    onChange={handleInputChange}
                                    min="1"
                                />
                            </div>

                            <Button 
                                onClick={nextStep} 
                                className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4"
                                size="lg"
                            >
                                Next
                            </Button>
                        </div>
                    ) : step === 2 ? (
                        <div className="space-y-4">
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
                                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
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

                            {/* Country and City Row */}
                            <div className="grid grid-cols-2 gap-4">
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
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder="New York"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3">
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
                                    type="button"
                                    className="flex-[2] bg-emerald-600 hover:bg-emerald-700"
                                    onClick={nextStep}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Enrollment Info */}
                            <div className="space-y-4 rounded-lg bg-slate-50 p-4 border border-slate-100">
                                <div className="space-y-2">
                                    <Label>Location Type</Label>
                                    <Select 
                                        value={formData.locationType} 
                                        onValueChange={(val) => setFormData(prev => ({ ...prev, locationType: val as LocationType }))}
                                    >
                                        <SelectTrigger className="bg-white">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="URBAN">Urban (City / Town)</SelectItem>
                                            <SelectItem value="RURAL">Rural (Countryside)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Country Category</Label>
                                    <Select 
                                        value={formData.devCategory} 
                                        onValueChange={(val) => setFormData(prev => ({ ...prev, devCategory: val as DevelopmentCategory | "AUTO" }))}
                                    >
                                        <SelectTrigger className="bg-white">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="AUTO">Auto-detect (Recommended)</SelectItem>
                                            <SelectItem value="DEVELOPING">Developing Country</SelectItem>
                                            <SelectItem value="DEVELOPED">Developed Country</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="studentCount">Expected Student Population</Label>
                                    <Input
                                        id="studentCount"
                                        type="number"
                                        value={formData.studentCount}
                                        onChange={handleInputChange}
                                        className="bg-white"
                                    />
                                </div>
                                <div className="pt-2 border-t border-slate-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-slate-600">Calculated Annual Fee:</span>
                                        <span className="text-xl font-bold text-emerald-700">${annualPrice} USD</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Based on Rule v1.0 and {formData.devCategory === "AUTO" ? getCountryCategory(formData.country) : formData.devCategory} Country Classification
                                    </p>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start space-x-2">
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

                            <div className="flex gap-3">
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
            </Card>
        </div>
    )
}
