"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Trash2 } from "lucide-react"

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

export function OptionalFeesTable() {
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    // Filter fees
    const filteredFees = useMemo(() => {
        return optionalFees.filter(fee => {
            const matchesSearch = searchQuery === "" ||
                fee.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = categoryFilter === "all" || fee.category.toLowerCase() === categoryFilter.toLowerCase()
            const matchesStatus = statusFilter === "all" || fee.status.toLowerCase() === statusFilter.toLowerCase()
            return matchesSearch && matchesCategory && matchesStatus
        })
    }, [searchQuery, categoryFilter, statusFilter])

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredFees.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentFees = filteredFees.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, categoryFilter, statusFilter])

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">All Optional Fees</h2>
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

            {/* Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
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

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Fee Name</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Category</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Amount</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Frequency</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Enrolled Students</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentFees.map((fee) => (
                            <tr key={fee.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <div>
                                        <p className="font-medium text-gray-900">{fee.name}</p>
                                        <p className="text-sm text-gray-600">{fee.description}</p>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                        {fee.category}
                                    </span>
                                </td>
                                <td className="py-4 text-sm font-semibold text-gray-900">${fee.amount}</td>
                                <td className="py-4 text-sm text-gray-700">{fee.frequency}</td>
                                <td className="py-4 text-sm font-semibold text-gray-900">{fee.enrolledStudents}</td>
                                <td className="py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                        {fee.status}
                                    </span>
                                </td>
                                <td className="py-4 pr-6 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="rounded-lg p-2 text-blue-600">
                                            <Edit className="h-4 w-4" />
                                        </button>
                                        <button className="rounded-lg p-2 text-red-600">
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
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredFees.length)} of {filteredFees.length} results
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
