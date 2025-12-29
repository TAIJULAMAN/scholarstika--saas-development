"use client"

import { BookOpen, Users, Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"

const classes = [
    {
        id: 1,
        subject: "Mathematics",
        grade: "Grade 10-A",
        students: 28,
        schedule: "Mon, Wed, Fri - 9:00 AM",
        room: "Room 101",
        color: "from-blue-500 to-blue-600",
    },
    {
        id: 2,
        subject: "Mathematics",
        grade: "Grade 10-B",
        students: 26,
        schedule: "Mon, Wed, Fri - 10:30 AM",
        room: "Room 101",
        color: "from-purple-500 to-purple-600",
    },
    {
        id: 3,
        subject: "Algebra",
        grade: "Grade 11-A",
        students: 24,
        schedule: "Tue, Thu - 1:00 PM",
        room: "Room 102",
        color: "from-green-500 to-green-600",
    },
    {
        id: 4,
        subject: "Calculus",
        grade: "Grade 12-A",
        students: 22,
        schedule: "Tue, Thu - 2:30 PM",
        room: "Room 102",
        color: "from-orange-500 to-orange-600",
    },
    {
        id: 5,
        subject: "Statistics",
        grade: "Grade 11-B",
        students: 25,
        schedule: "Mon, Wed - 2:00 PM",
        room: "Room 103",
        color: "from-pink-500 to-pink-600",
    },
    {
        id: 6,
        subject: "Geometry",
        grade: "Grade 9-A",
        students: 17,
        schedule: "Tue, Thu, Fri - 11:00 AM",
        room: "Room 103",
        color: "from-indigo-500 to-indigo-600",
    },
]

export default function TeacherClassesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="My Classes"
                description="Manage your assigned classes and subjects"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {classes.map((cls) => (
                    <div
                        key={cls.id}
                        className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                    >
                        <div className={`h-32 bg-gradient-to-br ${cls.color} p-6`}>
                            <div className="flex h-full flex-col justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                                        <BookOpen className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{cls.subject}</h3>
                                    <p className="text-sm text-white/90">{cls.grade}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Users className="h-4 w-4" />
                                    <span>{cls.students} Students</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    <span>{cls.schedule}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span>{cls.room}</span>
                                </div>
                            </div>
                            <button className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
