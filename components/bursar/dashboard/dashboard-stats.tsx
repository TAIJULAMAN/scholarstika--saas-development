import { TrendingUp, TrendingDown, DollarSign, Wallet, AlertCircle, CheckCircle } from "lucide-react"

const stats = [
    {
        icon: DollarSign,
        label: "Total Collection",
        value: "$124,500",
        change: "+12.5%",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "up"
    },
    {
        icon: AlertCircle,
        label: "Pending Fees",
        value: "$12,450",
        change: "-5.2%",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "down"
    },
    {
        icon: TrendingDown,
        label: "Monthly Expenses",
        value: "$45,200",
        change: "+2.4%",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "up"
    },
]

export function BursarDashboardStats() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => {
                const Icon = stat.icon
                const isPositive = stat.trend === "up"

                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className={`flex items-center text-xs font-semibold ${(stat.label === "Pending Fees" || stat.label === "Monthly Expenses")
                                ? (stat.change.startsWith("+") ? "text-red-500" : "text-green-500")
                                : (stat.change.startsWith("+") ? "text-green-500" : "text-red-500")
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <div className="mt-1 flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
