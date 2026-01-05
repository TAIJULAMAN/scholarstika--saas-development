"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Pencil, Trash2, Plus } from "lucide-react"
import { announcements, type Announcement } from "@/data/announcements"
import { ViewAnnouncementDialog } from "@/components/institution/announcements/view-announcement-dialog"
import { EditAnnouncementDialog } from "@/components/institution/announcements/edit-announcement-dialog"
import { DeleteConfirmationDialog } from "@/components/institution/announcements/delete-confirmation-dialog"
import { AddAnnouncementDialog } from "@/components/institution/announcements/add-announcement-dialog"
import { TablePagination } from "@/components/common/table-pagination"
import { PageHeader } from "@/components/common/page-header"

export default function AnnouncementsPage() {
    const [statusFilter, setStatusFilter] = useState("all")
    const [branchFilter, setBranchFilter] = useState("all")
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const totalPages = Math.ceil(announcements.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentAnnouncements = announcements.slice(startIndex, endIndex)

    const handleView = (announcement: Announcement) => {
        setSelectedAnnouncement(announcement)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (announcement: Announcement) => {
        setSelectedAnnouncement(announcement)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (announcement: Announcement) => {
        setSelectedAnnouncement(announcement)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Manage Announcements Across All Branches"
                description="Create and broadcast messages across all branches."
            /> */}

            {/* Announcements */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">All Announcements</h3>
                    <div className="flex items-center gap-2">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-32">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* <Select value={branchFilter} onValueChange={setBranchFilter}>
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Branches</SelectItem>
                                <SelectItem value="downtown">Downtown Campus</SelectItem>
                                <SelectItem value="westside">Westside Branch</SelectItem>
                            </SelectContent>
                        </Select> */}
                        <button
                            onClick={() => setIsAddDialogOpen(true)}
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                        >
                            <Plus className="h-4 w-4" />
                            Add Announcement
                        </button>
                    </div>

                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg px-4 py-3 text-left text-sm font-semibold text-white">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Description</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Created Date</th>
                                {/* <th className="px-4 py-3 text-left text-sm font-semibold text-white">Assigned Branches</th> */}
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="rounded-tr-lg px-4 py-3 text-left text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {currentAnnouncements.map((announcement) => (
                                <tr key={announcement.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4">
                                        <p className="font-medium text-gray-900">{announcement.title}</p>

                                    </td>
                                    <td className="px-4 py-4">

                                        <p className="text-sm text-gray-600">{announcement.description}</p>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-700">{announcement.date}</td>
                                    {/* <td className="px-4 py-4 text-sm text-gray-700">{announcement.branches}</td> */}
                                    <td className="px-4 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${announcement.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {announcement.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleView(announcement)}
                                                className="rounded p-1.5 text-blue-600 hover:bg-blue-50"
                                                title="View Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(announcement)}
                                                className="rounded p-1.5 text-green-600 hover:bg-green-50"
                                                title="Edit Announcement"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(announcement)}
                                                className="rounded p-1.5 text-red-600 hover:bg-red-50"
                                                title="Delete Announcement"
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

                {/* Pagination */}
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={announcements.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    itemLabel="announcements"
                />
            </div>

            {/* Dialogs */}
            <AddAnnouncementDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedAnnouncement && (
                <>
                    <ViewAnnouncementDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        announcement={selectedAnnouncement}
                    />
                    <EditAnnouncementDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        announcement={selectedAnnouncement}
                    />
                    <DeleteConfirmationDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        announcementTitle={selectedAnnouncement.title}
                    />
                </>
            )}
        </div>
    )
}
