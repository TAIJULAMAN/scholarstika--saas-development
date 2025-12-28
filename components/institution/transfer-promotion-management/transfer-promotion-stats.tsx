import { ArrowRightLeft, TrendingUp, Users, CheckCircle } from "lucide-react"

interface TransferPromotionStatsProps {
    branchId?: string
}

const getTransferPromotionStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            { icon: ArrowRightLeft, label: "Transfers This Year", value: "142", color: "text-blue-600", bgColor: "bg-blue-50" },
            { icon: TrendingUp, label: "Promotions This Year", value: "1,247", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: Users, label: "Pending Actions", value: "23", color: "text-orange-600", bgColor: "bg-orange-50" },
            { icon: CheckCircle, label: "Completed", value: "1,389", color: "text-purple-600", bgColor: "bg-purple-50" },
        ]
    }
    return [
        { icon: ArrowRightLeft, label: "Transfers", value: "35", color: "text-blue-600", bgColor: "bg-blue-50" },
        { icon: TrendingUp, label: "Promotions", value: "312", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Users, label: "Pending", value: "5", color: "text-orange-600", bgColor: "bg-orange-50" },
        { icon: CheckCircle, label: "Completed", value: "347", color: "text-purple-600", bgColor: "bg-purple-50" },
    ]
}

export function TransferPromotionStats({ branchId }: TransferPromotionStatsProps) {
    const stats = getTransferPromotionStats(branchId)
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
