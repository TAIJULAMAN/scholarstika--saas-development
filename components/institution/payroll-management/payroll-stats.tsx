"use client"

import { Banknote, Users, CheckCircle, Clock } from "lucide-react"

interface PayrollStatsProps {
    branchId: string
}

export function PayrollStats({ branchId }: PayrollStatsProps) {
    // Mock data - will be replaced with actual API calls
    const stats = [
        {
            icon: Banknote,
            label: "Total Payroll (This Month)",
            value: "$524,300",
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            icon: Users,
            label: "Total Employees",
            value: "68",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: CheckCircle,
            label: "Paid",
            value: "62",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            icon: Clock,
            label: "Pending",
            value: "6",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
    ]

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
