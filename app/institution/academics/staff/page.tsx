"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Users2, UserCheck, Clock, Building2, Search, Plus, Edit, MessageSquare } from "lucide-react"

const summaryStats = [
    {
        icon: Users2,
        label: "Total Staff",
        value: "68",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
    },
    {
        icon: Building2,
        label: "Departments",
        value: "8",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: UserCheck,
        label: "Active Staff",
        value: "65",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Clock,
        label: "On Leave",
        value: "3",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const staff = [
    {
        id: 1,
        name: "David Martinez",
        email: "d.martinez@edu.com",
        avatar: "/avatars/david.jpg",
        department: "Administration",
        role: "Administrative Officer",
        employmentType: "Full-time",
        joinDate: "2020-03-15",
        status: "Active",
    },
    {
        id: 2,
        name: "Jennifer Lee",
        email: "j.lee@edu.com",
        avatar: "/avatars/jennifer.jpg",
        department: "IT Support",
        role: "IT Technician",
        employmentType: "Full-time",
        joinDate: "2021-06-01",
        status: "Active",
    },
    {
        id: 3,
        name: "Carlos Rodriguez",
        email: "c.rodriguez@edu.com",
        avatar: "/avatars/carlos.jpg",
        department: "Maintenance",
        role: "Facilities Manager",
        employmentType: "Full-time",
        joinDate: "2019-09-10",
        status: "Active",
    },
    {
        id: 4,
        name: "Maria Garcia",
        email: "m.garcia@edu.com",
        avatar: "/avatars/maria.jpg",
        department: "Library",
        role: "Librarian",
        employmentType: "Full-time",
        joinDate: "2020-11-20",
        status: "Active",
    },
    {
        id: 5,
        name: "Ahmed Hassan",
        email: "a.hassan@edu.com",
        avatar: "/avatars/ahmed.jpg",
        department: "Security",
        role: "Security Officer",
        employmentType: "Full-time",
        joinDate: "2021-01-05",
        status: "Active",
    },
    {
        id: 6,
        name: "Sophie Turner",
        email: "s.turner@edu.com",
        avatar: "/avatars/sophie.jpg",
        department: "Health Services",
        role: "School Nurse",
        employmentType: "Part-time",
        joinDate: "2022-02-14",
        status: "Active",
    },
]

export default function StaffPage() {
    const [departmentFilter, setDepartmentFilter] = useState("all")
    const [employmentFilter, setEmploymentFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
                    <p className="text-sm text-gray-600">Manage non-teaching staff and support personnel</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Staff
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Staff Member</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Full Name</Label>
                                <Input placeholder="Enter full name" />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input type="email" placeholder="email@example.com" />
                            </div>
                            <div>
                                <Label>Department</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Administration</SelectItem>
                                        <SelectItem value="it">IT Support</SelectItem>
                                        <SelectItem value="maintenance">Maintenance</SelectItem>
                                        <SelectItem value="library">Library</SelectItem>
                                        <SelectItem value="security">Security</SelectItem>
                                        <SelectItem value="health">Health Services</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Role/Position</Label>
                                <Input placeholder="e.g., Administrative Officer" />
                            </div>
                            <div>
                                <Label>Employment Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="full-time">Full-time</SelectItem>
                                        <SelectItem value="part-time">Part-time</SelectItem>
                                        <SelectItem value="contract">Contract</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Join Date</Label>
                                <Input type="date" />
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Staff Member</Button>
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
                        <SelectItem value="admin">Administration</SelectItem>
                        <SelectItem value="it">IT Support</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="library">Library</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="health">Health Services</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={employmentFilter} onValueChange={setEmploymentFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Employment Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search staff..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Staff Directory */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Staff Directory</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Staff Member</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employment Type</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {staff.map((member) => (
                                <tr key={member.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={member.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{member.name}</p>
                                                <p className="text-sm text-gray-600">{member.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{member.department}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{member.role}</td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {member.employmentType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {new Date(member.joinDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <MessageSquare className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 6 of 68 results</p>
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
