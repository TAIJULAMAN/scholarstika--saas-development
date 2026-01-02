"use client"

import { Users, CreditCard, TrendingUp, AlertTriangle, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ParentDashboard() {
    const stats = [
        { label: "Total Fees Due", value: "$450.00", icon: CreditCard, color: "text-red-600", bg: "bg-red-50" },
        { label: "Children Active", value: "2", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Avg Attendance", value: "94%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Pending Notices", value: "1", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50" },
    ]

    const recentActivities = [
        { title: "Report Card Released", child: "Alex Thompson", date: "Today, 10:00 AM", type: "academic" },
        { title: "Fee Invoice Generated", child: "Sarah Thompson", date: "Yesterday, 2:00 PM", type: "finance" },
        { title: "Absent Notification", child: "Alex Thompson", date: "Dec 12, 2024", type: "attendance" },
    ]

    const children = [
        {
            name: "Alex Thompson",
            grade: "Grade 11-A",
            attendance: 92,
            nextExam: "Physics (Friday)",
            image: "https://avatar.iran.liara.run/public/33"
        },
        {
            name: "Sarah Thompson",
            grade: "Grade 8-B",
            attendance: 96,
            nextExam: "Math (Monday)",
            image: "https://avatar.iran.liara.run/public/78"
        }
    ]

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="rounded-xl bg-emerald-600 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Good Afternoon, Mr. Peterson</h1>
                <p className="mt-1 text-emerald-100 opacity-90">Here's a summary of your children's performance and school updates.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-transform hover:scale-[1.02]">
                            <div className={`rounded-lg p-3 ${stat.bg}`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Children Overview */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold text-gray-900">Your Children</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {children.map((child, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-200">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={child.image}
                                        alt={child.name}
                                        width={64}
                                        height={64}
                                        className="h-16 w-16 rounded-full border-2 border-emerald-100"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{child.name}</h3>
                                        <p className="text-sm text-gray-500">{child.grade}</p>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-3 border-t border-gray-50 pt-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Attendance</span>
                                        <span className="font-semibold text-emerald-600">{child.attendance}%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Next Exam</span>
                                        <span className="font-medium text-gray-900">{child.nextExam}</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
                    </div>
                    <div className="space-y-6">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex gap-4">
                                <div className={`relative mt-1 h-2 w-2 rounded-full ${activity.type === 'finance' ? 'bg-red-500' :
                                    activity.type === 'attendance' ? 'bg-orange-500' : 'bg-emerald-500'
                                    }`} />
                                <div>
                                    <p className="font-semibold text-sm text-gray-900">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.child}</p>
                                    <p className="mt-1 text-xs text-gray-400">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Invoice Alert Example */}
                    <div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-4">
                        <div className="flex items-center gap-3 text-red-800">
                            <CreditCard className="h-5 w-5" />
                            <span className="font-semibold text-sm">Fee Payment Due</span>
                        </div>
                        <p className="mt-1 text-xs text-red-600">Tuition fees for Term 2 are pending for Alex.</p>
                        <button className="mt-3 w-full rounded-md bg-white py-1.5 text-xs font-bold text-red-600 shadow-sm border border-red-100 hover:bg-red-50">
                            Pay $450.00
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
