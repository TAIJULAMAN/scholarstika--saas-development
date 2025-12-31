export function MissionSection() {
    return (
        <section className="bg-gradient-to-br from-purple-50 to-white py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
                    Our <span className="relative">Mission<span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"></span></span>
                </h2>
                <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
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
                                At EduFlow, we believe education should be accessible, efficient, and truly inspiring for everyone involved. Our mission is to empower educational institutions with intelligent, user-friendly technology that simplifies complex administrative processes, reduces operational overhead, and allows educators to focus on what matters most — meaningful teaching and impactful learning experiences.
                            </p>
                            <p className="mb-4 leading-relaxed text-gray-600">
                                We are dedicated to building a flexible and scalable platform that adapts to the unique structure and goals of every school. By seamlessly connecting administrators, teachers, students, and parents in one unified system, EduFlow fosters transparency, collaboration, and trust across the entire educational ecosystem.
                            </p>
                            <p className="leading-relaxed text-gray-600">
                                Through data-driven insights, real-time communication, and automation, EduFlow helps institutions make informed decisions, improve academic performance, and create a supportive learning environment that drives long-term success and measurable educational outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
