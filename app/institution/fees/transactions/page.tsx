"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Receipt, DollarSign, TrendingUp, Calendar, Search, Download, Eye, Filter } from "lucide-react"

const summaryStats = [
    {
        icon: DollarSign,
        label: "Total Transactions",
        value: "3,847",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: TrendingUp,
        label: "This Month",
        value: "$284,500",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Receipt,
        label: "Successful",
        value: "3,792",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Calendar,
        label: "Failed/Pending",
        value: "55",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

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

export default function TransactionLogsPage() {
    const [paymentMethodFilter, setPaymentMethodFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

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

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Transaction Logs</h1>
                    <p className="text-sm text-gray-600">Complete payment history and transaction records</p>
                </div>
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

            {/* Transactions Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Transactions</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Transaction ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Roll No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Payment Method</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Receipt</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-mono text-sm font-medium text-gray-900">{transaction.id}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{transaction.studentName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.rollNo}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${transaction.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.paymentMethod}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.transactionDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{transaction.receiptNo}</td>
                                    <td className="px-6 py-4">
                                        <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t p-4">
                    <p className="text-sm text-gray-600">Showing 1 to 5 of 3,847 results</p>
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
