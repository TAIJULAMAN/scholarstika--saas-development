import { Library, BookOpen, Users, Clock } from "lucide-react"

interface SubjectStatsProps {
    branchId?: string
}

const getSubjectStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            {
                icon: Library,
                label: "Total Subjects",
                value: "24",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: BookOpen,
                label: "Active Subjects",
                value: "22",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Users,
                label: "Departments",
                value: "6",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Clock,
                label: "Avg Hours/Week",
                value: "5.2",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ]
    }
    return [
        {
            icon: Library,
            label: "Subjects",
            value: "6",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: BookOpen,
            label: "Active",
            value: "5",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Users,
            label: "Departments",
            value: "4",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Clock,
            label: "Hours/Week",
            value: "4.8",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
    ]
}

export function SubjectStats({ branchId }: SubjectStatsProps) {
    const stats = getSubjectStats(branchId)

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
