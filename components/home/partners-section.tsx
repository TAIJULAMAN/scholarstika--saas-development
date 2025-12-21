"use client"

import { School, GraduationCap, BookOpen, Award } from "lucide-react"

export function PartnersSection() {
    const partners = [
        {
            name: "Cambridge Schools",
            icon: School,
        },
        {
            name: "Oxford Academy",
            icon: GraduationCap,
        },
        {
            name: "Global Education Network",
            icon: BookOpen,
        },
        {
            name: "Excellence Institute",
            icon: Award,
        },
    ]

    return (
        <section className="relative z-999 bg-white border-t-2 border-white rounded-tl-xl rounded-tr-xl py-10 md:py-16 -mt-10">
            <div className="container mx-auto px-5 lg:px-0">
                {/* Heading */}
                <h2 className="mb-10 text-center text-lg font-medium text-gray-600 md:mb-12 md:text-xl">
                    Empowering schools worldwide to innovate
                </h2>

                {/* Partners Grid */}
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all hover:bg-gray-50 sm:justify-center"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-600">
                                <partner.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 md:text-base">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
