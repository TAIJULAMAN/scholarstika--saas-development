"use client"

import { PageHeader } from "@/components/common/page-header"
import { Clock } from "lucide-react"

const timeSlots = [
    "8:00 - 8:45",
    "8:45 - 9:30",
    "9:30 - 10:15",
    "10:15 - 11:00",
    "11:00 - 11:45",
    "11:45 - 12:30",
    "1:00 - 1:45",
    "1:45 - 2:30",
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const schedule: { [key: string]: { subject: string; grade: string; room: string }[] } = {
    Monday: [
        { subject: "Mathematics", grade: "Grade 10-A", room: "Room 101" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Mathematics", grade: "Grade 10-B", room: "Room 101" },
        { subject: "Break", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Statistics", grade: "Grade 11-B", room: "Room 103" },
        { subject: "Free Period", grade: "-", room: "-" },
    ],
    Tuesday: [
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Geometry", grade: "Grade 9-A", room: "Room 103" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Break", grade: "-", room: "-" },
        { subject: "Algebra", grade: "Grade 11-A", room: "Room 102" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Calculus", grade: "Grade 12-A", room: "Room 102" },
        { subject: "Free Period", grade: "-", room: "-" },
    ],
    Wednesday: [
        { subject: "Mathematics", grade: "Grade 10-A", room: "Room 101" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Mathematics", grade: "Grade 10-B", room: "Room 101" },
        { subject: "Break", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Statistics", grade: "Grade 11-B", room: "Room 103" },
        { subject: "Free Period", grade: "-", room: "-" },
    ],
    Thursday: [
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Geometry", grade: "Grade 9-A", room: "Room 103" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Break", grade: "-", room: "-" },
        { subject: "Algebra", grade: "Grade 11-A", room: "Room 102" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Calculus", grade: "Grade 12-A", room: "Room 102" },
        { subject: "Free Period", grade: "-", room: "-" },
    ],
    Friday: [
        { subject: "Mathematics", grade: "Grade 10-A", room: "Room 101" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Mathematics", grade: "Grade 10-B", room: "Room 101" },
        { subject: "Break", grade: "-", room: "-" },
        { subject: "Geometry", grade: "Grade 9-A", room: "Room 103" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
        { subject: "Free Period", grade: "-", room: "-" },
    ],
}

const subjectColors: { [key: string]: string } = {
    Mathematics: "bg-blue-100 text-blue-700 border-blue-300",
    Algebra: "bg-purple-100 text-purple-700 border-purple-300",
    Calculus: "bg-green-100 text-green-700 border-green-300",
    Statistics: "bg-orange-100 text-orange-700 border-orange-300",
    Geometry: "bg-pink-100 text-pink-700 border-pink-300",
    "Free Period": "bg-gray-50 text-gray-400 border-gray-200",
    Break: "bg-yellow-50 text-yellow-600 border-yellow-200",
}

export default function TeacherSchedulePage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="My Teaching Schedule"
                description="View your weekly class timetable"
            />

            <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Weekly Timetable</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-r">Time</th>
                                {days.map((day) => (
                                    <th key={day} className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-r">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((time, timeIndex) => (
                                <tr key={time} className="border-t">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-700 border-r bg-gray-50 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            {time}
                                        </div>
                                    </td>
                                    {days.map((day) => {
                                        const period = schedule[day]?.[timeIndex]
                                        if (!period) return <td key={day} className="border-r"></td>

                                        const colorClass = subjectColors[period.subject] || "bg-gray-100 text-gray-700"

                                        return (
                                            <td key={day} className="p-2 border-r">
                                                <div
                                                    className={`rounded-lg border p-3 ${colorClass} transition-shadow hover:shadow-md`}
                                                >
                                                    <p className="font-semibold text-sm">{period.subject}</p>
                                                    {period.grade !== "-" && (
                                                        <>
                                                            <p className="text-xs mt-1">{period.grade}</p>
                                                            <p className="text-xs mt-0.5 opacity-75">{period.room}</p>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
