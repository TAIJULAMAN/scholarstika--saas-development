import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background */}
            <section
                className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-emerald-500 to-amber-400"
                style={{
                    backgroundImage: "url('/about.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-amber-400/90" />

                {/* Content */}
                <div className="container relative z-10 mx-auto px-6 py-16 lg:px-12 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="text-white">
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                Transforming Education Through Innovation
                            </h1>
                            <p className="mb-8 text-lg leading-relaxed md:text-xl">
                                Empowering schools worldwide with cutting-edge technology that simplifies management, enhances learning experiences, and connects communities in meaningful ways.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-white px-8 text-emerald-600 hover:bg-gray-100">
                                    <Link href="/auth/signup">Get Started</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-emerald-600">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="/about2.png"
                                    alt="Students collaborating with technology"
                                    width={600}
                                    height={400}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gradient-to-br from-purple-50 to-white py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
                        Our <span className="relative">Mission<span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"></span></span>
                    </h2>
                    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500">
                                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                                    Revolutionizing School Management for the Digital Age
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    At EduFlow, we believe that education should be accessible, efficient, and inspiring. Our mission is to empower educational institutions with intelligent, user-friendly technology that streamlines administrative tasks, enhances communication, and creates more time for what truly matters — teaching and learning.
                                </p>
                                <p className="leading-relaxed text-gray-600">
                                    We're committed to building a platform that adapts to the unique needs of every school, fostering collaboration between teachers, students, and parents while providing actionable insights that drive better educational outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-gradient-to-br from-cyan-50 to-white py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
                        Our <span className="relative">Vision<span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"></span></span>
                    </h2>
                    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                                    A Connected Global Education Ecosystem
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    We envision a future where every school, regardless of size or location, has access to world-class management tools that break down barriers and create opportunities for growth.
                                </p>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    Our platform will continue to evolve with emerging technologies — from AI-powered insights to seamless integrations — ensuring that educators stay ahead of the curve.
                                </p>
                                <p className="leading-relaxed text-gray-600">
                                    Together, we're building a future where technology and education work in perfect harmony, creating limitless possibilities for students everywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl">
                        Meet <span className="relative">Our<span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"></span></span> Team
                    </h2>
                    <p className="mb-12 text-center text-gray-600">
                        A group of educators, designers, engineers, and innovators dedicated to transforming education.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Team Member 1 */}
                        <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <Image
                                    src="/team/t1.png"
                                    alt="Sarah Mitchell"
                                    width={300}
                                    height={300}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900">Sarah Mitchell</h3>
                            <p className="mb-3 text-sm text-gray-600">CEO & Founder</p>
                            <div className="flex gap-2">
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-purple-100 text-purple-600 hover:bg-purple-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-purple-100 text-purple-600 hover:bg-purple-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <Image
                                    src="/team/t2.png"
                                    alt="Michael Chen"
                                    width={300}
                                    height={300}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900">Michael Chen</h3>
                            <p className="mb-3 text-sm text-gray-600">CTO & Co-Founder</p>
                            <div className="flex gap-2">
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-600 hover:bg-blue-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-600 hover:bg-blue-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <Image
                                    src="/team/t3.png"
                                    alt="David Rodriguez"
                                    width={300}
                                    height={300}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900">David Rodriguez</h3>
                            <p className="mb-3 text-sm text-gray-600">Head of Product</p>
                            <div className="flex gap-2">
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-emerald-100 text-emerald-600 hover:bg-emerald-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-emerald-100 text-emerald-600 hover:bg-emerald-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <Image
                                    src="/team/t4.png"
                                    alt="Emily Watson"
                                    width={300}
                                    height={300}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900">Emily Watson</h3>
                            <p className="mb-3 text-sm text-gray-600">Head of Design</p>
                            <div className="flex gap-2">
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-amber-100 text-amber-600 hover:bg-amber-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-amber-100 text-amber-600 hover:bg-amber-200">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-emerald-600 py-16 text-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="mb-2 text-4xl font-bold md:text-5xl">500+</div>
                            <div className="text-emerald-100">Schools Worldwide</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold md:text-5xl">100K+</div>
                            <div className="text-emerald-100">Active Students</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold md:text-5xl">50K+</div>
                            <div className="text-emerald-100">Teachers</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold md:text-5xl">30+</div>
                            <div className="text-emerald-100">Countries</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
