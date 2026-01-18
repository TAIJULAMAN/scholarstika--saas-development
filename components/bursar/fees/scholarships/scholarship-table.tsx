"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit2, Trash2, GraduationCap, Plus, Search, Filter } from "lucide-react"
import { AddScholarshipDialog } from "./add-scholarship-dialog"

export function ScholarshipTable() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedScholarship, setSelectedScholarship] = useState<any>(null)
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const [scholarships, setScholarships] = useState([
        {
            id: 1,
            name: "Alice Johnson",
            value: "25",
            startDate: "2024-01-01",
            status: "active",
            description: "Merit Excellence"
        },
        {
            id: 2,
            name: "Bob Smith",
            value: "50",
            startDate: "2024-02-15",
            status: "active",
            description: "Sports Quota"
        },
        {
            id: 3,
            name: "Charlie Brown",
            value: "10",
            startDate: "2024-01-10",
            status: "active",
            description: "Sibling Discount"
        },
        {
            id: 4,
            name: "Diana Prince",
            value: "5",
            startDate: "2024-03-01",
            status: "pending",
            description: "Early Bird"
        },
        {
            id: 5,
            name: "Eve Adams",
            value: "15",
            startDate: "2024-03-10",
            status: "active",
            description: "Arts Scholarship"
        },
        {
            id: 6,
            name: "Frank Wright",
            value: "20",
            startDate: "2024-03-12",
            status: "inactive",
            description: "Need Based"
        }
    ])

    const handleAdd = () => {
        setSelectedScholarship(null)
        setIsDialogOpen(true)
    }

    const handleEdit = (scholarship: any) => {
        setSelectedScholarship(scholarship)
        setIsDialogOpen(true)
    }

    const handleSave = (data: any) => {
        if (selectedScholarship) {
            setScholarships(scholarships.map(s => s.id === selectedScholarship.id ? { ...data, id: s.id } : s))
        } else {
            setScholarships([...scholarships, { ...data, id: Date.now() }])
        }
    }

    const handleDelete = (id: number) => {
        setScholarships(scholarships.filter(s => s.id !== id))
    }

    const filteredScholarships = useMemo(() => {
        return scholarships.filter(scholarship => {
            const matchesSearch = searchQuery === "" ||
                scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scholarship.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesStatus = statusFilter === "all" || scholarship.status.toLowerCase() === statusFilter.toLowerCase()
            return matchesSearch && matchesStatus
        })
    }, [scholarships, searchQuery, statusFilter])

    const itemsPerPage = 5
    const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentScholarships = filteredScholarships.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, statusFilter])

    return (
        <div className="space-y-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">All Scholarships</h2>
                    <Button onClick={handleAdd} className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Student
                    </Button>
                </div>

                <div className="mb-4 flex flex-col md:flex-row justify-end items-center gap-3">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="relative flex flex-col md:flex-row items-center gap-3 min-w-[250px]">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Search..."
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
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Student Name</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Description</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Value (%)</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Start Date</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Status</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Actions</th>
                            </tr>
                        </thead>
                        <TableBody>
                            {currentScholarships.map((scholarship) => (
                                <TableRow key={scholarship.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <TableCell className="whitespace-nowrap py-4 pl-6 font-medium">
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                                                <GraduationCap className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-emerald-950">{scholarship.name}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-4 text-sm text-gray-700">
                                        {scholarship.description}
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-4 font-mono font-medium text-gray-900">
                                        {scholarship.value}%
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-4 text-sm text-gray-700">
                                        {scholarship.startDate}
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-4">
                                        <Badge
                                            variant={scholarship.status === "active" ? "default" : "secondary"}
                                            className={
                                                scholarship.status === "active"
                                                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                                    : scholarship.status === "pending"
                                                        ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                                                        : "bg-gray-100 text-gray-700"
                                            }
                                        >
                                            {scholarship.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-gray-500 hover:text-emerald-600"
                                                onClick={() => handleEdit(scholarship)}
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-gray-500 hover:text-red-600"
                                                onClick={() => handleDelete(scholarship.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredScholarships.length)} of {filteredScholarships.length} results
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

            <AddScholarshipDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSave={handleSave}
                initialData={selectedScholarship}
            />
        </div>
    )
}

