"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, Download, FileSpreadsheet, CheckCircle, AlertCircle, FileText } from "lucide-react"

const summaryStats = [
    {
        icon: Upload,
        label: "Total Uploads",
        value: "12",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: CheckCircle,
        label: "Successful",
        value: "10",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: AlertCircle,
        label: "Failed",
        value: "2",
        color: "text-red-600",
        bgColor: "bg-red-50",
    },
]

const uploadHistory = [
    {
        id: 1,
        fileName: "staff_data_jan_2024.xlsx",
        uploadDate: "2024-01-15 10:30 AM",
        recordsProcessed: 45,
        recordsSuccess: 45,
        recordsFailed: 0,
        status: "Success",
    },
    {
        id: 2,
        fileName: "new_staff_feb_2024.csv",
        uploadDate: "2024-02-10 02:15 PM",
        recordsProcessed: 12,
        recordsSuccess: 12,
        recordsFailed: 0,
        status: "Success",
    },
    {
        id: 3,
        fileName: "staff_update_mar_2024.xlsx",
        uploadDate: "2024-03-05 09:45 AM",
        recordsProcessed: 8,
        recordsSuccess: 6,
        recordsFailed: 2,
        status: "Partial",
    },
]

export default function BulkUploadPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const files = e.dataTransfer.files
        if (files.length > 0) {
            setSelectedFile(files[0])
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            setSelectedFile(files[0])
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "bg-green-100 text-green-700"
            case "Partial":
                return "bg-orange-100 text-orange-700"
            case "Failed":
                return "bg-red-100 text-red-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Bulk Upload Staff Data</h1>
                    <p className="text-sm text-gray-600">Import multiple staff records using CSV or Excel files</p>
                </div>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Upload Section */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Upload File</h2>

                {/* Instructions */}
                <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Upload Instructions:</h3>
                    <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                        <li>Download the template file to ensure correct format</li>
                        <li>Supported formats: CSV, XLSX, XLS</li>
                        <li>Maximum file size: 10MB</li>
                        <li>Required fields: Name, Email, Role, Department</li>
                        <li>Optional fields: Phone, Join Date, Address</li>
                    </ul>
                </div>

                {/* Drag and Drop Area */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${isDragging
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-300 bg-gray-50"
                        }`}
                >
                    <FileSpreadsheet className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {selectedFile ? selectedFile.name : "Drag and drop your file here"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">or</p>
                    <label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer" asChild>
                            <span>
                                <Upload className="mr-2 h-4 w-4" />
                                Browse Files
                            </span>
                        </Button>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                    <p className="text-xs text-gray-500 mt-4">
                        Supported formats: CSV, XLSX, XLS (Max 10MB)
                    </p>
                </div>

                {/* Upload Button */}
                {selectedFile && (
                    <div className="mt-6 flex items-center justify-between p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                            <FileText className="h-8 w-8 text-blue-600" />
                            <div>
                                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                                <p className="text-sm text-gray-600">
                                    {(selectedFile.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setSelectedFile(null)}
                            >
                                Cancel
                            </Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload & Process
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Upload History */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Upload History</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">File Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Upload Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Records</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Success</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Failed</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {uploadHistory.map((upload) => (
                                <tr key={upload.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <FileSpreadsheet className="h-5 w-5 text-green-600" />
                                            <p className="font-medium text-gray-900">{upload.fileName}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{upload.uploadDate}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{upload.recordsProcessed}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{upload.recordsSuccess}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-red-600">{upload.recordsFailed}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(upload.status)}`}>
                                            {upload.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button variant="outline" size="sm">
                                            <Download className="mr-1 h-3 w-3" />
                                            Report
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Data Mapping Guide */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Data Mapping Guide</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Column Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Required</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Format</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Example</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">first_name</td>
                                <td className="px-6 py-3 text-sm text-green-600 font-semibold">Yes</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Text</td>
                                <td className="px-6 py-3 text-sm text-gray-600">John</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">last_name</td>
                                <td className="px-6 py-3 text-sm text-green-600 font-semibold">Yes</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Text</td>
                                <td className="px-6 py-3 text-sm text-gray-600">Smith</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">email</td>
                                <td className="px-6 py-3 text-sm text-green-600 font-semibold">Yes</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Email</td>
                                <td className="px-6 py-3 text-sm text-gray-600">john.smith@school.com</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">phone</td>
                                <td className="px-6 py-3 text-sm text-gray-600">No</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Phone</td>
                                <td className="px-6 py-3 text-sm text-gray-600">+1 234-567-8901</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">role</td>
                                <td className="px-6 py-3 text-sm text-green-600 font-semibold">Yes</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Text</td>
                                <td className="px-6 py-3 text-sm text-gray-600">Teacher</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">department</td>
                                <td className="px-6 py-3 text-sm text-green-600 font-semibold">Yes</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Text</td>
                                <td className="px-6 py-3 text-sm text-gray-600">Teaching</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-sm font-medium text-gray-900">join_date</td>
                                <td className="px-6 py-3 text-sm text-gray-600">No</td>
                                <td className="px-6 py-3 text-sm text-gray-700">Date (YYYY-MM-DD)</td>
                                <td className="px-6 py-3 text-sm text-gray-600">2024-01-15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
