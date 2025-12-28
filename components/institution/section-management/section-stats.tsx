import { BookOpen, Users, Building2, TrendingUp } from "lucide-react"

interface SectionStatsProps {
    branchId?: string
}

const getSectionStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            {
                icon: BookOpen,
                label: "Total Classes",
                value: "10",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Users,
                label: "Total Capacity",
                value: "1,920",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Building2,
                label: "Total Sections",
                value: "47",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: TrendingUp,
                label: "Available Seats",
                value: "73",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ]
    }
    return [
        {
            icon: BookOpen,
            label: "Total Classes",
            value: "112",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Users,
            label: "Capacity",
            value: "480",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Building2,
            label: "Total Sections",
            value: "462",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: TrendingUp,
            label: "Available",
            value: "18",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
    ]
}

export function SectionStats({ branchId }: SectionStatsProps) {
    const stats = getSectionStats(branchId)

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-2 text-4xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
