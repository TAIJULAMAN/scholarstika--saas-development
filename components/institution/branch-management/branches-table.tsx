"use client"

import { useState } from "react"
import { Eye, Pencil, Trash2, Plus } from "lucide-react"
import { AddBranchDialog } from "./add-branch-dialog"
import { EditBranchDialog } from "./edit-branch-dialog"
import { ViewBranchDialog } from "./view-branch-dialog"
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog"
import { TablePagination } from "@/components/common/table-pagination"
import { branches, type Branch } from "@/data/branches"

export function BranchesTable() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 8
    const totalPages = Math.ceil(branches.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentBranches = branches.slice(startIndex, endIndex)

    const handleView = (branch: Branch) => {
        setSelectedBranch(branch)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (branch: Branch) => {
        setSelectedBranch(branch)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (branch: Branch) => {
        setSelectedBranch(branch)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">All Branches</h2>
                <button
                    onClick={() => setIsAddDialogOpen(true)}
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="h-4 w-4" />
                    Add New Branch
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Branch Name</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Type</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Students</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Teachers</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Attendance</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Earnings</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBranches.map((branch) => (
                            <tr key={branch.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <p className="font-medium text-gray-900">{branch.name}</p>
                                </td>
                                <td className="py-4 text-sm text-gray-600">{branch.type}</td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-gray-900">{branch.students}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="text-gray-600">{branch.teachers}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(branch.attendance) >= 93
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(branch.attendance) >= 90
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {branch.attendance}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-gray-900">{branch.earnings}</span>
                                </td>
                                <td className="py-4 pr-6 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleView(branch)}
                                            className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
                                            title="View Details"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleEdit(branch)}
                                            className="rounded-lg p-2 text-green-600 transition-colors hover:bg-green-50"
                                            title="Edit Branch"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(branch)}
                                            className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
                                            title="Delete Branch"
                                        >
                                            <Trash2 className="h-4 w-4" />
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
                totalItems={branches.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                itemLabel="branches"
            />

            {/* Dialogs */}
            <AddBranchDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedBranch && (
                <>
                    <EditBranchDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        branch={selectedBranch}
                    />
                    <ViewBranchDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        branch={selectedBranch}
                    />
                    <DeleteConfirmationDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        branchName={selectedBranch.name}
                    />
                </>
            )}
        </div>
    )
}
