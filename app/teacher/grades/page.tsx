"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle2, Clock, Users, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
    {
        label: "Upcoming Exams",
        value: "3",
        icon: Calendar,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        label: "Completed",
        value: "12",
        icon: CheckCircle2,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    {
        label: "Pending Grading",
        value: "5",
        icon: Clock,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100"
    },
    {
        label: "Total Students",
        value: "28",
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
]

const exams = [
    {
        id: 1,
        name: "Mid-Term Mathematics",
        chapter: "Chapter 1-5",
        date: "March 15, 2024",
        status: "Completed",
        statusColor: "bg-emerald-100 text-emerald-800",
        submissions: "28/28",
        actions: ["View Results"],
    },
    {
        id: 2,
        name: "Quiz - Algebra",
        chapter: "Linear Equations",
        date: "March 22, 2024",
        status: "Pending Grading",
        statusColor: "bg-amber-100 text-amber-800",
        submissions: "25/28",
        actions: ["Grade Now"],
    },
    {
        id: 3,
        name: "Final Exam",
        chapter: "Comprehensive",
        date: "April 10, 2024",
        status: "Upcoming",
        statusColor: "bg-blue-100 text-blue-800",
        submissions: "0/28",
        actions: ["Edit"],
    },
]

export default function TeacherGradesPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isGradeModalOpen, setIsGradeModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedExam, setSelectedExam] = useState<typeof exams[0] | null>(null)

    const handleViewResults = (exam: typeof exams[0]) => {
        setSelectedExam(exam)
        setIsViewModalOpen(true)
    }

    const handleGradeNow = (exam: typeof exams[0]) => {
        setSelectedExam(exam)
        setIsGradeModalOpen(true)
    }

    const handleEdit = (exam: typeof exams[0]) => {
        setSelectedExam(exam)
        setIsEditModalOpen(true)
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Exam & Grades management</h1>
            </div>

            {/* Selection Controls */}
            <div className="flex flex-wrap items-center gap-5 rounded-xl bg-white p-5 shadow-md">
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Course</label>
                    <Select defaultValue="math10">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="math10">Mathematics Grade 10</SelectItem>
                            <SelectItem value="phys11">Physics Grade 11</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Section</label>
                    <Select defaultValue="secA">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Section" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="secA">Section A</SelectItem>
                            <SelectItem value="secB">Section B</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="flex text-emerald-500 items-center gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                            <div className="rounded-lg p-3 bg-emerald-50">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Exams Table */}
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-lg font-bold text-gray-900">Exam & Grades Management</h2>
                    <Button className="bg-emerald-500" onClick={() => setIsCreateModalOpen(true)}>
                        <Plus className="mr-1 h-4 w-4" />
                        Create Exam
                    </Button>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Exam Name</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Exam Date</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Submissions</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {exams.map((exam) => (
                                <tr key={exam.id} className="group transition-colors hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-4">
                                        <div>
                                            <p className="font-semibold text-gray-900">{exam.name}</p>
                                            <p className="text-sm text-gray-500">{exam.chapter}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-gray-600">{exam.date}</td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${exam.statusColor}`}>
                                            {exam.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-gray-600">{exam.submissions}</td>
                                    <td className="whitespace-nowrap py-4 pr-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            {exam.actions.includes("View Results") && (
                                                <button
                                                    onClick={() => handleViewResults(exam)}
                                                    className="rounded px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50"
                                                >
                                                    View
                                                </button>
                                            )}
                                            {exam.actions.includes("Grade Now") && (
                                                <button
                                                    onClick={() => handleGradeNow(exam)}
                                                    className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
                                                >
                                                    Grade Now
                                                </button>
                                            )}
                                            {exam.actions.includes("Edit") && (
                                                <button
                                                    onClick={() => handleEdit(exam)}
                                                    className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create Exam Modal */}
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Create New Exam</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="examName">Exam Name</Label>
                                <Input id="examName" placeholder="e.g., Mid-Term Mathematics" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="examDate">Exam Date</Label>
                                <Input id="examDate" type="date" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="chapter">Chapter/Topic</Label>
                            <Input id="chapter" placeholder="e.g., Chapter 1-5" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="totalMarks">Total Marks</Label>
                            <Input id="totalMarks" type="number" placeholder="100" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="duration">Duration (minutes)</Label>
                            <Input id="duration" type="number" placeholder="60" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="instructions">Instructions</Label>
                            <Textarea id="instructions" placeholder="Enter exam instructions..." rows={4} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Create Exam</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* View Results Modal */}
            <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Exam Results - {selectedExam?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="rounded-lg bg-gray-50 p-4 space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Exam Name:</span>
                                <span className="text-sm text-gray-900 font-semibold">{selectedExam?.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Chapter:</span>
                                <span className="text-sm text-gray-900">{selectedExam?.chapter}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Date:</span>
                                <span className="text-sm text-gray-900">{selectedExam?.date}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Submissions:</span>
                                <span className="text-sm text-emerald-600 font-semibold">{selectedExam?.submissions}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-gray-900">Class Performance</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-center">
                                    <p className="text-2xl font-bold text-emerald-700">85%</p>
                                    <p className="text-xs text-emerald-600">Average Score</p>
                                </div>
                                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-center">
                                    <p className="text-2xl font-bold text-blue-700">95%</p>
                                    <p className="text-xs text-blue-600">Highest Score</p>
                                </div>
                                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
                                    <p className="text-2xl font-bold text-amber-700">68%</p>
                                    <p className="text-xs text-amber-600">Lowest Score</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>Close</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Download Report</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Grade Now Modal */}
            <Dialog open={isGradeModalOpen} onOpenChange={setIsGradeModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Grade Exam - {selectedExam?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                            <p className="text-sm text-amber-800">
                                <strong>Pending Submissions:</strong> {selectedExam?.submissions}
                            </p>
                            <p className="text-sm text-amber-700 mt-1">
                                Please review and grade all pending submissions.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-gray-900">Student Submissions</h3>
                            {[1, 2, 3].map((student) => (
                                <div key={student} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                                    <div>
                                        <p className="font-medium text-gray-900">Student {student}</p>
                                        <p className="text-xs text-gray-500">Submitted 2 hours ago</p>
                                    </div>
                                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                        Grade
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsGradeModalOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Exam Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Exam</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="editExamName">Exam Name</Label>
                                <Input id="editExamName" defaultValue={selectedExam?.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="editExamDate">Exam Date</Label>
                                <Input id="editExamDate" type="date" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="editChapter">Chapter/Topic</Label>
                            <Input id="editChapter" defaultValue={selectedExam?.chapter} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="editTotalMarks">Total Marks</Label>
                            <Input id="editTotalMarks" type="number" placeholder="100" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="editDuration">Duration (minutes)</Label>
                            <Input id="editDuration" type="number" placeholder="60" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="editInstructions">Instructions</Label>
                            <Textarea id="editInstructions" placeholder="Enter exam instructions..." rows={4} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
