"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageHeader } from "@/components/common/page-header"
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

const activeTemplate = {
    id: 1,
    name: "Standard Student ID Card",
    type: "Standard",
    description: "Default student identification card with photo and basic info",
    size: "CR80 (85.6 × 53.98 mm)",
    orientation: "Portrait",
    issued: 1247,
    status: "Active",
}

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
                <PageHeader
                    title="Student ID Card Management"
                    description="Design templates and generate student identification cards"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Printer className="mr-2 h-4 w-4" />
                    Bulk Print
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

            {/* Active ID Card Template */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Active ID Card Template</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Edit className="mr-2 h-3 w-3" />
                                Edit Template
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Student ID Card Template</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div>
                                    <Label>Template Name</Label>
                                    <Input placeholder="e.g., Standard Student ID Card" defaultValue={activeTemplate.name} />
                                </div>
                                <div>
                                    <Label>Card Type</Label>
                                    <Select defaultValue="standard">
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
                                    <Select defaultValue="yes">
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
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Update Template</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="group rounded-lg border p-6 hover:shadow-md transition-shadow">
                    {/* Card Preview */}
                    <div className="mb-4 h-56 rounded-lg bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 border-2 border-dashed border-emerald-200 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                        <BadgeCheck className="h-24 w-24 text-emerald-300 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="space-y-3">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">{activeTemplate.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{activeTemplate.description}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                {activeTemplate.type}
                            </span>
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(activeTemplate.status)}`}>
                                {activeTemplate.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 pt-2">
                            <div>
                                <span className="font-medium">Size:</span> {activeTemplate.size}
                            </div>
                            <div>
                                <span className="font-medium">Orientation:</span> {activeTemplate.orientation}
                            </div>
                            <div>
                                <span className="font-medium">Issued:</span> {activeTemplate.issued}
                            </div>
                        </div>

                        <div className="flex gap-2 pt-3">
                            <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
                                <Eye className="mr-1 h-3 w-3" />
                                Preview
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200">
                                <Edit className="mr-1 h-3 w-3" />
                                Customize
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Student ID Cards List */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Issued Student ID Cards</h2>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student Name</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Student ID</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Roll No</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Blood Group</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Valid Until</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentIdCards.map((card) => (
                                <tr key={card.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <p className="font-medium text-gray-900">{card.studentName}</p>
                                    </td>
                                    <td className="py-4 text-sm text-gray-700">{card.studentId}</td>
                                    <td className="py-4 text-sm text-gray-700">{card.grade}</td>
                                    <td className="py-4 text-sm text-gray-700">{card.rollNo}</td>
                                    <td className="py-4 text-sm font-semibold text-red-600">{card.bloodGroup}</td>
                                    <td className="py-4 text-sm text-gray-700">{card.validUntil}</td>
                                    <td className="py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(card.status)}`}>
                                            {card.status}
                                        </span>
                                    </td>
                                    <td className="py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
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
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing 1 to 3 of 1,247 results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button size="sm" style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="text-white hover:bg-emerald-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
