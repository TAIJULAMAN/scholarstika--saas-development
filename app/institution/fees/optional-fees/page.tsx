"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, DollarSign, Users, TrendingUp, Search, Plus, Edit, Trash2 } from "lucide-react"

const summaryStats = [
    {
        icon: FileText,
        label: "Total Optional Fees",
        value: "12",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
    {
        icon: DollarSign,
        label: "Revenue (This Year)",
        value: "$124,500",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Users,
        label: "Students Enrolled",
        value: "847",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: TrendingUp,
        label: "Active Programs",
        value: "9",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const optionalFees = [
    {
        id: 1,
        name: "School Bus Transportation",
        category: "Transport",
        amount: 150,
        frequency: "Monthly",
        enrolledStudents: 284,
        status: "Active",
        description: "Monthly bus service fee for students",
    },
    {
        id: 2,
        name: "Sports Program",
        category: "Extracurricular",
        amount: 75,
        frequency: "Monthly",
        enrolledStudents: 156,
        status: "Active",
        description: "Access to sports facilities and coaching",
    },
    {
        id: 3,
        name: "Music Classes",
        category: "Extracurricular",
        amount: 100,
        frequency: "Monthly",
        enrolledStudents: 89,
        status: "Active",
        description: "Individual and group music lessons",
    },
    {
        id: 4,
        name: "Art & Craft Workshop",
        category: "Extracurricular",
        amount: 60,
        frequency: "Monthly",
        enrolledStudents: 124,
        status: "Active",
        description: "Weekly art and craft sessions",
    },
    {
        id: 5,
        name: "Lunch Program",
        category: "Meal",
        amount: 120,
        frequency: "Monthly",
        enrolledStudents: 456,
        status: "Active",
        description: "Daily nutritious lunch service",
    },
    {
        id: 6,
        name: "After School Care",
        category: "Daycare",
        amount: 200,
        frequency: "Monthly",
        enrolledStudents: 67,
        status: "Active",
        description: "Extended care until 6 PM",
    },
]

export default function OptionalFeesPage() {
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Optional Fees Management</h1>
                    <p className="text-sm text-gray-600">Manage extracurricular activities, transport, and other optional services</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Optional Fee
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Optional Fee</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Fee Name</Label>
                                <Input placeholder="e.g., School Bus Transportation" />
                            </div>
                            <div>
                                <Label>Category</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="transport">Transport</SelectItem>
                                        <SelectItem value="extracurricular">Extracurricular</SelectItem>
                                        <SelectItem value="meal">Meal</SelectItem>
                                        <SelectItem value="daycare">Daycare</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Amount ($)</Label>
                                <Input type="number" placeholder="150" />
                            </div>
                            <div>
                                <Label>Frequency</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select frequency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                        <SelectItem value="quarterly">Quarterly</SelectItem>
                                        <SelectItem value="annually">Annually</SelectItem>
                                        <SelectItem value="one-time">One-time</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Textarea placeholder="Brief description of the service..." rows={3} />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Optional Fee</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="extracurricular">Extracurricular</SelectItem>
                        <SelectItem value="meal">Meal</SelectItem>
                        <SelectItem value="daycare">Daycare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search optional fees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Optional Fees Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Optional Fees</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Fee Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Frequency</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enrolled Students</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {optionalFees.map((fee) => (
                                <tr key={fee.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{fee.name}</p>
                                            <p className="text-sm text-gray-600">{fee.description}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {fee.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${fee.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{fee.frequency}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{fee.enrolledStudents}</td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            {fee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                                                <Trash2 className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 6 of 12 results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
