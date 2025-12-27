import { Users, GraduationCap, TrendingUp, DollarSign } from "lucide-react"

interface BranchStatsProps {
    branchId: string
}

const getBranchStats = (branchId: string) => {
    if (branchId === "all") {
        return [
            { icon: Users, label: "Total Students", value: "12,847", change: "+8%", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: GraduationCap, label: "Total Teachers", value: "560", change: "+5%", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: TrendingUp, label: "Avg Attendance", value: "92.3%", change: "+3%", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: DollarSign, label: "Total Earning", value: "$2.4M", change: "+12%", color: "text-green-600", bgColor: "bg-green-50" },
        ]
    }
    return [
        { icon: Users, label: "Students", value: "3,124", change: "+12%", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: GraduationCap, label: "Teachers", value: "187", change: "+8%", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: TrendingUp, label: "Attendance", value: "88.5%", change: "-2%", color: "text-green-600", bgColor: "bg-green-50", negative: true },
        { icon: DollarSign, label: "Earning", value: "$385K", change: "+15%", color: "text-green-600", bgColor: "bg-green-50" },
    ]
}

export function BranchStats({ branchId }: BranchStatsProps) {
    const stats = getBranchStats(branchId)

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className={`text-sm font-semibold ${stat.negative ? 'text-red-500' : 'text-green-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
