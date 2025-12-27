"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Banknote, Users, CheckCircle, Clock, Search, Download, Send, Eye } from "lucide-react"

const summaryStats = [
    {
        icon: Banknote,
        label: "Total Payroll (This Month)",
        value: "$524,300",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Users,
        label: "Total Employees",
        value: "68",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: CheckCircle,
        label: "Paid",
        value: "62",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Clock,
        label: "Pending",
        value: "6",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const employees = [
    {
        id: 1,
        name: "John Smith",
        avatar: "/avatars/john.jpg",
        role: "Principal",
        department: "Administration",
        employeeId: "EMP-001",
        baseSalary: 12000,
        allowances: 2000,
        deductions: 1200,
        netSalary: 12800,
        status: "Paid",
        paymentDate: "2024-12-25",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        role: "Senior Teacher",
        department: "Teaching",
        employeeId: "EMP-015",
        baseSalary: 8500,
        allowances: 1500,
        deductions: 850,
        netSalary: 9150,
        status: "Paid",
        paymentDate: "2024-12-25",
    },
    {
        id: 3,
        name: "Michael Brown",
        avatar: "/avatars/michael.jpg",
        role: "IT Manager",
        department: "IT Support",
        employeeId: "EMP-042",
        baseSalary: 9000,
        allowances: 1200,
        deductions: 900,
        netSalary: 9300,
        status: "Pending",
        paymentDate: "-",
    },
    {
        id: 4,
        name: "Emily Davis",
        avatar: "/avatars/emily.jpg",
        role: "Librarian",
        department: "Library",
        employeeId: "EMP-028",
        baseSalary: 6500,
        allowances: 800,
        deductions: 650,
        netSalary: 6650,
        status: "Paid",
        paymentDate: "2024-12-25",
    },
]

export default function ManagePayrollPage() {
    const [departmentFilter, setDepartmentFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Paid":
                return "bg-green-100 text-green-700"
            case "Pending":
                return "bg-orange-100 text-orange-700"
            case "Processing":
                return "bg-blue-100 text-blue-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Payroll</h1>
                    <p className="text-sm text-gray-600">Process and manage employee salary payments</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Send className="mr-2 h-4 w-4" />
                        Process Payroll
                    </Button>
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

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                        <SelectItem value="teaching">Teaching</SelectItem>
                        <SelectItem value="it">IT Support</SelectItem>
                        <SelectItem value="library">Library</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                    </SelectContent>
                </Select>

                <Select defaultValue="december">
                    <SelectTrigger className="w-40">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="december">December 2024</SelectItem>
                        <SelectItem value="november">November 2024</SelectItem>
                        <SelectItem value="october">October 2024</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search employees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Payroll Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Employee Payroll</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employee</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employee ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Base Salary</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Allowances</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Deductions</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Net Salary</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={employee.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                                    {employee.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{employee.name}</p>
                                                <p className="text-xs text-gray-600">{employee.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{employee.employeeId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{employee.department}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${employee.baseSalary}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">+${employee.allowances}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-red-600">-${employee.deductions}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-blue-600">${employee.netSalary}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(employee.status)}`}>
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            {employee.status === "Pending" && (
                                                <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
                                                    <Send className="h-4 w-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t p-4">
                    <p className="text-sm text-gray-600">Showing 1 to 4 of 68 results</p>
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
