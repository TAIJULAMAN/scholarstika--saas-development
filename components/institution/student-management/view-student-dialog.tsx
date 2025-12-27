"use client"

import { X, MapPin, Users, UserCheck, Clock } from "lucide-react"

interface ViewStudentDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    student: {
        name: string
        location: string
        status: string
        totalStudents: number
        activeStudents: number
        pending: number
        enrollmentRate: number
    }
}

export function ViewStudentDialog({ open, onOpenChange, student }: ViewStudentDialogProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Branch Details</h2>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">{student.name}</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-blue-50 p-2">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Location</p>
                                    <p className="mt-1 text-sm text-gray-900">{student.location}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-green-50 p-2">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Status</p>
                                    <p className="mt-1 text-sm text-gray-900">{student.status}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-gray-700">Statistics</h4>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-purple-600" />
                                    <p className="text-sm font-medium text-gray-500">Total Students</p>
                                </div>
                                <p className="mt-2 text-2xl font-bold text-gray-900">{student.totalStudents.toLocaleString()}</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                    <p className="text-sm font-medium text-gray-500">Active</p>
                                </div>
                                <p className="mt-2 text-2xl font-bold text-gray-900">{student.activeStudents.toLocaleString()}</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-yellow-600" />
                                    <p className="text-sm font-medium text-gray-500">Pending</p>
                                </div>
                                <p className="mt-2 text-2xl font-bold text-gray-900">{student.pending}</p>
                            </div>
                        </div>
                    </div>

                    {/* Enrollment Rate */}
                    <div>
                        <p className="text-sm font-medium text-gray-500">Enrollment Rate</p>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600"
                                style={{ width: `${student.enrollmentRate}%` }}
                            ></div>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{student.enrollmentRate}%</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
