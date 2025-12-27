import { Users, Building2, Star, Calendar } from "lucide-react"

interface TeacherStatsProps {
    branchId: string
}

const getTeacherStats = (branchId: string) => {
    if (branchId === "all") {
        return [
            { icon: Users, label: "Total Teachers", value: "120", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: Building2, label: "Active Branches", value: "8", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: Star, label: "Avg Rating", value: "4.2", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: Calendar, label: "Attendance Rate", value: "92%", color: "text-green-600", bgColor: "bg-green-50" },
        ]
    }
    return [
        { icon: Users, label: "Teachers", value: "35", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Building2, label: "Branch", value: "1", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Star, label: "Avg Rating", value: "4.5", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Calendar, label: "Attendance", value: "94%", color: "text-green-600", bgColor: "bg-green-50" },
    ]
}

export function TeacherStats({ branchId }: TeacherStatsProps) {
    const stats = getTeacherStats(branchId)

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
