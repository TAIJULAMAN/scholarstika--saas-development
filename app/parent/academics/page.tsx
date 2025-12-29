"use client"

import { GraduationCap, BarChart2, Calendar } from "lucide-react"
import { useState } from "react"

export default function AcademicsPage() {
    const [selectedChild, setSelectedChild] = useState("Alex Thompson")

    const children = ["Alex Thompson", "Sarah Thompson"]

    const grades = [
        { subject: "Mathematics", grade: "A", percentage: 94, teacher: "Mr. Anderson" },
        { subject: "Physics", grade: "B+", percentage: 88, teacher: "Mrs. Davis" },
        { subject: "Chemistry", grade: "A-", percentage: 91, teacher: "Mrs. Wilson" },
        { subject: "English", grade: "B", percentage: 85, teacher: "Mrs. Brown" },
    ]

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Academic Progress</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Deep dive into grades and attendance records</p>
                    </div>
                    {/* Child Selector */}
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 p-1 backdrop-blur-sm">
                        {children.map(child => (
                            <button
                                key={child}
                                onClick={() => setSelectedChild(child)}
                                className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${selectedChild === child ? 'bg-white text-emerald-600 shadow-sm' : 'text-emerald-50 hover:bg-emerald-500/50'
                                    }`}
                            >
                                {child.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Current Grades</h2>
                        <span className="text-sm text-gray-500">Term 2, 2024</span>
                    </div>
                    <div className="space-y-4">
                        {grades.map((item, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white ${item.grade.startsWith('A') ? 'bg-emerald-500' :
                                            item.grade.startsWith('B') ? 'bg-blue-500' :
                                                'bg-orange-500'
                                        }`}>
                                        {item.grade}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.subject}</p>
                                        <p className="text-xs text-gray-500">{item.teacher}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{item.percentage}%</p>
                                    <p className="text-xs text-gray-500">Average</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Attendance Chart Mock */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">Attendance Trend</h2>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="flex items-center gap-1 font-medium text-emerald-600">
                                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                                    Present (92%)
                                </span>
                            </div>
                        </div>
                        <div className="h-48 flex items-end justify-between gap-2">
                            {[100, 95, 80, 100, 90, 85, 95].map((val, i) => (
                                <div key={i} className="group relative w-full rounded-t-lg bg-emerald-100 hover:bg-emerald-200 transition-all" style={{ height: `${val}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        {val}%
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-400">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>

                    {/* Report Card Download */}
                    <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-md">
                        <div className="flex items-start gap-4">
                            <GraduationCap className="h-6 w-6 opacity-90" />
                            <div>
                                <h3 className="font-bold">Term 1 Report Card Available</h3>
                                <p className="mt-1 text-sm opacity-90">The consolidated report card for Term 1 has been published.</p>
                                <button className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
