interface PageHeaderProps {
    title: string
    description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                {description && <p className="text-sm text-gray-600">{description}</p>}
            </div>
        </div>
    )
}
