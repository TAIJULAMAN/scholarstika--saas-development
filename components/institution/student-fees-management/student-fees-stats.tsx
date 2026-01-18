"use client"

import { useMemo } from "react"
import { DollarSign, CreditCard, Users, AlertCircle } from "lucide-react"

interface StudentFeesStatsProps {
    branchId: string
}

export function StudentFeesStats({ branchId }: StudentFeesStatsProps) {
    const stats = useMemo(() => {
        const allBranchesStats = [
            {
                icon: DollarSign,
                label: "Total Fees Collected",
                value: "$1,247,500",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: CreditCard,
                label: "Pending Payments",
                value: "$142,300",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: Users,
                label: "Students with Dues",
                value: "284",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: AlertCircle,
                label: "Overdue Payments",
                value: "47",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
        ]

        if (branchId !== "all") {
            return allBranchesStats.map(stat => ({
                ...stat,
                value: stat.label === "Total Fees Collected" ? "$124,750" :
                    stat.label === "Pending Payments" ? "$14,230" :
                        stat.label === "Students with Dues" ? "28" :
                            "5"
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
