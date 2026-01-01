import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { features } from "@/data/features"

export default function FeaturesPage() {
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
