"use client"

import { Megaphone } from "lucide-react"
import { announcements } from "@/data/announcements"

interface DashboardAnnouncementsProps {
    role: "Teacher" | "Parent" | "Student" | "Global Admin"
}

export function DashboardAnnouncements({ role }: DashboardAnnouncementsProps) {
    const roleAnnouncements = announcements
        .filter(a => a.status === "Active" && (a.audience.includes(role) || a.audience.includes("All")))
        .slice(0, 3)

    if (roleAnnouncements.length === 0) return null

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-orange-50 p-2">
                        <Megaphone className="h-5 w-5 text-orange-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Announcements</h2>
                </div>
            </div>

            <div className="space-y-4">
                {roleAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="rounded-lg border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50">
                        <div className="mb-2 flex items-start justify-between gap-4">
                            <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                            <span className="shrink-0 text-xs text-gray-500">{announcement.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{announcement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
