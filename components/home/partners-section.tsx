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
        <section className="relative z-999 bg-white border-t-2 border-white rounded-tl-lg rounded-tr-lg py-10 md:py-16 -mt-10">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <h2 className="mb-10 text-center text-lg font-medium text-gray-600 md:mb-12 md:text-xl">
                    Empowering schools worldwide to innovate
                </h2>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-3 rounded-lg bg-white p-4 transition-all hover:bg-gray-50"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-t-lg rounded-b-lg bg-emerald-600">
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
