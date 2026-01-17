"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit, Key } from "lucide-react"
import { EditProfileDialog } from "@/components/student/profile/edit-profile-dialog"
import { ChangePasswordDialog } from "@/components/student/profile/change-password-dialog"

export default function StudentProfilePage() {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

    // Student data
    const studentData = {
        name: "Alex Johnson",
        studentId: "STU-2024-001234",
        email: "alex.johnson@student.edu",
        phone: "+1 (555) 234-5678",
        dateOfBirth: "March 15, 2008",
        address: "456 Student Lane, Springfield, IL 62701",
        grade: "Grade 10",
        section: "Section A",
        rollNumber: "10-A-023",
        admissionDate: "September 1, 2020",
        avatar: "/avatars/student.jpg",
        guardianName: "Robert Johnson",
        guardianPhone: "+1 (555) 876-5432",
        guardianEmail: "robert.johnson@email.com"
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setIsEditProfileOpen(true)}
                        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                    >
                        <Edit className="h-4 w-4" />
                        Edit Profile
                    </button>
                    <button
                        onClick={() => setIsChangePasswordOpen(true)}
                        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                    >
                        <Key className="h-4 w-4" />
                        Change Password
                    </button>
                </div>
            </div>

            {/* Profile Card */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-6 md:flex-row">
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center gap-4 md:w-64">
                        <Avatar className="h-32 w-32 border-4 border-gray-200">
                            <AvatarImage src={studentData.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl text-white">
                                {studentData.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-900">{studentData.name}</h2>
                            <p className="text-sm text-gray-500">{studentData.studentId}</p>
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                                <BookOpen className="h-3 w-3" />
                                {studentData.grade}
                            </div>
                        </div>
                    </div>

                    {/* Information Grid */}
                    <div className="flex-1 space-y-6">
                        {/* Personal Information */}
                        <div>
                            <div className="mb-4 flex items-center gap-2 border-b pb-2">
                                <User className="h-5 w-5 text-emerald-600" />
                                <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Full Name</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Student ID</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.studentId}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Date of Birth</p>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.dateOfBirth}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Email Address</p>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Phone Number</p>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.phone}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Address</p>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                                        <p className="text-sm text-gray-900">{studentData.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div>
                            <div className="mb-4 flex items-center gap-2 border-b pb-2">
                                <BookOpen className="h-5 w-5 text-emerald-600" />
                                <h3 className="text-lg font-bold text-gray-900">Academic Information</h3>
                            </div>
                            <div className="grid gap-4 md:grid-cols-3">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Grade</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.grade}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Section</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.section}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Roll Number</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.rollNumber}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-xs font-medium text-gray-500 mb-1">Admission Date</p>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.admissionDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guardian Information */}
                        <div>
                            <div className="mb-4 flex items-center gap-2 border-b pb-2">
                                <User className="h-5 w-5 text-emerald-600" />
                                <h3 className="text-lg font-bold text-gray-900">Guardian Information</h3>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Guardian Name</p>
                                    <p className="text-sm font-semibold text-gray-900">{studentData.guardianName}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Guardian Phone</p>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.guardianPhone}</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-xs font-medium text-gray-500 mb-1">Guardian Email</p>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{studentData.guardianEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialogs */}
            <EditProfileDialog
                open={isEditProfileOpen}
                onOpenChange={setIsEditProfileOpen}
                studentData={studentData}
            />

            <ChangePasswordDialog
                open={isChangePasswordOpen}
                onOpenChange={setIsChangePasswordOpen}
            />
        </div>
    )
}
