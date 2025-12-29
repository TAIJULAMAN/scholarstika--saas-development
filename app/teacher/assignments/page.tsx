"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, FileText, Users, CheckCircle, Clock, AlertCircle } from "lucide-react"

const assignments = [
    {
        id: 1,
        title: "Algebra Homework - Chapter 5",
        class: "Grade 11-A",
        dueDate: "2024-01-15",
        submissions: 18,
        totalStudents: 24,
        status: "active",
        type: "Homework"
    },
    {
        id: 2,
        title: "Geometry Practice Problems",
        class: "Grade 9-A",
        dueDate: "2024-01-12",
        submissions: 15,
        totalStudents: 17,
        status: "active",
        type: "Practice"
    },
    {
        id: 3,
        title: "Calculus Quiz Preparation",
        class: "Grade 12-A",
        dueDate: "2024-01-10",
        submissions: 22,
        totalStudents: 22,
        status: "completed",
        type: "Quiz Prep"
    },
    {
        id: 4,
        title: "Statistics Project",
        class: "Grade 11-B",
        dueDate: "2024-01-20",
        submissions: 8,
        totalStudents: 25,
        status: "active",
        type: "Project"
    },
]

const stats = [
    {
        label: "Active Assignments",
        value: "3",
        icon: FileText,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        label: "Submissions Today",
        value: "12",
        icon: Users,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        label: "Pending Review",
        value: "5",
        icon: AlertCircle,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
]

export default function TeacherAssignmentsPage() {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const filteredAssignments = filter === "all"
        ? assignments
        : assignments.filter(a => a.status === filter)

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Assignments</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Create and manage homework and assignments</p>
                    </div>
                    <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Assignment
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                            <div className={`rounded-lg p-3 ${stat.bg}`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Main Content */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-2 rounded-lg bg-gray-100 p-1">
                        {(["all", "active", "completed"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${filter === tab
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4">
                    {filteredAssignments.map((assignment) => {
                        const submissionRate = (assignment.submissions / assignment.totalStudents) * 100

                        return (
                            <div
                                key={assignment.id}
                                className="group rounded-xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-md"
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                                                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${assignment.status === "active"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-blue-100 text-blue-700"
                                                    }`}>
                                                    {assignment.status === "active" ? "Active" : "Completed"}
                                                </span>
                                                <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                                    {assignment.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500">{assignment.class}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-gray-400" />
                                                <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-gray-400" />
                                                <span>{assignment.submissions}/{assignment.totalStudents} Submitted</span>
                                            </div>
                                        </div>

                                        <div className="max-w-md">
                                            <div className="mb-1 flex justify-between text-xs">
                                                <span className="font-medium text-gray-600">Submission Progress</span>
                                                <span className="font-bold text-gray-900">{submissionRate.toFixed(0)}%</span>
                                            </div>
                                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                                <div
                                                    className="h-full bg-emerald-500 transition-all duration-500"
                                                    style={{ width: `${submissionRate}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" className="bg-white">
                                            Edit
                                        </Button>
                                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
