"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Layers, ClipboardCheck, Users, CreditCard, Calendar, MessageSquare } from "lucide-react"

export function SmartSystem() {

    const leftFeatures = [
        {
            icon: Layers,
            iconColor: "bg-purple-600",
            title: "Multi-Tenant Dashboard",
            description:
                "A powerful centralized dashboard designed for multi-school management, enabling each institution to operate independently with complete data isolation. Administrators can manage users, settings, and analytics for each school while maintaining strict security and scalability.",
        },
        {
            icon: ClipboardCheck,
            iconColor: "bg-emerald-600",
            title: "Smart Attendance Tracking",
            description:
                "An intelligent attendance system that supports biometric devices, RFID cards, and manual entry. Attendance data is recorded in real time, generates automated reports, and helps administrators track patterns, reduce absenteeism, and ensure accountability.",
        },
        {
            icon: Users,
            iconColor: "bg-blue-600",
            title: "Student Information System",
            description:
                "A secure and comprehensive student management system that stores personal details, academic performance, attendance records, behavioral notes, and historical data. Enables teachers and administrators to make data-driven decisions and provide personalized support.",
        }
    ];


    const rightFeatures = [
        {
            icon: CreditCard,
            iconColor: "bg-orange-600",
            title: "Fee & Payment Automation",
            description:
                "A complete fee management and payment automation system that generates invoices, tracks paid and pending fees, sends automated due reminders, and supports secure digital payment integrations. Helps institutions reduce manual work, improve transparency, and ensure timely collections.",
        },
        {
            icon: Calendar,
            iconColor: "bg-purple-600",
            title: "Class, Exam & Timetable Management",
            description:
                "An intuitive scheduling system for managing class routines, exam timetables, and subject assignments. Easily handle updates, avoid scheduling conflicts, and ensure smooth academic planning for teachers, students, and administrators.",
        },
        {
            icon: MessageSquare,
            iconColor: "bg-cyan-600",
            title: "Parent-Teacher Communication Hub",
            description:
                "A centralized communication platform that connects parents, teachers, and school administrators. Enables instant messaging, important announcements, academic updates, and student progress reports to ensure transparency and active engagement.",
        }
    ];


    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-5 lg:px-0">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Manage Everything in One <span className="text-emerald-600">Smart System</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
                        Empower schools, teachers, students, and parents with seamless multi-tenant control.
                    </p>
                </div>

                {/* Features Grid with Center Image */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:gap-10">
                    {/* Left Column - 3 Features */}
                    <div className="space-y-6">
                        {leftFeatures.map((feature, idx) => (
                            <Card key={idx} className="group overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.iconColor}`}>
                                            <feature.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Center Column - Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl lg:h-[400px]">
                            <Image
                                src="/manage.png"
                                alt="Smart System Management"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - 3 Features */}
                    <div className="space-y-6">
                        {rightFeatures.map((feature, idx) => (
                            <Card key={idx} className="group overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.iconColor}`}>
                                            <feature.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}