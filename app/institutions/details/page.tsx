"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, GraduationCap, Award, Globe, Mail, Phone, Calendar } from "lucide-react"

export default function InstitutionDetailsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="absolute inset-0">
                    <Image
                        src="/university-campus.png"
                        alt="University Campus"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>

                <div className="container relative mx-auto h-full px-5 lg:px-0">
                    {/* Back Button */}
                    <div className="pt-8">
                        <Link href="/">
                            <Button variant="ghost" className="text-white hover:bg-white/20">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Hero Content */}
                    <div className="flex h-full flex-col justify-center pb-16">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-4 ring-white/50">
                                <Image
                                    src="https://flagcdn.com/w40/au.png"
                                    alt="Australia flag"
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                    unoptimized
                                />
                            </div>
                            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                                University
                            </span>
                        </div>

                        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
                            University of Melbourne
                        </h1>

                        <div className="mb-6 flex flex-wrap items-center gap-4 text-white/90">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                <span>Melbourne, Victoria, Australia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                <span>Founded in 1853</span>
                            </div>
                        </div>

                        <p className="mb-8 max-w-3xl text-lg text-white/90">
                            The University of Melbourne is one of Australia's oldest and most prestigious universities,
                            renowned for its excellence in teaching, research, and innovation across all disciplines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="border-b bg-white py-12">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                <Users className="h-8 w-8 text-emerald-600" />
                            </div>
                            <div className="mb-1 text-3xl font-bold text-gray-900">50,000+</div>
                            <div className="text-sm text-gray-600">Students Enrolled</div>
                        </div>

                        <div className="text-center">
                            <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <GraduationCap className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="mb-1 text-3xl font-bold text-gray-900">300+</div>
                            <div className="text-sm text-gray-600">Programs Offered</div>
                        </div>

                        <div className="text-center">
                            <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <Globe className="h-8 w-8 text-purple-600" />
                            </div>
                            <div className="mb-1 text-3xl font-bold text-gray-900">150+</div>
                            <div className="text-sm text-gray-600">Countries Represented</div>
                        </div>

                        <div className="text-center">
                            <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                <Award className="h-8 w-8 text-amber-600" />
                            </div>
                            <div className="mb-1 text-3xl font-bold text-gray-900">#1</div>
                            <div className="text-sm text-gray-600">in Australia</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="mb-5 text-3xl font-bold text-gray-900">About the Institution</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    The University of Melbourne is a public research university located in Melbourne, Australia.
                                    Founded in 1853, it is Australia's second oldest university and the oldest in Victoria.
                                </p>
                                <p>
                                    The university comprises eleven separate academic units and is associated with numerous
                                    institutes and research centers, including the Walter and Eliza Hall Institute of Medical
                                    Research, Florey Institute of Neuroscience and Mental Health, the Melbourne Institute of
                                    Applied Economic and Social Research, and the Grattan Institute.
                                </p>
                                <p>
                                    Among Melbourne's 15 graduate schools, the Melbourne Business School, Melbourne Law School,
                                    and the Melbourne Medical School are particularly well regarded. Four Australian prime
                                    ministers and five governors-general have graduated from Melbourne.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Features</h2>
                            <div className="space-y-4">
                                <Card className="border-l-4 border-l-emerald-600">
                                    <CardContent className="p-4">
                                        <h3 className="mb-2 font-bold text-gray-900">World-Class Research</h3>
                                        <p className="text-sm text-gray-600">
                                            Leading research facilities and partnerships with global institutions
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-blue-600">
                                    <CardContent className="p-4">
                                        <h3 className="mb-2 font-bold text-gray-900">Industry Connections</h3>
                                        <p className="text-sm text-gray-600">
                                            Strong partnerships with leading companies and organizations worldwide
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-purple-600">
                                    <CardContent className="p-4">
                                        <h3 className="mb-2 font-bold text-gray-900">Global Network</h3>
                                        <p className="text-sm text-gray-600">
                                            Extensive alumni network across 160 countries
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-amber-600">
                                    <CardContent className="p-4">
                                        <h3 className="mb-2 font-bold text-gray-900">Student Support</h3>
                                        <p className="text-sm text-gray-600">
                                            Comprehensive support services for academic and personal development
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
