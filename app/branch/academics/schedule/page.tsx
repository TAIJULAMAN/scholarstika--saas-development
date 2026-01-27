"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, BookOpen, Users, Plus, Settings } from "lucide-react"

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

import { initialSchedule, days, timeSlots as initialTimeSlots, subjectColors, type Period } from "@/data/schedule"
import { AddPeriodDialog } from "@/components/branch/academics/add-period-dialog"
import { ManageTimeSlotsDialog } from "@/components/branch/academics/manage-time-slots-dialog"

export default function BranchSchedulePage() {
    const [schedule, setSchedule] = useState(initialSchedule)
    const [selectedSection, setSelectedSection] = useState("Grade 1-A")
    const [periods, setPeriods] = useState(initialTimeSlots)
    const [isAddPeriodOpen, setIsAddPeriodOpen] = useState(false)
    const [isManageSlotsOpen, setIsManageSlotsOpen] = useState(false)

    const handleAddPeriod = (day: string, timeIndex: number, period: Period) => {
        setSchedule(prev => {
            const newSchedule = { ...prev }
            if (!newSchedule[selectedSection]) {
                newSchedule[selectedSection] = {}
            }
            if (!newSchedule[selectedSection][day]) {
                newSchedule[selectedSection][day] = []
            }
            while (newSchedule[selectedSection][day].length <= timeIndex) {
                newSchedule[selectedSection][day].push({ subject: "-", teacher: "-", room: "-" })
            }
            newSchedule[selectedSection][day][timeIndex] = period
            return newSchedule
        })
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Class Schedule Management</h1>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={() => setIsManageSlotsOpen(true)}>
                        <Settings className="mr-2 h-4 w-4" />
                        Create Timetable
                    </Button>
                    <Button
                        onClick={() => setIsAddPeriodOpen(true)}
                        className="bg-emerald-600 hover:bg-emerald-700"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Class
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
                        {Object.keys(schedule).map((section) => (
                            <SelectItem key={section} value={section}>
                                {section}
                            </SelectItem>
                        ))}
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
                            {periods.map((time, timeIndex) => (
                                <tr key={timeIndex} className="border-t">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-700 border-r bg-gray-50 whitespace-nowrap">
                                        {time}
                                    </td>
                                    {days.map((day) => {
                                        const period = schedule[selectedSection]?.[day]?.[timeIndex]
                                        // Empty cell if no period defined
                                        const colorClass = period ? (subjectColors[period.subject] || "bg-gray-100 text-gray-700") : ""

                                        return (
                                            <td key={day} className="p-2 border-r min-h-[80px]">
                                                {period ? (
                                                    <div
                                                        className={`rounded-lg border p-3 ${colorClass} cursor-pointer hover:shadow-md transition-shadow h-full`}
                                                    >
                                                        <p className="font-semibold text-sm">{period.subject}</p>
                                                        <p className="text-xs mt-1">{period.teacher}</p>
                                                        <p className="text-xs mt-0.5 opacity-75">{period.room}</p>
                                                    </div>
                                                ) : (
                                                    <div className="h-full min-h-[60px] rounded-lg border border-dashed border-gray-200 hover:bg-gray-50 transition-colors" />
                                                )}
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

            {/* Dialogs */}
            <AddPeriodDialog
                open={isAddPeriodOpen}
                onOpenChange={setIsAddPeriodOpen}
                currentSection={selectedSection}
                onAddPeriod={handleAddPeriod}
            />
            <ManageTimeSlotsDialog
                open={isManageSlotsOpen}
                onOpenChange={setIsManageSlotsOpen}
                currentTimeSlots={periods}
                onSave={setPeriods}
            />
        </div>
    )
}
