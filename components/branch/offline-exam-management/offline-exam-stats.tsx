import { FileEdit, Calendar, Users, CheckCircle } from "lucide-react"

interface OfflineExamStatsProps {
    branchId?: string
}

const getOfflineExamStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            {
                icon: FileEdit,
                label: "Total Offline Exams",
                value: "18",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
            },
            {
                icon: Calendar,
                label: "Upcoming",
                value: "5",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
            },
            {
                icon: Users,
                label: "Total Students",
                value: "1,247",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                icon: CheckCircle,
                label: "Completed",
                value: "13",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
        ]
    }
    return [
        {
            icon: FileEdit,
            label: "Offline Exams",
            value: "4",
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
        },
        {
            icon: Calendar,
            label: "Upcoming",
            value: "1",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            icon: Users,
            label: "Students",
            value: "312",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: CheckCircle,
            label: "Completed",
            value: "3",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
    ]
}

export function OfflineExamStats({ branchId }: OfflineExamStatsProps) {
    const stats = getOfflineExamStats(branchId)

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
