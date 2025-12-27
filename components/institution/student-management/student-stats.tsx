import { Users, UserCheck, Clock, Building2 } from "lucide-react"

interface StudentStatsProps {
    branchId?: string
}

const getStudentStats = (branchId?: string) => {
    return [
        { icon: Users, label: "Total Students", value: "12,847", change: "8.5% from last month", color: "text-purple-600", bgColor: "bg-purple-50" },
        { icon: UserCheck, label: "Active Students", value: "11,963", subtext: "93.1% of total", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Clock, label: "Pending Admissions", value: "284", subtext: "Awaiting approval", color: "text-yellow-600", bgColor: "bg-yellow-50" },
        { icon: Building2, label: "Total Branches", value: "24", subtext: "Across 8 countries", color: "text-blue-600", bgColor: "bg-blue-50" },
    ]
}

export function StudentStats({ branchId }: StudentStatsProps) {
    const stats = getStudentStats(branchId)

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="mt-1 text-3xl font-bold text-gray-900">{stat.value}</p>
                            <p className="mt-1 text-xs text-green-600">{stat.change || stat.subtext}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
