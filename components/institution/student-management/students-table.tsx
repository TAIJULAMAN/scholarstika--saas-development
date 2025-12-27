"use client"

import { useState } from "react"
import { Eye, Pencil, Trash2, Plus } from "lucide-react"
import { AddStudentDialog } from "./add-student-dialog"
import { EditStudentDialog } from "./edit-student-dialog"
import { ViewStudentDialog } from "./view-student-dialog"
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog"
import { TablePagination } from "@/components/common/table-pagination"

interface Branch {
    name: string
    location: string
    status: string
    totalStudents: number
    activeStudents: number
    pending: number
    enrollmentRate: number
    color: string
}

const branches: Branch[] = [
    {
        name: "Downtown Campus",
        location: "New York, USA",
        status: "Active",
        totalStudents: 1847,
        activeStudents: 1792,
        pending: 55,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Riverside Academy",
        location: "London, UK",
        status: "Active",
        totalStudents: 1523,
        activeStudents: 1489,
        pending: 34,
        enrollmentRate: 98,
        color: "purple",
    },
    {
        name: "Maple Leaf Institute",
        location: "New York, USA",
        status: "Active",
        totalStudents: 1294,
        activeStudents: 1256,
        pending: 55,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Sydney Harbor School",
        location: "Sydney, Australia",
        status: "Active",
        totalStudents: 987,
        activeStudents: 954,
        pending: 33,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Pacific Heights",
        location: "San Francisco, USA",
        status: "Active",
        totalStudents: 1634,
        activeStudents: 1547,
        pending: 87,
        enrollmentRate: 95,
        color: "purple",
    },
    {
        name: "Berlin International",
        location: "Berlin, Germany",
        status: "Active",
        totalStudents: 1156,
        activeStudents: 1125,
        pending: 31,
        enrollmentRate: 97,
        color: "purple",
    },
]

export function StudentsTable() {
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
                <h2 className="text-lg font-semibold text-gray-900">Students by Branch</h2>
                <button
                    onClick={() => setIsAddDialogOpen(true)}
                    style={{ backgroundColor: 'rgba(147, 51, 234, 0.8)' }}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="h-4 w-4" />
                    Add New Student
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(147, 51, 234, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Branch Name</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Location</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Total Students</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Active</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Pending</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Enrollment Rate</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBranches.map((branch, index) => (
                            <tr key={index} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <div>
                                        <p className="font-medium text-gray-900">{branch.name}</p>
                                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                            {branch.status}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-4 text-sm text-gray-600">{branch.location}</td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-gray-900">{branch.totalStudents.toLocaleString()}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-green-600">{branch.activeStudents.toLocaleString()}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-yellow-600">{branch.pending}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${branch.enrollmentRate >= 97
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {branch.enrollmentRate}%
                                    </span>
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
                                            className="rounded-lg p-2 text-purple-600 transition-colors hover:bg-purple-50"
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
            <AddStudentDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedBranch && (
                <>
                    <EditStudentDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        student={selectedBranch}
                    />
                    <ViewStudentDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        student={selectedBranch}
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
