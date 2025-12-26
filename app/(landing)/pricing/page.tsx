"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
    const [country, setCountry] = useState("United States")
    const [institutionType, setInstitutionType] = useState("School")
    const [branch, setBranch] = useState("Single Branch")

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-5 text-center lg:px-0">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Choose Your Plan</h1>
                    <p className="mx-auto max-w-2xl text-lg">
                        Affordable pricing for modern schools with flexible options tailored to different
                        institutional needs. Pay annually.
                    </p>
                </div>
            </section>

            {/* Filters Section */}
            <section className="border-b bg-white py-6">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                            <Select value={country} onValueChange={setCountry}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="United States">United States</SelectItem>
                                    <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                    <SelectItem value="Canada">Canada</SelectItem>
                                    <SelectItem value="Australia">Australia</SelectItem>
                                    <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Institution Type</label>
                            <Select value={institutionType} onValueChange={setInstitutionType}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="School">School</SelectItem>
                                    <SelectItem value="College">College</SelectItem>
                                    <SelectItem value="University">University</SelectItem>
                                    <SelectItem value="Training Center">Training Center</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Branch</label>
                            <Select value={branch} onValueChange={setBranch}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Single Branch">Single Branch</SelectItem>
                                    <SelectItem value="Multiple Branches">Multiple Branches</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Basic Pricing Section */}
            <section className="py-16">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mb-12 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-gray-900">Basic Pricing (Per Branch)</h2>
                        <p className="text-gray-600">
                            Perfect for individual schools and single-branch institutions
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                        {/* Starter Plan */}
                        <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                            <div className="mb-6 text-center">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Starter</h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-purple-600">$29</span>
                                    <span className="text-gray-600"> /month</span>
                                </div>
                                <p className="text-sm text-gray-600">Up to 100 students</p>
                            </div>

                            <ul className="mb-8 flex-1 space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Basic student management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Grade tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Email support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">5GB storage</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                Get Started
                            </Button>
                        </div>

                        {/* Professional Plan - Featured */}
                        <div className="relative flex flex-col rounded-lg border-4 border-emerald-500 bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
                            {/* Most Popular Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                                <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-gray-900">
                                    Most Popular
                                </span>
                            </div>

                            <div className="mb-6 text-center">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Professional</h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-emerald-600">$79</span>
                                    <span className="text-gray-600"> /month</span>
                                </div>
                                <p className="text-sm text-gray-600">Up to 500 students</p>
                            </div>

                            <ul className="mb-8 flex-1 space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Advanced student management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Attendance tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Priority support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">25GB storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Custom reports</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                Get Started
                            </Button>
                        </div>

                        {/* Premium Plan */}
                        <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
                            <div className="mb-6 text-center">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Premium</h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-purple-600">$149</span>
                                    <span className="text-gray-600"> /month</span>
                                </div>
                                <p className="text-sm text-gray-600">Up to 1000 students</p>
                            </div>

                            <ul className="mb-8 flex-1 space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Full feature access</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">Advanced analytics</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">24/7 phone support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">100GB storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-sm text-gray-700">API access</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Section */}
            <section className="relative overflow-hidden py-20">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/price.png')" }}
                />

                {/* Content Overlay */}
                <div className="container relative z-10 mx-auto px-5 lg:px-0">
                    <div className="mb-12 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-emerald-600">Enterprise Group Management</h2>
                        <p className="text-gray-800">
                            For institutions with multiple branches and complex requirements
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Dynamic Enterprise Pricing Calculator */}
                        <Card className="border-none bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-2xl">
                            <CardContent className="p-8">
                                <h3 className="mb-6 text-2xl font-bold text-white">Dynamic Enterprise Pricing</h3>

                                {/* Input Fields */}
                                <div className="mb-6 space-y-4">
                                    <div>
                                        <label className="mb-2 block text-sm text-gray-300">Number of Branches</label>
                                        <input
                                            type="number"
                                            defaultValue="3"
                                            className="w-full rounded-lg border-none bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm text-gray-300">Total Students</label>
                                        <input
                                            type="number"
                                            defaultValue="2500"
                                            className="w-full rounded-lg border-none bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                    </div>
                                </div>

                                {/* Dynamic Price Display */}
                                <div className="mb-6 rounded-xl bg-gray-700/50 p-6">
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-emerald-400">$1794</span>
                                        <span className="text-gray-300"> /month</span>
                                    </div>
                                    <p className="text-sm text-gray-300">
                                        Estimated pricing based on your requirements
                                    </p>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                                        <span className="text-sm text-gray-200">Multi-branch management dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                                        <span className="text-sm text-gray-200">Centralized reporting and analytics</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                                        <span className="text-sm text-gray-200">Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                                        <span className="text-sm text-gray-200">Custom integrations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                                        <span className="text-sm text-gray-200">Unlimited storage</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Enterprise Features */}
                        <Card className="border-none bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl">
                            <CardContent className="p-8">
                                <h3 className="mb-6 text-2xl font-bold text-yellow-300">Enterprise Features</h3>

                                {/* Feature Items with Icons */}
                                <div className="mb-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20">
                                            <svg className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-semibold text-yellow-300">Advanced Analytics</h4>
                                            <p className="text-sm text-purple-100">
                                                Cross-branch performance insights and predictive analytics
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20">
                                            <svg className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-semibold text-yellow-300">Custom Dashboards</h4>
                                            <p className="text-sm text-purple-100">
                                                Tailored dashboards for different user roles and branches
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20">
                                            <svg className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-semibold text-yellow-300">Dedicated Support</h4>
                                            <p className="text-sm text-purple-100">
                                                24/7 priority support with dedicated success manager
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full rounded-lg bg-yellow-400 py-6 text-base font-semibold text-purple-900 shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl">
                                    Request Enterprise Demo
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-16">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mb-12 text-center">
                        <h2 className="mb-3 text-3xl font-bold text-gray-900">Enhance Your Plan</h2>
                        <p className="text-gray-600">
                            Add optional features to customize your experience
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Data Storage */}
                        <Card className="border-2 transition-all hover:shadow-lg">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                    <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">Data Storage</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Additional storage for all your files
                                </p>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-purple-600">$19</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                                <Button variant="outline" className="w-full">
                                    Add to Plan
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Prime Support */}
                        <Card className="border-2 border-blue-500 transition-all hover:shadow-lg">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">Prime Support</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    24/7 priority support with dedicated team
                                </p>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-blue-600">$49</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Add to Plan
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Advanced Reports */}
                        <Card className="border-2 transition-all hover:shadow-lg">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                    <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">Advanced Reports</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Custom analytics and detailed insights
                                </p>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-emerald-600">$39</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    Add to Plan
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Mobile App */}
                        <Card className="border-2 transition-all hover:shadow-lg">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                    <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">Mobile App</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    iOS and Android apps for on-the-go access
                                </p>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-amber-600">$29</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                                    Add to Plan
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-5 text-center lg:px-0">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Ready to Transform Your School?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg">
                        Join hundreds of schools already using Scholastika to streamline operations and improve
                        educational outcomes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/book-demo">
                            <Button size="lg" className="bg-amber-500 px-8 text-white hover:bg-amber-600">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/book-demo">
                            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-emerald-600">
                                Book a Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
