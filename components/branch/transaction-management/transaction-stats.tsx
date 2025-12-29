"use client"

import { useMemo } from "react"
import { Receipt, DollarSign, TrendingUp, Calendar } from "lucide-react"

interface TransactionStatsProps {
    branchId: string
}

export function TransactionStats({ branchId }: TransactionStatsProps) {
    const stats = useMemo(() => {
        // Mock data - would be replaced with actual API call based on branchId
        const allBranchesStats = [
            {
                icon: DollarSign,
                label: "Total Transactions",
                value: "3,847",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
            },
            {
                icon: TrendingUp,
                label: "This Month",
                value: "$284,500",
                color: "text-green-600",
                bgColor: "bg-green-50",
            },
            {
                icon: Receipt,
                label: "Successful",
                value: "3,792",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
            {
                icon: Calendar,
                label: "Failed/Pending",
                value: "55",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
            },
        ]

        // If a specific branch is selected, adjust stats accordingly
        if (branchId !== "all") {
            return allBranchesStats.map(stat => ({
                ...stat,
                value: stat.label === "Total Transactions" ? "385" :
                    stat.label === "This Month" ? "$28,450" :
                        stat.label === "Successful" ? "379" :
                            "6"
            }))
        }

        return allBranchesStats
    }, [branchId])

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
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
