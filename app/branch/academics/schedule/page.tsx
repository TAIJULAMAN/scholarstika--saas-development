"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, BookOpen, Users, Download, Plus } from "lucide-react"

const summaryStats = [
    {
        icon: Calendar,
        label: "Total Periods",
        value: "240",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Clock,
        label: "Hours/Week",
        value: "30",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: BookOpen,
        label: "Active Subjects",
        value: "22",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Users,
        label: "Teachers Assigned",
        value: "45",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const timeSlots = [
    "8:00 - 8:45",
    "8:45 - 9:30",
    "9:30 - 10:15",
    "10:15 - 11:00",
    "11:00 - 11:45",
    "11:45 - 12:30",
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const schedule: { [key: string]: { [day: string]: { subject: string; teacher: string; room: string }[] } } = {
    "Grade 1-A": {
        Monday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
        ],
        Tuesday: [
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Social Studies", teacher: "Robert Brown", room: "104" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Music", teacher: "Anna White", room: "Music Room" },
        ],
        Wednesday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
        ],
        Thursday: [
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Social Studies", teacher: "Robert Brown", room: "104" },
            { subject: "Library", teacher: "Tom Green", room: "Library" },
        ],
        Friday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
        ],
    },
}

const subjectColors: { [key: string]: string } = {
    Mathematics: "bg-blue-100 text-blue-700 border-blue-300",
    English: "bg-purple-100 text-purple-700 border-purple-300",
    Science: "bg-green-100 text-green-700 border-green-300",
    "Social Studies": "bg-orange-100 text-orange-700 border-orange-300",
    Art: "bg-pink-100 text-pink-700 border-pink-300",
    PE: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Music: "bg-indigo-100 text-indigo-700 border-indigo-300",
    Library: "bg-teal-100 text-teal-700 border-teal-300",
    Break: "bg-gray-100 text-gray-500 border-gray-300",
}

export default function BranchSchedulePage() {
    const [selectedSection, setSelectedSection] = useState("Grade 1-A")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Class Schedule Management</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export PDF
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Period
                    </Button>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryStats.map((stat) => {
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

            {/* Filters */}
            <div className="flex items-center gap-3">
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select Section" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Grade 1-A">Grade 1-A</SelectItem>
                        <SelectItem value="Grade 1-B">Grade 1-B</SelectItem>
                        <SelectItem value="Grade 2-A">Grade 2-A</SelectItem>
                        <SelectItem value="Grade 3-A">Grade 3-A</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Timetable */}
            <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Weekly Timetable - {selectedSection}</h2>
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
                                        {time}
                                    </td>
                                    {days.map((day) => {
                                        const period = schedule[selectedSection]?.[day]?.[timeIndex]
                                        if (!period) return <td key={day} className="border-r"></td>

                                        const colorClass = subjectColors[period.subject] || "bg-gray-100 text-gray-700"

                                        return (
                                            <td key={day} className="p-2 border-r">
                                                <div
                                                    className={`rounded-lg border p-3 ${colorClass} cursor-pointer hover:shadow-md transition-shadow`}
                                                >
                                                    <p className="font-semibold text-sm">{period.subject}</p>
                                                    <p className="text-xs mt-1">{period.teacher}</p>
                                                    <p className="text-xs mt-0.5 opacity-75">{period.room}</p>
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

            {/* Legend */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Subject Legend</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                    {Object.entries(subjectColors)
                        .filter(([subject]) => subject !== "Break")
                        .map(([subject, colorClass]) => (
                            <div key={subject} className="flex items-center gap-2">
                                <div className={`h-4 w-4 rounded border ${colorClass}`}></div>
                                <span className="text-sm text-gray-700">{subject}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
