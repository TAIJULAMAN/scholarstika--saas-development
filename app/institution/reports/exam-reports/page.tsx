"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { FileBarChart, TrendingUp, Award, Users, Download, Calendar } from "lucide-react"

const summaryStats = [
    {
        icon: FileBarChart,
        label: "Total Exams Conducted",
        value: "42",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: TrendingUp,
        label: "Overall Pass Rate",
        value: "91.2%",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Award,
        label: "Average Score",
        value: "76.8%",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Users,
        label: "Total Participants",
        value: "5,847",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const subjectPerformance = [
    { subject: "Mathematics", exams: 12, avgScore: 78.5, passRate: 92.3, topScore: 98, participants: 1456 },
    { subject: "Science", exams: 10, avgScore: 76.3, passRate: 89.4, topScore: 95, participants: 1342 },
    { subject: "English", exams: 8, avgScore: 81.2, passRate: 94.1, topScore: 96, participants: 1534 },
    { subject: "Social Studies", exams: 7, avgScore: 73.6, passRate: 87.2, topScore: 94, participants: 1156 },
    { subject: "Computer Science", exams: 5, avgScore: 82.1, passRate: 95.6, topScore: 99, participants: 359 },
]

const gradePerformance = [
    { grade: "Grade 1", students: 234, avgScore: 84.2, passRate: 96.2, exams: 8 },
    { grade: "Grade 2", students: 247, avgScore: 81.5, passRate: 94.3, exams: 8 },
    { grade: "Grade 3", students: 256, avgScore: 78.9, passRate: 92.1, exams: 9 },
    { grade: "Grade 4", students: 268, avgScore: 75.3, passRate: 89.6, exams: 9 },
    { grade: "Grade 5", students: 242, avgScore: 72.1, passRate: 86.4, exams: 8 },
]

export default function ExamReportsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Exam Reports & Analytics</h1>
                    <p className="text-sm text-gray-600">Comprehensive examination performance analysis and insights</p>
                </div>
                <div className="flex gap-2">
                    <Select defaultValue="2024">
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">Academic Year 2024</SelectItem>
                            <SelectItem value="2023">Academic Year 2023</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
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

            {/* Performance Chart Placeholder */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Performance Trend</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center text-gray-500">
                        <Calendar className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                        <p>Performance trend chart will be displayed here</p>
                        <p className="text-sm mt-1">Showing exam scores over time</p>
                    </div>
                </div>
            </div>

            {/* Subject-wise Performance */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Subject-wise Performance</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Exams Conducted</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Participants</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Average Score</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pass Rate</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Top Score</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {subjectPerformance.map((subject) => (
                                <tr key={subject.subject} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{subject.subject}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{subject.exams}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{subject.participants}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{subject.avgScore}%</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{subject.passRate}%</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-purple-600">{subject.topScore}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Grade-wise Performance */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Grade-wise Performance</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Students</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Exams Taken</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Average Score</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pass Rate</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Performance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {gradePerformance.map((grade) => (
                                <tr key={grade.grade} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{grade.grade}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{grade.students}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{grade.exams}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{grade.avgScore}%</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{grade.passRate}%</td>
                                    <td className="px-6 py-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-emerald-600 h-2 rounded-full"
                                                style={{ width: `${grade.passRate}%` }}
                                            />
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
