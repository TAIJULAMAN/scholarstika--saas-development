"use client"

import { Award, FileText, TrendingUp, AlertCircle, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const grades = [
    { subject: "Mathematics", grade: "A", percentage: 92, teacher: "Dr. Johnson", lastExam: "Mid-term", examDate: "Oct 15, 2024" },
    { subject: "Physics", grade: "B+", percentage: 88, teacher: "Prof. Smith", lastExam: "Lab Test", examDate: "Nov 02, 2024" },
    { subject: "English", grade: "A-", percentage: 90, teacher: "Ms. Davis", lastExam: "Essay", examDate: "Oct 28, 2024" },
    { subject: "Chemistry", grade: "B", percentage: 85, teacher: "Dr. Brown", lastExam: "Quiz 3", examDate: "Nov 10, 2024" },
    { subject: "History", grade: "A", percentage: 95, teacher: "Mr. Wilson", lastExam: "Project", examDate: "Sep 30, 2024" },
    { subject: "Computer Science", grade: "A+", percentage: 98, teacher: "Ms. Taylor", lastExam: "Coding Challenge", examDate: "Nov 15, 2024" },
]

const recentExams = [
    { title: "Physics - Chapter 4 Quiz", date: "Nov 20, 2024", score: "18/20", grade: "A", status: "Graded" },
    { title: "Mathematics - Calculus Test", date: "Nov 18, 2024", score: "85/100", grade: "B", status: "Graded" },
    { title: "English - Poetry Analysis", date: "Nov 25, 2024", score: "--", grade: "--", status: "Pending" },
]

export default function StudentGradesPage() {
    const cgpa = 3.8

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-indigo-600 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Grades & Performance</h1>
                        <p className="mt-1 text-indigo-100 opacity-90">View your academic progress and exam results</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-indigo-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <Award className="h-4 w-4" />
                        GPA: {cgpa} / 4.0
                    </div>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Current Standing</h2>
                        <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Report Card
                        </Button>
                    </div>
                    <div className="space-y-4">
                        {grades.map((item, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white ${item.grade.startsWith('A') ? 'bg-emerald-500' :
                                            item.grade.startsWith('B') ? 'bg-blue-500' :
                                                'bg-orange-500'
                                        }`}>
                                        {item.grade}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.subject}</p>
                                        <p className="text-xs text-gray-500">{item.teacher}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{item.percentage}%</p>
                                    <p className="text-xs text-gray-500">Average</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Recent Exams */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <h2 className="mb-4 text-lg font-bold text-gray-900">Recent Assessments</h2>
                        <div className="space-y-3">
                            {recentExams.map((exam, index) => (
                                <div key={index} className="rounded-lg bg-gray-50 p-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="font-semibold text-gray-900">{exam.title}</p>
                                            <p className="text-xs text-gray-500">{exam.date}</p>
                                        </div>
                                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${exam.status === 'Graded' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {exam.status}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                                        <span className="text-sm text-gray-600">Score: <span className="font-medium text-gray-900">{exam.score}</span></span>
                                        <span className="text-sm text-gray-600">Grade: <span className="font-medium text-gray-900">{exam.grade}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alert */}
                    <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-md">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="h-6 w-6 opacity-90" />
                            <div>
                                <h3 className="font-bold">Exam Schedule Released</h3>
                                <p className="mt-1 text-sm opacity-90">The final exam schedule for Fall 2024 has been released. Please download it and prepare accordingly.</p>
                                <Button className="mt-4 bg-white text-indigo-600 hover:bg-indigo-50">View Schedule</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
