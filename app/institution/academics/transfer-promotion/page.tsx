"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { ArrowRightLeft, TrendingUp, Users, CheckCircle, Search, AlertCircle } from "lucide-react"

const summaryStats = [
    {
        icon: ArrowRightLeft,
        label: "Transfers This Year",
        value: "142",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: TrendingUp,
        label: "Promotions This Year",
        value: "1,247",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Users,
        label: "Pending Actions",
        value: "23",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        icon: CheckCircle,
        label: "Completed",
        value: "1,389",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

const students = [
    { id: 1, name: "Alice Johnson", currentSection: "Grade 1-A", rollNo: "101", selected: false },
    { id: 2, name: "Bob Smith", currentSection: "Grade 1-A", rollNo: "102", selected: false },
    { id: 3, name: "Charlie Brown", currentSection: "Grade 1-A", rollNo: "103", selected: false },
    { id: 4, name: "Diana Prince", currentSection: "Grade 1-A", rollNo: "104", selected: false },
    { id: 5, name: "Ethan Hunt", currentSection: "Grade 1-A", rollNo: "105", selected: false },
]

const transferHistory = [
    {
        id: 1,
        studentName: "John Doe",
        from: "Grade 2-A",
        to: "Grade 2-B",
        date: "2024-12-15",
        reason: "Parent request",
        status: "Completed",
    },
    {
        id: 2,
        studentName: "Jane Smith",
        from: "Grade 3-B",
        to: "Grade 3-A",
        date: "2024-12-10",
        reason: "Academic performance",
        status: "Completed",
    },
    {
        id: 3,
        studentName: "Mike Wilson",
        from: "Grade 4-A",
        to: "Grade 4-C",
        date: "2024-12-05",
        reason: "Class size balancing",
        status: "Completed",
    },
]

const promotionHistory = [
    {
        id: 1,
        academicYear: "2023-2024",
        totalStudents: 1247,
        promoted: 1189,
        retained: 58,
        date: "2024-06-30",
    },
    {
        id: 2,
        academicYear: "2022-2023",
        totalStudents: 1156,
        promoted: 1098,
        retained: 58,
        date: "2023-06-30",
    },
]

export default function TransferPromotionPage() {
    const [selectedStudents, setSelectedStudents] = useState<number[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [actionType, setActionType] = useState<"transfer" | "promotion">("transfer")

    const handleSelectStudent = (studentId: number) => {
        setSelectedStudents(prev =>
            prev.includes(studentId)
                ? prev.filter(id => id !== studentId)
                : [...prev, studentId]
        )
    }

    const handleSelectAll = () => {
        if (selectedStudents.length === students.length) {
            setSelectedStudents([])
        } else {
            setSelectedStudents(students.map(s => s.id))
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Transfer & Promotion</h1>
                <p className="text-sm text-gray-600">Transfer students between sections or promote to next grade</p>
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

            {/* Tabs */}
            <Tabs defaultValue="transfer" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="transfer">Transfer Students</TabsTrigger>
                    <TabsTrigger value="promotion">Promote Students</TabsTrigger>
                </TabsList>

                {/* Transfer Tab */}
                <TabsContent value="transfer" className="space-y-6">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Transfer Students</h2>

                        <div className="space-y-6">
                            {/* Transfer Form */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <Label>Source Section</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select source section" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1a">Grade 1-A</SelectItem>
                                            <SelectItem value="1b">Grade 1-B</SelectItem>
                                            <SelectItem value="2a">Grade 2-A</SelectItem>
                                            <SelectItem value="2b">Grade 2-B</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Destination Section</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select destination section" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1a">Grade 1-A</SelectItem>
                                            <SelectItem value="1b">Grade 1-B</SelectItem>
                                            <SelectItem value="2a">Grade 2-A</SelectItem>
                                            <SelectItem value="2b">Grade 2-B</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label>Transfer Reason</Label>
                                <Textarea placeholder="Enter reason for transfer..." rows={3} />
                            </div>

                            {/* Student Selection */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <Label>Select Students ({selectedStudents.length} selected)</Label>
                                    <div className="relative w-64">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            placeholder="Search students..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="border rounded-lg">
                                    <div className="flex items-center gap-3 border-b bg-gray-50 p-4">
                                        <Checkbox
                                            checked={selectedStudents.length === students.length}
                                            onCheckedChange={handleSelectAll}
                                        />
                                        <span className="text-sm font-semibold text-gray-700">Select All</span>
                                    </div>
                                    <div className="divide-y max-h-64 overflow-y-auto">
                                        {students.map((student) => (
                                            <div key={student.id} className="flex items-center gap-3 p-4 hover:bg-gray-50">
                                                <Checkbox
                                                    checked={selectedStudents.includes(student.id)}
                                                    onCheckedChange={() => handleSelectStudent(student.id)}
                                                />
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900">{student.name}</p>
                                                    <p className="text-sm text-gray-600">
                                                        Roll No: {student.rollNo} • {student.currentSection}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full bg-emerald-600 hover:bg-emerald-700"
                                onClick={() => {
                                    setActionType("transfer")
                                    setShowConfirmDialog(true)
                                }}
                                disabled={selectedStudents.length === 0}
                            >
                                <ArrowRightLeft className="mr-2 h-4 w-4" />
                                Transfer {selectedStudents.length} Student{selectedStudents.length !== 1 ? 's' : ''}
                            </Button>
                        </div>
                    </div>

                    {/* Transfer History */}
                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="border-b p-6">
                            <h3 className="text-lg font-bold text-gray-900">Recent Transfers</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Student</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">From</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">To</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Reason</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {transferHistory.map((transfer) => (
                                        <tr key={transfer.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{transfer.studentName}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{transfer.from}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{transfer.to}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {new Date(transfer.date).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{transfer.reason}</td>
                                            <td className="px-6 py-4">
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                                    {transfer.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                {/* Promotion Tab */}
                <TabsContent value="promotion" className="space-y-6">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Promote Students to Next Grade</h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-blue-900">Academic Year Promotion</p>
                                    <p className="text-sm text-blue-700 mt-1">
                                        This will promote selected students to the next grade level. This action should typically be performed at the end of the academic year.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
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
                                    <Label>Current Grade</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select grade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Grade 1</SelectItem>
                                            <SelectItem value="2">Grade 2</SelectItem>
                                            <SelectItem value="3">Grade 3</SelectItem>
                                            <SelectItem value="4">Grade 4</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label>Promotion Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select promotion type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bulk">Bulk Promotion (All Students)</SelectItem>
                                        <SelectItem value="selective">Selective Promotion</SelectItem>
                                        <SelectItem value="section">By Section</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button
                                className="w-full bg-emerald-600 hover:bg-emerald-700"
                                onClick={() => {
                                    setActionType("promotion")
                                    setShowConfirmDialog(true)
                                }}
                            >
                                <TrendingUp className="mr-2 h-4 w-4" />
                                Promote Students
                            </Button>
                        </div>
                    </div>

                    {/* Promotion History */}
                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="border-b p-6">
                            <h3 className="text-lg font-bold text-gray-900">Promotion History</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Academic Year</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Students</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Promoted</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Retained</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {promotionHistory.map((promotion) => (
                                        <tr key={promotion.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{promotion.academicYear}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{promotion.totalStudents}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-green-600">{promotion.promoted}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-orange-600">{promotion.retained}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {new Date(promotion.date).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Confirmation Dialog */}
            <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Confirm {actionType === "transfer" ? "Transfer" : "Promotion"}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-sm text-gray-600">
                            {actionType === "transfer"
                                ? `Are you sure you want to transfer ${selectedStudents.length} student${selectedStudents.length !== 1 ? 's' : ''}? This action will update student records immediately.`
                                : "Are you sure you want to promote the selected students to the next grade? This action cannot be easily undone."}
                        </p>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            className="bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => {
                                setShowConfirmDialog(false)
                                setSelectedStudents([])
                            }}
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
