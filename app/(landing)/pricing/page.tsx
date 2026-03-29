"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Calculator, Globe, Users } from "lucide-react"
import Link from "next/link"
import {
    calculateAnnualPrice,
    getStudentBand,
    DevelopmentCategory
} from "@/lib/pricing"
import { useEffect } from "react"

export default function PricingPage() {
    const [country, setCountry] = useState("US")
    const [devCategoryOverride, setDevCategoryOverride] = useState<DevelopmentCategory | "AUTO">("AUTO")
    const [urbanCount, setUrbanCount] = useState<number>(1)
    const [ruralCount, setRuralCount] = useState<number>(0)
    const [studentCount, setStudentCount] = useState<number>(250)

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
            const matched = countries.find(c =>
                c.name.toLowerCase() === userData.country.toLowerCase() ||
                c.code.toLowerCase() === userData.country.toLowerCase()
            )
            if (matched) {
                setCountry(matched.code)
            }
        }
    }, [])

    const countryName = countries.find(c => c.code === country)?.name || country

    const annualPrice = useMemo(() => {
        const category = devCategoryOverride === "AUTO" ? undefined : devCategoryOverride;
        const urbanPrice = calculateAnnualPrice(country, "URBAN", studentCount, category)
        const ruralPrice = calculateAnnualPrice(country, "RURAL", studentCount, category)
        return (urbanPrice * urbanCount) + (ruralPrice * ruralCount)
    }, [country, urbanCount, ruralCount, studentCount, devCategoryOverride])
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
                    <Card className="lg:col-span-2 shadow-2xl border-none overflow-hidden">
                        <div className="bg-slate-900 px-8 py-4 text-white flex items-center gap-2">
                            <Calculator className="h-5 w-5 text-emerald-400" />
                            <h2 className="font-bold text-lg">Pricing Calculator</h2>
                        </div>
                        <CardContent className="p-8 space-y-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                {/* Country (Read Only) */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Globe className="h-4 w-4" />
                                        <Label htmlFor="country" className="font-semibold">Detected Country</Label>
                                    </div>
                                    <Input
                                        value={countryName}
                                        readOnly
                                        className="w-full bg-slate-100 border-slate-200 h-12 font-medium cursor-not-allowed"
                                    />

                                </div>
                                {/* Student Population */}
                                <div className="space-y-3 md:col-span-2">
                                    <div className="flex items-center justify-between gap-2 text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            <Label htmlFor="students" className="font-semibold">Student Population</Label>
                                        </div>
                                        <span className="text-sm font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider">
                                            Band: {studentBand.replace('_', ' ')}
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            id="students"
                                            type="number"
                                            value={studentCount}
                                            onChange={(e) => setStudentCount(Number(e.target.value))}
                                            className="h-14 bg-slate-50 border-slate-200 text-2xl font-bold pl-6 text-slate-800"
                                        />
                                        <div className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 font-medium">
                                            Students
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[11px] text-slate-400 px-1 font-medium">
                                        <span>LT 100</span>
                                        <span>100 - 499</span>
                                        <span>500 - 999</span>
                                        <span>GTE 1000</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="2000"
                                        step="1"
                                        value={studentCount}
                                        onChange={(e) => setStudentCount(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Final Price Card */}
                    <Card className="bg-emerald-600 text-white shadow-2xl border-none overflow-hidden h-full flex flex-col">
                        <div className="p-8 text-center flex-1 flex flex-col justify-center border-b border-emerald-500/50">
                            <h3 className="text-emerald-100 font-bold uppercase tracking-widest text-sm mb-6">Annual Subscription</h3>
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-black">${annualPrice}</span>
                                    <span className="text-emerald-200 text-xl font-medium">/ year</span>
                                </div>
                                <p className="mt-4 text-emerald-100 text-sm opacity-80">
                                    Approximately <span className="font-bold underline">${(annualPrice / 12).toFixed(2)}</span> per month
                                </p>
                            </div>
                        </div>
                        <div className="p-8 bg-emerald-700/30">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span>All Core Features Included</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span>Dedicated Support Access</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span>Branch-wide Administrative Tools</span>
                                </li>
                            </ul>
                            <Link href="/pricing/setup-branches">
                                <Button className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold py-7 text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
                                    Setup Your Branches
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

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Developing Tier Table */}
                    <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
                        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800">Developing Countries</h3>
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded uppercase">Tier 1</span>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 bg-slate-50/50 uppercase">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Student Band</th>
                                    <th className="px-6 py-3 font-semibold">Rural Price</th>
                                    <th className="px-6 py-3 font-semibold text-emerald-600">Urban Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">LT 100</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$30</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$60</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">100 - 499</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$60</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$120</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">500 - 999</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$100</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$170</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">GTE 1000</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$150</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Developed Tier Table */}
                    <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
                        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800">Developed Countries</h3>
                            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase">Tier 2</span>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 bg-slate-50/50 uppercase">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Student Band</th>
                                    <th className="px-6 py-3 font-semibold">Rural Price</th>
                                    <th className="px-6 py-3 font-semibold text-emerald-600">Urban Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">LT 100</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$70</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$90</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">100 - 499</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$90</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$100</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">500 - 999</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$120</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$150</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">GTE 1000</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">$180</td>
                                    <td className="px-6 py-4 text-emerald-600 font-bold font-mono">$250</td>
                                </tr>
                            </tbody>
                        </table>
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
