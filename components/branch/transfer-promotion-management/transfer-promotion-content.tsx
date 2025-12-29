"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRightLeft, TrendingUp, Search, AlertCircle } from "lucide-react"

const students = [
    { id: 1, name: "Alice Johnson", currentSection: "Grade 1-A", rollNo: "101", selected: false },
    { id: 2, name: "Bob Smith", currentSection: "Grade 1-A", rollNo: "102", selected: false },
    { id: 3, name: "Charlie Brown", currentSection: "Grade 1-A", rollNo: "103", selected: false },
    { id: 4, name: "Diana Prince", currentSection: "Grade 1-A", rollNo: "104", selected: false },
    { id: 5, name: "Ethan Hunt", currentSection: "Grade 1-A", rollNo: "105", selected: false },
]

const transferHistory = [
    { id: 1, studentName: "John Doe", from: "Hillcrest School", to: "Lakeside Learning Center", date: "2024-12-15", reason: "Parent request - relocation", status: "Completed" },
    { id: 2, studentName: "Jane Smith", from: "Southpark Academy", to: "Greenfield University", date: "2024-12-10", reason: "Academic program preference", status: "Completed" },
    { id: 3, studentName: "Mike Wilson", from: "Oakwood College", to: "Mountainside High School", date: "2024-12-05", reason: "Family relocation", status: "Completed" },
]

