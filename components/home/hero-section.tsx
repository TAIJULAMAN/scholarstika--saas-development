"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
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
            <div className="relative z-10 container mx-auto grid gap-10 px-5 py-10 md:grid-cols-2 md:py-16 md:px-0">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-3xl text-emerald-700 font-semibold uppercase border-b-4 border-amber-500 pb-2 w-fit">
                        SCHOLARSTIKA
                    </h1>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1e3a5f] md:text-5xl lg:text-6xl">
                        Transform Education with the Power of Technology
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-[#1e3a5f]/80 md:text-lg">
                        Seamlessly manage your school's academic and administrative workflows on one scalable platform. Enhance
                        student engagement, streamline communication, and reduce admin work.
                    </p>

                    {/* Feature List */}
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                                <Check className="h-5 w-5 text-white stroke-[3]" />
                            </div>
                            <span className="text-sm font-medium text-[#1e3a5f] md:text-base">
                                Branch-Wise Fee Management
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                                <Check className="h-5 w-5 text-white stroke-[3]" />
                            </div>
                            <span className="text-sm font-medium text-[#1e3a5f] md:text-base">
                                Customizable User Roles & Permissions
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                                <Check className="h-5 w-5 text-white stroke-[3]" />
                            </div>
                            <span className="text-sm font-medium text-[#1e3a5f] md:text-base">
                                24/7 System Monitoring & Support
                            </span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4">
                        <Link href="/pricing">
                            <Button
                                size="lg"
                                className="rounded-full bg-amber-400 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:bg-amber-500 hover:shadow-xl md:text-lg"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
                        <div className="overflow-hidden rounded-2xl">
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
