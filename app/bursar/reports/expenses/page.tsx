"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddExpenseDialog } from "@/components/bursar/reports/add-expense-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Filter, Search, TrendingDown, DollarSign, Calendar, AlertCircle, Plus } from "lucide-react"

const expenseData = [
    {
        id: "EXP-001",
        payee: "City Power & Light",
        amount: 4500.00,
        date: "2024-03-15",
        category: "Utilities",
        status: "Paid",
        method: "Bank Transfer"
    },
    {
        id: "EXP-002",
        payee: "Global Stationery Supply",
        amount: 1250.75,
        date: "2024-03-14",
        category: "Supplies",
        status: "Pending",
        method: "Credit Card"
    },
    {
        id: "EXP-003",
        payee: "Campus Security Services",
        amount: 8500.00,
        date: "2024-03-10",
        category: "Services",
        status: "Paid",
        method: "Bank Transfer"
    },
    {
        id: "EXP-004",
        payee: "Tech Solutions Inc.",
        amount: 12000.00,
        date: "2024-03-08",
        category: "IT Equipment",
        status: "Paid",
        method: "Check"
    },
    {
        id: "EXP-005",
        payee: "Green Landscaping",
        amount: 2200.00,
        date: "2024-03-05",
        category: "Maintenance",
        status: "Processing",
        method: "Bank Transfer"
    },
]

export default function ExpensesReportsPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    // Pagination logic
    const totalPages = Math.ceil(expenseData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = expenseData.slice(startIndex, endIndex)

    const stats = [
        {
            icon: TrendingDown,
            label: "Total Expenses (YTD)",
            value: "$450,230.50",
            subtext: "+5.2% vs previous period",
            color: "text-red-600",
            bgColor: "bg-red-50",
        },
        {
            icon: AlertCircle,
            label: "Pending Approvals",
            value: "$12,450.00",
            subtext: "8 requests awaiting approval",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            icon: DollarSign,
            label: "Budget Utilization",
            value: "72%",
            subtext: "Within expected range for Q1",
            color: "text-gray-600",
            bgColor: "bg-gray-50",
        },
    ]

    return (
        <div className="space-y-6">
            {/* Stats Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="mt-1 text-xs text-gray-500">{stat.subtext}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Table Section */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Expense Records</h2>
                    <div className="flex gap-2">
                        <AddExpenseDialog />
                        <Button variant="outline" size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Select Dates
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-3">
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="utilities">Utilities</SelectItem>
                            <SelectItem value="supplies">Supplies</SelectItem>
                            <SelectItem value="services">Services</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="salaries">Salaries</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative flex-1 min-w-[250px]">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Search expenses..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">ID</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Payee</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Category</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Date</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Method</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Status</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item) => (
                                <tr key={item.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900">{item.id}</td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{item.payee}</td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{item.date}</td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{item.method}</td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.status === 'Paid'
                                            ? 'bg-emerald-100 text-emerald-800'
                                            : item.status === 'Processing'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 pr-6 text-right text-sm font-semibold text-gray-900">
                                        ${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing {startIndex + 1} to {Math.min(endIndex, expenseData.length)} of {expenseData.length} results
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
                        {Array.from({ length: totalPages }, (_, i) => {
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
        </div>
    )
}
