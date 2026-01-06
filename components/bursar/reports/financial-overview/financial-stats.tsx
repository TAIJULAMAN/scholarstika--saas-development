import { TrendingUp, TrendingDown, DollarSign, Wallet, AlertCircle } from "lucide-react"

const stats = [
    {
        icon: DollarSign,
        label: "Total Revenue",
        value: "$845,920",
        change: "+15.2%",
        subtext: "YTD",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        trend: "up"
    },
    {
        icon: TrendingDown,
        label: "Total Expenses",
        value: "$324,150",
        change: "+5.2%",
        subtext: "YTD",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        trend: "down"
    },
    {
        icon: Wallet,
        label: "Net Profit",
        value: "$521,770",
        change: "+22.4%",
        subtext: "YTD",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        trend: "up"
    },
    {
        icon: AlertCircle,
        label: "Outstanding Dues",
        value: "$45,230",
        change: "-8.4%",
        subtext: "Total Pending",
        color: "text-red-600",
        bgColor: "bg-red-50",
        trend: "up" // trend up means good here as pending decreased? Actually trend usually indicates direction of number. -8.4% is good.
    },
]

export function FinancialStats() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                const isPositiveChange = stat.change.startsWith("+")
                const isExpenseOrDues = stat.label === "Total Expenses" || stat.label === "Outstanding Dues"

                const changeColor = isExpenseOrDues
                    ? (isPositiveChange ? "text-red-600" : "text-emerald-600")
                    : (isPositiveChange ? "text-emerald-600" : "text-red-600")

                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className={`text-xs font-semibold ${changeColor}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <div className="mt-1 flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <span className="text-xs text-gray-400">{stat.subtext}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
