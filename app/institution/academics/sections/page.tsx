"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { BookOpen, Users, Building2, TrendingUp, Search, Plus, Edit, Archive } from "lucide-react"

const summaryStats = [
    {
        icon: BookOpen,
        label: "Total Sections",
        value: "48",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Users,
        label: "Total Capacity",
        value: "1,920",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Building2,
        label: "Current Enrollment",
        value: "1,847",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: TrendingUp,
        label: "Available Seats",
        value: "73",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const sections = [
    {
        id: 1,
        grade: "Grade 1",
        section: "A",
        classTeacher: "Sarah Johnson",
        capacity: 40,
        enrolled: 38,
        room: "101",
        status: "Active",
    },
    {
        id: 2,
        grade: "Grade 1",
        section: "B",
        classTeacher: "Michael Chen",
        capacity: 40,
        enrolled: 40,
        room: "102",
        status: "Active",
    },
    {
        id: 3,
        grade: "Grade 2",
        section: "A",
        classTeacher: "Emily Davis",
        capacity: 40,
        enrolled: 35,
        room: "201",
        status: "Active",
    },
    {
        id: 4,
        grade: "Grade 3",
        section: "A",
        classTeacher: "James Wilson",
        capacity: 40,
        enrolled: 39,
        room: "301",
        status: "Active",
    },
    {
        id: 5,
        grade: "Grade 4",
        section: "A",
        classTeacher: "Lisa Anderson",
        capacity: 40,
        enrolled: 37,
        room: "401",
        status: "Active",
    },
    {
        id: 6,
        grade: "Grade 5",
        section: "A",
        classTeacher: "Robert Brown",
        capacity: 40,
        enrolled: 40,
        room: "501",
        status: "Active",
    },
]

export default function SectionsPage() {
    const [gradeFilter, setGradeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sections & Classes Management</h1>
                    <p className="text-sm text-gray-600">Manage school sections, class teachers, and capacity</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Section
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Section</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Grade Level</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Grade 1</SelectItem>
                                        <SelectItem value="2">Grade 2</SelectItem>
                                        <SelectItem value="3">Grade 3</SelectItem>
                                        <SelectItem value="4">Grade 4</SelectItem>
                                        <SelectItem value="5">Grade 5</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Section Name</Label>
                                <Input placeholder="e.g., A, B, C" />
                            </div>
                            <div>
                                <Label>Class Teacher</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select teacher" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Sarah Johnson</SelectItem>
                                        <SelectItem value="2">Michael Chen</SelectItem>
                                        <SelectItem value="3">Emily Davis</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Capacity</Label>
                                <Input type="number" placeholder="40" />
                            </div>
                            <div>
                                <Label>Room Number</Label>
                                <Input placeholder="e.g., 101" />
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Section</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                    <p className="mt-2 text-4xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <Select value={gradeFilter} onValueChange={setGradeFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Grades" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Grades</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search sections..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Sections Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Sections</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Section</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Class Teacher</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Room</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enrollment</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Capacity</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {sections.map((section) => (
                                <tr key={section.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{section.grade} - {section.section}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{section.classTeacher}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{section.room}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-semibold text-gray-900">{section.enrolled}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{section.capacity}</td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            {section.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-orange-600 hover:bg-orange-50">
                                                <Archive className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 6 of 48 results</p>
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
