"use client"

import { Activity, UserPlus, GraduationCap, DollarSign, FileText, Calendar } from "lucide-react"

const activities = [
    {
        id: 1,
        icon: UserPlus,
        title: "New Student Enrollment",
        description: "Alice Johnson enrolled in Grade 5-A",
        time: "2 hours ago",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        id: 2,
        icon: DollarSign,
        title: "Fee Payment Received",
        description: "Payment of $450 from Bob Smith",
        time: "4 hours ago",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        id: 3,
        icon: GraduationCap,
        title: "New Teacher Joined",
        description: "Sarah Williams joined as Math Teacher",
        time: "1 day ago",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        id: 4,
        icon: FileText,
        title: "Exam Results Published",
        description: "Grade 4 Mid-term exam results are now available",
        time: "2 days ago",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        id: 5,
        icon: Calendar,
        title: "Class Schedule Updated",
        description: "New schedule for Grade 3-B has been published",
        time: "3 days ago",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
]

export function RecentActivities() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                <Activity className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
                {activities.map((activity) => {
                    const Icon = activity.icon
                    return (
                        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-gray-50">
                            <div className={`rounded-lg ${activity.bgColor} p-2`}>
                                <Icon className={`h-5 w-5 ${activity.color}`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                                <p className="text-sm text-gray-600">{activity.description}</p>
                                <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
