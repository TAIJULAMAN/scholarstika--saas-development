"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Users, UserCheck, Clock, Building2, Search } from "lucide-react"

const summaryStats = [
    {
        icon: Users,
        label: "Total Students",
        value: "12,847",
        change: "8.5% from last month",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: UserCheck,
        label: "Active Students",
        value: "11,963",
        subtext: "93.1% of total",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Clock,
        label: "Pending Admissions",
        value: "284",
        subtext: "Awaiting approval",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
    },
    {
        icon: Building2,
        label: "Total Branches",
        value: "24",
        subtext: "Across 8 countries",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
]

const branches = [
    {
        name: "Downtown Campus",
        location: "New York, USA",
        status: "Active",
        totalStudents: 1847,
        activeStudents: 1792,
        pending: 55,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Riverside Academy",
        location: "London, UK",
        status: "Active",
        totalStudents: 1523,
        activeStudents: 1489,
        pending: 34,
        enrollmentRate: 98,
        color: "purple",
    },
    {
        name: "Maple Leaf Institute",
        location: "New York, USA",
        status: "Active",
        totalStudents: 1294,
        activeStudents: 1256,
        pending: 55,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Sydney Harbor School",
        location: "Sydney, Australia",
        status: "Active",
        totalStudents: 987,
        activeStudents: 954,
        pending: 33,
        enrollmentRate: 97,
        color: "purple",
    },
    {
        name: "Pacific Heights",
        location: "San Francisco, USA",
        status: "Active",
        totalStudents: 1634,
        activeStudents: 1547,
        pending: 87,
        enrollmentRate: 95,
        color: "purple",
    },
    {
        name: "Berlin International",
        location: "Berlin, Germany",
        status: "Active",
        totalStudents: 1156,
        activeStudents: 1125,
        pending: 31,
        enrollmentRate: 97,
        color: "purple",
    },
]

export default function StudentsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [countryFilter, setCountryFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [sortBy, setSortBy] = useState("total")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Students Summary Across Branches</h1>
                <p className="text-sm text-gray-600">Overview of student enrollment and management across all branches</p>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-1 text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="mt-1 text-xs text-green-600">{stat.change || stat.subtext}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search branches..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
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
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="total">Total Students</SelectItem>
                            <SelectItem value="active">Active Students</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="rate">Enrollment Rate</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Branch Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {branches.map((branch) => (
                    <div key={branch.name} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900">{branch.name}</h3>
                                <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                                    <span className="text-gray-400">📍</span>
                                    {branch.location}
                                </p>
                            </div>
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                {branch.status}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Total Students</span>
                                <span className="text-lg font-bold text-gray-900">{branch.totalStudents.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Active Students</span>
                                <span className="text-lg font-bold text-green-600">{branch.activeStudents.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Pending</span>
                                <span className="text-lg font-bold text-yellow-600">{branch.pending}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="mb-2 flex items-center justify-between text-sm">
                                <span className="text-gray-600">{branch.enrollmentRate}% Enrollment Rate</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600"
                                    style={{ width: `${branch.enrollmentRate}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Enrollment Trends */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">Enrollment Trends</h3>
                    <div className="relative h-64">
                        {/* Simple line chart representation */}
                        <div className="flex h-full items-end justify-around gap-2">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
                                <div key={month} className="flex flex-1 flex-col items-center gap-2">
                                    <div className="relative w-full">
                                        <div
                                            className="w-full rounded-t bg-green-500"
                                            style={{ height: `${120 + index * 20}px` }}
                                        ></div>
                                        <div
                                            className="absolute bottom-0 w-full rounded-t bg-yellow-400"
                                            style={{ height: `${20 + index * 5}px` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-600">{month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-600">Active Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                            <span className="text-gray-600">Pending Admissions</span>
                        </div>
                    </div>
                </div>

                {/* Student Demographics */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">Student Demographics</h3>
                    <div className="flex items-center justify-center">
                        <div className="relative h-64 w-64">
                            {/* Pie chart representation */}
                            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#8B5CF6"
                                    strokeWidth="20"
                                    strokeDasharray="88 251"
                                    strokeDashoffset="0"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="20"
                                    strokeDasharray="126 251"
                                    strokeDashoffset="-88"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#FBBF24"
                                    strokeWidth="20"
                                    strokeDasharray="37 251"
                                    strokeDashoffset="-214"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">12,847</p>
                                    <p className="text-sm text-gray-600">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                                <span className="text-gray-600">Ages 5-12</span>
                            </div>
                            <p className="mt-1 font-semibold text-gray-900">43.8%</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span className="text-gray-600">Ages 13-18</span>
                            </div>
                            <p className="mt-1 font-semibold text-gray-900">40.6%</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                <span className="text-gray-600">Ages 18+</span>
                            </div>
                            <p className="mt-1 font-semibold text-gray-900">15.4%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overall Enrollment Progress */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Overall Enrollment Progress</h3>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">11,963 enrolled</span> (85.4%)
                    </p>
                </div>
                <div className="mb-2 text-sm text-gray-600">Total Capacity: 14,000 students</div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
                        style={{ width: "85.4%" }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
