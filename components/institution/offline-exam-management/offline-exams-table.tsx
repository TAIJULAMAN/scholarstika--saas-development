"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Eye, Download } from "lucide-react"

const offlineExams = [
    { id: 1, title: "Final Term Examination - Mathematics", subject: "Mathematics", grade: "Grade 5", examDate: "2025-01-15", examTime: "9:00 AM - 12:00 PM", venue: "Main Hall", totalMarks: 100, students: 156, status: "Scheduled" },
    { id: 2, title: "Science Practical Exam", subject: "Science", grade: "Grade 4", examDate: "2025-01-10", examTime: "10:00 AM - 11:30 AM", venue: "Science Lab", totalMarks: 50, students: 142, status: "Scheduled" },
    { id: 3, title: "English Writing Assessment", subject: "English", grade: "Grade 3", examDate: "2024-12-18", examTime: "11:00 AM - 1:00 PM", venue: "Classroom 201", totalMarks: 75, students: 134, status: "Completed" },
    { id: 4, title: "History Mid-Term Exam", subject: "Social Studies", grade: "Grade 5", examDate: "2024-12-22", examTime: "2:00 PM - 4:00 PM", venue: "Main Hall", totalMarks: 100, students: 156, status: "Completed" },
]

export function OfflineExamsTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

    const filteredExams = useMemo(() => {
        return offlineExams.filter(exam =>
            searchQuery === "" ||
            exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    const itemsPerPage = 4
    const totalPages = Math.ceil(filteredExams.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentExams = filteredExams.slice(startIndex, endIndex)

    useEffect(() => { setCurrentPage(1) }, [searchQuery])

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Scheduled": return "bg-blue-100 text-blue-700"
            case "In Progress": return "bg-green-100 text-green-700"
            case "Completed": return "bg-gray-100 text-gray-700"
            default: return "bg-gray-100 text-gray-700"
        }
    }

    return (
        <>
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">All Offline Exams</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1 min-w-[250px]">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input placeholder="Search exams..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                        </div>
                        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-emerald-600 hover:bg-emerald-700"><Plus className="mr-2 h-4 w-4" />Schedule Exam</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader><DialogTitle>Schedule New Offline Exam</DialogTitle></DialogHeader>
                                <div className="space-y-4">
                                    <div><Label>Exam Title</Label><Input placeholder="e.g., Final Term Examination - Mathematics" /></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div><Label>Subject</Label><Select><SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger><SelectContent><SelectItem value="math">Mathematics</SelectItem><SelectItem value="science">Science</SelectItem><SelectItem value="english">English</SelectItem><SelectItem value="social">Social Studies</SelectItem></SelectContent></Select></div>
                                        <div><Label>Grade</Label><Select><SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger><SelectContent><SelectItem value="1">Grade 1</SelectItem><SelectItem value="2">Grade 2</SelectItem><SelectItem value="3">Grade 3</SelectItem><SelectItem value="4">Grade 4</SelectItem><SelectItem value="5">Grade 5</SelectItem></SelectContent></Select></div>
                                    </div>
                                    <div><Label>Exam Date</Label><Input type="date" /></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div><Label>Start Time</Label><Input type="time" /></div>
                                        <div><Label>End Time</Label><Input type="time" /></div>
                                    </div>
                                    <div><Label>Venue</Label><Input placeholder="e.g., Main Hall, Science Lab" /></div>
                                    <div><Label>Total Marks</Label><Input type="number" placeholder="100" /></div>
                                    <div><Label>Instructions</Label><Textarea placeholder="Exam instructions and guidelines..." rows={3} /></div>
                                </div>
                                <DialogFooter><Button className="w-full bg-emerald-600 hover:bg-emerald-700">Schedule Exam</Button></DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Exam Title</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Subject</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Date & Time</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Venue</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Marks</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Students</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentExams.map((exam) => (
                                <tr key={exam.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6"><p className="font-medium text-gray-900">{exam.title}</p></td>
                                    <td className="py-4 text-sm text-gray-700">{exam.subject}</td>
                                    <td className="py-4 text-sm text-gray-700">{exam.grade}</td>
                                    <td className="py-4 text-sm text-gray-700"><div>{exam.examDate}</div><div className="text-xs text-gray-500">{exam.examTime}</div></td>
                                    <td className="py-4 text-sm text-gray-700">{exam.venue}</td>
                                    <td className="py-4 text-sm font-semibold text-gray-900">{exam.totalMarks}</td>
                                    <td className="py-4 text-sm font-semibold text-gray-900">{exam.students}</td>
                                    <td className="py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(exam.status)}`}>{exam.status}</span></td>
                                    <td className="py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="rounded-lg p-2 text-blue-600"><Eye className="h-4 w-4" /></button>
                                            <button className="rounded-lg p-2 text-purple-600"><Edit className="h-4 w-4" /></button>
                                            <button className="rounded-lg p-2 text-green-600"><Download className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing {startIndex + 1} to {Math.min(endIndex, filteredExams.length)} of {filteredExams.length} results</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>Previous</Button>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            const pageNum = i + 1
                            return <Button key={pageNum} size="sm" variant={currentPage === pageNum ? "default" : "outline"} style={currentPage === pageNum ? { backgroundColor: 'rgba(16, 185, 129, 0.8)' } : {}} className={currentPage === pageNum ? "text-white hover:bg-emerald-700" : ""} onClick={() => setCurrentPage(pageNum)}>{pageNum}</Button>
                        })}
                        <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>Next</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
