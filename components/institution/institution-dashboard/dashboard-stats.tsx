import { Building2, Users, GraduationCap, TrendingUp } from "lucide-react"

const stats = [
    { icon: Building2, label: "Total Branches", value: "24", change: "+12%", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: Users, label: "Total Students", value: "12,847", change: "+8%", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: GraduationCap, label: "Total Teachers", value: "247", change: "+5%", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: TrendingUp, label: "Total Earnings", value: "120,847", change: "-2%", color: "text-green-600", bgColor: "bg-green-50", negative: true },
]

export function DashboardStats() {
    return (
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
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
