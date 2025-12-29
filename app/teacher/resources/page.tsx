"use client"

import { FileText, Play, Link as LinkIcon, Download, Eye, Pencil, Trash2, Plus, File } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const materials = [
    {
        id: 1,
        name: "Introduction to Algorithms",
        type: "PDF",
        uploaded: "Jan 15, 2024",
        size: "2.4 MB",
        icon: FileText,
        iconColor: "text-red-600",
        bgColor: "bg-red-50",
        typeBadge: "bg-red-100 text-red-700"
    },
    {
        id: 2,
        name: "Data Structures Lecture Notes",
        type: "DOCX",
        uploaded: "Jan 12, 2024",
        size: "1.8 MB",
        icon: FileText,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
        typeBadge: "bg-blue-100 text-blue-700"
    },
    {
        id: 3,
        name: "Programming Tutorial Video",
        type: "MP4",
        uploaded: "Jan 10, 2024",
        size: "45.2 MB",
        icon: Play,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-50",
        typeBadge: "bg-purple-100 text-purple-700"
    },
    {
        id: 4,
        name: "Assignment Guidelines",
        type: "PDF",
        uploaded: "Jan 08, 2024",
        size: "856 KB",
        icon: FileText,
        iconColor: "text-red-600",
        bgColor: "bg-red-50",
        typeBadge: "bg-red-100 text-red-700"
    },
    {
        id: 5,
        name: "Online Coding Platform",
        type: "Link",
        uploaded: "Jan 05, 2024",
        size: "-",
        icon: LinkIcon,
        iconColor: "text-emerald-600",
        bgColor: "bg-emerald-50",
        typeBadge: "bg-emerald-100 text-emerald-700"
    },
    {
        id: 6,
        name: "Exam Preparation Guide",
        type: "DOCX",
        uploaded: "Jan 03, 2024",
        size: "3.1 MB",
        icon: FileText,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
        typeBadge: "bg-blue-100 text-blue-700"
    },
]

const stats = [
    {
        label: "PDF Documents",
        value: "24",
        icon: FileText,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
    {
        label: "Word Documents",
        value: "12",
        icon: File,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    {
        label: "Video Files",
        value: "8",
        icon: Play,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100"
    },
    {
        label: "External Links",
        value: "15",
        icon: LinkIcon,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
]

export default function TeacherResourcesPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Materials Management</h1>
                <p className="mt-1 text-emerald-50 opacity-90">Manage and organize course materials, documents, and resources</p>
            </div>

            {/* Selection Controls */}
            <div className="grid gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Course</label>
                    <Select defaultValue="cs101">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cs101">Computer Science 101</SelectItem>
                            <SelectItem value="math101">Mathematics 101</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Section</label>
                    <Select defaultValue="secA">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Section" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="secA">Section A</SelectItem>
                            <SelectItem value="secB">Section B</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                            <div className={`rounded-lg p-3 ${stat.bg}`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Materials Table */}
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center justify-between border-b border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-900">Course Materials</h2>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Material
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <th className="px-6 py-4">Material Name</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Date Uploaded</th>
                                <th className="px-6 py-4">Size</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {materials.map((material) => (
                                <tr key={material.id} className="group transition-colors hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-purple-700 hover:underline cursor-pointer">
                                            {material.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`rounded p-1 ${material.bgColor}`}>
                                                <material.icon className={`h-4 w-4 ${material.iconColor}`} />
                                            </div>
                                            <span className={`rounded px-2 py-0.5 text-xs font-semibold uppercase ${material.typeBadge}`}>
                                                {material.type}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{material.uploaded}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{material.size}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded p-2 text-blue-500 hover:bg-blue-50" title="View">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-2 text-emerald-600 hover:bg-emerald-50" title="Edit">
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-2 text-red-500 hover:bg-red-50" title="Delete">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Simplified) */}
                <div className="flex justify-end border-t border-gray-100 p-4">
                    <div className="flex gap-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-500">
                            <span className="sr-only">Previous</span>
                            &lt;
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded bg-purple-600 text-white shadow-sm">
                            1
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-600">
                            2
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-600">
                            3
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 hover:bg-gray-50 text-gray-500">
                            <span className="sr-only">Next</span>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
