import { Users, GraduationCap, TrendingUp, DollarSign } from "lucide-react"

const stats = [
    { icon: Users, label: "Total Students", value: "547", change: "+12%", color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: GraduationCap, label: "Total Teachers", value: "28", change: "+5%", color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: DollarSign, label: "Fee Collection", value: "$45,230", change: "+18%", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: TrendingUp, label: "Attendance Rate", value: "94.5%", change: "+2%", color: "text-emerald-600", bgColor: "bg-emerald-50" },
]

export function BranchDashboardStats() {
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
                            <span className="text-sm font-semibold text-green-500">
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
