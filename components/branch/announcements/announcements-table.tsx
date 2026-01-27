"use client"

import { Eye, Pencil, Trash2, Users } from "lucide-react"
import type { Announcement } from "@/data/announcements"

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
                        <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Title</th>
                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Audience</th>
                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Date</th>
                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">Status</th>
                        <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {announcements.map((announcement) => (
                        <tr key={announcement.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                            <td className="whitespace-nowrap py-4 pl-6">
                                <div>
                                    <p className="font-medium text-gray-900">{announcement.title}</p>
                                    <p className="text-sm text-gray-500 truncate max-w-[200px]">{announcement.description}</p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap py-4">
                                <div className="flex flex-wrap gap-1">
                                    {announcement.audience.map((role, index) => (
                                        <span key={index} className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td className="whitespace-nowrap py-4 text-sm text-gray-600">{announcement.date}</td>
                            <td className="whitespace-nowrap py-4">
                                <span
                                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${announcement.status === "Active"
                                        ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                                        : "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10"
                                        }`}
                                >
                                    {announcement.status}
                                </span>
                            </td>
                            <td className="whitespace-nowrap py-4 pr-6 text-right">
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => onView(announcement)}
                                        className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
                                        title="View Details"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => onEdit(announcement)}
                                        className="rounded-lg p-2 text-green-600 transition-colors hover:bg-green-50"
                                        title="Edit Announcement"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(announcement)}
                                        className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
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
