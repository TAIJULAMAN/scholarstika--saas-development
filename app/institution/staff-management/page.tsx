"use client"

import { useState } from "react"
import { PageHeader } from "@/components/common/page-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TablePagination } from "@/components/common/table-pagination"
import { AddManagerDialog } from "@/components/institution/staff-management/add-manager-dialog"
import { ViewManagerDialog } from "@/components/institution/staff-management/view-manager-dialog"
import { EditManagerDialog } from "@/components/institution/staff-management/edit-manager-dialog"
import { DeleteManagerDialog } from "@/components/institution/staff-management/delete-manager-dialog"
import { Search, Plus, Pencil, Trash2, Eye, Mail, Phone } from "lucide-react"

const branchManagers = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@scholastika.edu",
        phone: "+1 (555) 123-4567",
        branchName: "Downtown Campus",
        branchId: "BRN-001",
        joinedDate: "2023-01-15",
        status: "Active"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@scholastika.edu",
        phone: "+1 (555) 234-5678",
        branchName: "North Valley Branch",
        branchId: "BRN-002",
        joinedDate: "2023-02-20",
        status: "Active"
    },
    {
        id: 3,
        name: "Michael Chen",
        email: "m.chen@scholastika.edu",
        phone: "+1 (555) 345-6789",
        branchName: "Eastside Institute",
        branchId: "BRN-003",
        joinedDate: "2023-03-10",
        status: "Active"
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        email: "emily.r@scholastika.edu",
        phone: "+1 (555) 456-7890",
        branchName: "Westwood Academy",
        branchId: "BRN-004",
        joinedDate: "2023-04-05",
        status: "Active"
    },
    {
        id: 5,
        name: "David Thompson",
        email: "d.thompson@scholastika.edu",
        phone: "+1 (555) 567-8901",
        branchName: "Southgate College",
        branchId: "BRN-005",
        joinedDate: "2023-05-12",
        status: "Active"
    }
]

export default function StaffManagementPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedManager, setSelectedManager] = useState<typeof branchManagers[0] | null>(null)
    const filteredManagers = branchManagers.filter(manager =>
        manager.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manager.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manager.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manager.branchId.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const itemsPerPage = 8
    const totalPages = Math.ceil(filteredManagers.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentManagers = filteredManagers.slice(startIndex, endIndex)

    const handleView = (manager: typeof branchManagers[0]) => {
        setSelectedManager(manager)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (manager: typeof branchManagers[0]) => {
        setSelectedManager(manager)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (manager: typeof branchManagers[0]) => {
        setSelectedManager(manager)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="space-y-6">
            <PageHeader
                title="Staff Management"
                description="Manage branch managers and their information"
            />

            {/* Branch Managers Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Branch Managers</h2>
                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search managers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 w-64"
                            />
                        </div>
                        {/* Add Button */}
                        <Button
                            onClick={() => setIsAddDialogOpen(true)}
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                            className="text-white"
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Manager
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Manager</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Branch</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Contact</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Joined Date</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentManagers.map((manager) => (
                                <tr key={manager.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <div>
                                            <p className="font-semibold text-gray-900">{manager.name}</p>
                                            <p className="text-xs text-gray-500">{manager.email}</p>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{manager.branchName}</p>
                                            <p className="text-xs text-gray-500">{manager.branchId}</p>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Mail className="h-3 w-3" />
                                                <span className="text-xs">{manager.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="h-3 w-3" />
                                                <span className="text-xs">{manager.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm text-gray-600">
                                        {new Date(manager.joinedDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="py-4">
                                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                                            {manager.status}
                                        </span>
                                    </td>
                                    <td className="py-4 pr-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleView(manager)}
                                                className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                                                title="View Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(manager)}
                                                className="rounded-lg p-2 text-green-600 hover:bg-green-50 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(manager)}
                                                className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                                                title="Delete"
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
                    totalItems={filteredManagers.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    itemLabel="managers"
                />
            </div>

            {/* Dialogs */}
            <AddManagerDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedManager && (
                <>
                    <ViewManagerDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        manager={selectedManager}
                    />
                    <EditManagerDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        manager={selectedManager}
                    />
                    <DeleteManagerDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        managerName={selectedManager.name}
                    />
                </>
            )}
        </div>
    )
}
