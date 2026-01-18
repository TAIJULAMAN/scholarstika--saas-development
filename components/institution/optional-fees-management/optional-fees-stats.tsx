"use client"

import { useMemo } from "react"
import { FileText, DollarSign, Users, TrendingUp } from "lucide-react"

interface OptionalFeesStatsProps {
    branchId: string
}

export function OptionalFeesStats({ branchId }: OptionalFeesStatsProps) {
    const stats = useMemo(() => {
        // Mock data - would be replaced with actual API call based on branchId
        const allBranchesStats = [
            {
                icon: FileText,
                label: "Total Optional Fees",
                value: "12",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: DollarSign,
                label: "Revenue (This Year)",
                value: "$124,500",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: Users,
                label: "Students Enrolled",
                value: "847",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
            {
                icon: TrendingUp,
                label: "Active Programs",
                value: "9",
                color: "text-emerald-500",
                bgColor: "bg-emerald-50",
            },
        ]

        // If a specific branch is selected, adjust stats accordingly
        if (branchId !== "all") {
            return allBranchesStats.map(stat => ({
                ...stat,
                value: stat.label === "Total Optional Fees" ? "8" :
                    stat.label === "Revenue (This Year)" ? "$12,450" :
                        stat.label === "Students Enrolled" ? "85" :
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
