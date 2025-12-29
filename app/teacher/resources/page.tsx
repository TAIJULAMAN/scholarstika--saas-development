"use client"

import { PageHeader } from "@/components/common/page-header"
import { Button } from "@/components/ui/button"
import { Upload, FileText, Download, Trash2 } from "lucide-react"

const resources = [
    { id: 1, name: "Algebra Chapter 5 Notes.pdf", subject: "Algebra", size: "2.4 MB", uploadedDate: "2024-01-10" },
    { id: 2, name: "Geometry Practice Problems.docx", subject: "Geometry", size: "1.8 MB", uploadedDate: "2024-01-08" },
    { id: 3, name: "Calculus Formula Sheet.pdf", subject: "Calculus", size: "856 KB", uploadedDate: "2024-01-05" },
    { id: 4, name: "Statistics Project Guidelines.pdf", subject: "Statistics", size: "1.2 MB", uploadedDate: "2024-01-03" },
]

export default function TeacherResourcesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <PageHeader
                    title="Teaching Resources"
                    description="Upload and manage your teaching materials"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Resource
                </Button>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">My Resources</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">File Name</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Subject</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Size</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Uploaded</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resources.map((resource) => (
                                <tr key={resource.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-lg bg-blue-50 p-2">
                                                <FileText className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <span className="font-medium text-gray-900">{resource.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm text-gray-700">{resource.subject}</td>
                                    <td className="py-4 text-sm text-gray-700">{resource.size}</td>
                                    <td className="py-4 text-sm text-gray-700">{new Date(resource.uploadedDate).toLocaleDateString()}</td>
                                    <td className="py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50" title="Download">
                                                <Download className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Delete">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
