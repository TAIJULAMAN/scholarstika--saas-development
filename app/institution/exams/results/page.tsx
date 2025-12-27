"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClipboardList, TrendingUp, Award, AlertCircle, Search, Download, Eye, BarChart3 } from "lucide-react"

const summaryStats = [
    {
        icon: ClipboardList,
        label: "Total Results",
        value: "42",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: TrendingUp,
        label: "Average Score",
        value: "78.5%",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Award,
        label: "Pass Rate",
        value: "92.3%",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: AlertCircle,
        label: "Pending Results",
        value: "8",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const examResults = [
    {
        id: 1,
        examTitle: "Mathematics Mid-Term Exam",
        subject: "Mathematics",
        grade: "Grade 5",
        examDate: "2024-12-20",
        totalStudents: 156,
        published: 156,
        pending: 0,
        averageScore: 82.5,
        highestScore: 98,
        lowestScore: 45,
        passRate: 94.2,
        status: "Published",
    },
    {
        id: 2,
        examTitle: "Science Quiz - Chapter 5",
        subject: "Science",
        grade: "Grade 4",
        examDate: "2024-12-18",
        totalStudents: 142,
        published: 142,
        pending: 0,
        averageScore: 76.3,
        highestScore: 95,
        lowestScore: 38,
        passRate: 89.4,
        status: "Published",
    },
    {
        id: 3,
        examTitle: "English Grammar Test",
        subject: "English",
        grade: "Grade 3",
        examDate: "2024-12-15",
        totalStudents: 134,
        published: 98,
        pending: 36,
        averageScore: 71.8,
        highestScore: 92,
        lowestScore: 42,
        passRate: 85.7,
        status: "Partial",
    },
    {
        id: 4,
        examTitle: "History Mid-Term Exam",
        subject: "Social Studies",
        grade: "Grade 5",
        examDate: "2024-12-22",
        totalStudents: 156,
        published: 0,
        pending: 156,
        averageScore: 0,
        highestScore: 0,
        lowestScore: 0,
        passRate: 0,
        status: "Pending",
    },
]

const topPerformers = [
    { name: "Alice Johnson", grade: "Grade 5-A", subject: "Mathematics", score: 98, avatar: "/avatars/alice.jpg" },
    { name: "Bob Smith", grade: "Grade 4-B", subject: "Science", score: 95, avatar: "/avatars/bob.jpg" },
    { name: "Charlie Brown", grade: "Grade 3-A", subject: "English", score: 92, avatar: "/avatars/charlie.jpg" },
]

export default function ExamResultsPage() {
    const [gradeFilter, setGradeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Published":
                return "bg-green-100 text-green-700"
            case "Partial":
                return "bg-orange-100 text-orange-700"
            case "Pending":
                return "bg-gray-100 text-gray-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Exam Results Management</h1>
                    <p className="text-sm text-gray-600">View and manage exam results and student performance</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" />
                    Export All Results
                </Button>
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
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Top Performers */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Top Performers</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    {topPerformers.map((student, index) => (
                        <div key={student.name} className="flex items-center gap-3 rounded-lg border p-4">
                            <div className="flex items-center gap-3 flex-1">
                                <div className="relative">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={student.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                                            {student.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">{student.name}</p>
                                    <p className="text-xs text-gray-600">{student.grade}</p>
                                    <p className="text-xs text-gray-500">{student.subject}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-green-600">{student.score}</p>
                                <p className="text-xs text-gray-500">Score</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <Select value={gradeFilter} onValueChange={setGradeFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Grades" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Grades</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="partial">Partial</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search results..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Results Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Exam Results</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Exam</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Published/Total</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Avg Score</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pass Rate</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {examResults.map((result) => (
                                <tr key={result.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{result.examTitle}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{result.subject}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{result.grade}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{result.examDate}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                                        {result.published}/{result.totalStudents}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">
                                        {result.averageScore > 0 ? `${result.averageScore}%` : "-"}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-purple-600">
                                        {result.passRate > 0 ? `${result.passRate}%` : "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(result.status)}`}>
                                            {result.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <BarChart3 className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
                                                <Download className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t p-4">
                    <p className="text-sm text-gray-600">Showing 1 to 4 of 42 results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
