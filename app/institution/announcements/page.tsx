"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"
import { announcements, type Announcement } from "@/data/announcements"
import { ViewAnnouncementDialog } from "@/components/institution/announcements/view-announcement-dialog"
import { EditAnnouncementDialog } from "@/components/institution/announcements/edit-announcement-dialog"
import { DeleteConfirmationDialog } from "@/components/institution/announcements/delete-confirmation-dialog"
import { AddAnnouncementDialog } from "@/components/institution/announcements/add-announcement-dialog"
import { TablePagination } from "@/components/common/table-pagination"
import { AnnouncementsTable } from "@/components/institution/announcements/announcements-table"

export default function AnnouncementsPage() {
    const [statusFilter, setStatusFilter] = useState("all")
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


                <AnnouncementsTable
                    announcements={currentAnnouncements}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

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
