"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Library, BookOpen, Users, Clock, Search, Plus, Edit, UserPlus } from "lucide-react"

const summaryStats = [
    {
        icon: Library,
        label: "Total Subjects",
        value: "24",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
    {
        icon: BookOpen,
        label: "Active Subjects",
        value: "22",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Users,
        label: "Departments",
        value: "6",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Clock,
        label: "Avg Hours/Week",
        value: "5.2",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const subjects = [
    {
        id: 1,
        name: "Mathematics",
        code: "MATH-101",
        department: "Mathematics",
        grades: "1-5",
        hoursPerWeek: 6,
        teachers: 8,
        status: "Active",
    },
    {
        id: 2,
        name: "English Language",
        code: "ENG-101",
        department: "Languages",
        grades: "1-5",
        hoursPerWeek: 5,
        teachers: 7,
        status: "Active",
    },
    {
        id: 3,
        name: "Science",
        code: "SCI-101",
        department: "Science",
        grades: "1-5",
        hoursPerWeek: 4,
        teachers: 6,
        status: "Active",
    },
    {
        id: 4,
        name: "Social Studies",
        code: "SOC-101",
        department: "Social Sciences",
        grades: "3-5",
        hoursPerWeek: 3,
        teachers: 4,
        status: "Active",
    },
    {
        id: 5,
        name: "Physical Education",
        code: "PE-101",
        department: "Physical Education",
        grades: "1-5",
        hoursPerWeek: 2,
        teachers: 3,
        status: "Active",
    },
    {
        id: 6,
        name: "Art & Craft",
        code: "ART-101",
        department: "Arts",
        grades: "1-5",
        hoursPerWeek: 2,
        teachers: 3,
        status: "Active",
    },
]

export default function SubjectsPage() {
    const [departmentFilter, setDepartmentFilter] = useState("all")
    const [gradeFilter, setGradeFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Subjects Management</h1>
                    <p className="text-sm text-gray-600">Manage subjects, departments, and curriculum</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Subject
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Subject</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Subject Name</Label>
                                <Input placeholder="e.g., Mathematics" />
                            </div>
                            <div>
                                <Label>Subject Code</Label>
                                <Input placeholder="e.g., MATH-101" />
                            </div>
                            <div>
                                <Label>Department</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="math">Mathematics</SelectItem>
                                        <SelectItem value="science">Science</SelectItem>
                                        <SelectItem value="languages">Languages</SelectItem>
                                        <SelectItem value="social">Social Sciences</SelectItem>
                                        <SelectItem value="arts">Arts</SelectItem>
                                        <SelectItem value="pe">Physical Education</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Grade Levels</Label>
                                <Input placeholder="e.g., 1-5 or 3,4,5" />
                            </div>
                            <div>
                                <Label>Hours Per Week</Label>
                                <Input type="number" placeholder="5" />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Textarea placeholder="Subject description..." rows={3} />
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Subject</Button>
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
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="languages">Languages</SelectItem>
                        <SelectItem value="social">Social Sciences</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="pe">Physical Education</SelectItem>
                    </SelectContent>
                </Select>

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

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search subjects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Subjects Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Subjects</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Code</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grades</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hours/Week</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Teachers</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {subjects.map((subject) => (
                                <tr key={subject.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{subject.name}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{subject.code}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{subject.department}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{subject.grades}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{subject.hoursPerWeek}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{subject.teachers}</td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            {subject.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <UserPlus className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 6 of 24 results</p>
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
