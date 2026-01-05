"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StaffMember {
    id: number
    name: string
    email: string
    phone: string
    role: string
    grade?: string
    subject?: string
    studentName?: string
    joinedDate: string
    status: string
}

interface EditStaffDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    member: StaffMember
}

export function EditStaffDialog({ open, onOpenChange, member }: EditStaffDialogProps) {
    const [formData, setFormData] = useState({
        name: member.name,
        email: member.email,
        phone: member.phone,
        role: member.role,
        grade: member.grade || "",
        subject: member.subject || "",
        studentName: member.studentName || "",
        joinedDate: member.joinedDate,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Updating staff member:", formData)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Staff Member</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="email@example.com"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 (555) 123-4567"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                            <Label htmlFor="role">Role *</Label>
                            <Select
                                value={formData.role}
                                onValueChange={(value) => setFormData({ ...formData, role: value })}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Student">Student</SelectItem>
                                    <SelectItem value="Teacher">Teacher</SelectItem>
                                    <SelectItem value="Parent">Parent</SelectItem>
                                    <SelectItem value="Bursar">Bursar</SelectItem>
                                    <SelectItem value="Nurse">Nurse</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Conditional fields based on role */}
                        {formData.role === "Student" && (
                            <div className="space-y-2">
                                <Label htmlFor="grade">Grade/Section *</Label>
                                <Select
                                    value={formData.grade}
                                    onValueChange={(value) => setFormData({ ...formData, grade: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Grade 8-A">Grade 8-A</SelectItem>
                                        <SelectItem value="Grade 8-B">Grade 8-B</SelectItem>
                                        <SelectItem value="Grade 9-A">Grade 9-A</SelectItem>
                                        <SelectItem value="Grade 9-B">Grade 9-B</SelectItem>
                                        <SelectItem value="Grade 10-A">Grade 10-A</SelectItem>
                                        <SelectItem value="Grade 10-B">Grade 10-B</SelectItem>
                                        <SelectItem value="Grade 11-A">Grade 11-A</SelectItem>
                                        <SelectItem value="Grade 11-B">Grade 11-B</SelectItem>
                                        <SelectItem value="Grade 12-A">Grade 12-A</SelectItem>
                                        <SelectItem value="Grade 12-B">Grade 12-B</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        {formData.role === "Teacher" && (
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject *</Label>
                                <Input
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Subject taught"
                                />
                            </div>
                        )}

                        {formData.role === "Parent" && (
                            <div className="space-y-2">
                                <Label htmlFor="studentName">Student Name *</Label>
                                <Input
                                    id="studentName"
                                    value={formData.studentName}
                                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                    placeholder="Child's name"
                                />
                            </div>
                        )}

                        {/* Joined Date */}
                        <div className="space-y-2">
                            <Label htmlFor="joinedDate">Joining Date *</Label>
                            <Input
                                id="joinedDate"
                                type="date"
                                value={formData.joinedDate}
                                onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="text-white">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
