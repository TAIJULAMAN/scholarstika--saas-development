"use client"

import { BookOpen, User, Clock, MoreVertical, Search, Filter } from "lucide-react"

const classes = [
    {
        id: 1,
        name: "Advanced Mathematics",
        code: "MTH-101",
        teacher: "Dr. Sarah Johnson",
        time: "Mon, Wed, Fri • 09:00 AM",
        room: "Room 101",
        progress: 75,
        color: "bg-blue-50 text-blue-700",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        name: "Physics Laboratory",
        code: "PHY-202",
        teacher: "Prof. Robert Smith",
        time: "Tue, Thu • 11:00 AM",
        room: "Lab 3",
        progress: 60,
        color: "bg-purple-50 text-purple-700",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "English Literature",
        code: "ENG-301",
        teacher: "Ms. Emily Davis",
        time: "Mon, Wed • 01:00 PM",
        room: "Room 204",
        progress: 85,
        color: "bg-emerald-50 text-emerald-700",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        name: "Chemistry Basics",
        code: "CHM-105",
        teacher: "Dr. Michael Brown",
        time: "Fri • 02:00 PM",
        room: "Lab 1",
        progress: 45,
        color: "bg-orange-50 text-orange-700",
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        name: "World History",
        code: "HIS-101",
        teacher: "Mr. James Wilson",
        time: "Tue, Thu • 09:00 AM",
        room: "Room 105",
        progress: 90,
        color: "bg-red-50 text-red-700",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        name: "Computer Science",
        code: "CS-101",
        teacher: "Ms. Jessica Taylor",
        time: "Wed • 03:00 PM",
        room: "Lab 5",
        progress: 30,
        color: "bg-indigo-50 text-indigo-700",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
    }
]

export default function StudentClassesPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-indigo-600 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">My Classes</h1>
                        <p className="mt-1 text-indigo-100 opacity-90">Access your course materials and details</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-indigo-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <BookOpen className="h-4 w-4" />
                        6 Active Courses
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 md:max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    Filter
                </button>
            </div>

            {/* Classes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {classes.map((cls) => (
                    <div key={cls.id} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-indigo-200">
                        <div className="relative h-32 w-full overflow-hidden">
                            <img src={cls.image} alt={cls.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-3 left-4 text-white">
                                <h3 className="font-bold">{cls.name}</h3>
                                <p className="text-xs opacity-90">{cls.code}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span>{cls.teacher}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span>{cls.time}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-1">
                                    <span>Progress</span>
                                    <span>{cls.progress}%</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100">
                                    <div
                                        className="h-full rounded-full bg-indigo-500 transition-all"
                                        style={{ width: `${cls.progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                                <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${cls.color}`}>
                                    {cls.room}
                                </span>
                                <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-indigo-600">
                                    <MoreVertical className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
