interface PageHeaderProps {
    title: string
    description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
            <div className="container mx-auto px-5 text-center lg:px-0">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
                <p className="mx-auto max-w-2xl text-lg md:text-xl">
                    {description}
                </p>
            </div>
        </section>
    )
}
