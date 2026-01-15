"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, User, GraduationCap, BookOpen, Users } from "lucide-react"

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

interface ViewStaffDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    member: StaffMember
}

export function ViewStaffDialog({ open, onOpenChange, member }: ViewStaffDialogProps) {
    const getRoleColor = (role: string) => {
        switch (role) {
            case "Student":
                return { bg: "from-blue-50 to-blue-100", icon: "bg-blue-600" }
            case "Teacher":
                return { bg: "from-purple-50 to-purple-100", icon: "bg-purple-600" }
            case "Parent":
                return { bg: "from-orange-50 to-orange-100", icon: "bg-orange-600" }
            default:
                return { bg: "from-gray-50 to-gray-100", icon: "bg-gray-600" }
        }
    }

    const roleColors = getRoleColor(member.role)

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full md:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{member.role} Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    {/* Member Info */}
                    <div className={`rounded-lg bg-gradient-to-br ${roleColors.bg} p-6`}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`flex h-16 w-16 items-center justify-center rounded-full ${roleColors.icon} text-white text-2xl font-bold`}>
                                {member.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                                {member.status}
                            </span>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="rounded-lg bg-blue-50 p-2">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Email Address</p>
                                    <p className="font-medium text-gray-900">{member.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="rounded-lg bg-green-50 p-2">
                                    <Phone className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Phone Number</p>
                                    <p className="font-medium text-gray-900">{member.phone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Role-specific information */}
                        {member.role === "Student" && member.grade && (
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="rounded-lg bg-purple-50 p-2">
                                        <GraduationCap className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Grade/Section</p>
                                        <p className="font-medium text-gray-900">{member.grade}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {member.role === "Teacher" && member.subject && (
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="rounded-lg bg-purple-50 p-2">
                                        <BookOpen className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Subject</p>
                                        <p className="font-medium text-gray-900">{member.subject}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {member.role === "Parent" && member.studentName && (
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="rounded-lg bg-orange-50 p-2">
                                        <Users className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Student Name</p>
                                        <p className="font-medium text-gray-900">{member.studentName}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="rounded-lg bg-orange-50 p-2">
                                    <Calendar className="h-5 w-5 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Joined Date</p>
                                    <p className="font-medium text-gray-900">
                                        {new Date(member.joinedDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={() => onOpenChange(false)}>Close</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
