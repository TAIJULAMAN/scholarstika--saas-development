"use client"

import { Eye, Pencil, Trash2 } from "lucide-react"
import { type Announcement } from "@/data/announcements"

interface AnnouncementsTableProps {
    announcements: Announcement[]
    onView: (announcement: Announcement) => void
    onEdit: (announcement: Announcement) => void
    onDelete: (announcement: Announcement) => void
}

export function AnnouncementsTable({ announcements, onView, onEdit, onDelete }: AnnouncementsTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                    <tr>
                        <th className="rounded-tl-lg px-4 py-3 text-left text-sm font-semibold text-white">Title</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">Created Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">Status</th>
                        <th className="rounded-tr-lg px-4 py-3 text-left text-sm font-semibold text-white">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {announcements.map((announcement) => (
                        <tr key={announcement.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4">
                                <p className="font-medium text-gray-900">{announcement.title}</p>
                            </td>
                            <td className="px-4 py-4">
                                <p className="text-sm text-gray-600">{announcement.description}</p>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-700">{announcement.date}</td>
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
                                        onClick={() => onView(announcement)}
                                        className="rounded p-1.5 text-blue-600 hover:bg-blue-50"
                                        title="View Details"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => onEdit(announcement)}
                                        className="rounded p-1.5 text-green-600 hover:bg-green-50"
                                        title="Edit Announcement"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(announcement)}
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
    )
}
