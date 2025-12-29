"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { Plus, Calendar, FileText, Users, CheckCircle, Clock } from "lucide-react"

const assignments = [
    {
        id: 1,
        title: "Algebra Homework - Chapter 5",
        class: "Grade 11-A",
        dueDate: "2024-01-15",
        submissions: 18,
        totalStudents: 24,
        status: "active",
    },
    {
        id: 2,
        title: "Geometry Practice Problems",
        class: "Grade 9-A",
        dueDate: "2024-01-12",
        submissions: 15,
        totalStudents: 17,
        status: "active",
    },
    {
        id: 3,
        title: "Calculus Quiz Preparation",
        class: "Grade 12-A",
        dueDate: "2024-01-10",
        submissions: 22,
        totalStudents: 22,
        status: "completed",
    },
    {
        id: 4,
        title: "Statistics Project",
        class: "Grade 11-B",
        dueDate: "2024-01-20",
        submissions: 8,
        totalStudents: 25,
        status: "active",
    },
]

export default function TeacherAssignmentsPage() {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const filteredAssignments = filter === "all"
        ? assignments
        : assignments.filter(a => a.status === filter)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <PageHeader
                    title="Assignments"
                    description="Create and manage homework and assignments"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Assignment
                </Button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 rounded-xl bg-white p-2 shadow-sm">
                <button
                    onClick={() => setFilter("all")}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === "all" ? "bg-emerald-600 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    All Assignments
                </button>
                <button
                    onClick={() => setFilter("active")}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === "active" ? "bg-emerald-600 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === "completed" ? "bg-emerald-600 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    Completed
                </button>
            </div>

            {/* Assignments List */}
            <div className="grid gap-4">
                {filteredAssignments.map((assignment) => {
                    const submissionRate = (assignment.submissions / assignment.totalStudents) * 100

                    return (
                        <div
                            key={assignment.id}
                            className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${assignment.status === "active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                            }`}>
                                            {assignment.status === "active" ? (
                                                <>
                                                    <Clock className="mr-1 h-3 w-3" />
                                                    Active
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle className="mr-1 h-3 w-3" />
                                                    Completed
                                                </>
                                            )}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <FileText className="h-4 w-4" />
                                            {assignment.class}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            {assignment.submissions}/{assignment.totalStudents} Submitted
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Submission Rate</span>
                                            <span className="font-medium text-gray-900">{submissionRate.toFixed(0)}%</span>
                                        </div>
                                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className="h-full bg-emerald-600 transition-all"
                                                style={{ width: `${submissionRate}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4 flex gap-2">
                                    <Button variant="outline" size="sm">
                                        View Details
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
