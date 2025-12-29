"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle2, Clock, Users, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
    {
        label: "Upcoming Exams",
        value: "3",
        icon: Calendar,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        label: "Completed",
        value: "12",
        icon: CheckCircle2,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    {
        label: "Pending Grading",
        value: "5",
        icon: Clock,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100"
    },
    {
        label: "Total Students",
        value: "28",
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
]

const exams = [
    {
        id: 1,
        name: "Mid-Term Mathematics",
        chapter: "Chapter 1-5",
        date: "March 15, 2024",
        status: "Completed",
        statusColor: "bg-emerald-100 text-emerald-800",
        submissions: "28/28",
        actions: ["View Results", "Grade"],
    },
    {
        id: 2,
        name: "Quiz - Algebra",
        chapter: "Linear Equations",
        date: "March 22, 2024",
        status: "Pending Grading",
        statusColor: "bg-amber-100 text-amber-800",
        submissions: "25/28",
        actions: ["Grade Now", "Details"],
    },
    {
        id: 3,
        name: "Final Exam",
        chapter: "Comprehensive",
        date: "April 10, 2024",
        status: "Upcoming",
        statusColor: "bg-blue-100 text-blue-800",
        submissions: "0/28",
        actions: ["Edit", "Preview"],
    },
]

export default function TeacherGradesPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Exam & Grades management</h1>
            </div>

            {/* Selection Controls */}
            <div className="grid gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Course</label>
                    <Select defaultValue="math10">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="math10">Mathematics Grade 10</SelectItem>
                            <SelectItem value="phys11">Physics Grade 11</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Section</label>
                    <Select defaultValue="secA">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Section" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="secA">Section A</SelectItem>
                            <SelectItem value="secB">Section B</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Stats Cards and Create Button */}
            <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-lg font-bold text-gray-900">Exam & Grades Management</h2>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Exam
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div key={index} className={`flex items-start justify-between rounded-lg border p-4 ${stat.bg} ${stat.border}`}>
                                <div>
                                    <p className={`text-sm font-medium ${stat.color}`}>{stat.label}</p>
                                    <h3 className={`mt-1 text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                                </div>
                                <Icon className={`h-5 w-5 ${stat.color}`} />
                            </div>
                        )
                    })}
                </div>

                {/* Exams Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-sm font-semibold text-gray-600">
                                <th className="pb-4 pl-4 pt-2">Exam Name</th>
                                <th className="pb-4 pt-2">Exam Date</th>
                                <th className="pb-4 pt-2">Status</th>
                                <th className="pb-4 pt-2">Submissions</th>
                                <th className="pb-4 pr-4 pt-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {exams.map((exam) => (
                                <tr key={exam.id} className="group transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-4">
                                        <div>
                                            <p className="font-semibold text-gray-900">{exam.name}</p>
                                            <p className="text-sm text-gray-500">{exam.chapter}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 text-gray-600">{exam.date}</td>
                                    <td className="py-4">
                                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${exam.statusColor}`}>
                                            {exam.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-gray-600">{exam.submissions}</td>
                                    <td className="py-4 pr-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            {exam.actions.includes("View Results") && (
                                                <button className="rounded px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50">
                                                    View Results
                                                </button>
                                            )}
                                            {exam.actions.includes("Grade") && (
                                                <button className="rounded bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-200">
                                                    Grade
                                                </button>
                                            )}
                                            {exam.actions.includes("Grade Now") && (
                                                <button className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700">
                                                    Grade Now
                                                </button>
                                            )}
                                            {exam.actions.includes("Details") && (
                                                <button className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                                    Details
                                                </button>
                                            )}
                                            {exam.actions.includes("Edit") && (
                                                <button className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                                    Edit
                                                </button>
                                            )}
                                            {exam.actions.includes("Preview") && (
                                                <button className="rounded bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700 hover:bg-purple-200">
                                                    Preview
                                                </button>
                                            )}
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
