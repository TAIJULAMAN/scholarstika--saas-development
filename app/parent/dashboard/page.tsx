"use client"

import { Users, CreditCard, TrendingUp, AlertTriangle, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ChildProfileModal } from "@/components/parent/children/child-profile-modal"
import { DashboardAnnouncements } from "@/components/common/dashboard-announcements"

export default function ParentDashboard() {
    const stats = [
        { label: "Total Fees Due", value: "$450.00", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "Children Active", value: "2", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "Avg Attendance", value: "94%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "Pending Notices", value: "1", icon: AlertTriangle, color: "text-emerald-500", bg: "bg-emerald-50" },
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
            studentId: "ST-2024-001",
            school: "Main Campus",
            attendance: 92,
            gpa: "3.8",
            lastGrade: "A-",
            nextExam: "Physics (Friday)",
        },
        {
            name: "Sarah Thompson",
            grade: "Grade 8-B",
            studentId: "ST-2024-089",
            school: "Junior Wing",
            attendance: 96,
            gpa: "4.0",
            lastGrade: "B+",
            nextExam: "Math (Monday)",
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedChild, setSelectedChild] = useState<typeof children[0] | null>(null)

    const handleViewProfile = (child: typeof children[0]) => {
        setSelectedChild(child)
        setIsModalOpen(true)
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-5 text-white shadow-lg">
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

            <div className=" space-y-5">
                {/* Children Overview */}
                <div className="lg:col-span-2 space-y-5">
                    <h2 className="text-lg font-bold text-gray-900">Childrens</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {children.map((child, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-200">
                                <div className="flex items-center gap-4">
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
                                <div className="mt-5">
                                    <button
                                        onClick={() => handleViewProfile(child)}
                                        className="flex-1 rounded-lg bg-emerald-600 py-2.5 px-5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                                    >
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
                                <div className={`relative mt-1 h-2 w-2 rounded-full bg-emerald-500`} />
                                <div>
                                    <p className="font-semibold text-sm text-gray-900">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.child}</p>
                                    <p className="mt-1 text-xs text-gray-400">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <DashboardAnnouncements role="Parent" />

            {/* Child Profile Modal */}
            {selectedChild && (
                <ChildProfileModal
                    open={isModalOpen}
                    onOpenChange={setIsModalOpen}
                    child={selectedChild}
                />
            )}
        </div>
    )
}
