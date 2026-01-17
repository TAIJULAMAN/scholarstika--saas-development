"use client"

import { Clock, Calendar, FileText, CheckCircle, Video, MapPin, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

export default function StudentDashboardPage() {
    const router = useRouter()

    const stats = [
        { label: "Attendance", value: "92%", icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Pending Assignments", value: "3", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Upcoming Exams", value: "2", icon: Calendar, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Grade Average", value: "B+", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
    ]

    const todaySchedule = [
        { subject: "Mathematics", time: "08:00 - 09:00", type: "offline", room: "Room 101", status: "Completed" },
        { subject: "Physics", time: "09:30 - 10:30", type: "online", link: "https://zoom.us/j/123", status: "Live Now", isOnline: true },
        { subject: "Chemistry", time: "11:00 - 12:00", type: "offline", room: "Lab 3", status: "Upcoming" },
        { subject: "English", time: "13:00 - 14:00", type: "offline", room: "Room 204", status: "Upcoming" },
    ]

    const assignments = [
        { title: "Quadratic Equations", subject: "Mathematics", due: "Today", status: "Pending", priority: "High" },
        { title: "Lab Report: Forces", subject: "Physics", due: "Tomorrow", status: "Pending", priority: "Medium" },
        { title: "Essay: Shakespeare", subject: "English", due: "Dec 20", status: "Submitted", priority: "Low" },
    ]

    return (
        <div className="space-y-6">
            {/* Header / Welcome Area */}
            <div className="rounded-xl bg-emerald-500 p-5 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">You have <span className="font-semibold text-white">3 assignments</span> due soon.</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <Clock className="h-4 w-4" />
                        Today: {new Date().toLocaleDateString()}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-transform hover:scale-[1.02]">
                            <div className={`rounded-lg p-3 ${stat.bg}`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Today's Schedule */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:col-span-2">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Today's Schedule</h2>
                        <button onClick={() => router.push('/student/schedule')} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View Weekly</button>
                    </div>
                    <div className="space-y-4">
                        {todaySchedule.map((cls, index) => (
                            <div key={index} className={`flex items-center justify-between rounded-xl border p-4 transition-all ${cls.isOnline ? 'border-emerald-100 bg-emerald-50/30' : 'border-gray-100 bg-white hover:bg-gray-50'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
                                        <span className="text-xs font-bold text-gray-500">{cls.time.split(':')[0]}</span>
                                        <span className="text-[10px] text-gray-400">AM</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{cls.subject}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            {cls.type === 'online' ? (
                                                <>
                                                    <Video className="h-3 w-3 text-emerald-500" />
                                                    <span className="text-emerald-600 font-medium">Online Class</span>
                                                </>
                                            ) : (
                                                <>
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{cls.room}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {cls.isOnline ? (
                                        <button onClick={() => window.open(cls.link, '_blank')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
                                            Join Now
                                        </button>
                                    ) : (
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cls.status === 'Completed' ? 'bg-gray-100 text-gray-500' : 'bg-green-100 text-green-700'}`}>
                                            {cls.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Assignments */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Due Soon</h2>
                        <button onClick={() => router.push('/student/assignments')} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">See All</button>
                    </div>
                    <div className="space-y-4">
                        {assignments.map((task, index) => (
                            <div key={index} className="rounded-lg border border-gray-100 p-4 transition-colors hover:bg-gray-50">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <p className="font-semibold text-gray-900 line-clamp-1">{task.title}</p>
                                        <p className="text-xs text-gray-500">{task.subject}</p>
                                    </div>
                                    <span className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600`}>
                                        {task.due}
                                    </span>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className={`text-xs font-medium ${task.status === 'Submitted' ? 'text-green-600' : 'text-gray-500'}`}>
                                        {task.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
