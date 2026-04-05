"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Calculator, Globe, Users } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    calculateAnnualPrice,
    getStudentBand,
    DevelopmentCategory,
    LocationType
} from "@/lib/pricing"
import { useEffect } from "react"

export default function PricingPage() {
    const [devCategory, setDevCategory] = useState<DevelopmentCategory>("DEVELOPED")
    const [locationType, setLocationType] = useState<LocationType>("URBAN")
    const [studentCount, setStudentCount] = useState<number>(650)
    const [totalBranches, setTotalBranches] = useState<number>(3)

    const countries = [
        { code: "US", name: "United States" },
        { code: "GB", name: "United Kingdom" },
        { code: "CA", name: "Canada" },
        { code: "AU", name: "Australia" },
        { code: "BD", name: "Bangladesh" },
        { code: "NG", name: "Nigeria" },
        { code: "IN", name: "India" },
        { code: "KE", name: "Kenya" },
    ]

    useEffect(() => {
        const savedUser = localStorage.getItem("registeredUser")
        if (savedUser) {
            const userData = JSON.parse(savedUser)
            // Optional: pre-populate based on user data if needed
            // But for now we follow the "Use these inputs" requirement strictly
        }
    }, [])

    const pricingResult = useMemo(() => {
        return calculateAnnualPrice(studentCount, devCategory, locationType, totalBranches)
    }, [studentCount, devCategory, locationType, totalBranches])

    const { finalPrice, mainSchoolPrice, extraBranchCharge, basePrice } = pricingResult
    const studentBand = useMemo(() => getStudentBand(studentCount), [studentCount])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pb-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-20 text-white shadow-inner">
                <div className="container mx-auto px-5 text-center lg:px-0">
                    <h1 className="mb-4 text-4xl font-extrabold md:text-6xl tracking-tight">Transparent Pricing</h1>
                    <p className="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
                        Scholarstika uses a deterministic pricing model based on your country's economic classification,
                        location, and school size. Fairness for every school, everywhere.
                    </p>
                </div>
            </section>

            {/* Pricing Calculator Section */}
            <section className="container mx-auto -mt-12 px-5 lg:px-0">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Input Controls */}
                    <Card className="lg:col-span-2 shadow-2xl border-none overflow-hidden bg-white/80 backdrop-blur-sm">
                        <div className="bg-[#007b5e] px-8 py-6 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Calculator className="h-6 w-6 text-emerald-300" />
                                <h2 className="font-bold text-xl tracking-tight">Pricing Calculator</h2>
                            </div>
                            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">
                                Strategy 2026
                            </span>
                        </div>
                        <CardContent className="p-8 space-y-10">
                            <div className="grid gap-10 md:grid-cols-2">
                                {/* Country Classification */}
                                <div className="space-y-4">
                                    <Label className="text-gray-900 font-bold text-base flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-emerald-600" />
                                        Country Classification
                                    </Label>
                                    <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-2xl">
                                        <button
                                            onClick={() => setDevCategory("DEVELOPED")}
                                            className={cn(
                                                "py-3 rounded-xl text-sm font-bold transition-all",
                                                devCategory === "DEVELOPED" 
                                                    ? "bg-white text-emerald-700 shadow-md" 
                                                    : "text-gray-500 hover:text-gray-700"
                                            )}
                                        >
                                            Developed
                                        </button>
                                        <button
                                            onClick={() => setDevCategory("DEVELOPING")}
                                            className={cn(
                                                "py-3 rounded-xl text-sm font-bold transition-all",
                                                devCategory === "DEVELOPING" 
                                                    ? "bg-white text-emerald-700 shadow-md" 
                                                    : "text-gray-500 hover:text-gray-700"
                                            )}
                                        >
                                            Developing
                                        </button>
                                    </div>
                                </div>

                                {/* Location Type */}
                                <div className="space-y-4">
                                    <Label className="text-gray-900 font-bold text-base flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-emerald-600" />
                                        Location Type
                                    </Label>
                                    <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-2xl">
                                        <button
                                            onClick={() => setLocationType("URBAN")}
                                            className={cn(
                                                "py-3 rounded-xl text-sm font-bold transition-all",
                                                locationType === "URBAN" 
                                                    ? "bg-white text-emerald-700 shadow-md" 
                                                    : "text-gray-500 hover:text-gray-700"
                                            )}
                                        >
                                            Urban
                                        </button>
                                        <button
                                            onClick={() => setLocationType("RURAL")}
                                            className={cn(
                                                "py-3 rounded-xl text-sm font-bold transition-all",
                                                locationType === "RURAL" 
                                                    ? "bg-white text-emerald-700 shadow-md" 
                                                    : "text-gray-500 hover:text-gray-700"
                                            )}
                                        >
                                            Rural
                                        </button>
                                    </div>
                                </div>

                                {/* Student Population */}
                                <div className="space-y-4 md:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="students" className="text-gray-900 font-bold text-base flex items-center gap-2">
                                            <Users className="h-4 w-4 text-emerald-600" />
                                            Student Population
                                        </Label>
                                        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                                            Band: {studentBand}
                                        </span>
                                    </div>
                                    <div className="relative group">
                                        <Input
                                            id="students"
                                            type="number"
                                            value={studentCount}
                                            onChange={(e) => setStudentCount(Number(e.target.value))}
                                            className="h-16 bg-gray-50/50 border-gray-200 text-3xl font-black pl-8 pr-24 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900"
                                        />
                                        <div className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-400 font-bold text-lg">
                                            Students
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="3000"
                                        step="1"
                                        value={studentCount}
                                        onChange={(e) => setStudentCount(Number(e.target.value))}
                                        className="w-full h-2.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-600 transition-all"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 px-1 font-bold uppercase tracking-wider">
                                        <span>1</span>
                                        <span>700</span>
                                        <span>1,500</span>
                                        <span>2,250</span>
                                        <span>3,000+</span>
                                    </div>
                                </div>

                                {/* Branches */}
                                <div className="space-y-4 md:col-span-2 border-t border-gray-100 pt-6">
                                    <Label htmlFor="branches" className="text-gray-900 font-bold text-base">
                                        Total School Branches or Campuses
                                    </Label>
                                    <div className="flex items-center gap-6">
                                        <div className="relative flex-1">
                                            <Input
                                                id="branches"
                                                type="number"
                                                min="1"
                                                value={totalBranches}
                                                onChange={(e) => setTotalBranches(Math.max(1, Number(e.target.value)))}
                                                className="h-14 bg-gray-50/50 border-gray-200 text-2xl font-bold pl-6 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                            {totalBranches > 1 
                                                ? `${totalBranches - 1} Extra branches (+${(totalBranches - 1) * 25}%)` 
                                                : "Main campus only"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Final Price Card */}
                    <Card className="bg-[#007b5e] text-white shadow-2xl border-none overflow-hidden h-full flex flex-col rounded-[2.5rem] relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                        
                        <div className="p-10 text-center flex-1 flex flex-col justify-center border-b border-white/10 relative z-10">
                            <h3 className="text-emerald-200 font-bold uppercase tracking-[0.2em] text-xs mb-8">Annual Subscription</h3>
                            <div className="flex flex-col items-center">
                                <div className="flex items-start gap-1">
                                    <span className="text-lg font-bold mt-2 text-emerald-200">$</span>
                                    <span className="text-7xl font-black tracking-tight">{finalPrice}</span>
                                </div>
                                <span className="text-emerald-200 text-sm font-bold uppercase tracking-widest mt-2">/ per year</span>
                                
                                <div className="mt-8 pt-8 border-t border-white/10 w-full space-y-3">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-emerald-200/80">Base Price (Band)</span>
                                        <span className="font-bold underline">${basePrice}</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-emerald-200/80">Main School Price</span>
                                        <span className="font-bold">${mainSchoolPrice}</span>
                                    </div>
                                    {extraBranchCharge > 0 && (
                                        <div className="flex justify-between text-xs font-medium text-yellow-400">
                                            <span>Additional Branches</span>
                                            <span className="font-bold">+${extraBranchCharge}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm font-black pt-2 border-t border-white/5">
                                        <span className="text-white uppercase tracking-wider">Total Annual Price</span>
                                        <span className="text-white">${finalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-black/10 relative z-10 mt-auto">
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <div className="bg-emerald-400/20 rounded-full p-1 border border-emerald-400/30">
                                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <span>All Premium Modules</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <div className="bg-emerald-400/20 rounded-full p-1 border border-emerald-400/30">
                                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <span>Unlimited Users & Storage</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <div className="bg-emerald-400/20 rounded-full p-1 border border-emerald-400/30">
                                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <span>24/7 Priority Support</span>
                                </li>
                            </ul>
                            <Link href={`/pricing/setup-branches?students=${studentCount}&branches=${totalBranches}&dev=${devCategory}&loc=${locationType}`}>
                                <Button className="w-full bg-[#007b5e] hover:bg-[#006b52] border-2 border-emerald-400/30 text-white font-extrabold py-8 text-xl shadow-2xl transition-all rounded-2xl group relative overflow-hidden">
                                    <span className="relative z-10">Get Started Now</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Matrix Overview */}
            <section className="container mx-auto py-24 px-5 lg:px-0">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pricing Matrix Overview</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        We maintain a public pricing matrix to ensure total transparency. No hidden fees, no surprise increases.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-1">
                    {/* Strategy Table */}
                    <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl bg-white">
                        <div className="bg-gray-900 px-10 py-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-black tracking-tight">Main School Base Pricing</h3>
                                <p className="text-gray-400 text-sm mt-1">Annual rates before country and location modifiers</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white/10 px-4 py-2 rounded-xl text-center min-w-[120px]">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-1">Developed</div>
                                    <div className="text-lg font-black font-mono">1.00x</div>
                                </div>
                                <div className="bg-white/10 px-4 py-2 rounded-xl text-center min-w-[120px]">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1">Developing</div>
                                    <div className="text-lg font-black font-mono">0.60x</div>
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-base text-left">
                            <thead className="text-[10px] text-gray-400 bg-gray-50 uppercase tracking-[0.2em] font-black">
                                <tr>
                                    <th className="px-10 py-6">Student Population Band</th>
                                    <th className="px-10 py-6 text-center">Base Annual Price</th>
                                    <th className="px-10 py-6 text-center text-emerald-600">Developed + Urban</th>
                                    <th className="px-10 py-6 text-center text-amber-600">Developing + Rural</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { band: "1 – 100 students", base: 150, devUrban: 150, developingRural: 77 },
                                    { band: "101 – 300 students", base: 240, devUrban: 240, developingRural: 122 },
                                    { band: "301 – 700 students", base: 420, devUrban: 420, developingRural: 214 },
                                    { band: "701 – 1,500 students", base: 720, devUrban: 720, developingRural: 367 },
                                    { band: "1,501 – 3,000 students", base: 1200, devUrban: 1200, developingRural: 612 },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-10 py-6 font-bold text-gray-900">{row.band}</td>
                                        <td className="px-10 py-6 text-center text-gray-500 font-mono font-bold">${row.base}</td>
                                        <td className="px-10 py-6 text-center text-emerald-600 font-black font-mono">${row.devUrban}</td>
                                        <td className="px-10 py-6 text-center text-amber-600 font-black font-mono">${row.developingRural}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="bg-gray-50 px-10 py-6 border-t border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#007b5e] text-white p-2 rounded-lg shrink-0">
                                    <Calculator className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Branch Pricing Formula</h4>
                                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                        Main school price is calculated first. Each additional campus adds <span className="font-bold text-emerald-600">+25%</span> of that calculated price. 
                                        Example: 3 campuses = Main Price + (2 &times; 25% &times; Main Price) = 150% of Main Price.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ or Info Section */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-emerald-400">Why does location matter?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Scholarstika believes in equitable pricing. Schools in rural or developing areas often have
                                different economic constraints. By adjusting pricing based on geographic context,
                                we ensure our world-class tools are accessible to every school.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-emerald-400">What's included?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Every plan includes 100% of Scholarstika's features: Student Information System,
                                Attendance tracking, Exams management, Fees collection, Payroll, and more.
                                We don't believe in charging more for essential tools.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-emerald-400">Price Stability</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Once you enroll, your price is locked for the duration of your subscription.
                                We use deterministic rules to prevent arbitrary price hikes, giving you
                                complete predictability for your annual budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
