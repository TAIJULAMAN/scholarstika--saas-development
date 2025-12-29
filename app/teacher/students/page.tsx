"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PageHeader } from "@/components/common/page-header"
import { Eye, Mail, Phone } from "lucide-react"

const students = [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "+1234567890", class: "Grade 10-A", avatar: "https://avatar.iran.liara.run/public/1" },
    { id: 2, name: "Emma Johnson", email: "emma@example.com", phone: "+1234567891", class: "Grade 10-A", avatar: "https://avatar.iran.liara.run/public/2" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", phone: "+1234567892", class: "Grade 10-B", avatar: "https://avatar.iran.liara.run/public/3" },
    { id: 4, name: "Sophia Davis", email: "sophia@example.com", phone: "+1234567893", class: "Grade 10-B", avatar: "https://avatar.iran.liara.run/public/4" },
    { id: 5, name: "William Wilson", email: "william@example.com", phone: "+1234567894", class: "Grade 11-A", avatar: "https://avatar.iran.liara.run/public/5" },
]

export default function TeacherStudentsPage() {
    const [classFilter, setClassFilter] = useState("all")

    const filteredStudents = classFilter === "all"
        ? students
        : students.filter(s => s.class === classFilter)

    return (
        <div className="space-y-6">
            <PageHeader
                title="My Students"
                description="View and manage students in your classes"
            />

            <div className="flex justify-end">
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

            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Class</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Contact</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={student.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                                    {student.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{student.name}</p>
                                                <p className="text-sm text-gray-600">{student.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm text-gray-700">{student.class}</td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Phone className="h-4 w-4" />
                                            {student.phone}
                                        </div>
                                    </td>
                                    <td className="py-4 pr-6 text-right">
                                        <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50" title="View Details">
                                            <Eye className="h-4 w-4" />
                                        </button>
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
