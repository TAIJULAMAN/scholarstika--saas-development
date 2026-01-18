"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Mail, Phone, Users, UserCheck, AlertCircle, MessageSquare } from "lucide-react"

const students = [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "+1234567890", class: "Grade 10-A", status: "Present", avatar: "https://avatar.iran.liara.run/public/1" },
    { id: 2, name: "Emma Johnson", email: "emma@example.com", phone: "+1234567891", class: "Grade 10-A", status: "Absent", avatar: "https://avatar.iran.liara.run/public/2" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", phone: "+1234567892", class: "Grade 10-B", status: "Present", avatar: "https://avatar.iran.liara.run/public/3" },
    { id: 4, name: "Sophia Davis", email: "sophia@example.com", phone: "+1234567893", class: "Grade 10-B", status: "Present", avatar: "https://avatar.iran.liara.run/public/4" },
    { id: 5, name: "William Wilson", email: "william@example.com", phone: "+1234567894", class: "Grade 11-A", status: "Late", avatar: "https://avatar.iran.liara.run/public/5" },
    { id: 6, name: "Olivia Martinez", email: "olivia@example.com", phone: "+1234567895", class: "Grade 11-A", status: "Present", avatar: "https://avatar.iran.liara.run/public/6" },
]

const stats = [
    {
        label: "Total Students",
        value: "142",
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        label: "Present Today",
        value: "138",
        icon: UserCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        label: "At Risk",
        value: "4",
        icon: AlertCircle,
        color: "text-red-600",
        bg: "bg-red-50",
    },
]

export default function TeacherStudentsPage() {
    const [classFilter, setClassFilter] = useState("all")

    const filteredStudents = classFilter === "all"
        ? students
        : students.filter(s => s.class === classFilter)

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">My Students</h1>
                <p className="mt-1 text-emerald-50 opacity-90">View and manage students in your classes</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex text-emerald-500 items-center gap-4 rounded-xl p-6 shadow-sm ring-1 ring-gray-100">
                            <div className={`rounded-lg p-3 bg-emerald-50`}>
                                <Icon className={`h-6 w-6`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Student Directory</h2>
                    <Select value={classFilter} onValueChange={setClassFilter}>
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Filter by class" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Classes</SelectItem>
                            <SelectItem value="Grade 10-A">Grade 10-A</SelectItem>
                            <SelectItem value="Grade 10-B">Grade 10-B</SelectItem>
                            <SelectItem value="Grade 11-A">Grade 11-A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <th className="px-6 py-4">Student</th>
                                <th className="px-6 py-4">Class</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="group transition-colors hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border border-gray-100">
                                                <AvatarImage src={student.avatar} />
                                                <AvatarFallback className="bg-emerald-100 text-emerald-600">
                                                    {student.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{student.name}</p>
                                                <p className="text-xs text-gray-500">{student.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                            {student.class}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${student.status === "Present" ? "bg-green-100 text-green-700" :
                                            student.status === "Absent" ? "bg-red-100 text-red-700" :
                                                "bg-yellow-100 text-yellow-700"
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-3 w-3" />
                                            {student.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600" title="Message">
                                                <MessageSquare className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-2 text-emerald-600 hover:bg-emerald-50" title="View Profile">
                                                <Eye className="h-4 w-4" />
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
