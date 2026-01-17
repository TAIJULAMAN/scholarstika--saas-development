"use client"

import { X, User, Calendar, Phone, Droplet, GraduationCap, BookOpen, Clock, Award } from "lucide-react"

interface ChildProfileModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    child: {
        name: string
        grade: string
        studentId: string
        school: string
        attendance: number
        gpa: string
        lastGrade?: string
        nextExam?: string
    }
}

export function ChildProfileModal({ open, onOpenChange, child }: ChildProfileModalProps) {
    if (!open) return null

    const personalDetails = [
        { label: "Date of Birth", value: "March 15, 2009", icon: Calendar },
        { label: "Blood Group", value: "O+", icon: Droplet },
        { label: "Student ID", value: child.studentId, icon: User },
        { label: "School", value: child.school, icon: GraduationCap },
    ]

    const academicStats = [
        { label: "Attendance", value: `${child.attendance}%`, icon: Clock, color: "emerald" },
        { label: "GPA", value: child.gpa, icon: Award, color: "blue" },
        { label: "Current Grade", value: child.grade, icon: BookOpen, color: "purple" },
    ]

    const recentGrades = [
        { subject: "Mathematics", grade: "A-", percentage: "88%", teacher: "Mr. Anderson" },
        { subject: "Physics", grade: "B+", percentage: "85%", teacher: "Mrs. Davis" },
        { subject: "Chemistry", grade: "A", percentage: "92%", teacher: "Dr. Wilson" },
        { subject: "English", grade: "A", percentage: "90%", teacher: "Mrs. Johnson" },
        { subject: "History", grade: "B+", percentage: "87%", teacher: "Mr. Brown" },
    ]

    const upcomingExams = [
        { subject: "Physics", date: "January 20, 2026", time: "9:00 AM" },
        { subject: "Mathematics", date: "January 22, 2026", time: "10:00 AM" },
        { subject: "Chemistry", date: "January 24, 2026", time: "9:00 AM" },
    ]

    const teachers = [
        { name: "Mr. Anderson", subject: "Mathematics", contact: "anderson@school.edu" },
        { name: "Mrs. Davis", subject: "Physics", contact: "davis@school.edu" },
        { name: "Dr. Wilson", subject: "Chemistry", contact: "wilson@school.edu" },
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-xl">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">{child.name}</h2>
                            <p className="mt-1 text-emerald-100">{child.grade} • {child.studentId}</p>
                        </div>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="rounded-lg p-2 text-white transition-colors hover:bg-white/20"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Academic Stats */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Academic Overview</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            {academicStats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <div key={index} className="rounded-lg bg-white shadow-md p-5">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-emerald-500 bg-emerald-50`}>
                                                <Icon className={`h-6 w-6`} />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                                <p className="text-xs text-gray-500">{stat.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Personal Information</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {personalDetails.map((detail, index) => {
                                const Icon = detail.icon
                                return (
                                    <div key={index} className="flex items-center gap-3 rounded-lg shadow-md bg-white p-5">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                                            <Icon className="h-5 w-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">{detail.label}</p>
                                            <p className="font-medium text-gray-900">{detail.value}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Recent Grades */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Recent Grades</h3>
                        <div className="space-y-2">
                            {recentGrades.map((grade, index) => (
                                <div key={index} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{grade.subject}</p>
                                        <p className="text-xs text-gray-500">{grade.teacher}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-600">{grade.percentage}</span>
                                        <span className="rounded-md bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                                            {grade.grade}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Exams */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Upcoming Exams</h3>
                        <div className="space-y-2">
                            {upcomingExams.map((exam, index) => (
                                <div key={index} className="flex items-center justify-between rounded-lg border border-orange-200 bg-orange-50 p-4">
                                    <div>
                                        <p className="font-medium text-gray-900">{exam.subject}</p>
                                        <p className="text-xs text-gray-600">{exam.time}</p>
                                    </div>
                                    <span className="text-sm font-medium text-orange-700">{exam.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Teachers */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Key Teachers</h3>
                        <div className="grid gap-3 md:grid-cols-2">
                            {teachers.map((teacher, index) => (
                                <div key={index} className="rounded-lg border border-gray-200 bg-white p-4">
                                    <p className="font-medium text-gray-900">{teacher.name}</p>
                                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                                    <p className="mt-1 text-xs text-gray-500">{teacher.contact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                        <h3 className="mb-3 text-sm font-bold text-emerald-900">Emergency Contacts</h3>
                        <div className="grid gap-3 md:grid-cols-2">
                            <div>
                                <p className="text-xs text-emerald-700">Parent Contact</p>
                                <p className="font-medium text-emerald-900">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <p className="text-xs text-emerald-700">Emergency Contact</p>
                                <p className="font-medium text-emerald-900">+1 (555) 987-6543</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 border-t border-gray-200 bg-white p-4">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
