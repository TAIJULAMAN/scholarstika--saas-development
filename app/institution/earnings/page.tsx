"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Building2, DollarSign, AlertCircle, FileText, Search, Download, FileDown, CheckCircle, Clock, AlertTriangle } from "lucide-react"

const summaryStats = [
    {
        icon: Building2,
        label: "Total Branches",
        value: "12",
        badge: "Active",
        badgeColor: "bg-green-100 text-green-700",
    },
    {
        icon: DollarSign,
        label: "Total Fees Collected",
        value: "$2,458,900",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: AlertCircle,
        label: "Outstanding Fees",
        value: "$342,100",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        icon: FileText,
        label: "Invoices Generated",
        value: "148",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const branches = [
    {
        id: 1,
        name: "Downtown Campus",
        branchId: "BRN-001",
        collected: 485200,
        outstanding: 45800,
        color: "blue",
        icon: "🏢",
    },
    {
        id: 2,
        name: "North Valley Branch",
        branchId: "BRN-002",
        collected: 392400,
        outstanding: 38600,
        color: "purple",
        icon: "🏢",
    },
    {
        id: 3,
        name: "Eastside Institute",
        branchId: "BRN-003",
        collected: 528700,
        outstanding: 52300,
        color: "green",
        icon: "🏢",
    },
    {
        id: 4,
        name: "Westwood Academy",
        branchId: "BRN-004",
        collected: 412900,
        outstanding: 41100,
        color: "blue",
        icon: "🏢",
    },
    {
        id: 5,
        name: "Southgate College",
        branchId: "BRN-005",
        collected: 639700,
        outstanding: 164300,
        color: "pink",
        icon: "🏢",
    },
]

const recentActivity = [
    {
        id: 1,
        type: "payment",
        message: "Payment received from Downtown Campus",
        time: "2 hours ago",
        amount: "+$15,400",
        icon: CheckCircle,
        iconColor: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        id: 2,
        type: "invoice",
        message: "Invoice generated for Westwood Academy",
        time: "4 hours ago",
        reference: "INV-2847",
        icon: FileText,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        id: 3,
        type: "reminder",
        message: "Payment reminder sent to Southgate College",
        time: "1 day ago",
        status: "Pending",
        icon: Clock,
        iconColor: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

export default function EarningsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [countryFilter, setCountryFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [sortBy, setSortBy] = useState("total")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Earning Summary Across Branches</h1>
                <p className="text-sm text-gray-600">Overview of student enrollment and management across all branches</p>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div className={`rounded-lg ${stat.bgColor || 'bg-blue-50'} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color || 'text-blue-600'}`} />
                                </div>
                                {stat.badge && (
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${stat.badgeColor}`}>
                                        {stat.badge}
                                    </span>
                                )}
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-1 text-3xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search branches..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="total">Total Students</SelectItem>
                            <SelectItem value="collected">Fees Collected</SelectItem>
                            <SelectItem value="outstanding">Outstanding</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Branch-wise Invoices */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">Branch-wise Invoices</h2>
                        <button className="text-sm font-medium text-blue-600 hover:underline">View All</button>
                    </div>

                    <div className="space-y-3">
                        {branches.map((branch) => (
                            <div key={branch.id} className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${branch.color}-100 text-2xl`}>
                                            {branch.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{branch.name}</h3>
                                            <p className="text-sm text-gray-600">Branch ID: {branch.branchId}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-xs text-gray-600">Collected</p>
                                            <p className="text-lg font-bold text-green-600">${branch.collected.toLocaleString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-600">Outstanding</p>
                                            <p className="text-lg font-bold text-orange-600">${branch.outstanding.toLocaleString()}</p>
                                        </div>
                                        <Button size="sm" className={`bg-${branch.color}-600 hover:bg-${branch.color}-700`}>
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Combined Invoice & Download */}
                <div className="space-y-6">
                    {/* Combined Invoice */}
                    <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold">Combined Invoice</h3>
                            <FileText className="h-6 w-6" />
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-blue-100">Total Branches</span>
                                <span className="font-semibold">12</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-100">Total Fees Collected</span>
                                <span className="font-semibold">$2,458,900</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-100">Tax (8%)</span>
                                <span className="font-semibold">$196,712</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-100">Processing Fee</span>
                                <span className="font-semibold">$5,000</span>
                            </div>
                            <div className="flex justify-between border-t border-blue-400 pt-2">
                                <span className="text-blue-100">Discount (2%)</span>
                                <span className="font-semibold text-yellow-300">-$49,178</span>
                            </div>
                            <div className="mt-4 rounded-lg bg-white/10 p-3">
                                <div className="flex justify-between">
                                    <span className="text-blue-100">Total Invoice Amount</span>
                                    <span className="text-2xl font-bold">$2,611,434</span>
                                </div>
                            </div>
                        </div>
                        <Button className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-50">
                            📄 Generate Combined Invoice
                        </Button>
                    </div>

                    {/* Download Invoice */}
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center gap-2">
                            <Download className="h-5 w-5 text-blue-600" />
                            <h3 className="font-bold text-gray-900">Download Invoice</h3>
                        </div>
                        <div className="mb-4 rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-red-50">
                                    <FileText className="h-5 w-5 text-red-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Combined Invoice - EduBill Pro</p>
                                    <p className="text-xs text-gray-600">December 2024 • 2.8 MB</p>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                            <FileDown className="mr-2 h-4 w-4" />
                            Download PDF Invoice
                        </Button>
                        <p className="mt-2 text-center text-xs text-gray-600">
                            Invoice will be saved as:<br />
                            <span className="font-mono">Combined_Invoice_EduBillPro_Dec2024.pdf</span>
                        </p>
                        <div className="mt-4 rounded-lg bg-blue-50 p-3">
                            <div className="flex gap-2">
                                <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs font-medium text-blue-900">Quick Tip</p>
                                    <p className="text-xs text-blue-700">Generate the combined invoice before downloading to ensure all data is up to date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Recent Activity</h3>
                <div className="space-y-3">
                    {recentActivity.map((activity) => {
                        const Icon = activity.icon
                        return (
                            <div key={activity.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-4">
                                    <div className={`rounded-lg ${activity.bgColor} p-2`}>
                                        <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{activity.message}</p>
                                        <p className="text-sm text-gray-600">{activity.time}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    {activity.amount && (
                                        <p className="text-lg font-bold text-green-600">{activity.amount}</p>
                                    )}
                                    {activity.reference && (
                                        <p className="text-sm text-gray-600">{activity.reference}</p>
                                    )}
                                    {activity.status && (
                                        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                                            {activity.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
