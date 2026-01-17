"use client"

import { Calendar as CalendarIcon, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"

const stats = {
    attendance: 92,
    present: 45,
    absent: 3,
    late: 2,
    total: 50
}

const history = [
    { date: "Dec 10, 2024", status: "Present", color: "text-green-600 bg-green-50", icon: CheckCircle },
    { date: "Dec 09, 2024", status: "Present", color: "text-green-600 bg-green-50", icon: CheckCircle },
    { date: "Dec 08, 2024", status: "Late", color: "text-yellow-600 bg-yellow-50", icon: Clock },
    { date: "Dec 07, 2024", status: "Absent", color: "text-red-600 bg-red-50", icon: XCircle },
    { date: "Dec 06, 2024", status: "Present", color: "text-green-600 bg-green-50", icon: CheckCircle },
]

export default function StudentAttendancePage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Attendance Record</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Track your daily attendance status</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <CalendarIcon className="h-4 w-4" />
                        Total Days: {stats.total}
                    </div>
                </div>
            </div>

            {/* Overall Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <p className="text-sm font-medium text-gray-500">Average Attendance</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-emerald-600">{stats.attendance}%</span>
                        <span className="text-sm text-green-600">↑ 2.5%</span>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <p className="text-sm font-medium text-gray-500">Days Present</p>
                    <p className="mt-2 text-3xl font-bold text-green-600">{stats.present}</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <p className="text-sm font-medium text-gray-500">Days Absent</p>
                    <p className="mt-2 text-3xl font-bold text-red-600">{stats.absent}</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <p className="text-sm font-medium text-gray-500">Days Late</p>
                    <p className="mt-2 text-3xl font-bold text-yellow-600">{stats.late}</p>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
                {/* Visual Chart Placeholder / Calendar View Idea */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:col-span-1">
                    <h2 className="mb-4 text-lg font-bold text-gray-900">Attendance Policy</h2>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p>
                            Students are expected to maintain at least <strong>85% attendance</strong> to be eligible for final exams.
                        </p>
                        <div className="rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                            <div className="flex gap-2">
                                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                                <p className="text-yellow-800 font-medium">Warning Threshold</p>
                            </div>
                            <p className="mt-2 text-yellow-700">You have 3 absences. 2 more will trigger a parent notification.</p>
                        </div>
                    </div>
                </div>

                {/* History List */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:col-span-2">
                    <h2 className="mb-6 text-lg font-bold text-gray-900">Recent History</h2>
                    <div className="space-y-4">
                        {history.map((record, index) => {
                            const Icon = record.icon
                            return (
                                <div key={index} className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-colors hover:bg-gray-50">
                                    <div className="flex items-center gap-4">
                                        <div className={`rounded-full p-2 ${record.color}`}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{record.date}</p>
                                            <p className="text-xs text-gray-500">Regular Class Day</p>
                                        </div>
                                    </div>
                                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${record.color.replace('text-', 'text-opacity-100 text-')}`}>
                                        {record.status}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
