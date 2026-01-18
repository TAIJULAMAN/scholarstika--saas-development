"use client"

import { useState } from "react"
import { Syringe, Eye, Ruler, Download, Upload, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const upcomingVaccinations = [
    { id: 1, student: "James Wilson", grade: "6-B", vaccine: "Tetanus Booster", date: "Oct 15, 2025", status: "Overdue", notes: "Parent notified on Oct 10" },
    { id: 2, student: "Emma Brown", grade: "1-A", vaccine: "MMR", date: "Nov 02, 2025", status: "Upcoming", notes: "Scheduled for next week" },
    { id: 3, student: "Lucas Miller", grade: "4-C", vaccine: "Flu Shot", date: "Nov 05, 2025", status: "Upcoming", notes: "Annual flu vaccination" },
]

const upcomingScreenings = [
    { id: 1, type: "Vision Screening", group: "Grade 1 & 3", date: "Nov 15-20, 2025", status: "Scheduled", location: "School Clinic", notes: "Annual vision check" },
    { id: 2, type: "Hearing Test", group: "Grade 1", date: "Nov 22, 2025", status: "Scheduled", location: "Auditorium", notes: "Standard hearing assessment" },
    { id: 3, type: "Dental Checkup", group: "Grade 4", date: "Dec 05, 2025", status: "Upcoming", location: "Dental Clinic", notes: "Partnered with local dentist" },
    { id: 4, type: "BMI Check", group: "Grade 5", date: "Oct 10, 2025", status: "Completed", location: "Gym", notes: "All students assessed" },
]

export default function ImmunizationPage() {
    // Vaccination modals
    const [isAddVaccinationOpen, setIsAddVaccinationOpen] = useState(false)
    const [isViewVaccinationOpen, setIsViewVaccinationOpen] = useState(false)
    const [isEditVaccinationOpen, setIsEditVaccinationOpen] = useState(false)
    const [isDeleteVaccinationOpen, setIsDeleteVaccinationOpen] = useState(false)
    const [selectedVaccination, setSelectedVaccination] = useState<typeof upcomingVaccinations[0] | null>(null)

    // Screening modals
    const [isAddScreeningOpen, setIsAddScreeningOpen] = useState(false)
    const [isViewScreeningOpen, setIsViewScreeningOpen] = useState(false)
    const [selectedScreening, setSelectedScreening] = useState<typeof upcomingScreenings[0] | null>(null)

    // Vaccination handlers
    const handleViewVaccination = (record: typeof upcomingVaccinations[0]) => {
        setSelectedVaccination(record)
        setIsViewVaccinationOpen(true)
    }

    const handleEditVaccination = (record: typeof upcomingVaccinations[0]) => {
        setSelectedVaccination(record)
        setIsEditVaccinationOpen(true)
    }

    const handleDeleteVaccination = (record: typeof upcomingVaccinations[0]) => {
        setSelectedVaccination(record)
        setIsDeleteVaccinationOpen(true)
    }

    // Screening handlers
    const handleViewScreening = (screening: typeof upcomingScreenings[0]) => {
        setSelectedScreening(screening)
        setIsViewScreeningOpen(true)
    }

    return (
        <>
            <div className="space-y-6">


                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-600">Compliance Rate</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Syringe className="h-6 w-6 text-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">94%</div>
                            <Progress value={94} className="mt-3 h-2" />
                        </CardContent>
                    </Card>
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-500">Vision Screenings</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Eye className="h-6 w-6 text-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">128/450</div>
                            <Progress value={30} className="mt-3 h-2" />
                        </CardContent>
                    </Card>
                    <Card className="p-5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-medium text-gray-500">BMI Checks</CardTitle>
                            <div className="rounded-full p-4 bg-emerald-50">
                                <Ruler className="h-6 w-6 text-emerald-500" />
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
                                    <Button className="bg-emerald-500" onClick={() => setIsAddVaccinationOpen(true)}>
                                        <Upload className="mr-1 h-4 w-4" /> Add Records
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
                                        {upcomingVaccinations.map((record) => (
                                            <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
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
                                                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" onClick={() => handleViewVaccination(record)}>
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700 hover:bg-gray-50" onClick={() => handleEditVaccination(record)}>
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDeleteVaccination(record)}>
                                                        <Trash className="h-4 w-4" />
                                                    </Button>

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
                                    <Button className="bg-emerald-500" onClick={() => setIsAddScreeningOpen(true)}>
                                        <Upload className="mr-2 h-4 w-4" /> Add Records
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
                                        {upcomingScreenings.map((screening) => (
                                            <tr key={screening.id} className="border-b border-gray-100 hover:bg-gray-50">
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
                                                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" onClick={() => handleViewScreening(screening)}>
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
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

            {/* Add Vaccination Modal */}
            <Dialog open={isAddVaccinationOpen} onOpenChange={setIsAddVaccinationOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Add Vaccination Record</DialogTitle>
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
                                <Label htmlFor="vaccine">Vaccine Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select vaccine" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mmr">MMR</SelectItem>
                                        <SelectItem value="tetanus">Tetanus Booster</SelectItem>
                                        <SelectItem value="flu">Flu Shot</SelectItem>
                                        <SelectItem value="hpv">HPV</SelectItem>
                                        <SelectItem value="hepatitis">Hepatitis B</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dueDate">Due Date</Label>
                                <Input id="dueDate" type="date" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="upcoming">Upcoming</SelectItem>
                                    <SelectItem value="overdue">Overdue</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" rows={3} placeholder="Additional notes or comments..." />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddVaccinationOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Add Record</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* View Vaccination Modal */}
            <Dialog open={isViewVaccinationOpen} onOpenChange={setIsViewVaccinationOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Vaccination Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="rounded-lg bg-gray-50 p-4 space-y-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Student</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedVaccination?.student}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Grade</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedVaccination?.grade}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Vaccine</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedVaccination?.vaccine}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Due Date</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedVaccination?.date}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">Status</p>
                                <Badge variant={selectedVaccination?.status === 'Overdue' ? "destructive" : "secondary"} className={selectedVaccination?.status === 'Overdue' ? "bg-red-100 text-red-700 border-none mt-1" : "bg-blue-50 text-blue-700 border-none mt-1"}>
                                    {selectedVaccination?.status}
                                </Badge>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">Notes</p>
                                <p className="text-sm text-gray-700 mt-1">{selectedVaccination?.notes}</p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsViewVaccinationOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Vaccination Modal */}
            <Dialog open={isEditVaccinationOpen} onOpenChange={setIsEditVaccinationOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Vaccination Record</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="editStudent">Student Name</Label>
                                <Input id="editStudent" defaultValue={selectedVaccination?.student} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="editGrade">Grade</Label>
                                <Input id="editGrade" defaultValue={selectedVaccination?.grade} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="editVaccine">Vaccine Type</Label>
                                <Input id="editVaccine" defaultValue={selectedVaccination?.vaccine} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="editDate">Due Date</Label>
                                <Input id="editDate" type="date" defaultValue={selectedVaccination?.date} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="editStatus">Status</Label>
                            <Select defaultValue={selectedVaccination?.status.toLowerCase()}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="upcoming">Upcoming</SelectItem>
                                    <SelectItem value="overdue">Overdue</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="editNotes">Notes</Label>
                            <Textarea id="editNotes" rows={3} defaultValue={selectedVaccination?.notes} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditVaccinationOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Vaccination Modal */}
            <Dialog open={isDeleteVaccinationOpen} onOpenChange={setIsDeleteVaccinationOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Delete Vaccination Record</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this vaccination record? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                            <p className="font-semibold text-gray-900">{selectedVaccination?.student}</p>
                            <p className="text-sm text-gray-600 mt-1">
                                {selectedVaccination?.vaccine} • {selectedVaccination?.date}
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteVaccinationOpen(false)}>Cancel</Button>
                        <Button className="bg-red-600 hover:bg-red-700">Delete Record</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Add Screening Modal */}
            <Dialog open={isAddScreeningOpen} onOpenChange={setIsAddScreeningOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Add Screening Record</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="screeningType">Screening Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="vision">Vision Screening</SelectItem>
                                        <SelectItem value="hearing">Hearing Test</SelectItem>
                                        <SelectItem value="dental">Dental Checkup</SelectItem>
                                        <SelectItem value="bmi">BMI Check</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="targetGroup">Target Group</Label>
                                <Input id="targetGroup" placeholder="e.g., Grade 1 & 3" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="screeningDate">Date</Label>
                                <Input id="screeningDate" placeholder="e.g., Nov 15-20, 2025" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="e.g., School Clinic" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="screeningStatus">Status</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="scheduled">Scheduled</SelectItem>
                                    <SelectItem value="upcoming">Upcoming</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="screeningNotes">Notes</Label>
                            <Textarea id="screeningNotes" rows={3} placeholder="Additional notes or comments..." />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddScreeningOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Add Record</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* View Screening Modal */}
            <Dialog open={isViewScreeningOpen} onOpenChange={setIsViewScreeningOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Screening Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="rounded-lg bg-gray-50 p-4 space-y-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Screening Type</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedScreening?.type}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Target Group</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedScreening?.group}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Date</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedScreening?.date}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Location</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedScreening?.location}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">Status</p>
                                <Badge variant="secondary" className={selectedScreening?.status === 'Completed' ? "bg-green-50 text-green-700 border-none mt-1" : "bg-blue-50 text-blue-700 border-none mt-1"}>
                                    {selectedScreening?.status}
                                </Badge>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">Notes</p>
                                <p className="text-sm text-gray-700 mt-1">{selectedScreening?.notes}</p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsViewScreeningOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
