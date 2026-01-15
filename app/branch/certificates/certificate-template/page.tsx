"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageHeader } from "@/components/common/page-header"
import { Award, Plus, Edit, Eye, Download, Copy } from "lucide-react"

const summaryStats = [
    {
        icon: Award,
        label: "Total Templates",
        value: "8",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Copy,
        label: "Certificates Issued",
        value: "1,247",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Download,
        label: "Downloaded",
        value: "1,189",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
]

const certificateTemplates = [
    {
        id: 1,
        name: "Academic Excellence Certificate",
        type: "Achievement",
        description: "For students with outstanding academic performance",
        orientation: "Landscape",
        size: "A4",
        issued: 342,
        status: "Active",
    },
    {
        id: 2,
        name: "Sports Achievement Certificate",
        type: "Sports",
        description: "For students excelling in sports activities",
        orientation: "Landscape",
        size: "A4",
        issued: 156,
        status: "Active",
    },
    {
        id: 3,
        name: "Perfect Attendance Certificate",
        type: "Attendance",
        description: "For students with 100% attendance",
        orientation: "Portrait",
        size: "A4",
        issued: 234,
        status: "Active",
    },
    {
        id: 4,
        name: "Graduation Certificate",
        type: "Graduation",
        description: "For students completing their grade level",
        orientation: "Landscape",
        size: "A4",
        issued: 515,
        status: "Active",
    },
]

export default function CertificateTemplatePage() {
    const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-700"
            case "Draft":
                return "bg-gray-100 text-gray-700"
            case "Archived":
                return "bg-red-100 text-red-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-end">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Template
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Create Certificate Template</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Template Name</Label>
                                <Input placeholder="e.g., Academic Excellence Certificate" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Certificate Type</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="achievement">Achievement</SelectItem>
                                            <SelectItem value="sports">Sports</SelectItem>
                                            <SelectItem value="attendance">Attendance</SelectItem>
                                            <SelectItem value="graduation">Graduation</SelectItem>
                                            <SelectItem value="participation">Participation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Orientation</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select orientation" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="landscape">Landscape</SelectItem>
                                            <SelectItem value="portrait">Portrait</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Textarea placeholder="Brief description of this certificate..." rows={3} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Paper Size</Label>
                                    <Select defaultValue="a4">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a4">A4</SelectItem>
                                            <SelectItem value="letter">Letter</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Border Style</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select border" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="classic">Classic</SelectItem>
                                            <SelectItem value="modern">Modern</SelectItem>
                                            <SelectItem value="elegant">Elegant</SelectItem>
                                            <SelectItem value="none">No Border</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label>Certificate Text</Label>
                                <Textarea
                                    placeholder="This is to certify that {student_name} has achieved..."
                                    rows={4}
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Use placeholders: {"{student_name}"}, {"{grade}"}, {"{date}"}, {"{achievement}"}
                                </p>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Template</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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

            {/* Templates Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certificateTemplates.map((template) => (
                    <div key={template.id} className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-200">
                        {/* Template Preview */}
                        <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 border-2 border-dashed border-emerald-200 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                            <Award className="h-16 w-16 text-emerald-300 group-hover:text-emerald-400 transition-colors" />
                        </div>

                        {/* Template Info */}
                        <div className="space-y-3">
                            <div>
                                <h3 className="font-bold text-gray-900">{template.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {template.type}
                                </span>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(template.status)}`}>
                                    {template.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                <div>
                                    <span className="font-medium">Size:</span> {template.size}
                                </div>
                                <div>
                                    <span className="font-medium">Issued:</span> {template.issued}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
                                    <Eye className="mr-1 h-3 w-3" />
                                    Preview
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200">
                                    <Edit className="mr-1 h-3 w-3" />
                                    Edit
                                </Button>
                                <Button variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-600 hover:border-green-200">
                                    <Download className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Template Details Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">All Certificate Templates</h2>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[250px]">Template Name</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Type</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Orientation</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">Size</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">Issued</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">Status</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificateTemplates.map((template) => (
                                <tr key={template.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-6">
                                        <p className="font-medium text-gray-900">{template.name}</p>
                                        <p className="text-xs text-gray-500">{template.description}</p>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{template.type}</td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{template.orientation}</td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-700">{template.size}</td>
                                    <td className="whitespace-nowrap py-4 text-sm font-semibold text-blue-600">{template.issued}</td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(template.status)}`}>
                                            {template.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <Edit className="h-4 w-4" />
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
            </div>
        </div>
    )
}
