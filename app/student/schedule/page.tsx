"use client"

import { Clock, Calendar, Video, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface ClassSession {
    subject: string
    teacher: string
    type: 'online' | 'offline'
    room?: string
    meetingUrl?: string
}

const schedule: { [key: string]: ClassSession[] } = {
    Monday: [
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'offline', room: "Room 101" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'online', meetingUrl: "https://zoom.us/j/123456789" },
        { subject: "Break", teacher: "-", type: 'offline' },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Physics", teacher: "Prof. Smith", type: 'offline', room: "Lab 3" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
    ],
    Tuesday: [
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "English", teacher: "Ms. Davis", type: 'online', meetingUrl: "https://zoom.us/j/987654321" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Break", teacher: "-", type: 'offline' },
        { subject: "History", teacher: "Mr. Wilson", type: 'offline', room: "Room 105" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Chemistry", teacher: "Dr. Brown", type: 'offline', room: "Lab 1" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
    ],
    Wednesday: [
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'offline', room: "Room 101" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'online', meetingUrl: "https://zoom.us/j/123456789" },
        { subject: "Break", teacher: "-", type: 'offline' },
        { subject: "CS", teacher: "Ms. Taylor", type: 'offline', room: "Lab 5" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Physics", teacher: "Prof. Smith", type: 'offline', room: "Lab 3" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
    ],
    Thursday: [
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "English", teacher: "Ms. Davis", type: 'online', meetingUrl: "https://zoom.us/j/987654321" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Break", teacher: "-", type: 'offline' },
        { subject: "History", teacher: "Mr. Wilson", type: 'offline', room: "Room 105" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Chemistry", teacher: "Dr. Brown", type: 'offline', room: "Lab 1" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
    ],
    Friday: [
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'offline', room: "Room 101" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Mathematics", teacher: "Dr. Johnson", type: 'online', meetingUrl: "https://zoom.us/j/123456789" },
        { subject: "Break", teacher: "-", type: 'offline' },
        { subject: "English", teacher: "Ms. Davis", type: 'online', meetingUrl: "https://zoom.us/j/987654321" },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Free Period", teacher: "-", type: 'offline' },
        { subject: "Free Period", teacher: "-", type: 'offline' },
    ],
}

const subjectColors: { [key: string]: string } = {
    Mathematics: "bg-blue-50 text-blue-700 border-blue-200",
    English: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Chemistry: "bg-orange-50 text-orange-700 border-orange-200",
    Physics: "bg-purple-50 text-purple-700 border-purple-200",
    History: "bg-red-50 text-red-700 border-red-200",
    CS: "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Free Period": "bg-gray-50/50 text-gray-400 border-dashed border-gray-200",
    Break: "bg-yellow-50 text-yellow-700 border-yellow-200",
}

export default function StudentSchedulePage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Class Schedule</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Manage your weekly classes and online sessions</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <Calendar className="h-4 w-4" />
                        Spring Semester 2024
                    </div>
                </div>
            </div>

            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden">
                <div className="border-b border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Weekly Timetable</h2>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Video className="h-4 w-4 text-emerald-500" />
                                <span className="text-gray-600">Online</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-600">On Campus</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">Time</th>
                                {days.map((day) => (
                                    <th key={day} className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {timeSlots.map((time, timeIndex) => (
                                <tr key={time} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50/30 border-r border-gray-50">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                            <Clock className="h-4 w-4 text-emerald-500" />
                                            {time}
                                        </div>
                                    </td>
                                    {days.map((day) => {
                                        const period = schedule[day]?.[timeIndex]
                                        if (!period) return <td key={day} className="border-r border-gray-50"></td>

                                        const colorClass = subjectColors[period.subject] || "bg-gray-50 text-gray-700"

                                        return (
                                            <td key={day} className="p-2 border-r border-gray-50 min-w-[180px]">
                                                <div
                                                    className={`h-full min-h-[100px] flex flex-col justify-between rounded-lg border p-3 ${colorClass} transition-transform hover:scale-[1.02] hover:shadow-sm`}
                                                >
                                                    <div>
                                                        <div className="flex items-start justify-between">
                                                            <p className="font-bold text-sm tracking-tight">{period.subject}</p>
                                                            {period.type === 'online' ? (
                                                                <Video className="h-3 w-3 opacity-70" />
                                                            ) : period.subject !== "Free Period" && period.subject !== "Break" ? (
                                                                <MapPin className="h-3 w-3 opacity-70" />
                                                            ) : null}
                                                        </div>
                                                        {period.teacher !== "-" && (
                                                            <div className="mt-1 text-xs font-medium opacity-90">
                                                                {period.teacher}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {period.subject !== "Free Period" && period.subject !== "Break" && (
                                                        <div className="mt-2">
                                                            {period.type === 'online' ? (
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="h-7 w-full border-emerald-200 bg-emerald-100/50 text-emerald-700 hover:bg-emerald-200 hover:text-emerald-800"
                                                                    onClick={() => window.open(period.meetingUrl, '_blank')}
                                                                >
                                                                    <Video className="mr-1.5 h-3 w-3" />
                                                                    Join Zoom
                                                                </Button>
                                                            ) : (
                                                                <div className="flex items-center gap-1.5 text-xs opacity-80 bg-white/50 px-2 py-1 rounded">
                                                                    <MapPin className="h-3 w-3" />
                                                                    {period.room}
                                                                </div>
                                                            )}
                                                        </div>
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
