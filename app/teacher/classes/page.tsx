"use client"

import { Search, Download, Share2, Play, AlertCircle, Loader2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
const recordings = [
    {
        id: 1,
        title: "Advanced Calculus - Derivatives",
        subject: "Mathematics",
        grade: "Grade 12",
        date: "Dec 8, 2024",
        duration: "45 min",
        status: "Available",
        statusColor: "bg-emerald-100 text-emerald-700",
        videoUrl: "#",
    },
    {
        id: 2,
        title: "Quantum Physics Basics",
        subject: "Physics",
        grade: "Grade 11",
        date: "Dec 7, 2024",
        duration: "38 min",
        status: "Processing",
        statusColor: "bg-amber-100 text-amber-700",
        videoUrl: "#",
    },
    {
        id: 3,
        title: "Organic Chemistry - Reactions",
        subject: "Chemistry",
        grade: "Grade 12",
        date: "Dec 6, 2024",
        duration: "52 min",
        status: "Available",
        statusColor: "bg-emerald-100 text-emerald-700",
        videoUrl: "#",
    },
    {
        id: 4,
        title: "Cell Biology - Mitosis",
        subject: "Biology",
        grade: "Grade 10",
        date: "Dec 5, 2024",
        duration: "41 min",
        status: "Failed",
        statusColor: "bg-red-100 text-red-700",
        videoUrl: "#",
    },
    {
        id: 5,
        title: "Trigonometry Applications",
        subject: "Mathematics",
        grade: "Grade 11",
        date: "Dec 4, 2024",
        duration: "45 min",
        status: "Available",
        statusColor: "bg-emerald-100 text-emerald-700",
        videoUrl: "#",
    },
    {
        id: 6,
        title: "Electromagnetic Waves",
        subject: "Physics",
        grade: "Grade 12",
        date: "Dec 4, 2024",
        duration: "45 min",
        status: "Available",
        statusColor: "bg-emerald-100 text-emerald-700",
        videoUrl: "#",
    },
]

export default function TeacherClassesPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Recorded Classes</h1>
                <p className="mt-1 text-emerald-50 opacity-90">Access and manage your recorded class sessions</p>
            </div>

            <div className="flex justify-end items-center shadow-md rounded-xl p-5">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search recordings..."
                        className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none"
                    />
                </div>
            </div>

            {/* Recordings Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recordings.map((recording) => (
                    <div key={recording.id} className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md">
                        <div className="mb-4 flex items-start justify-between">
                            <div className="flex-1 pr-4">
                                <h3 className="line-clamp-2 font-bold text-gray-900">{recording.title}</h3>
                            </div>
                            <span className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${recording.statusColor}`}>
                                {recording.status === "Failed" ? "Recording Failed" : recording.status}
                            </span>
                        </div>

                        <div className="mb-6 space-y-2">
                            <p className="text-sm text-gray-600">{recording.subject} • {recording.grade}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">📅 {recording.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">⏱️ {recording.duration}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                            {recording.status === "Available" ? (
                                <button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                    <Play className="h-4 w-4 fill-current" />
                                    View Recording
                                </button>
                            ) : recording.status === "Processing" ? (
                                <button disabled className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Processing...
                                </button>
                            ) : (
                                <button disabled className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
                                    <AlertCircle className="h-4 w-4" />
                                    Recording Failed
                                </button>
                            )}

                            <div className="flex items-center gap-2">
                                <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600" title="Download">
                                    <Download className="h-4 w-4" />
                                </button>
                                <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600" title="Share">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-5 gap-3">
                <p className="text-sm text-gray-500">Showing 1-6 of 24 recordings</p>
                <div className="flex items-center gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 disabled:opacity-50">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-white">1</button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">3</button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">4</button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
