"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Download, Eye, Send } from "lucide-react"

const students = [
    {
        id: 1,
        name: "Alice Johnson",
        rollNo: "2024-001",
        grade: "Grade 5-A",
        avatar: "/avatars/alice.jpg",
        totalFees: 5000,
        paid: 5000,
        pending: 0,
        status: "Paid",
        lastPayment: "2024-12-15",
    },
    {
        id: 2,
        name: "Bob Smith",
        rollNo: "2024-002",
        grade: "Grade 4-B",
        avatar: "/avatars/bob.jpg",
        totalFees: 5000,
        paid: 3000,
        pending: 2000,
        status: "Partial",
        lastPayment: "2024-11-20",
    },
    {
        id: 3,
        name: "Charlie Brown",
        rollNo: "2024-003",
        grade: "Grade 3-A",
        avatar: "/avatars/charlie.jpg",
        totalFees: 4500,
        paid: 0,
        pending: 4500,
        status: "Unpaid",
        lastPayment: "-",
    },
    {
        id: 4,
        name: "Diana Prince",
        rollNo: "2024-004",
        grade: "Grade 5-B",
        avatar: "/avatars/diana.jpg",
        totalFees: 5000,
        paid: 5000,
        pending: 0,
        status: "Paid",
        lastPayment: "2024-12-10",
    },
    {
        id: 5,
        name: "Ethan Hunt",
        rollNo: "2024-005",
        grade: "Grade 2-A",
        avatar: "/avatars/ethan.jpg",
        totalFees: 4000,
        paid: 2500,
        pending: 1500,
        status: "Partial",
        lastPayment: "2024-12-01",
    },
]

export function StudentFeesTable() {
    const [gradeFilter, setGradeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Paid":
                return "bg-green-100 text-green-700"
            case "Partial":
                return "bg-orange-100 text-orange-700"
            case "Unpaid":
                return "bg-red-100 text-red-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    // Filter students based on search query, grade, and status
    const filteredStudents = useMemo(() => {
        return students.filter(student => {
            const matchesSearch = searchQuery === "" ||
                student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                student.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesGrade = gradeFilter === "all" || student.grade.includes(`Grade ${gradeFilter}`)
            const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter.toLowerCase()
            return matchesSearch && matchesGrade && matchesStatus
        })
    }, [searchQuery, gradeFilter, statusFilter])

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentStudents = filteredStudents.slice(startIndex, endIndex)

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, gradeFilter, statusFilter])

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Student Fee Records</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                </Button>
            </div>

            {/* Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
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
                        <SelectValue placeholder="Payment Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="partial">Partial</SelectItem>
                        <SelectItem value="unpaid">Unpaid</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Roll No</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Total Fees</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Paid</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Pending</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Last Payment</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentStudents.map((student) => (
                            <tr key={student.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={student.avatar} />
                                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                                {student.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <p className="font-medium text-gray-900">{student.name}</p>
                                    </div>
                                </td>
                                <td className="py-4 text-sm text-gray-700">{student.rollNo}</td>
                                <td className="py-4 text-sm text-gray-700">{student.grade}</td>
                                <td className="py-4 text-sm font-semibold text-gray-900">${student.totalFees}</td>
                                <td className="py-4 text-sm font-semibold text-green-600">${student.paid}</td>
                                <td className="py-4 text-sm font-semibold text-orange-600">${student.pending}</td>
                                <td className="py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(student.status)}`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="py-4 text-sm text-gray-700">{student.lastPayment}</td>
                                <td className="py-4 pr-6 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="rounded-lg p-2 text-blue-600">
                                            <Eye className="h-4 w-4" />
                                        </button>
                                        <button className="rounded-lg p-2 text-green-600">
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredStudents.length)} of {filteredStudents.length} results
                </p>
                <div className="flex gap-1">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        const pageNum = i + 1
                        return (
                            <Button
                                key={pageNum}
                                size="sm"
                                variant={currentPage === pageNum ? "default" : "outline"}
                                style={currentPage === pageNum ? { backgroundColor: 'rgba(16, 185, 129, 0.8)' } : {}}
                                className={currentPage === pageNum ? "text-white hover:bg-emerald-700" : ""}
                                onClick={() => setCurrentPage(pageNum)}
                            >
                                {pageNum}
                            </Button>
                        )
                    })}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
