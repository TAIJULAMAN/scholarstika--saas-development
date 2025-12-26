"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Building2, Star, Calendar, Search, Download, Eye, MessageSquare } from "lucide-react"

const summaryStats = [
    {
        icon: Users,
        label: "Total Teachers",
        value: "120",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Building2,
        label: "Active Branches",
        value: "8",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Star,
        label: "Avg Rating",
        value: "4.2",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
    },
    {
        icon: Calendar,
        label: "Attendance Rate",
        value: "92%",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
]

const teachers = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah.j@edu.com",
        avatar: "/avatars/sarah.jpg",
        branch: "Main Campus",
        subject: "Mathematics",
        students: 32,
        rating: 4.8,
    },
    {
        id: 2,
        name: "Michael Chen",
        email: "m.chen@edu.com",
        avatar: "/avatars/michael.jpg",
        branch: "North Branch",
        subject: "Science",
        students: 28,
        rating: 4.5,
    },
    {
        id: 3,
        name: "Emily Davis",
        email: "e.davis@edu.com",
        avatar: "/avatars/emily.jpg",
        branch: "South Branch",
        subject: "English",
        students: 35,
        rating: 4.7,
    },
]

export default function TeachersPage() {
    const [branchFilter, setBranchFilter] = useState("all")
    const [subjectFilter, setSubjectFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-gray-900">{rating}</span>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }`}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Teachers Summary Across All Branches</h1>
                <p className="text-sm text-gray-600">Comprehensive overview of teacher performance and distribution</p>
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
                <Select value={branchFilter} onValueChange={setBranchFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Branches" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Branches</SelectItem>
                        <SelectItem value="main">Main Campus</SelectItem>
                        <SelectItem value="north">North Branch</SelectItem>
                        <SelectItem value="south">South Branch</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Subjects</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search teachers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                </Button>
            </div>

            {/* Teachers Directory */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Teachers Directory</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Teacher</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Branch</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Students</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rating</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {teachers.map((teacher) => (
                                <tr key={teacher.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={teacher.avatar} />
                                                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                                    {teacher.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{teacher.name}</p>
                                                <p className="text-sm text-gray-600">{teacher.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{teacher.branch}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{teacher.subject}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{teacher.students}</td>
                                    <td className="px-6 py-4">{renderStars(teacher.rating)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
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
                    <p className="text-sm text-gray-600">Showing 1 to 3 of 120 results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
