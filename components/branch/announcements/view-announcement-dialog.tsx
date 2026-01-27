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
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Announcement Details</h2>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Title</h3>
                        <p className="mt-1 text-base font-semibold text-gray-900">{announcement.title}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                        <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{announcement.description}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Audience</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {announcement.audience.map((role, index) => (
                                <span key={index} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Date</h3>
                            <p className="mt-1 text-sm text-gray-900">{announcement.date}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Status</h3>
                            <span
                                className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${announcement.status === "Active"
                                    ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                                    : "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10"
                                    }`}
                            >
                                {announcement.status}
                            </span>
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
