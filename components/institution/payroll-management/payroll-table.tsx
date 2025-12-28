"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Eye, Send } from "lucide-react"

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

export function PayrollTable() {
    const [departmentFilter, setDepartmentFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [monthFilter, setMonthFilter] = useState("december")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

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

    // Filter employees
    const filteredEmployees = useMemo(() => {
        return employees.filter(employee => {
            const matchesSearch = searchQuery === "" ||
                employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesDepartment = departmentFilter === "all" ||
                employee.department.toLowerCase().includes(departmentFilter)
            const matchesStatus = statusFilter === "all" ||
                employee.status.toLowerCase() === statusFilter.toLowerCase()
            return matchesSearch && matchesDepartment && matchesStatus
        })
    }, [searchQuery, departmentFilter, statusFilter])

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentEmployees = filteredEmployees.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, departmentFilter, statusFilter])

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            {/* Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
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

                <Select value={monthFilter} onValueChange={setMonthFilter}>
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

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Employee</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Employee ID</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Department</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Base Salary</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Allowances</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Deductions</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Net Salary</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEmployees.map((employee) => (
                            <tr key={employee.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
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
                                <td className="py-4 text-sm text-gray-700">{employee.employeeId}</td>
                                <td className="py-4 text-sm text-gray-700">{employee.department}</td>
                                <td className="py-4 text-sm font-semibold text-gray-900">${employee.baseSalary}</td>
                                <td className="py-4 text-sm font-semibold text-green-600">+${employee.allowances}</td>
                                <td className="py-4 text-sm font-semibold text-red-600">-${employee.deductions}</td>
                                <td className="py-4 text-sm font-bold text-blue-600">${employee.netSalary}</td>
                                <td className="py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(employee.status)}`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="py-4 pr-6 text-right">
                                    <div className="flex justify-end gap-2">
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
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredEmployees.length)} of {filteredEmployees.length} results
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
