"use client"

import { BookOpen, Users, FileText, TrendingUp, Calendar, Clock, Award, Bell } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"

const statsCards = [
    {
        icon: BookOpen,
        label: "Total Classes",
        value: "6",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Users,
        label: "Total Students",
        value: "142",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: FileText,
        label: "Pending Assignments",
        value: "8",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        icon: TrendingUp,
        label: "Attendance Rate",
        value: "94%",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
]

const upcomingClasses = [
    { subject: "Mathematics", grade: "Grade 10-A", time: "9:00 AM", room: "Room 101" },
    { subject: "Mathematics", grade: "Grade 10-B", time: "10:30 AM", room: "Room 101" },
    { subject: "Algebra", grade: "Grade 11-A", time: "1:00 PM", room: "Room 102" },
]

const recentActivity = [
    { action: "Graded assignment", details: "Mathematics Quiz - Grade 10-A", time: "2 hours ago" },
    { action: "Marked attendance", details: "Grade 10-B", time: "5 hours ago" },
    { action: "Created assignment", details: "Algebra Homework - Grade 11-A", time: "1 day ago" },
    { action: "Updated grades", details: "Midterm Exam - Grade 10-A", time: "2 days ago" },
]

export default function TeacherDashboardPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Welcome back, Sarah!"
                description="Here's what's happening with your classes today"
            />

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statsCards.map((stat) => {
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

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Upcoming Classes */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Today's Classes</h2>
                        <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        {upcomingClasses.map((cls, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                            >
                                <div>
                                    <p className="font-medium text-gray-900">{cls.subject}</p>
                                    <p className="text-sm text-gray-600">{cls.grade}</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                                        <Clock className="h-4 w-4" />
                                        {cls.time}
                                    </div>
                                    <p className="text-sm text-gray-600">{cls.room}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                        <Bell className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                                        <Award className="h-4 w-4 text-emerald-600" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                    <p className="text-sm text-gray-600">{activity.details}</p>
                                    <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Actions</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <button className="flex items-center gap-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 p-4 text-left transition-colors hover:bg-emerald-100">
                        <div className="rounded-lg bg-emerald-600 p-2">
                            <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Create Assignment</p>
                            <p className="text-sm text-gray-600">Add new homework</p>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 rounded-lg border-2 border-blue-200 bg-blue-50 p-4 text-left transition-colors hover:bg-blue-100">
                        <div className="rounded-lg bg-blue-600 p-2">
                            <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Mark Attendance</p>
                            <p className="text-sm text-gray-600">Record student presence</p>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 rounded-lg border-2 border-purple-200 bg-purple-50 p-4 text-left transition-colors hover:bg-purple-100">
                        <div className="rounded-lg bg-purple-600 p-2">
                            <Award className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Enter Grades</p>
                            <p className="text-sm text-gray-600">Update student scores</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
