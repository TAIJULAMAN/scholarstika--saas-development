import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeft,
    CheckCircle,
    Users,
    BarChart3,
    Globe
} from "lucide-react"

export default function FeatureDetailsPage() {
    const features = [
        {
            id: "multi-tenant",
            title: "Multi-Tenant School Setup With Complete Data Separation",
            description: "Onboard schools with custom branding, isolated databases, and unique configurations — all within one system.",
            icon: Users,
            color: "purple",
            image: "/features/multi-tenant.png",
            benefits: [
                "Complete data isolation for each school",
                "Custom branding and domain for each institution",
                "Centralized management dashboard",
                "Scalable infrastructure for unlimited schools",
                "Role-based access control",
                "Independent configuration per school"
            ],
            details: "Our multi-tenant architecture ensures that each school operates in a completely isolated environment while benefiting from shared infrastructure. This approach provides maximum security, customization, and cost-effectiveness. Schools can have their own branding, custom domains, and unique configurations while administrators manage everything from a single centralized dashboard."
        },
        {
            id: "admin-dashboard",
            title: "Powerful School Admin Dashboard",
            description: "Manage teachers, classes, subjects, students, parents, announcements, and analytics from one clean dashboard.",
            icon: BarChart3,
            color: "amber",
            image: "/features/Powerful School.png",
            benefits: [
                "Comprehensive analytics and reporting",
                "Real-time data visualization",
                "Quick access to all modules",
                "Customizable dashboard widgets",
                "Automated notifications and alerts",
                "Mobile-responsive interface"
            ],
            details: "The admin dashboard is the command center for your school management. It provides a comprehensive overview of all school operations with intuitive navigation, real-time analytics, and quick access to all essential features. Administrators can monitor attendance, track academic performance, manage staff, and communicate with stakeholders all from one unified interface."
        },
        {
            id: "mobile-apps",
            title: "Student & Parent Mobile Apps",
            description: "Students can access classes, homework, grades, and resources. Parents track attendance, fees, and announcements.",
            icon: Globe,
            color: "blue",
            image: "/features/Student.png",
            benefits: [
                "iOS and Android native apps",
                "Real-time push notifications",
                "Offline access to resources",
                "Secure parent-student linking",
                "Digital assignment submission",
                "In-app messaging system"
            ],
            details: "Our mobile applications bring the entire school ecosystem to students' and parents' fingertips. Students can access their class schedules, submit assignments, view grades, and communicate with teachers. Parents can monitor their child's attendance, track academic progress, receive important announcements, and manage fee payments — all from their mobile devices."
        },
        {
            id: "attendance-exams",
            title: "Smart Attendance, Exams & Report Cards",
            description: "Teachers mark attendance, enter marks, and generate printable report cards with automatic grade calculation.",
            icon: CheckCircle,
            color: "emerald",
            image: "/features/Smart.png",
            benefits: [
                "Multiple attendance marking methods",
                "Automated grade calculations",
                "Customizable report card templates",
                "Digital and printable formats",
                "Attendance analytics and patterns",
                "Exam schedule management"
            ],
            details: "Streamline your academic assessment process with our intelligent attendance and examination system. Teachers can mark attendance using various methods including biometric, RFID, or manual entry. The system automatically calculates grades based on your grading scheme, generates comprehensive report cards, and provides detailed analytics on student performance and attendance patterns."
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 py-16 text-white md:py-20">
                <div className="container mx-auto px-5 lg:px-0">
                    <Link href="/" className="mb-6 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white">
                        <ArrowLeft className="h-5 w-5" />
                        Back to Home
                    </Link>
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Powerful Features for Modern Schools
                    </h1>
                    <p className="max-w-3xl text-lg text-white/90">
                        Discover how our comprehensive platform empowers schools, teachers, students, and parents with cutting-edge technology and seamless management tools.
                    </p>
                </div>
            </section>

            {/* Features Details */}
            <section className="py-16">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="space-y-16">
                        {features.map((feature, idx) => (
                            <div key={feature.id} id={feature.id} className="scroll-mt-20">
                                <Card className="overflow-hidden border-none shadow-xl">
                                    <CardContent className="p-0">
                                        <div className={`grid gap-8 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                            {/* Image */}
                                            <div className={`relative h-[300px] lg:h-auto ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 lg:p-12">
                                                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-${feature.color}-600`}>
                                                    <feature.icon className="h-8 w-8 text-white" />
                                                </div>

                                                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                                                    {feature.title}
                                                </h2>

                                                <p className="mb-6 text-lg text-gray-600">
                                                    {feature.description}
                                                </p>

                                                <p className="mb-8 leading-relaxed text-gray-700">
                                                    {feature.details}
                                                </p>

                                                <h3 className="mb-4 text-xl font-bold text-gray-900">Key Benefits</h3>
                                                <ul className="space-y-3">
                                                    {feature.benefits.map((benefit, bidx) => (
                                                        <li key={bidx} className="flex items-start gap-3">
                                                            <CheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 text-${feature.color}-600`} />
                                                            <span className="text-gray-700">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-5 text-center lg:px-0">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Ready to Transform Your School?
                    </h2>
                    <p className="mb-8 text-lg text-white/90">
                        Join hundreds of schools already using our platform to streamline operations and enhance education.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/book-demo">
                            <Button size="lg" className="bg-white px-8 text-emerald-600 hover:bg-gray-50">
                                Book a Demo
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-emerald-600">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
