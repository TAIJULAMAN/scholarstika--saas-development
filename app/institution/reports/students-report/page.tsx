"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, UserMinus, TrendingUp, Download, PieChart } from "lucide-react"

const summaryStats = [
    {
        icon: Users,
        label: "Total Students",
        value: "1,247",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: UserPlus,
        label: "New Admissions",
        value: "142",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: UserMinus,
        label: "Withdrawals",
        value: "23",
        color: "text-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: TrendingUp,
        label: "Growth Rate",
        value: "+10.5%",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const gradeDistribution = [
    { grade: "Grade 1", male: 124, female: 110, total: 234, percentage: 18.8 },
    { grade: "Grade 2", male: 132, female: 115, total: 247, percentage: 19.8 },
    { grade: "Grade 3", male: 138, female: 118, total: 256, percentage: 20.5 },
    { grade: "Grade 4", male: 145, female: 123, total: 268, percentage: 21.5 },
    { grade: "Grade 5", male: 128, female: 114, total: 242, percentage: 19.4 },
]

const sectionDistribution = [
    { section: "Grade 1-A", students: 42, capacity: 45, utilization: 93.3 },
    { section: "Grade 1-B", students: 40, capacity: 45, utilization: 88.9 },
    { section: "Grade 2-A", students: 44, capacity: 45, utilization: 97.8 },
    { section: "Grade 2-B", students: 43, capacity: 45, utilization: 95.6 },
    { section: "Grade 3-A", students: 45, capacity: 45, utilization: 100 },
    { section: "Grade 3-B", students: 42, capacity: 45, utilization: 93.3 },
]

const monthlyAdmissions = [
    { month: "January", admissions: 15, withdrawals: 2 },
    { month: "February", admissions: 18, withdrawals: 3 },
    { month: "March", admissions: 22, withdrawals: 1 },
    { month: "April", admissions: 28, withdrawals: 4 },
    { month: "May", admissions: 12, withdrawals: 2 },
    { month: "June", admissions: 47, withdrawals: 11 },
]

export default function StudentsReportPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Students Report & Analytics</h1>
                    <p className="text-sm text-gray-600">Enrollment statistics, demographics, and student distribution analysis</p>
                </div>
                <div className="flex gap-2">
                    <Select defaultValue="2024">
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">Academic Year 2024</SelectItem>
                            <SelectItem value="2023">Academic Year 2023</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </div>
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

            {/* Demographics Chart Placeholder */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Student Demographics</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center text-gray-500">
                        <PieChart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                        <p>Demographics chart will be displayed here</p>
                        <p className="text-sm mt-1">Gender distribution, age groups, and grade levels</p>
                    </div>
                </div>
            </div>

            {/* Grade Distribution */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Grade-wise Distribution</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Male</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Female</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Students</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Percentage</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Distribution</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {gradeDistribution.map((grade) => (
                                <tr key={grade.grade} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{grade.grade}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{grade.male}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">{grade.female}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{grade.total}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-purple-600">{grade.percentage}%</td>
                                    <td className="px-6 py-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-emerald-600 h-2 rounded-full"
                                                style={{ width: `${grade.percentage * 5}%` }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Section Utilization */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Section Capacity Utilization</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Section</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Current Students</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Capacity</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Available Seats</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Utilization</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {sectionDistribution.map((section) => (
                                <tr key={section.section} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{section.section}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{section.students}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{section.capacity}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-orange-600">
                                        {section.capacity - section.students}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{section.utilization}%</td>
                                    <td className="px-6 py-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${section.utilization === 100 ? 'bg-red-600' : section.utilization > 90 ? 'bg-orange-500' : 'bg-green-600'}`}
                                                style={{ width: `${section.utilization}%` }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Monthly Admissions/Withdrawals */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Monthly Admissions & Withdrawals</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Month</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">New Admissions</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Withdrawals</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Net Change</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {monthlyAdmissions.map((month) => (
                                <tr key={month.month} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{month.month}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-600">+{month.admissions}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-red-600">-{month.withdrawals}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                                        +{month.admissions - month.withdrawals}
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
