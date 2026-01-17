"use client"

import { Users, BookOpen, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ChildProfileModal } from "@/components/parent/children/child-profile-modal"

export default function MyChildrenPage() {
    const children = [
        {
            id: 1,
            name: "Alex Thompson",
            grade: "Grade 11-A",
            studentId: "ST-2024-001",
            school: "Main Campus",
            attendance: 92,
            gpa: "3.8",
            teachers: ["Mr. Anderson (Math)", "Mrs. Davis (Physics)"],
        },
        {
            id: 2,
            name: "Sarah Thompson",
            grade: "Grade 8-B",
            studentId: "ST-2024-089",
            school: "Junior Wing",
            attendance: 96,
            gpa: "4.0",
            teachers: ["Mrs. Wilson (English)", "Mr. Brown (Science)"],
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedChild, setSelectedChild] = useState<typeof children[0] | null>(null)

    const handleViewProfile = (child: typeof children[0]) => {
        setSelectedChild(child)
        setIsModalOpen(true)
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">My Children</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Manage profiles and view details for your linked students</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <Users className="h-4 w-4" />
                        {children.length} Students Linked
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {children.map((child) => (
                    <div key={child.id} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-200">
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{child.name}</h3>
                                    <p className="text-sm font-medium text-emerald-600">{child.grade}</p>
                                    <p className="text-xs text-gray-500">ID: {child.studentId}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="rounded-lg bg-gray-50 p-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        Attendance
                                    </div>
                                    <p className="mt-1 text-xl font-bold text-gray-900">{child.attendance}%</p>
                                </div>
                                <div className="rounded-lg bg-gray-50 p-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <BookOpen className="h-4 w-4" />
                                        GPA
                                    </div>
                                    <p className="mt-1 text-xl font-bold text-gray-900">{child.gpa}</p>
                                </div>
                            </div>

                            <div className="mb-6 space-y-3">
                                <h4 className="text-sm font-semibold text-gray-900">Key Teachers</h4>
                                <div className="flex flex-wrap gap-2">
                                    {child.teachers.map((teacher, i) => (
                                        <span key={i} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                            {teacher}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => handleViewProfile(child)}
                                className="flex-1 rounded-lg bg-emerald-600 py-2.5 px-5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                            >
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Child Profile Modal */}
            {selectedChild && (
                <ChildProfileModal
                    open={isModalOpen}
                    onOpenChange={setIsModalOpen}
                    child={selectedChild}
                />
            )}
        </div>
    )
}
