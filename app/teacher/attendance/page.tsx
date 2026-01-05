"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Save, Mail, Phone } from "lucide-react"

const students = [
    { id: 1, name: "John Smith", status: "present", parentName: "Robert Smith", parentEmail: "robert.smith@email.com", parentPhone: "+1 (555) 123-4567" },
    { id: 2, name: "Emma Johnson", status: "present", parentName: "Sarah Johnson", parentEmail: "sarah.johnson@email.com", parentPhone: "+1 (555) 234-5678" },
    { id: 3, name: "Michael Brown", status: "absent", parentName: "David Brown", parentEmail: "david.brown@email.com", parentPhone: "+1 (555) 345-6789" },
    { id: 4, name: "Sophia Davis", status: "present", parentName: "Jennifer Davis", parentEmail: "jennifer.davis@email.com", parentPhone: "+1 (555) 456-7890" },
    { id: 5, name: "William Wilson", status: "late", parentName: "James Wilson", parentEmail: "james.wilson@email.com", parentPhone: "+1 (555) 567-8901" },
    { id: 6, name: "Olivia Martinez", status: "present", parentName: "Maria Martinez", parentEmail: "maria.martinez@email.com", parentPhone: "+1 (555) 678-9012" },
    { id: 7, name: "James Anderson", status: "present", parentName: "Thomas Anderson", parentEmail: "thomas.anderson@email.com", parentPhone: "+1 (555) 789-0123" },
    { id: 8, name: "Ava Taylor", status: "present", parentName: "Lisa Taylor", parentEmail: "lisa.taylor@email.com", parentPhone: "+1 (555) 890-1234" },
]

export default function TeacherAttendancePage() {
    const [selectedClass, setSelectedClass] = useState("Grade 10-A")
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    const [attendance, setAttendance] = useState<{ [key: number]: string }>(
        Object.fromEntries(students.map(s => [s.id, s.status]))
    )
    const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null)
    const [emailSubject, setEmailSubject] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)

    const handleStatusChange = (studentId: number, status: string) => {
        setAttendance(prev => ({ ...prev, [studentId]: status }))
    }

    const handleSave = () => {
        console.log("Saving attendance:", { class: selectedClass, date: selectedDate, attendance })
        alert("Attendance saved successfully!")
    }

    const handleOpenEmailDialog = (student: typeof students[0]) => {
        setSelectedStudent(student)
        setEmailSubject(`Absence Notification - ${student.name}`)
        setEmailMessage(`Dear ${student.parentName},\n\nThis is to inform you that your child, ${student.name}, was marked absent on ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.\n\nIf you have any questions or concerns, please don't hesitate to contact us.\n\nBest regards,\nTeacher`)
        setIsEmailDialogOpen(true)
    }

    const handleSendEmail = () => {
        if (selectedStudent) {
            console.log("Sending email to:", selectedStudent.parentEmail, {
                subject: emailSubject,
                message: emailMessage
            })
            alert(`Email sent successfully to ${selectedStudent.parentName} (${selectedStudent.parentEmail})`)
            setIsEmailDialogOpen(false)
            setSelectedStudent(null)
            setEmailSubject("")
            setEmailMessage("")
        }
    }

    const stats = {
        present: Object.values(attendance).filter(s => s === "present").length,
        absent: Object.values(attendance).filter(s => s === "absent").length,
        late: Object.values(attendance).filter(s => s === "late").length,
    }

    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Attendance Management"
                description="Mark and manage student attendance"
            /> */}

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Class</label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Grade 10-A">Mathematics - Grade 10-A</SelectItem>
                            <SelectItem value="Grade 10-B">Mathematics - Grade 10-B</SelectItem>
                            <SelectItem value="Grade 11-A">Algebra - Grade 11-A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-green-50 p-6">
                    <p className="text-sm text-green-600">Present</p>
                    <p className="mt-2 text-3xl font-bold text-green-700">{stats.present}</p>
                </div>
                <div className="rounded-xl bg-red-50 p-6">
                    <p className="text-sm text-red-600">Absent</p>
                    <p className="mt-2 text-3xl font-bold text-red-700">{stats.absent}</p>
                </div>
                <div className="rounded-xl bg-yellow-50 p-6">
                    <p className="text-sm text-yellow-600">Late</p>
                    <p className="mt-2 text-3xl font-bold text-yellow-700">{stats.late}</p>
                </div>
            </div>

            {/* Attendance Sheet */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Attendance Sheet</h2>
                    <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Attendance
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student Name</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Parent Contact</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 pl-6 font-medium text-gray-900">{student.name}</td>
                                    <td className="py-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="font-medium">{student.parentName}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Mail className="h-3 w-3" />
                                                <span>{student.parentEmail}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Phone className="h-3 w-3" />
                                                <span>{student.parentPhone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleStatusChange(student.id, "present")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "present"
                                                    ? "bg-green-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Present
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, "absent")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "absent"
                                                    ? "bg-red-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Absent
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, "late")}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${attendance[student.id] === "late"
                                                    ? "bg-yellow-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                Late
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 pr-6">
                                        <div className="flex justify-end">
                                            {attendance[student.id] === "absent" && (
                                                <Button
                                                    onClick={() => handleOpenEmailDialog(student)}
                                                    size="sm"
                                                    className="bg-blue-600 hover:bg-blue-700"
                                                >
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    Email Parent
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Email Dialog */}
            <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Send Email to Parent</DialogTitle>
                    </DialogHeader>
                    {selectedStudent && (
                        <div className="space-y-4 py-4">
                            <div className="rounded-lg bg-gray-50 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Student</p>
                                        <p className="text-sm text-gray-900">{selectedStudent.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Parent</p>
                                        <p className="text-sm text-gray-900">{selectedStudent.parentName}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm font-medium text-gray-700">Email Address</p>
                                        <p className="text-sm text-gray-900">{selectedStudent.parentEmail}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    value={emailSubject}
                                    onChange={(e) => setEmailSubject(e.target.value)}
                                    placeholder="Email subject"
                                />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    value={emailMessage}
                                    onChange={(e) => setEmailMessage(e.target.value)}
                                    placeholder="Email message"
                                    rows={10}
                                    className="resize-none"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsEmailDialogOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleSendEmail}
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Send Email
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
