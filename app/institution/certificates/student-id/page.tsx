"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BadgeCheck, Plus, Edit, Eye, Download, Printer } from "lucide-react"

const summaryStats = [
    {
        icon: BadgeCheck,
        label: "Total ID Cards",
        value: "1,247",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Printer,
        label: "Printed",
        value: "1,189",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Download,
        label: "Downloaded",
        value: "1,205",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const idCardTemplates = [
    {
        id: 1,
        name: "Standard Student ID Card",
        type: "Standard",
        description: "Default student identification card with photo and basic info",
        size: "CR80 (85.6 × 53.98 mm)",
        orientation: "Portrait",
        issued: 1247,
        status: "Active",
    },
    {
        id: 2,
        name: "Premium Student ID Card",
        type: "Premium",
        description: "Enhanced ID card with QR code and additional details",
        size: "CR80 (85.6 × 53.98 mm)",
        orientation: "Portrait",
        issued: 0,
        status: "Draft",
    },
]

const studentIdCards = [
    {
        id: 1,
        studentName: "Alice Johnson",
        studentId: "STU-2024-001",
        grade: "Grade 5-A",
        rollNo: "001",
        bloodGroup: "A+",
        validUntil: "2025-06-30",
        status: "Active",
    },
    {
        id: 2,
        studentName: "Bob Smith",
        studentId: "STU-2024-015",
        grade: "Grade 4-B",
        rollNo: "015",
        bloodGroup: "O+",
        validUntil: "2025-06-30",
        status: "Active",
    },
    {
        id: 3,
        studentName: "Charlie Brown",
        studentId: "STU-2024-028",
        grade: "Grade 3-A",
        rollNo: "028",
        bloodGroup: "B+",
        validUntil: "2025-06-30",
        status: "Active",
    },
]

export default function StudentIDCardPage() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-700"
            case "Expired":
                return "bg-red-100 text-red-700"
            case "Draft":
                return "bg-gray-100 text-gray-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Student ID Card Management</h1>
                    <p className="text-sm text-gray-600">Design templates and generate student identification cards</p>
                </div>
                <div className="flex gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">
                                <Plus className="mr-2 h-4 w-4" />
                                New Template
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create ID Card Template</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div>
                                    <Label>Template Name</Label>
                                    <Input placeholder="e.g., Standard Student ID Card" />
                                </div>
                                <div>
                                    <Label>Card Type</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="standard">Standard</SelectItem>
                                            <SelectItem value="premium">Premium</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Include QR Code</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Template</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Printer className="mr-2 h-4 w-4" />
                        Bulk Print
                    </Button>
                </div>
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

            {/* ID Card Templates */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">ID Card Templates</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {idCardTemplates.map((template) => (
                        <div key={template.id} className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                            {/* Card Preview */}
                            <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-dashed border-blue-200 flex items-center justify-center">
                                <BadgeCheck className="h-20 w-20 text-blue-300" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-900">{template.name}</h3>
                                <p className="text-sm text-gray-600">{template.description}</p>
                                <div className="flex gap-2">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                        {template.type}
                                    </span>
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(template.status)}`}>
                                        {template.status}
                                    </span>
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Eye className="mr-1 h-3 w-3" />
                                        Preview
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Edit className="mr-1 h-3 w-3" />
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student ID Cards List */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Issued Student ID Cards</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Roll No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Blood Group</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Valid Until</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {studentIdCards.map((card) => (
                                <tr key={card.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{card.studentName}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{card.studentId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{card.grade}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{card.rollNo}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-red-600">{card.bloodGroup}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{card.validUntil}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(card.status)}`}>
                                            {card.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <Printer className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
                                                <Download className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t p-4">
                    <p className="text-sm text-gray-600">Showing 1 to 3 of 1,247 results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
