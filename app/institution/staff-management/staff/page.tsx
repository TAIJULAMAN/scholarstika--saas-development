"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserCheck, Users, UserPlus, Search, Plus, Edit, Eye, Trash2 } from "lucide-react"

const summaryStats = [
    {
        icon: Users,
        label: "Total Staff",
        value: "68",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: UserCheck,
        label: "Active",
        value: "65",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: UserPlus,
        label: "New This Month",
        value: "3",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const staffMembers = [
    {
        id: 1,
        name: "John Smith",
        avatar: "/avatars/john.jpg",
        employeeId: "EMP-001",
        email: "john.smith@school.com",
        phone: "+1 234-567-8901",
        role: "Administrator",
        department: "Administration",
        joinDate: "2020-01-15",
        status: "Active",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        employeeId: "EMP-015",
        email: "sarah.j@school.com",
        phone: "+1 234-567-8902",
        role: "Teacher",
        department: "Teaching",
        joinDate: "2021-03-20",
        status: "Active",
    },
    {
        id: 3,
        name: "Michael Brown",
        avatar: "/avatars/michael.jpg",
        employeeId: "EMP-042",
        email: "michael.b@school.com",
        phone: "+1 234-567-8903",
        role: "Teacher",
        department: "IT Support",
        joinDate: "2022-06-10",
        status: "Active",
    },
    {
        id: 4,
        name: "Emily Davis",
        avatar: "/avatars/emily.jpg",
        employeeId: "EMP-028",
        email: "emily.d@school.com",
        phone: "+1 234-567-8904",
        role: "Accountant",
        department: "Finance",
        joinDate: "2021-09-05",
        status: "Active",
    },
]

export default function StaffPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [departmentFilter, setDepartmentFilter] = useState("all")
    const [roleFilter, setRoleFilter] = useState("all")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-700"
            case "Inactive":
                return "bg-red-100 text-red-700"
            case "On Leave":
                return "bg-orange-100 text-orange-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Staff Directory</h1>
                    <p className="text-sm text-gray-600">Manage and view all staff members</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Staff
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Add New Staff Member</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>First Name</Label>
                                    <Input placeholder="John" />
                                </div>
                                <div>
                                    <Label>Last Name</Label>
                                    <Input placeholder="Smith" />
                                </div>
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input type="email" placeholder="john.smith@school.com" />
                            </div>
                            <div>
                                <Label>Phone</Label>
                                <Input placeholder="+1 234-567-8901" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Role</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="administrator">Administrator</SelectItem>
                                            <SelectItem value="principal">Principal</SelectItem>
                                            <SelectItem value="teacher">Teacher</SelectItem>
                                            <SelectItem value="accountant">Accountant</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Department</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select department" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="administration">Administration</SelectItem>
                                            <SelectItem value="teaching">Teaching</SelectItem>
                                            <SelectItem value="it">IT Support</SelectItem>
                                            <SelectItem value="finance">Finance</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label>Join Date</Label>
                                <Input type="date" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Staff Member</Button>
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

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                        <SelectItem value="teaching">Teaching</SelectItem>
                        <SelectItem value="it">IT Support</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Roles" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="administrator">Administrator</SelectItem>
                        <SelectItem value="principal">Principal</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="accountant">Accountant</SelectItem>
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

            {/* Staff Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Staff Members</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Staff Member</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employee ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Contact</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {staffMembers.map((staff) => (
                                <tr key={staff.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={staff.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                                    {staff.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <p className="font-medium text-gray-900">{staff.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{staff.employeeId}</td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-900">{staff.email}</p>
                                        <p className="text-xs text-gray-600">{staff.phone}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{staff.role}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{staff.department}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{staff.joinDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(staff.status)}`}>
                                            {staff.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                                                <Trash2 className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 4 of 68 results</p>
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