const promotionHistory = [
    { id: 1, studentName: "Sarah Williams", fromGrade: "Grade 1", toGrade: "Grade 2", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 2, studentName: "Michael Chen", fromGrade: "Grade 2", toGrade: "Grade 3", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 3, studentName: "Emma Davis", fromGrade: "Grade 3", toGrade: "Grade 4", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 4, studentName: "James Rodriguez", fromGrade: "Grade 4", toGrade: "Grade 5", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
]

export function TransferPromotionContent() {
    const [selectedStudents, setSelectedStudents] = useState<number[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [actionType, setActionType] = useState<"transfer" | "promotion">("transfer")

    const handleSelectStudent = (studentId: number) => {
        setSelectedStudents(prev => prev.includes(studentId) ? prev.filter(id => id !== studentId) : [...prev, studentId])
    }

    const handleSelectAll = () => {
        setSelectedStudents(selectedStudents.length === students.length ? [] : students.map(s => s.id))
    }

    return (
        <>
            <Tabs defaultValue="transfer" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="transfer">Transfer Students</TabsTrigger>
                    <TabsTrigger value="promotion">Promote Students</TabsTrigger>
                </TabsList>

                <TabsContent value="transfer" className="space-y-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Recent Transfers</h3>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                                        <ArrowRightLeft className="mr-2 h-4 w-4" />
                                        Transfer Student
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                        <DialogTitle>Transfer Students Between Branches</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <Label>Source Branch</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select source branch" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">Hillcrest School</SelectItem>
                                                        <SelectItem value="2">Lakeside Learning Center</SelectItem>
                                                        <SelectItem value="3">Southpark Academy</SelectItem>
                                                        <SelectItem value="4">Greenfield University</SelectItem>
                                                        <SelectItem value="5">Oakwood College</SelectItem>
                                                        <SelectItem value="6">Mountainside High School</SelectItem>
                                                        <SelectItem value="7">Riverdale Junior High</SelectItem>
                                                        <SelectItem value="8">Sunset Middle School</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label>Destination Branch</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select destination branch" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">Hillcrest School</SelectItem>
                                                        <SelectItem value="2">Lakeside Learning Center</SelectItem>
                                                        <SelectItem value="3">Southpark Academy</SelectItem>
                                                        <SelectItem value="4">Greenfield University</SelectItem>
                                                        <SelectItem value="5">Oakwood College</SelectItem>
                                                        <SelectItem value="6">Mountainside High School</SelectItem>
                                                        <SelectItem value="7">Riverdale Junior High</SelectItem>
                                                        <SelectItem value="8">Sunset Middle School</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <Label>Transfer Reason</Label>
                                            <Textarea placeholder="Enter reason for transfer..." rows={3} />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <Label>Select Students ({selectedStudents.length} selected)</Label>
                                                <div className="relative w-64">
                                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                                    <Input placeholder="Search students..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                                                </div>
                                            </div>
                                            <div className="border rounded-lg">
                                                <div className="flex items-center gap-3 border-b bg-gray-50 p-4">
                                                    <Checkbox checked={selectedStudents.length === students.length} onCheckedChange={handleSelectAll} />
                                                    <span className="text-sm font-semibold text-gray-700">Select All</span>
                                                </div>
                                                <div className="divide-y max-h-64 overflow-y-auto">
                                                    {students.map((student) => (
                                                        <div key={student.id} className="flex items-center gap-3 p-4 hover:bg-gray-50">
                                                            <Checkbox checked={selectedStudents.includes(student.id)} onCheckedChange={() => handleSelectStudent(student.id)} />
                                                            <div className="flex-1">
                                                                <p className="font-medium text-gray-900">{student.name}</p>
                                                                <p className="text-sm text-gray-600">Roll No: {student.rollNo} • {student.currentSection}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => { setActionType("transfer"); setShowConfirmDialog(true) }} disabled={selectedStudents.length === 0}>
                                            <ArrowRightLeft className="mr-2 h-4 w-4" />
                                            Transfer {selectedStudents.length} Student{selectedStudents.length !== 1 ? 's' : ''}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                                    <tr>
                                        <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">From</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">To</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Date</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Reason</th>
                                        <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transferHistory.map((transfer) => (
                                        <tr key={transfer.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                            <td className="py-4 pl-6 text-sm font-medium text-gray-900">{transfer.studentName}</td>
                                            <td className="py-4 text-sm text-gray-700">{transfer.from}</td>
                                            <td className="py-4 text-sm text-gray-700">{transfer.to}</td>
                                            <td className="py-4 text-sm text-gray-700">{new Date(transfer.date).toLocaleDateString()}</td>
                                            <td className="py-4 text-sm text-gray-700">{transfer.reason}</td>
                                            <td className="py-4 pr-6"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{transfer.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="promotion" className="space-y-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Promotion History</h3>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                                        <TrendingUp className="mr-2 h-4 w-4" />
                                        Promote Students
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                        <DialogTitle>Promote Students to Next Grade</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-6">
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                                            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-semibold text-blue-900">Academic Year Promotion</p>
                                                <p className="text-sm text-blue-700 mt-1">This will promote selected students to the next grade level. This action should typically be performed at the end of the academic year.</p>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <Label>From Grade</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select current grade" />
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
                                            <div>
                                                <Label>To Grade</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select promotion grade" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="2">Grade 2</SelectItem>
                                                        <SelectItem value="3">Grade 3</SelectItem>
                                                        <SelectItem value="4">Grade 4</SelectItem>
                                                        <SelectItem value="5">Grade 5</SelectItem>
                                                        <SelectItem value="6">Grade 6</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <Label>Academic Year</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select academic year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="2024-2025">2024-2025</SelectItem>
                                                    <SelectItem value="2023-2024">2023-2024</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <Label>Select Students ({selectedStudents.length} selected)</Label>
                                                <div className="relative w-64">
                                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                                    <Input placeholder="Search students..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                                                </div>
                                            </div>
                                            <div className="border rounded-lg">
                                                <div className="flex items-center gap-3 border-b bg-gray-50 p-4">
                                                    <Checkbox checked={selectedStudents.length === students.length} onCheckedChange={handleSelectAll} />
                                                    <span className="text-sm font-semibold text-gray-700">Select All</span>
                                                </div>
                                                <div className="divide-y max-h-64 overflow-y-auto">
                                                    {students.map((student) => (
                                                        <div key={student.id} className="flex items-center gap-3 p-4 hover:bg-gray-50">
                                                            <Checkbox checked={selectedStudents.includes(student.id)} onCheckedChange={() => handleSelectStudent(student.id)} />
                                                            <div className="flex-1">
                                                                <p className="font-medium text-gray-900">{student.name}</p>
                                                                <p className="text-sm text-gray-600">Roll No: {student.rollNo} • {student.currentSection}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => { setActionType("promotion"); setShowConfirmDialog(true) }} disabled={selectedStudents.length === 0}>
                                            <TrendingUp className="mr-2 h-4 w-4" />
                                            Promote {selectedStudents.length} Student{selectedStudents.length !== 1 ? 's' : ''}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                                    <tr>
                                        <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student Name</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">From Grade</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">To Grade</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Academic Year</th>
                                        <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Date</th>
                                        <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promotionHistory.map((promotion) => (
                                        <tr key={promotion.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                            <td className="py-4 pl-6 text-sm font-medium text-gray-900">{promotion.studentName}</td>
                                            <td className="py-4 text-sm text-gray-700">{promotion.fromGrade}</td>
                                            <td className="py-4 text-sm text-gray-700">{promotion.toGrade}</td>
                                            <td className="py-4 text-sm text-gray-700">{promotion.academicYear}</td>
                                            <td className="py-4 text-sm text-gray-700">{new Date(promotion.date).toLocaleDateString()}</td>
                                            <td className="py-4 pr-6">
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                                    {promotion.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                <DialogContent>
                    <DialogHeader><DialogTitle>Confirm {actionType === "transfer" ? "Transfer" : "Promotion"}</DialogTitle></DialogHeader>
                    <div className="py-4"><p className="text-sm text-gray-600">{actionType === "transfer" ? `Are you sure you want to transfer ${selectedStudents.length} student${selectedStudents.length !== 1 ? 's' : ''}? This action will update student records immediately.` : "Are you sure you want to promote the selected students to the next grade? This action cannot be easily undone."}</p></div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => { setShowConfirmDialog(false); setSelectedStudents([]) }}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
