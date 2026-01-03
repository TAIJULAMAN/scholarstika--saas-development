"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero2.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto grid gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-10 md:py-16 lg:px-12">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <h1 className="mb-10">
                        <span className="mb-3 w-fit border-b-4 border-amber-500 pb-2 text-2xl font-semibold uppercase text-emerald-700 sm:mb-4 sm:text-3xl ">SCHOLARSTIKA{""}</span>
                        <span className="text-gray-900 text-2xl flex-1 font-bold border-r-4 border-gray-900 px-2">{""}</span>
                        <span className="text-gray-900 text-2xl flex-1 pl-2">{""}Multi-Tenant School Management</span>
                    </h1>
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-[#1e3a5f] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                        Transform Education with the Power of Technology
                    </h1>
                    <p className="mb-6 text-sm leading-relaxed text-[#1e3a5f]/80 sm:mb-8 sm:text-base md:text-xl">
                        Seamlessly manage your school's academic and administrative workflows on one scalable platform. Enhance
                        student engagement, streamline communication, and reduce admin work.
                    </p>

                    {/* Feature List */}
                    <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
                        <li className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 sm:h-8 sm:w-8">
                                <Check className="h-4 w-4 stroke-[3] text-white sm:h-5 sm:w-5" />
                            </div>
                            <span className="text-xs font-medium text-[#1e3a5f] sm:text-sm md:text-xl">
                                Branch-Wise Fee Management
                            </span>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 sm:h-8 sm:w-8">
                                <Check className="h-4 w-4 stroke-[3] text-white sm:h-5 sm:w-5" />
                            </div>
                            <span className="text-xs font-medium text-[#1e3a5f] sm:text-sm md:text-xl">
                                Customizable User Roles & Permissions
                            </span>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 sm:h-8 sm:w-8">
                                <Check className="h-4 w-4 stroke-[3] text-white sm:h-5 sm:w-5" />
                            </div>
                            <span className="text-xs font-medium text-[#1e3a5f] sm:text-sm md:text-xl">
                                24/7 System Monitoring & Support
                            </span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        <Link href="/pricing">
                            <Button
                                size="lg"
                                className="rounded-full bg-amber-400 px-6 py-5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-500 hover:shadow-xl sm:px-8 sm:py-6 sm:text-base md:text-lg"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-3 md:max-w-lg">
                        <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                            <Image
                                src="/hero/hero1.png"
                                alt="Students collaborating in classroom"
                                width={600}
                                height={500}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
