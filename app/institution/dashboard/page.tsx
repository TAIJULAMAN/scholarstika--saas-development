"use client"

import { Building2, Users, GraduationCap, TrendingUp, BarChart3, GitCompare, FileDown, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const stats = [
    { icon: Building2, label: "Total Branches", value: "24", change: "+12%", color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: Users, label: "Total Students", value: "12,847", change: "+8%", color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: GraduationCap, label: "Total Teachers", value: "847", change: "+5%", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: TrendingUp, label: "Avg Attendance", value: "92.4%", change: "-2%", color: "text-orange-600", bgColor: "bg-orange-50", negative: true },
]

const branches = [
    {
        name: "Downtown Campus",
        type: "Primary & Secondary",
        students: "2,847",
        teachers: "89",
        attendance: "94.2%",
        feeCollection: "87%",
        activity: "New enrollment batch started on May 15",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        name: "Westside Branch",
        type: "Primary School",
        students: "1,523",
        teachers: "89",
        attendance: "91.8%",
        feeCollection: "92%",
        activity: "Parent-teacher meeting scheduled",
        gradient: "from-pink-500 to-pink-600",
    },
    {
        name: "Northgate Academy",
        type: "Secondary School",
        students: "3,124",
        teachers: "187",
        attendance: "88.5%",
        feeCollection: "78%",
        activity: "Annual sports day completed",
        gradient: "from-green-500 to-green-600",
    },
    {
        name: "Riverside School",
        type: "Primary & Secondary",
        students: "2,356",
        teachers: "112",
        attendance: "93.7%",
        feeCollection: "95%",
        activity: "Science fair winners announced",
        gradient: "from-orange-500 to-red-600",
    },
    {
        name: "Eastside Institute",
        type: "Secondary School",
        students: "1,897",
        teachers: "112",
        attendance: "95.1%",
        feeCollection: "85%",
        activity: "Mid-term exams in progress",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        name: "Southpark Academy",
        type: "Primary School",
        students: "1,100",
        teachers: "71",
        attendance: "90.3%",
        feeCollection: "91%",
        activity: "Library expansion completed",
        gradient: "from-pink-500 to-pink-600",
    },
]

const quickActions = [
    { icon: BarChart3, label: "View KPIs", color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: GitCompare, label: "Compare Branches", color: "text-pink-600", bgColor: "bg-pink-50" },
    { icon: FileDown, label: "Export Reports", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: Settings2, label: "Settings", color: "text-orange-600", bgColor: "bg-orange-50" },
]

export default function InstitutionDashboard() {
    return (
        <div className="space-y-6">
            {/* Branch Selector */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Select Branch:</span>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-48">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Branches</SelectItem>
                            {branches.map((branch) => (
                                <SelectItem key={branch.name} value={branch.name.toLowerCase().replace(/\s+/g, "-")}>
                                    {branch.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700">
                    + Create New Branch
                </Button>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                                <span className={`text-sm font-semibold ${stat.negative ? 'text-red-500' : 'text-green-500'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Branch Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {branches.map((branch) => (
                    <div key={branch.name} className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${branch.gradient} p-6 text-white`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">{branch.name}</h3>
                                    <p className="mt-1 text-sm text-white/90">{branch.type}</p>
                                </div>
                                <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                                    <Building2 className="h-6 w-6" />
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 p-6">
                            <div>
                                <p className="text-xs text-gray-600">Students</p>
                                <p className="mt-1 text-lg font-bold text-gray-900">{branch.students}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Teachers</p>
                                <p className="mt-1 text-lg font-bold text-gray-900">{branch.teachers}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Attendance</p>
                                <p className="mt-1 text-lg font-bold text-green-600">{branch.attendance}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Fee Collection</p>
                                <p className="mt-1 text-lg font-bold text-orange-600">{branch.feeCollection}</p>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="border-t bg-gray-50 p-4">
                            <p className="text-xs font-medium text-gray-600">Recent Activity</p>
                            <p className="mt-1 text-sm text-gray-700">{branch.activity}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Actions</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {quickActions.map((action) => {
                        const Icon = action.icon
                        return (
                            <button
                                key={action.label}
                                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className={`rounded-lg ${action.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${action.color}`} />
                                </div>
                                <span className="font-medium text-gray-900">{action.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
