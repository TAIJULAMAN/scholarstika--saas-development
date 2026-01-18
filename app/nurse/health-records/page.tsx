"use client"

import { useState } from "react"
import { Plus, AlertCircle, Heart, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const students = [
    {
        id: 1,
        name: "Alex Thompson",
        grade: "5-A",
        conditions: ["Asthma"],
        allergies: ["Peanuts", "Dust"],
        bloodType: "O+",
        emergencyContact: "Mrs. Thompson (Mother)",
        emergencyPhone: "+1 (555) 123-4567",
        medications: ["Albuterol Inhaler"],
        lastCheckup: "Jan 15, 2026",
        notes: "Requires inhaler during physical activities. Keep away from dusty environments.",
        image: "/placeholder-student-1.jpg",
        status: "Critical"
    },
    {
        id: 2,
        name: "Sarah Williams",
        grade: "3-B",
        conditions: ["Diabetes Type 1"],
        allergies: [],
        bloodType: "A+",
        emergencyContact: "Mr. Williams (Father)",
        emergencyPhone: "+1 (555) 234-5678",
        medications: ["Insulin"],
        lastCheckup: "Jan 10, 2026",
        notes: "Requires regular blood sugar monitoring. Insulin administered before meals.",
        image: "/placeholder-student-2.jpg",
        status: "Stable"
    },
    {
        id: 3,
        name: "Michael Chen",
        grade: "8-C",
        conditions: [],
        allergies: ["Penicillin"],
        bloodType: "B-",
        emergencyContact: "Mrs. Chen (Mother)",
        emergencyPhone: "+1 (555) 345-6789",
        medications: [],
        lastCheckup: "Jan 08, 2026",
        notes: "Allergic to Penicillin - use alternative antibiotics if needed.",
        image: "/placeholder-student-3.jpg",
        status: "Good"
    },
    {
        id: 4,
        name: "Emily Davis",
        grade: "4-A",
        conditions: ["Epilepsy"],
        allergies: [],
        bloodType: "AB-",
        emergencyContact: "Mrs. Davis (Mother)",
        emergencyPhone: "+1 (555) 456-7890",
        medications: ["Levetiracetam"],
        lastCheckup: "Jan 12, 2026",
        notes: "Seizure protocol in place. Medication taken twice daily.",
        image: "/placeholder-student-4.jpg",
        status: "Stable"
    },
    {
        id: 5,
        name: "James Wilson",
        grade: "6-B",
        conditions: [],
        allergies: ["Bee Stings"],
        bloodType: "O-",
        emergencyContact: "Mr. Wilson (Father)",
        emergencyPhone: "+1 (555) 567-8901",
        medications: ["EpiPen"],
        lastCheckup: "Jan 05, 2026",
        notes: "Carries EpiPen at all times. Severe reaction to bee stings.",
        image: "/placeholder-student-5.jpg",
        status: "Good"
    }
]



export default function HealthRecordsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null)

    const handleView = (student: typeof students[0]) => {
        setSelectedStudent(student)
        setIsViewModalOpen(true)
    }

    return (
        <>
            <div className="space-y-6">

                {/* Stats Section */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">Total Students</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Users className="h-6 w-6 text-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,248</div>
                        </CardContent>
                    </Card>
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">Critical Cases</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <AlertCircle className="h-6 w-6 text-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                        </CardContent>
                    </Card>
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">Conditions</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Heart className="h-6 w-6 text-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">145</div>
                        </CardContent>
                    </Card>
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">Allergies</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Activity className="h-6 w-6 text-emerald-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">87</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Students Table */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Health Records</h2>
                        <Button className="bg-emerald-500" onClick={() => setIsAddModalOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Record
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px]">
                            <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                                <tr>
                                    <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                                    <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                    <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Blood Type</th>
                                    <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Conditions</th>
                                    <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Allergies</th>
                                    <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                    <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="whitespace-nowrap py-4 pl-6">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9">
                                                    <AvatarImage src={student.image} />
                                                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                </Avatar>
                                                <div className="font-medium text-gray-900">{student.name}</div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4 text-gray-600">{student.grade}</td>
                                        <td className="whitespace-nowrap py-4 text-gray-600">{student.bloodType}</td>
                                        <td className="whitespace-nowrap py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {student.conditions.length > 0 ? student.conditions.map(c => (
                                                    <Badge key={c} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none">
                                                        {c}
                                                    </Badge>
                                                )) : <span className="text-gray-400 text-sm">-</span>}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {student.allergies.length > 0 ? student.allergies.map(a => (
                                                    <Badge key={a} variant="destructive" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                                                        {a}
                                                    </Badge>
                                                )) : <span className="text-gray-400 text-sm">-</span>}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`h-2 w-2 rounded-full ${student.status === 'Critical' ? 'bg-red-500' : student.status === 'Stable' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                                <span className="text-gray-700">{student.status}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-6 text-right">
                                            <Button variant="ghost" size="sm" onClick={() => handleView(student)}>View</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Record Modal */}
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Add New Health Record</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="studentName">Student Name</Label>
                                <Input id="studentName" placeholder="Enter student name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="grade">Grade</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-A">Grade 1-A</SelectItem>
                                        <SelectItem value="2-A">Grade 2-A</SelectItem>
                                        <SelectItem value="3-A">Grade 3-A</SelectItem>
                                        <SelectItem value="4-A">Grade 4-A</SelectItem>
                                        <SelectItem value="5-A">Grade 5-A</SelectItem>
                                        <SelectItem value="6-A">Grade 6-A</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="bloodType">Blood Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select blood type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A+">A+</SelectItem>
                                        <SelectItem value="A-">A-</SelectItem>
                                        <SelectItem value="B+">B+</SelectItem>
                                        <SelectItem value="B-">B-</SelectItem>
                                        <SelectItem value="O+">O+</SelectItem>
                                        <SelectItem value="O-">O-</SelectItem>
                                        <SelectItem value="AB+">AB+</SelectItem>
                                        <SelectItem value="AB-">AB-</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">Health Status</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Good">Good</SelectItem>
                                        <SelectItem value="Stable">Stable</SelectItem>
                                        <SelectItem value="Critical">Critical</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="conditions">Medical Conditions</Label>
                            <Input id="conditions" placeholder="e.g., Asthma, Diabetes (comma separated)" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="allergies">Allergies</Label>
                            <Input id="allergies" placeholder="e.g., Peanuts, Penicillin (comma separated)" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="medications">Current Medications</Label>
                            <Input id="medications" placeholder="e.g., Insulin, Albuterol (comma separated)" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                                <Input id="emergencyContact" placeholder="e.g., Mrs. Smith (Mother)" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                                <Input id="emergencyPhone" type="tel" placeholder="+1 (555) 123-4567" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Textarea id="notes" rows={3} placeholder="Any additional medical information or special instructions..." />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Add Record</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* View Details Modal */}
            <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Health Record Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                        {/* Student Info Header */}
                        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={selectedStudent?.image} />
                                <AvatarFallback>{selectedStudent?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">{selectedStudent?.name}</h3>
                                <p className="text-sm text-gray-600">Grade {selectedStudent?.grade}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${selectedStudent?.status === 'Critical' ? 'bg-red-500' : selectedStudent?.status === 'Stable' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                <span className="font-semibold text-gray-900">{selectedStudent?.status}</span>
                            </div>
                        </div>

                        {/* Basic Information */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg border border-gray-200 p-4">
                                <p className="text-sm font-medium text-gray-500">Blood Type</p>
                                <p className="mt-1 text-lg font-bold text-gray-900">{selectedStudent?.bloodType}</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 p-4">
                                <p className="text-sm font-medium text-gray-500">Last Checkup</p>
                                <p className="mt-1 text-lg font-bold text-gray-900">{selectedStudent?.lastCheckup}</p>
                            </div>
                        </div>

                        {/* Medical Conditions */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Medical Conditions</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedStudent?.conditions && selectedStudent.conditions.length > 0 ? (
                                    selectedStudent.conditions.map(c => (
                                        <Badge key={c} variant="secondary" className="bg-indigo-50 text-indigo-700 border-none">
                                            {c}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No medical conditions recorded</p>
                                )}
                            </div>
                        </div>

                        {/* Allergies */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Allergies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedStudent?.allergies && selectedStudent.allergies.length > 0 ? (
                                    selectedStudent.allergies.map(a => (
                                        <Badge key={a} variant="destructive" className="bg-red-50 text-red-700 border-red-200">
                                            {a}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No allergies recorded</p>
                                )}
                            </div>
                        </div>

                        {/* Medications */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Current Medications</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedStudent?.medications && selectedStudent.medications.length > 0 ? (
                                    selectedStudent.medications.map(m => (
                                        <Badge key={m} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                            {m}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No medications recorded</p>
                                )}
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-700"><span className="font-medium">Name:</span> {selectedStudent?.emergencyContact}</p>
                                <p className="text-sm text-gray-700"><span className="font-medium">Phone:</span> {selectedStudent?.emergencyPhone}</p>
                            </div>
                        </div>

                        {/* Notes */}
                        {selectedStudent?.notes && (
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-900">Additional Notes</h4>
                                <p className="text-sm text-gray-700 rounded-lg bg-gray-50 p-3">{selectedStudent.notes}</p>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
