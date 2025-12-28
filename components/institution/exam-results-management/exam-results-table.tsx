"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Download, Eye, BarChart3 } from "lucide-react"

const examResults = [
    { id: 1, examTitle: "Mathematics Mid-Term Exam", subject: "Mathematics", grade: "Grade 5", examDate: "2024-12-20", totalStudents: 156, published: 156, pending: 0, averageScore: 82.5, highestScore: 98, lowestScore: 45, passRate: 94.2, status: "Published" },
    { id: 2, examTitle: "Science Quiz - Chapter 5", subject: "Science", grade: "Grade 4", examDate: "2024-12-18", totalStudents: 142, published: 142, pending: 0, averageScore: 76.3, highestScore: 95, lowestScore: 38, passRate: 89.4, status: "Published" },
    { id: 3, examTitle: "English Grammar Test", subject: "English", grade: "Grade 3", examDate: "2024-12-15", totalStudents: 134, published: 98, pending: 36, averageScore: 71.8, highestScore: 92, lowestScore: 42, passRate: 85.7, status: "Partial" },
    { id: 4, examTitle: "History Mid-Term Exam", subject: "Social Studies", grade: "Grade 5", examDate: "2024-12-22", totalStudents: 156, published: 0, pending: 156, averageScore: 0, highestScore: 0, lowestScore: 0, passRate: 0, status: "Pending" },
]

const topPerformers = [
    { name: "Alice Johnson", grade: "Grade 5-A", subject: "Mathematics", score: 98, avatar: "/avatars/alice.jpg" },
    { name: "Bob Smith", grade: "Grade 4-B", subject: "Science", score: 95, avatar: "/avatars/bob.jpg" },
    { name: "Charlie Brown", grade: "Grade 3-A", subject: "English", score: 92, avatar: "/avatars/charlie.jpg" },
]

export function ExamResultsTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredResults = useMemo(() => {
        return examResults.filter(result =>
            searchQuery === "" ||
            result.examTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    const itemsPerPage = 4
    const totalPages = Math.ceil(filteredResults.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentResults = filteredResults.slice(startIndex, endIndex)

    useEffect(() => { setCurrentPage(1) }, [searchQuery])

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Published": return "bg-green-100 text-green-700"
            case "Partial": return "bg-orange-100 text-orange-700"
            case "Pending": return "bg-gray-100 text-gray-700"
            default: return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <>
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
                                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">{index + 1}</div>
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

            {/* Results Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Exam Results</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1 min-w-[250px]">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input placeholder="Search results..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700"><Download className="mr-2 h-4 w-4" />Export All</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Exam</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Subject</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Date</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Published/Total</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Avg Score</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Pass Rate</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map((result) => (
                                <tr key={result.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6"><p className="font-medium text-gray-900">{result.examTitle}</p></td>
                                    <td className="py-4 text-sm text-gray-700">{result.subject}</td>
                                    <td className="py-4 text-sm text-gray-700">{result.grade}</td>
                                    <td className="py-4 text-sm text-gray-700">{result.examDate}</td>
                                    <td className="py-4 text-sm font-semibold text-gray-900">{result.published}/{result.totalStudents}</td>
                                    <td className="py-4 text-sm font-semibold text-green-600">{result.averageScore > 0 ? `${result.averageScore}%` : "-"}</td>
                                    <td className="py-4 text-sm font-semibold text-purple-600">{result.passRate > 0 ? `${result.passRate}%` : "-"}</td>
                                    <td className="py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(result.status)}`}>{result.status}</span></td>
                                    <td className="py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded-lg p-2 text-blue-600"><Eye className="h-4 w-4" /></button>
                                            {/* <button className="rounded-lg p-2 text-purple-600"><BarChart3 className="h-4 w-4" /></button> */}
                                            <button className="rounded-lg p-2 text-green-600"><Download className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing {startIndex + 1} to {Math.min(endIndex, filteredResults.length)} of {filteredResults.length} results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>Previous</Button>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            const pageNum = i + 1
                            return <Button key={pageNum} size="sm" variant={currentPage === pageNum ? "default" : "outline"} style={currentPage === pageNum ? { backgroundColor: 'rgba(16, 185, 129, 0.8)' } : {}} className={currentPage === pageNum ? "text-white hover:bg-emerald-700" : ""} onClick={() => setCurrentPage(pageNum)}>{pageNum}</Button>
                        })}
                        <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>Next</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
