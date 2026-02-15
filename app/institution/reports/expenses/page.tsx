"use client"

import { useState } from "react"
import { AddExpenseDialog } from "@/components/institution/reports/add-expense-dialog"
import { ViewExpenseDialog } from "@/components/institution/reports/expenses/view-expense-dialog"
import { EditExpenseDialog } from "@/components/institution/reports/expenses/edit-expense-dialog"
import { DeleteExpenseDialog } from "@/components/institution/reports/expenses/delete-expense-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Search, TrendingDown, DollarSign, Calendar, AlertCircle, Eye, Trash, Edit } from "lucide-react"
import { TablePagination } from "@/components/common/table-pagination"

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
    const [selectedExpense, setSelectedExpense] = useState<typeof expenseData[0] | null>(null)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    const itemsPerPage = 6

    const handleView = (expense: typeof expenseData[0]) => {
        setSelectedExpense(expense)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (expense: typeof expenseData[0]) => {
        setSelectedExpense(expense)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (expense: typeof expenseData[0]) => {
        setSelectedExpense(expense)
        setIsDeleteDialogOpen(true)
    }

    const confirmDelete = () => {
        // In a real app, you would delete the expense here
        console.log("Deleting expense:", selectedExpense?.id)
        setIsDeleteDialogOpen(false)
    }

    // Pagination
    const totalPages = Math.ceil(expenseData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = expenseData.slice(startIndex, endIndex)

    const stats = [
        {
            icon: TrendingDown,
            label: "Total Expenses (YTD)",
            value: "$450,230.50",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
        },
        {
            icon: AlertCircle,
            label: "Pending Approvals",
            value: "$12,450.00",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
        },
        {
            icon: DollarSign,
            label: "Budget Utilization",
            value: "72%",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
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
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">Expense Records</h2>
                    <div className="flex gap-2">
                        <AddExpenseDialog />
                    </div>
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
                                <th className="whitespace-nowrap pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Amount</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Action</th>
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
                                    <td className="whitespace-nowrap flex gap-2 items-center justify-end py-5 text-sm font-semibold text-gray-900">
                                        <button className="rounded-lg p-2 text-emerald-600 hover:bg-emerald-50 transition-colors">
                                            <Download className="mr-1 h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                                        >
                                            <Edit className="mr-1 h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <Trash className="mr-1 h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleView(item)}
                                            className="rounded-lg p-2 text-emerald-600 hover:bg-emerald-50 transition-colors"
                                        >
                                            <Eye className="mr-1 h-4 w-4" />
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={expenseData.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    itemLabel="expenses"
                />
            </div>

            {selectedExpense && (
                <>
                    <ViewExpenseDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        expense={selectedExpense}
                    />
                    <EditExpenseDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        expense={selectedExpense}
                    />
                    <DeleteExpenseDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        expense={selectedExpense}
                        onConfirm={confirmDelete}
                    />
                </>
            )}
        </div>
    )
}
