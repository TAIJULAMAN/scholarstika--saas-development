"use client"

import { X, Mail, Building2, BookOpen, Phone, MapPin, Users, Calendar } from "lucide-react"
import { initialSchedule, timeSlots, subjectColors, days } from "@/data/schedule"

interface ViewTeacherDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    teacher: {
        name: string
        email: string
        branch: string
        subject: string
        phone: string
        address: string
        assignedClass?: string
    }
}

export function ViewTeacherDialog({ open, onOpenChange, teacher }: ViewTeacherDialogProps) {
    if (!open) return null

    // Helper to find teacher's schedule
    const teacherSchedule: { day: string; time: string; period: any }[] = []

    Object.entries(initialSchedule).forEach(([className, daySchedule]) => {
        Object.entries(daySchedule).forEach(([day, periods]) => {
            periods.forEach((period, index) => {
                if (period.teacher === teacher.name) {
                    teacherSchedule.push({
                        day,
                        time: timeSlots[index],
                        period: { ...period, className }
                    })
                }
            })
        })
    })

    // Sort schedule explicitly by Day then Time if needed, 
    // but the extraction order (Day -> Time) is somewhat preserved by Object.entries order for days array matching
    const sortedSchedule = teacherSchedule.sort((a, b) => {
        const dayDiff = days.indexOf(a.day) - days.indexOf(b.day)
        if (dayDiff !== 0) return dayDiff
        return timeSlots.indexOf(a.time) - timeSlots.indexOf(b.time)
    })

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto pt-10 pb-10">
            <div className="w-full max-w-2xl rounded-xl bg-white p-5 shadow-xl mx-2 md:mx-0 my-auto">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Teacher Details</h2>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                            {teacher.assignedClass && (
                                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                    <Users className="h-4 w-4" />
                                    Class Teacher: {teacher.assignedClass}
                                </div>
                            )}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-blue-50 p-2">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email</p>
                                    <p className="mt-1 text-sm text-gray-900">{teacher.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-green-50 p-2">
                                    <Building2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Branch</p>
                                    <p className="mt-1 text-sm text-gray-900">{teacher.branch}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-gray-700">Details</h4>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-purple-600" />
                                    <p className="text-sm font-medium text-gray-500">Subject</p>
                                </div>
                                <p className="mt-2 text-xl font-bold text-gray-900">{teacher.subject}</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                    <p className="text-sm font-medium text-gray-500">Phone</p>
                                </div>
                                <p className="mt-2 text-sm font-semibold text-gray-900">{teacher.phone}</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-orange-600" />
                                    <p className="text-sm font-medium text-gray-500">Address</p>
                                </div>
                                <p className="mt-2 text-sm font-semibold text-gray-900">{teacher.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Calendar className="h-5 w-5 text-emerald-600" />
                            <h4 className="text-sm font-semibold text-gray-700">Class Schedule</h4>
                        </div>

                        {sortedSchedule.length > 0 ? (
                            <div className="rounded-lg border border-gray-200 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 text-left font-medium text-gray-500">Day</th>
                                            <th className="px-4 py-2 text-left font-medium text-gray-500">Time</th>
                                            <th className="px-4 py-2 text-left font-medium text-gray-500">Class</th>
                                            <th className="px-4 py-2 text-left font-medium text-gray-500">Room</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {sortedSchedule.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="px-4 py-2 font-medium text-gray-900">{item.day}</td>
                                                <td className="px-4 py-2 text-gray-600">{item.time}</td>
                                                <td className="px-4 py-2">
                                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                        {item.period.className}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2 text-gray-600">{item.period.room}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
                                No classes assigned specifically in the timetable yet.
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
