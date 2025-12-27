"use client"

import { useState, useMemo } from "react"
import { Pencil, Trash2, FileDown, Plus, Eye } from "lucide-react"
import { TablePagination } from "@/components/common/table-pagination"
import { AddEarningDialog } from "./add-earning-dialog"
import { EditEarningDialog } from "./edit-earning-dialog"
import { ViewEarningDialog } from "./view-earning-dialog"
import { DeleteEarningDialog } from "./delete-earning-dialog"
import { branchEarnings, type BranchEarnings } from "@/data/earnings"

export function EarningsTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [sortBy, setSortBy] = useState("collected")
    const [currentPage, setCurrentPage] = useState(1)

    // Dialog states
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedEarning, setSelectedEarning] = useState<BranchEarnings | null>(null)

    // Filter and sort earnings
    const filteredEarnings = useMemo(() => {
        let filtered = branchEarnings.filter(branch => {
            const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                branch.branchId.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesStatus = statusFilter === "all" ||
                (statusFilter === "paid" && branch.outstanding === 0) ||
                (statusFilter === "pending" && branch.outstanding > 0)

            return matchesSearch && matchesStatus
        })

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === "collected") return b.collected - a.collected
            if (sortBy === "outstanding") return b.outstanding - a.outstanding
            if (sortBy === "total") return b.totalStudents - a.totalStudents
            return 0
        })

        return filtered
    }, [searchQuery, statusFilter, sortBy])

    // Pagination
    const itemsPerPage = 8
    const totalPages = Math.ceil(filteredEarnings.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentBranches = filteredEarnings.slice(startIndex, endIndex)

    const handleView = (earning: BranchEarnings) => {
        setSelectedEarning(earning)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (earning: BranchEarnings) => {
        setSelectedEarning(earning)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (earning: BranchEarnings) => {
        setSelectedEarning(earning)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="space-y-4">
            {/* Earnings Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Branch-wise Earnings</h2>
                    <button
                        onClick={() => setIsAddDialogOpen(true)}
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                        <Plus className="h-4 w-4" />
                        Add New Earning
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Branch</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Location</th>
                                <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Students</th>
                                <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Collected</th>
                                <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Outstanding</th>
                                <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Total</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentBranches.map((branch) => (
                                <tr key={branch.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <p className="font-semibold text-gray-900">{branch.name}</p>
                                                <p className="text-xs text-gray-500">{branch.branchId}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm text-gray-600">{branch.location}</td>
                                    <td className="py-4 text-right text-sm font-medium text-gray-900">{branch.totalStudents.toLocaleString()}</td>
                                    <td className="py-4 text-right text-sm font-semibold text-green-600">${branch.collected.toLocaleString()}</td>
                                    <td className="py-4 text-right text-sm font-semibold text-orange-600">${branch.outstanding.toLocaleString()}</td>
                                    <td className="py-4 text-right text-sm font-bold text-gray-900">${(branch.collected + branch.outstanding).toLocaleString()}</td>
                                    <td className="py-4 pr-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleView(branch)}
                                                className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                                                title="View Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(branch)}
                                                className="rounded-lg p-2 text-green-600 hover:bg-green-50 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(branch)}
                                                className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="rounded-lg p-2 text-purple-600 hover:bg-purple-50 transition-colors"
                                                title="Download Invoice"
                                            >
                                                <FileDown className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredEarnings.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    itemLabel="branches"
                />
            </div>

            {/* Dialogs */}
            <AddEarningDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedEarning && (
                <>
                    <EditEarningDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        earning={selectedEarning}
                    />
                    <ViewEarningDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        earning={selectedEarning}
                    />
                    <DeleteEarningDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        earningName={selectedEarning.name}
                    />
                </>
            )}
        </div>
    )
}
