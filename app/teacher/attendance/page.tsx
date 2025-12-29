"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { Calendar, Save } from "lucide-react"

const students = [
    { id: 1, name: "John Smith", status: "present" },
    { id: 2, name: "Emma Johnson", status: "present" },
    { id: 3, name: "Michael Brown", status: "absent" },
    { id: 4, name: "Sophia Davis", status: "present" },
    { id: 5, name: "William Wilson", status: "late" },
    { id: 6, name: "Olivia Martinez", status: "present" },
    { id: 7, name: "James Anderson", status: "present" },
    { id: 8, name: "Ava Taylor", status: "present" },
]

export default function TeacherAttendancePage() {
    const [selectedClass, setSelectedClass] = useState("Grade 10-A")
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    const [attendance, setAttendance] = useState<{ [key: number]: string }>(
        Object.fromEntries(students.map(s => [s.id, s.status]))
    )

    const handleStatusChange = (studentId: number, status: string) => {
        setAttendance(prev => ({ ...prev, [studentId]: status }))
    }

    const handleSave = () => {
        console.log("Saving attendance:", { class: selectedClass, date: selectedDate, attendance })
        alert("Attendance saved successfully!")
    }

    const stats = {
        present: Object.values(attendance).filter(s => s === "present").length,
        absent: Object.values(attendance).filter(s => s === "absent").length,
        late: Object.values(attendance).filter(s => s === "late").length,
    }

    return (
        <div className="space-y-6">
            <PageHeader
                title="Attendance Management"
                description="Mark and manage student attendance"
            />

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Class</label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Grade 10-A">Mathematics - Grade 10-A</SelectItem>
                            <SelectItem value="Grade 10-B">Mathematics - Grade 10-B</SelectItem>
                            <SelectItem value="Grade 11-A">Algebra - Grade 11-A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-green-50 p-6">
                    <p className="text-sm text-green-600">Present</p>
                    <p className="mt-2 text-3xl font-bold text-green-700">{stats.present}</p>
                </div>
                <div className="rounded-xl bg-red-50 p-6">
                    <p className="text-sm text-red-600">Absent</p>
                    <p className="mt-2 text-3xl font-bold text-red-700">{stats.absent}</p>
                </div>
                <div className="rounded-xl bg-yellow-50 p-6">
                    <p className="text-sm text-yellow-600">Late</p>
                    <p className="mt-2 text-3xl font-bold text-yellow-700">{stats.late}</p>
                </div>
            </div>

            {/* Attendance Sheet */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Attendance Sheet</h2>
                    <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Attendance
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student Name</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b border-gray-100">
                                    <td className="py-4 pl-6 font-medium text-gray-900">{student.name}</td>
                                    <td className="py-4 pr-6">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleStatusChange(student.id, "present")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "present"
                                                        ? "bg-green-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Present
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, "absent")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "absent"
                                                        ? "bg-red-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Absent
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, "late")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "late"
                                                        ? "bg-yellow-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Late
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
