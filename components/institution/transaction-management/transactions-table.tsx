"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Search, Download, Eye, Filter } from "lucide-react"

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
    const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)
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

    // Filter transactions
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
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Advanced Filter
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
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

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search transactions..."
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
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Transaction ID</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Student</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Roll No</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Amount</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Payment Method</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Date & Time</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Receipt</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <p className="font-mono text-sm font-medium text-gray-900">{transaction.id}</p>
                                </td>
                                <td className="py-4 text-sm text-gray-900">{transaction.studentName}</td>
                                <td className="py-4 text-sm text-gray-700">{transaction.rollNo}</td>
                                <td className="py-4 text-sm font-semibold text-gray-900">${transaction.amount}</td>
                                <td className="py-4 text-sm text-gray-700">{transaction.paymentMethod}</td>
                                <td className="py-4 text-sm text-gray-700">{transaction.transactionDate}</td>
                                <td className="py-4">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                                        {transaction.status}
                                    </span>
                                </td>
                                <td className="py-4 text-sm text-gray-700">{transaction.receiptNo}</td>
                                <td className="py-4 pr-6 text-right">
                                    <button
                                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                                        onClick={() => {
                                            setSelectedTransaction(transaction)
                                            setIsDetailsDialogOpen(true)
                                        }}
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between">
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

            {/* Details Dialog */}
            <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Transaction Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-gray-50 p-4 space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Transaction ID:</span>
                                <span className="text-sm text-gray-900 font-mono font-semibold">{selectedTransaction?.id}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Student Name:</span>
                                <span className="text-sm text-gray-900">{selectedTransaction?.studentName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Roll Number:</span>
                                <span className="text-sm text-gray-900">{selectedTransaction?.rollNo}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Amount:</span>
                                <span className="text-sm text-gray-900 font-semibold">${selectedTransaction?.amount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Payment Method:</span>
                                <span className="text-sm text-gray-900">{selectedTransaction?.paymentMethod}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Transaction Date:</span>
                                <span className="text-sm text-gray-900">{selectedTransaction?.transactionDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Receipt Number:</span>
                                <span className="text-sm text-gray-900 font-mono">{selectedTransaction?.receiptNo}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Status:</span>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedTransaction ? getStatusColor(selectedTransaction.status) : ''}`}>
                                    {selectedTransaction?.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
