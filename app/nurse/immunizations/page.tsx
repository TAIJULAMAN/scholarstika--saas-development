"use client"

import { Syringe, Eye, Ruler, Download, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const upcomingVaccinations = [
    { student: "James Wilson", grade: "6-B", vaccine: "Tetanus Booster", date: "Oct 15, 2025", status: "Overdue" },
    { student: "Emma Brown", grade: "1-A", vaccine: "MMR", date: "Nov 02, 2025", status: "Upcoming" },
    { student: "Lucas Miller", grade: "4-C", vaccine: "Flu Shot", date: "Nov 05, 2025", status: "Upcoming" },
]

const upcomingScreenings = [
    { type: "Vision Screening", group: "Grade 1 & 3", date: "Nov 15-20, 2025", status: "Scheduled" },
    { type: "Hearing Test", group: "Grade 1", date: "Nov 22, 2025", status: "Scheduled" },
    { type: "Dental Checkup", group: "Grade 4", date: "Dec 05, 2025", status: "Upcoming" },
    { type: "BMI Check", group: "Grade 5", date: "Oct 10, 2025", status: "Completed" },
]

export default function ImmunizationPage() {
    return (
        <div className="space-y-6">


            <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Compliance Rate</CardTitle>
                        <div className="rounded-full p-4 bg-emerald-50">
                            <Syringe className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <Progress value={94} className="mt-3 h-2" />
                    </CardContent>
                </Card>
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Vision Screenings</CardTitle>
                        <div className="rounded-full p-4 bg-blue-50">
                            <Eye className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128/450</div>
                        <Progress value={30} className="mt-3 h-2" />
                    </CardContent>
                </Card>
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">BMI Checks</CardTitle>
                        <div className="rounded-full p-4 bg-purple-50">
                            <Ruler className="h-6 w-6 text-purple-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Completed</div>
                        <Progress value={100} className="mt-3 h-2" />
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="vaccinations" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
                    <TabsTrigger value="screenings">Health Screenings</TabsTrigger>
                </TabsList>
                <TabsContent value="vaccinations" className="space-y-4">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="mb-5 flex flex-col md:flex-row gap-3 items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Upcoming & Overdue</h2>
                            <div className="flex gap-2">
                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" /> Export Report
                                </Button>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Upload className="mr-2 h-4 w-4" /> Upload Records
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px]">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                                    <tr>
                                        <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Vaccine</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Due Date</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                        <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingVaccinations.map((record, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-6 font-medium text-gray-900">{record.student}</td>
                                            <td className="whitespace-nowrap py-4 text-gray-600">{record.grade}</td>
                                            <td className="whitespace-nowrap py-4 text-gray-600">{record.vaccine}</td>
                                            <td className="whitespace-nowrap py-4 text-gray-600">{record.date}</td>
                                            <td className="whitespace-nowrap py-4">
                                                <Badge variant={record.status === 'Overdue' ? "destructive" : "secondary"} className={record.status === 'Overdue' ? "bg-red-100 text-red-700 hover:bg-red-200 border-none" : "bg-blue-50 text-blue-700 hover:bg-blue-100 border-none"}>
                                                    {record.status}
                                                </Badge>
                                            </td>
                                            <td className="whitespace-nowrap py-4 pr-6 text-right">
                                                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">Notify Parent</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="screenings">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="mb-5 flex flex-col md:flex-row items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Scheduled Screenings</h2>
                            <div className="flex gap-2">
                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" /> Export Report
                                </Button>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Upload className="mr-2 h-4 w-4" /> Upload Records
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px]">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                                    <tr>
                                        <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Screening Type</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Target Group</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Date</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                        <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingScreenings.map((screening, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-6 font-medium text-gray-900">{screening.type}</td>
                                            <td className="whitespace-nowrap py-4 text-gray-600">{screening.group}</td>
                                            <td className="whitespace-nowrap py-4 text-gray-600">{screening.date}</td>
                                            <td className="whitespace-nowrap py-4">
                                                <Badge
                                                    variant="secondary"
                                                    className={
                                                        screening.status === 'Completed'
                                                            ? "bg-green-50 text-green-700 hover:bg-green-100 border-none"
                                                            : "bg-blue-50 text-blue-700 hover:bg-blue-100 border-none"
                                                    }
                                                >
                                                    {screening.status}
                                                </Badge>
                                            </td>
                                            <td className="whitespace-nowrap py-4 pr-6 text-right">
                                                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">View Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
