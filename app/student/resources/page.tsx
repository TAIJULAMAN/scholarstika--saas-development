"use client"

import { FolderOpen, FileText, Video, Download } from "lucide-react"

const resources = [
    {
        title: "Mathematics Formula Sheet",
        subject: "Mathematics",
        type: "PDF",
        size: "1.2 MB",
        date: "Dec 01, 2024",
        icon: FileText,
        color: "text-red-500 bg-red-50"
    },
    {
        title: "Physics Lecture: Newton's Laws",
        subject: "Physics",
        type: "Video",
        size: "450 MB",
        date: "Nov 28, 2024",
        icon: Video,
        color: "text-blue-500 bg-blue-50"
    },
    {
        title: "Chemistry Lab Safety Guidelines",
        subject: "Chemistry",
        type: "PDF",
        size: "800 KB",
        date: "Sep 15, 2024",
        icon: FileText,
        color: "text-red-500 bg-red-50"
    },
    {
        title: "Shakespeare's Works Archive",
        subject: "English",
        type: "Link",
        size: "N/A",
        date: "Oct 10, 2024",
        icon: Download,
    },
    {
        title: "Programming Basics 101",
        subject: "Computer Science",
        type: "ZIP",
        size: "15 MB",
        date: "Nov 05, 2024",
        icon: FolderOpen,
        color: "text-yellow-500 bg-yellow-50"
    }
]

export default function StudentResourcesPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Learning Materials</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Access text books, notes, and recorded lectures</p>
                    </div>
                </div>
            </div>

            {/* Tables / List */}
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <div className="border-b border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-900">Uploaded Resources</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">File Name</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Subject</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Date Added</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {resources.map((file, index) => {
                                const Icon = file.icon
                                return (
                                    <tr key={index} className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`rounded-lg p-2 text-emerald-500 bg-emerald-50`}>
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{file.title}</p>
                                                    <p className="text-xs text-gray-500">{file.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                                {file.subject}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{file.type}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{file.date}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="rounded-lg p-2 text-emerald-500 bg-emerald-50">
                                                <Download className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
