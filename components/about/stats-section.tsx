export function StatsSection() {
    return (
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
    )
}
