"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { days, timeSlots, subjectColors } from "@/data/schedule"
import type { Period } from "@/data/schedule"
import { teachers } from "@/data/teachers"

interface AddPeriodDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onAddPeriod: (day: string, timeIndex: number, period: Period) => void
    currentSection: string
}

export function AddPeriodDialog({ open, onOpenChange, onAddPeriod, currentSection }: AddPeriodDialogProps) {
    const [formData, setFormData] = useState({
        day: days[0],
        timeSlot: timeSlots[0],
        subject: "",
        teacher: "",
        room: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const timeIndex = timeSlots.indexOf(formData.timeSlot)
        onAddPeriod(formData.day, timeIndex, {
            subject: formData.subject,
            teacher: formData.teacher,
            room: formData.room,
        })
        onOpenChange(false)
        setFormData({
            day: days[0],
            timeSlot: timeSlots[0],
            subject: "",
            teacher: "",
            room: "",
        })
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Add New Period</h2>
                        <p className="text-sm text-gray-500">For {currentSection}</p>
                    </div>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Day</label>
                            <select
                                required
                                value={formData.day}
                                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            >
                                {days.map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Time</label>
                            <select
                                required
                                value={formData.timeSlot}
                                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            >
                                {timeSlots.map(time => <option key={time} value={time}>{time}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                        <select
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                            <option value="">Select Subject</option>
                            {Object.keys(subjectColors).filter(s => s !== "Break").map(subject => (
                                <option key={subject} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Teacher</label>
                        <select
                            required
                            value={formData.teacher}
                            onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                            <option value="">Select Teacher</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Room</label>
                        <input
                            type="text"
                            required
                            value={formData.room}
                            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="e.g. 101"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => onOpenChange(false)}
                            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                        >
                            Add Period
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
