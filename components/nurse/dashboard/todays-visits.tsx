"use client"

import { useState } from "react"
import { MoreHorizontal, Clock, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const visits = [
    {
        id: 1,
        student: {
            name: "Alex Thompson",
            grade: "Grade 5-A",
            image: "/placeholder-student-1.jpg",
            initials: "AT",
        },
        reason: "Stomach Ache",
        time: "09:30 AM",
        status: "Checked In",
        severity: "low",
        notes: "Student complained of mild stomach discomfort. Provided rest and water.",
        treatment: "Rest and hydration",
        temperature: "98.6°F",
    },
    {
        id: 2,
        student: {
            name: "Sarah Williams",
            grade: "Grade 3-B",
            image: "/placeholder-student-2.jpg",
            initials: "SW",
        },
        reason: "Minor Cut",
        time: "10:15 AM",
        status: "Treated",
        severity: "low",
        notes: "Small cut on left hand from playground equipment. Cleaned and bandaged.",
        treatment: "Cleaned wound, applied antiseptic, bandaged",
        temperature: "98.4°F",
    },
    {
        id: 3,
        student: {
            name: "Michael Chen",
            grade: "Grade 8-C",
            image: "/placeholder-student-3.jpg",
            initials: "MC",
        },
        reason: "Fever",
        time: "11:00 AM",
        status: "Waiting",
        severity: "medium",
        notes: "Student reported feeling warm and tired. Temperature elevated.",
        treatment: "Monitoring temperature, contacted parents",
        temperature: "100.2°F",
    },
    {
        id: 4,
        student: {
            name: "Emily Davis",
            grade: "Grade 4-A",
            image: "/placeholder-student-4.jpg",
            initials: "ED",
        },
        reason: "Allergic Reaction",
        time: "11:30 AM",
        status: "In Progress",
        severity: "high",
        notes: "Mild allergic reaction to unknown substance. Administered antihistamine.",
        treatment: "Antihistamine administered, monitoring closely",
        temperature: "98.8°F",
    },
]

import { NewVisitDialog } from "@/components/nurse/dashboard/new-visit-dialog"

export function TodaysVisits() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedVisit, setSelectedVisit] = useState<typeof visits[0] | null>(null)

    const handleView = (visit: typeof visits[0]) => {
        setSelectedVisit(visit)
        setIsViewModalOpen(true)
    }

    const handleEdit = (visit: typeof visits[0]) => {
        setSelectedVisit(visit)
        setIsEditModalOpen(true)
    }

    const handleDelete = (visit: typeof visits[0]) => {
        setSelectedVisit(visit)
        setIsDeleteModalOpen(true)
    }

    return (
        <>
            <Card className="col-span-1 lg:col-span-2 px-2 py-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                    <div className="space-y-1">
                        <CardTitle className="text-xl font-bold">Clinic Visits</CardTitle>
                    </div>
                    <NewVisitDialog>
                        <Button variant="outline" className="bg-emerald-500 text-white">
                            <Plus className="mr-1 h-4 w-4" />
                            Add New Visit
                        </Button>
                    </NewVisitDialog>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {visits.map((visit) => (
                            <div
                                key={visit.id}
                                className="flex items-center justify-between rounded-lg border p-6 transition-colors hover:bg-gray-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{visit.student.name}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span>{visit.student.grade}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {visit.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="hidden text-right sm:block">
                                        <p className="text-sm font-medium">{visit.reason}</p>
                                        <div className="flex items-center justify-end gap-2 mt-1">
                                            <Badge
                                                variant={
                                                    visit.severity === "high"
                                                        ? "destructive"
                                                        : visit.severity === "medium"
                                                            ? "secondary"
                                                            : "outline"
                                                }
                                                className={visit.severity === "medium" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-none" : ""}
                                            >
                                                {visit.severity.charAt(0).toUpperCase() + visit.severity.slice(1)}
                                            </Badge>
                                            <Badge variant="secondary" className="bg-blue-50 text-emerald-500">
                                                {visit.status}
                                            </Badge>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => handleView(visit)}>View Details</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleEdit(visit)}>Edit Visit</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(visit)}>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* View Details Modal */}
            <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Visit Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="rounded-lg bg-gray-50 p-4 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{selectedVisit?.student.name}</h3>
                                    <p className="text-sm text-gray-600">{selectedVisit?.student.grade}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">Time:</span>
                                    <p className="text-gray-900">{selectedVisit?.time}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Status:</span>
                                    <p className="text-gray-900">{selectedVisit?.status}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Reason:</span>
                                    <p className="text-gray-900">{selectedVisit?.reason}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Temperature:</span>
                                    <p className="text-gray-900">{selectedVisit?.temperature}</p>
                                </div>
                            </div>

                            <div>
                                <span className="font-medium text-gray-700 text-sm">Treatment:</span>
                                <p className="text-sm text-gray-900 mt-1">{selectedVisit?.treatment}</p>
                            </div>

                            <div>
                                <span className="font-medium text-gray-700 text-sm">Notes:</span>
                                <p className="text-sm text-gray-900 mt-1">{selectedVisit?.notes}</p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Visit Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Visit</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="editReason">Reason for Visit</Label>
                                <Input id="editReason" defaultValue={selectedVisit?.reason} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="editTime">Time</Label>
                                <Input id="editTime" type="time" defaultValue={selectedVisit?.time} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="editStatus">Status</Label>
                                <Select defaultValue={selectedVisit?.status}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Checked In">Checked In</SelectItem>
                                        <SelectItem value="Waiting">Waiting</SelectItem>
                                        <SelectItem value="In Progress">In Progress</SelectItem>
                                        <SelectItem value="Treated">Treated</SelectItem>
                                        <SelectItem value="Discharged">Discharged</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="editSeverity">Severity</Label>
                                <Select defaultValue={selectedVisit?.severity}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="editTemperature">Temperature</Label>
                            <Input id="editTemperature" defaultValue={selectedVisit?.temperature} placeholder="e.g., 98.6°F" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="editTreatment">Treatment</Label>
                            <Textarea id="editTreatment" defaultValue={selectedVisit?.treatment} rows={2} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="editNotes">Notes</Label>
                            <Textarea id="editNotes" defaultValue={selectedVisit?.notes} rows={3} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Delete Visit Record</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this visit record? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                            <p className="font-semibold text-gray-900">{selectedVisit?.student.name}</p>
                            <p className="text-sm text-gray-600 mt-1">
                                {selectedVisit?.student.grade} • {selectedVisit?.time} • {selectedVisit?.reason}
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
                        <Button className="bg-red-600 hover:bg-red-700">Delete Visit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
