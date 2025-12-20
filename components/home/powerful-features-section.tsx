"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PowerfulFeaturesSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-5xl">
                    Powerful Features for Modern Schools
                </h2>
                <p className="mb-12 text-center text-gray-600 md:text-lg">
                    Everything you need to manage your school efficiently in one comprehensive platform
                </p>

                {/* Features Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Multi-Tenant School Setup */}
                    <Card className="group overflow-hidden border-none bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl transition-all hover:shadow-2xl rounded-3xl">
                        <CardContent className="p-8 md:p-10">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                                            Multi-Tenant School Setup With Complete Data Separation
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-purple-50 md:text-base">
                                            Onboard schools with custom branding, isolated databases, and unique configurations — all within one system.
                                        </p>
                                    </div>
                                    <Link href="/features/details">
                                        <Button className="w-fit rounded-lg bg-white px-6 py-3 text-purple-600 shadow-md transition-all hover:bg-purple-50 hover:shadow-lg">
                                            Know Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="relative h-52 w-full overflow-hidden rounded-2xl p-4">
                                        <Image
                                            src="/features/multi-tenant.png"
                                            alt="Multi-Tenant Dashboard"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Powerful School Admin Dashboard */}
                    <Card className="group overflow-hidden border-none bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-xl transition-all hover:shadow-2xl rounded-3xl">
                        <CardContent className="p-8 md:p-10">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex items-center justify-center">
                                    <div className="relative h-52 w-full overflow-hidden rounded-2xl p-4">
                                        <Image
                                            src="/features/Powerful School.png"
                                            alt="Admin Dashboard"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                                            Powerful School Admin Dashboard
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-white/90 md:text-base">
                                            Manage teachers, classes, subjects, students, parents, announcements, and analytics from one clean dashboard.
                                        </p>
                                    </div>
                                    <Link href="/features/details">
                                        <Button className="w-fit rounded-lg bg-white px-6 py-3 text-amber-600 shadow-md transition-all hover:bg-amber-50 hover:shadow-lg">
                                            Know Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Student & Parent Mobile Apps */}
                    <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl transition-all hover:shadow-2xl rounded-3xl">
                        <CardContent className="p-8 md:p-10">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                                            Student & Parent Mobile Apps
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-blue-50 md:text-base">
                                            Students can access classes, homework, grades, and resources. Parents track attendance, fees, and announcements.
                                        </p>
                                    </div>
                                    <Link href="/features/details">
                                        <Button className="w-fit rounded-lg bg-white px-6 py-3 text-blue-600 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg">
                                            Know Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="relative h-52 w-full overflow-hidden rounded-2xl p-4">
                                        <Image
                                            src="/features/Student.png"
                                            alt="Mobile Apps"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Smart Attendance, Exams & Report Cards */}
                    <Card className="group overflow-hidden border-none bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl transition-all hover:shadow-2xl rounded-3xl">
                        <CardContent className="p-8 md:p-10">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex items-center justify-center">
                                    <div className="relative h-52 w-full overflow-hidden rounded-2xl p-4">
                                        <Image
                                            src="/features/Smart.png"
                                            alt="Attendance & Exams"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                                            Smart Attendance Exams & Report Cards
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-emerald-50 md:text-base">
                                            Teachers mark attendance, enter marks, and generate printable report cards with automatic grade calculation.
                                        </p>
                                    </div>
                                    <Link href="/features/details">
                                        <Button className="w-fit rounded-lg bg-white px-6 py-3 text-emerald-600 shadow-md transition-all hover:bg-emerald-50 hover:shadow-lg">
                                            Know Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
