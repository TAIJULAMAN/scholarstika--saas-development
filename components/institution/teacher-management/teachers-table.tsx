"use client"

import { useState } from "react"
import { Eye, Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AddTeacherDialog } from "./add-teacher-dialog"
import { EditTeacherDialog } from "./edit-teacher-dialog"
import { ViewTeacherDialog } from "./view-teacher-dialog"
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog"
import { TablePagination } from "@/components/common/table-pagination"
import { teachers, type Teacher } from "@/data/teachers"

export function TeachersTable() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 8
    const totalPages = Math.ceil(teachers.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentTeachers = teachers.slice(startIndex, endIndex)

    const handleView = (teacher: Teacher) => {
        setSelectedTeacher(teacher)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (teacher: Teacher) => {
        setSelectedTeacher(teacher)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (teacher: Teacher) => {
        setSelectedTeacher(teacher)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Teachers Directory</h2>
                {/* <button
                    onClick={() => setIsAddDialogOpen(true)}
                    style={{ backgroundColor: 'rgba(147, 51, 234, 0.8)' }}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="h-4 w-4" />
                    Add New Teacher
                </button> */}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Teacher</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Branch</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Subject</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Phone</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Address</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTeachers.map((teacher) => (
                            <tr key={teacher.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={teacher.avatar} />
                                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                                {teacher.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-gray-900">{teacher.name}</p>
                                            <p className="text-sm text-gray-600">{teacher.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-sm text-gray-700">{teacher.branch}</td>
                                <td className="py-4 text-sm text-gray-700">{teacher.subject}</td>
                                <td className="py-4">
                                    {teacher.phone}
                                </td>
                                <td className="py-4">{teacher.address}</td>
                                <td className="py-4 pr-6 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleView(teacher)}
                                            className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
                                            title="View Details"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => handleEdit(teacher)}
                                            className="rounded-lg p-2 text-purple-600 transition-colors hover:bg-purple-50"
                                            title="Edit Teacher"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </button>
                                        {/* <button
                                            onClick={() => handleDelete(teacher)}
                                            className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
                                            title="Delete Teacher"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button> */}
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
                totalItems={teachers.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                itemLabel="teachers"
            />

            {/* Dialogs */}
            <AddTeacherDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
            {selectedTeacher && (
                <>
                    <EditTeacherDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        teacher={selectedTeacher}
                    />
                    <ViewTeacherDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        teacher={selectedTeacher}
                    />
                    <DeleteConfirmationDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        teacherName={selectedTeacher.name}
                    />
                </>
            )}
        </div>
    )
}
