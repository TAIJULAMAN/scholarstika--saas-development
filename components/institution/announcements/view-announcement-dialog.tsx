"use client"

import { X } from "lucide-react"
import type { Announcement } from "@/data/announcements"

interface ViewAnnouncementDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    announcement: Announcement
}

export function ViewAnnouncementDialog({ open, onOpenChange, announcement }: ViewAnnouncementDialogProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Announcement Details</h2>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Title */}
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">{announcement.title}</h3>
                        <p className="text-sm text-gray-600">{announcement.description}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Created Date</p>
                            <p className="mt-1 text-sm text-gray-900">{announcement.date}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Assigned Branches</p>
                            <p className="mt-1 text-sm text-gray-900">{announcement.branches}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Status</p>
                            <p className="mt-1">
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${announcement.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {announcement.status}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
