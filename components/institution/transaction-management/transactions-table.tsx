"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ViewTransactionDialog } from "./view-transaction-dialog"
import { EditTransactionDialog } from "./edit-transaction-dialog"
import { DeleteTransactionDialog } from "./delete-transaction-dialog"
import { Eye, Pencil, Trash2 } from "lucide-react"

const transactions = [
    {
        id: "TXN-2024-1247",
        studentName: "Alice Johnson",
        rollNo: "2024-001",
        amount: 5000,
        paymentMethod: "Credit Card",
        transactionDate: "2024-12-15 10:30 AM",
        status: "Success",
        receiptNo: "RCP-1247",
    },
    {
        id: "TXN-2024-1246",
        studentName: "Bob Smith",
        rollNo: "2024-002",
        amount: 1500,
        paymentMethod: "Bank Transfer",
        transactionDate: "2024-12-14 02:15 PM",
        status: "Success",
        receiptNo: "RCP-1246",
    },
    {
        id: "TXN-2024-1245",
        studentName: "Charlie Brown",
        rollNo: "2024-003",
        amount: 2000,
        paymentMethod: "Cash",
        transactionDate: "2024-12-13 11:45 AM",
        status: "Pending",
        receiptNo: "-",
    },
    {
        id: "TXN-2024-1244",
        studentName: "Diana Prince",
        rollNo: "2024-004",
        amount: 5000,
        paymentMethod: "Online Payment",
        transactionDate: "2024-12-10 09:20 AM",
        status: "Success",
        receiptNo: "RCP-1244",
    },
    {
        id: "TXN-2024-1243",
        studentName: "Ethan Hunt",
        rollNo: "2024-005",
        amount: 1000,
        paymentMethod: "Credit Card",
        transactionDate: "2024-12-01 03:30 PM",
        status: "Failed",
        receiptNo: "-",
    },
]

export function TransactionsTable() {
    const [paymentMethodFilter, setPaymentMethodFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState<typeof transactions[0] | null>(null)

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "bg-green-100 text-green-700"
            case "Pending":
                return "bg-orange-100 text-orange-700"
            case "Failed":
                return "bg-red-100 text-red-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    const handleView = (transaction: typeof transactions[0]) => {
        setSelectedTransaction(transaction)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (transaction: typeof transactions[0]) => {
        setSelectedTransaction(transaction)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (transaction: typeof transactions[0]) => {
        setSelectedTransaction(transaction)
        setIsDeleteDialogOpen(true)
    }

    const filteredTransactions = useMemo(() => {
        return transactions.filter(transaction => {
            const matchesSearch = searchQuery === "" ||
                transaction.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                transaction.id.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesMethod = paymentMethodFilter === "all" || transaction.paymentMethod.toLowerCase().includes(paymentMethodFilter)
            const matchesStatus = statusFilter === "all" || transaction.status.toLowerCase() === statusFilter.toLowerCase()
            return matchesSearch && matchesMethod && matchesStatus
        })
    }, [searchQuery, paymentMethodFilter, statusFilter])

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentTransactions = filteredTransactions.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, paymentMethodFilter, statusFilter])

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">All Transactions</h2>
            </div>

            <div className="mb-4 flex justify-end items-center gap-3">
                <Select value={paymentMethodFilter} onValueChange={setPaymentMethodFilter}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Methods</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="card">Credit Card</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="online">Online Payment</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Transaction ID</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Student</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Roll No</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Amount</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Payment Method</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Date & Time</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Status</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Receipt</th>
                            <th className="whitespace-nowrap rounded-tr-lg pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-6">
                                    <p className="font-mono text-sm font-medium text-gray-900">{transaction.id}</p>
                                </td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-900">{transaction.studentName}</td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transaction.rollNo}</td>
                                <td className="whitespace-nowrap py-4 text-sm font-semibold text-gray-900">${transaction.amount}</td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transaction.paymentMethod}</td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transaction.transactionDate}</td>
                                <td className="whitespace-nowrap py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                                        {transaction.status}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transaction.receiptNo}</td>
                                <td className="whitespace-nowrap py-4 flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleView(transaction)}
                                        title="View Details"
                                    >
                                        <Eye />
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleEdit(transaction)}
                                        title="Edit Fee"
                                    >
                                        <Pencil />
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDelete(transaction)}
                                        title="Delete Fee"
                                    >
                                        <Trash2 />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredTransactions.length)} of {filteredTransactions.length} results
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

            <ViewTransactionDialog
                isOpen={isViewDialogOpen}
                onClose={() => setIsViewDialogOpen(false)}
                transaction={selectedTransaction}
            />

            <EditTransactionDialog
                isOpen={isEditDialogOpen}
                onClose={() => setIsEditDialogOpen(false)}
                transaction={selectedTransaction}
            />

            <DeleteTransactionDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                transaction={selectedTransaction}
            />
        </div >
    )
}
