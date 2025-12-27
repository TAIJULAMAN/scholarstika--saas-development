"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Users, Clock, CheckCircle, Search, Plus, Edit, Eye, Play } from "lucide-react"

const summaryStats = [
    {
        icon: Monitor,
        label: "Total Online Exams",
        value: "24",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Users,
        label: "Active Participants",
        value: "1,247",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Clock,
        label: "Scheduled",
        value: "8",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        icon: CheckCircle,
        label: "Completed",
        value: "16",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const onlineExams = [
    {
        id: 1,
        title: "Mathematics Mid-Term Exam",
        subject: "Mathematics",
        grade: "Grade 5",
        duration: 90,
        totalMarks: 100,
        scheduledDate: "2024-12-28",
        scheduledTime: "10:00 AM",
        participants: 156,
        status: "Scheduled",
    },
    {
        id: 2,
        title: "Science Quiz - Chapter 5",
        subject: "Science",
        grade: "Grade 4",
        duration: 45,
        totalMarks: 50,
        scheduledDate: "2024-12-27",
        scheduledTime: "2:00 PM",
        participants: 142,
        status: "Live",
    },
    {
        id: 3,
        title: "English Grammar Test",
        subject: "English",
        grade: "Grade 3",
        duration: 60,
        totalMarks: 75,
        scheduledDate: "2024-12-20",
        scheduledTime: "11:00 AM",
        participants: 134,
        status: "Completed",
    },
    {
        id: 4,
        title: "Social Studies Final Exam",
        subject: "Social Studies",
        grade: "Grade 5",
        duration: 120,
        totalMarks: 100,
        scheduledDate: "2024-12-30",
        scheduledTime: "9:00 AM",
        participants: 156,
        status: "Scheduled",
    },
]

export default function OnlineExamsPage() {
    const [gradeFilter, setGradeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Live":
                return "bg-green-100 text-green-700"
            case "Scheduled":
                return "bg-blue-100 text-blue-700"
            case "Completed":
                return "bg-gray-100 text-gray-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Online Exams Management</h1>
                    <p className="text-sm text-gray-600">Create and manage online assessments and examinations</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Online Exam
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Create New Online Exam</DialogTitle>
                        </DialogHeader>
                        <Tabs defaultValue="basic" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                                <TabsTrigger value="questions">Questions</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="basic" className="space-y-4">
                                <div>
                                    <Label>Exam Title</Label>
                                    <Input placeholder="e.g., Mathematics Mid-Term Exam" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Subject</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select subject" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="math">Mathematics</SelectItem>
                                                <SelectItem value="science">Science</SelectItem>
                                                <SelectItem value="english">English</SelectItem>
                                                <SelectItem value="social">Social Studies</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Grade</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select grade" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">Grade 1</SelectItem>
                                                <SelectItem value="2">Grade 2</SelectItem>
                                                <SelectItem value="3">Grade 3</SelectItem>
                                                <SelectItem value="4">Grade 4</SelectItem>
                                                <SelectItem value="5">Grade 5</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Duration (minutes)</Label>
                                        <Input type="number" placeholder="90" />
                                    </div>
                                    <div>
                                        <Label>Total Marks</Label>
                                        <Input type="number" placeholder="100" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Scheduled Date</Label>
                                        <Input type="date" />
                                    </div>
                                    <div>
                                        <Label>Scheduled Time</Label>
                                        <Input type="time" />
                                    </div>
                                </div>
                                <div>
                                    <Label>Instructions</Label>
                                    <Textarea placeholder="Exam instructions for students..." rows={3} />
                                </div>
                            </TabsContent>
                            <TabsContent value="questions" className="space-y-4">
                                <div className="text-center py-8 text-gray-500">
                                    <p>Question builder will be available here</p>
                                    <p className="text-sm mt-2">Add MCQs, True/False, Short Answer, and Essay questions</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="settings" className="space-y-4">
                                <div className="text-center py-8 text-gray-500">
                                    <p>Exam settings will be available here</p>
                                    <p className="text-sm mt-2">Configure proctoring, time limits, and submission rules</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <DialogFooter>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Exam</Button>
                        </DialogFooter>
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

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative flex-1 min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search exams..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Online Exams Table */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Online Exams</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Exam Title</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Grade</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Duration</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Marks</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Schedule</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Participants</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {onlineExams.map((exam) => (
                                <tr key={exam.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{exam.title}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{exam.subject}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{exam.grade}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{exam.duration} min</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{exam.totalMarks}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        <div>{exam.scheduledDate}</div>
                                        <div className="text-xs text-gray-500">{exam.scheduledTime}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{exam.participants}</td>
                                    <td className="px-6 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(exam.status)}`}>
                                            {exam.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
                                                <Play className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 text-purple-600 hover:bg-purple-50">
                                                <Edit className="h-4 w-4" />
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
                    <p className="text-sm text-gray-600">Showing 1 to 4 of 24 results</p>
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
