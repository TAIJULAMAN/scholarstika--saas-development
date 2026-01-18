"use client"

import { GraduationCap, Users, CheckCircle, Clock } from "lucide-react"

const stats = [
    {
        label: "Total Scholarships",
        value: "4",
        change: "+1",
        icon: GraduationCap,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "up"
    },
    {
        label: "Active Recipients",
        value: "62",
        change: "+5",
        icon: Users,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "up"
    },
    {
        label: "Pending Approvals",
        value: "8",
        change: "-2",
        icon: Clock,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        trend: "down"
    }
]

export function ScholarshipStats() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className={`flex items-center text-xs font-semibold ${stat.trend === "up" ? "text-green-500" :
                                stat.trend === "down" ? "text-red-500" : "text-gray-500"
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
