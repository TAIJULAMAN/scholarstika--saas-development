"use client"

import { Activity, Users, Thermometer, AlertTriangle } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const stats = [
    {
        title: "Total Visits",
        value: "24",
        description: "+12% from last week",
        icon: Users,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
    {
        title: "Active Cases",
        value: "3",
        description: "Requires follow-up",
        icon: Activity,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
    {
        title: "Fever Cases",
        value: "5",
        description: "Seasonal spike observed",
        icon: Thermometer,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
    {
        title: "Medical Alerts",
        value: "12",
        description: "Students with allergies",
        icon: AlertTriangle,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
]

export function HealthStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <Card key={index} className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">
                                {stat.title}
                            </CardTitle>
                            <div className={`rounded-full p-4 ${stat.bg}`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
