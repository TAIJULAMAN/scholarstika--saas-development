"use client"

import { FileText, Calendar, CheckCircle, Clock } from "lucide-react"

const assignments = [
    {
        id: 1,
        title: "Calculus Problem Set 4",
        subject: "Mathematics",
        subjectColor: "bg-blue-50 text-blue-700",
        dueDate: "Today, 11:59 PM",
        status: "Pending",
        statusColor: "bg-orange-100 text-orange-800",
        description: "Complete problems 1-15 from Chapter 4. Show all working steps."
    },
    {
        id: 2,
        title: "Lab Report: Motion",
        subject: "Physics",
        subjectColor: "bg-purple-50 text-purple-700",
        dueDate: "Tomorrow, 5:00 PM",
        status: "In Progress",
        statusColor: "bg-blue-100 text-blue-800",
        description: "Submit the lab report for yesterday's experiment on Newton's laws."
    },
    {
        id: 3,
        title: "Essay: Modern History",
        subject: "History",
        subjectColor: "bg-red-50 text-red-700",
        dueDate: "Dec 25, 2024",
        status: "Submitted",
        statusColor: "bg-green-100 text-green-800",
        description: "Write a 500-word essay on the impact of the Industrial Revolution."
    },
    {
        id: 4,
        title: "Chemical Analysis",
        subject: "Chemistry",
        subjectColor: "bg-orange-50 text-orange-700",
        dueDate: "Dec 28, 2024",
        status: "Pending",
        statusColor: "bg-orange-100 text-orange-800",
        description: "Analyze the provided chemical samples and submit the report."
    },
    {
        id: 5,
        title: "Literature Review",
        subject: "English",
        subjectColor: "bg-emerald-50 text-emerald-700",
        dueDate: "Dec 30, 2024",
        status: "Graded",
        grade: "A",
        statusColor: "bg-gray-100 text-gray-800",
        description: "Review 'To Kill a Mockingbird' chapters 1-5."
    }
]

export default function StudentAssignmentsPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Assignments</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Track your homework and project deadlines</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <FileText className="h-4 w-4" />
                        2 Due Today
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                    <div className="rounded-lg bg-orange-50 p-3 text-orange-600">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">3</h3>
                        <p className="text-sm font-medium text-gray-500">Pending</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                    <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">1</h3>
                        <p className="text-sm font-medium text-gray-500">In Progress</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                    <div className="rounded-lg bg-green-50 p-3 text-green-600">
                        <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">12</h3>
                        <p className="text-sm font-medium text-gray-500">Completed</p>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {assignments.map((assignment) => (
                    <div key={assignment.id} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:scale-[1.01]">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                                    <span className={`rounded-md px-2.5 py-0.5 text-xs font-semibold ${assignment.subjectColor}`}>
                                        {assignment.subject}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 max-w-2xl">{assignment.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="h-4 w-4" />
                                    <span>Due: {assignment.dueDate}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {assignment.status === "Graded" && (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 font-bold text-emerald-700 ring-4 ring-white">
                                        {assignment.grade}
                                    </div>
                                )}
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${assignment.statusColor}`}>
                                    {assignment.status}
                                </span>
                                {assignment.status === "Pending" && (
                                    <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
