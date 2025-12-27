"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CreditCard, DollarSign, Users, AlertCircle, Search, Download, Eye, Send } from "lucide-react"

const summaryStats = [
    {
        icon: DollarSign,
        label: "Total Fees Collected",
        value: "$1,247,500",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: CreditCard,
        label: "Pending Payments",
        value: "$142,300",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        icon: Users,
        label: "Students with Dues",
        value: "284",
        color: "text-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: AlertCircle,
        label: "Overdue Payments",
        value: "47",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

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

export default function StudentFeesPage() {
    const [gradeFilter, setGradeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

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

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Student Fees Management</h1>
                    <p className="text-sm text-gray-600">Track and manage student fee payments and dues</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
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

            {/* Student Fees Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Student Fee Records</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Roll No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Fees</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Paid</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pending</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Last Payment</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={student.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                                    {student.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{student.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{student.rollNo}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{student.grade}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${student.totalFees}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">${student.paid}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-orange-600">${student.pending}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(student.status)}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{student.lastPayment}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
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
                <div className="flex items-center justify-between border-t p-4">
                    <p className="text-sm text-gray-600">Showing 1 to 5 of 1,247 results</p>
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
