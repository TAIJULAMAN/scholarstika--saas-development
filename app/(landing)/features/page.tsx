import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
    Building2,
    Users,
    ClipboardCheck,
    FileText,
    DollarSign,
    MessageSquare,
    BarChart3,
    Smartphone,
} from "lucide-react"

export default function FeaturesPage() {
    const features = [
        {
            icon: Building2,
            title: "Multitenancy",
            description: "Manage multiple schools under one secure system, each with independent data and branding. Perfect for education management institutions.",
            color: "bg-purple-500",
        },
        {
            icon: Users,
            title: "Multi-Branch Capability",
            description: "Seamlessly manage multiple branches across various institution with centralized billing and branch-specific dashboards. Centralized control with local autonomy.",
            color: "bg-cyan-500",
        },
        {
            icon: ClipboardCheck,
            title: "Attendance Management",
            description: "Digital and attendance for teachers, students, and classes with real-time analytics. Track patterns, automate reports, and improve accountability.",
            color: "bg-emerald-500",
        },
        {
            icon: FileText,
            title: "Exams & Assessments",
            description: "Create exams, enter marks, and generate report cards instantly. Support for continuous assessment, term exams, and automated grade calculations.",
            color: "bg-amber-500",
        },
        {
            icon: DollarSign,
            title: "Fees & Billing",
            description: "Custom fee structures, invoices, payments, reminders, and automated reminders. Complete financial management with detailed transaction history.",
            color: "bg-yellow-500",
        },
        {
            icon: MessageSquare,
            title: "Communication System",
            description: "Announcements, internal messaging, SMS/email alerts, and parent-teacher communication. Keep everyone connected and informed in real-time.",
            color: "bg-purple-500",
        },
        {
            icon: BarChart3,
            title: "Analytics & Reports",
            description: "Powerful dashboards for attendance, finance, academics, performance trends, and institution-wide insights. Data-driven decision-making made simple.",
            color: "bg-cyan-500",
        },
        {
            icon: Smartphone,
            title: "Mobile Apps",
            description: "iOS, Android, and PWA apps for teachers, students, and parents with real-time updates. Access everything on-the-go with native mobile experience.",
            color: "bg-purple-500",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-purple-600">
                            Comprehensive Features
                        </p>
                        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                            Powerful Features for Modern Schools
                        </h1>
                        <p className="text-lg text-gray-600 md:text-xl">
                            Smart, multi-tenant, cloud-based school management platform designed to streamline operations, enhance communication, and drive academic excellence across all departments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {features.map((feature, idx) => (
                            <Card key={idx} className="border-none bg-white shadow-md transition-all hover:shadow-xl">
                                <CardContent className="p-8">
                                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg ${feature.color}`}>
                                        <feature.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="leading-relaxed text-gray-600">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 to-amber-200 py-16">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: "url('/ready.png')" }}
                />

                {/* Content */}
                <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
                    <h2 className="mb-4 text-3xl font-bold text-[#098f55] md:text-5xl">
                        Ready to Transform Your School?
                    </h2>
                    <p className="mb-8 text-lg text-gray-800">
                        Join hundreds of schools already using Scholarstika to streamline operations and improve educational outcomes.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="bg-emerald-600 px-8 text-white">
                            <Link href="/auth/signup">Get Started</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white px-8 text-gray-900">
                            <Link href="/book-demo">Book a Demo</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
