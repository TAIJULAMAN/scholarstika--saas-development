import { Monitor, Users, Clock, CheckCircle } from "lucide-react"

interface OnlineExamStatsProps {
    branchId?: string
}

const getOnlineExamStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            {
                icon: Monitor,
                label: "Total Online Exams",
                value: "24",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                icon: Users,
                label: "Active Participants",
                value: "1,247",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Clock,
                label: "Scheduled",
                value: "8",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
            },
            {
                icon: CheckCircle,
                label: "Completed",
                value: "16",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
        ]
    }
    return [
        {
            icon: Monitor,
            label: "Online Exams",
            value: "6",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: Users,
            label: "Participants",
            value: "312",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Clock,
            label: "Scheduled",
            value: "2",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            icon: CheckCircle,
            label: "Completed",
            value: "4",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
    ]
}

export function OnlineExamStats({ branchId }: OnlineExamStatsProps) {
    const stats = getOnlineExamStats(branchId)

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
