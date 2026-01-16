"use client"

import { Plus, AlertCircle, Heart, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const students = [
    {
        id: 1,
        name: "Alex Thompson",
        grade: "5-A",
        conditions: ["Asthma"],
        allergies: ["Peanuts", "Dust"],
        bloodType: "O+",
        emergencyContact: "Mrs. Thompson (Mother)",
        image: "/placeholder-student-1.jpg",
        status: "Critical"
    },
    {
        id: 2,
        name: "Sarah Williams",
        grade: "3-B",
        conditions: ["Diabetes Type 1"],
        allergies: [],
        bloodType: "A+",
        emergencyContact: "Mr. Williams (Father)",
        image: "/placeholder-student-2.jpg",
        status: "Stable"
    },
    {
        id: 3,
        name: "Michael Chen",
        grade: "8-C",
        conditions: [],
        allergies: ["Penicillin"],
        bloodType: "B-",
        emergencyContact: "Mrs. Chen (Mother)",
        image: "/placeholder-student-3.jpg",
        status: "Good"
    },
    {
        id: 4,
        name: "Emily Davis",
        grade: "4-A",
        conditions: ["Epilepsy"],
        allergies: [],
        bloodType: "AB-",
        emergencyContact: "Mrs. Davis (Mother)",
        image: "/placeholder-student-4.jpg",
        status: "Stable"
    },
    {
        id: 5,
        name: "James Wilson",
        grade: "6-B",
        conditions: [],
        allergies: ["Bee Stings"],
        bloodType: "O-",
        emergencyContact: "Mr. Wilson (Father)",
        image: "/placeholder-student-5.jpg",
        status: "Good"
    }
]



export default function HealthRecordsPage() {
    return (
        <div className="space-y-6">

            {/* Stats Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Total Students</CardTitle>
                        <div className="rounded-full p-4 bg-blue-50">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                    </CardContent>
                </Card>
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Critical Cases</CardTitle>
                        <div className="rounded-full p-4 bg-red-50">
                            <AlertCircle className="h-6 w-6 text-red-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                    </CardContent>
                </Card>
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Conditions</CardTitle>
                        <div className="rounded-full p-4 bg-pink-50">
                            <Heart className="h-6 w-6 text-pink-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145</div>
                    </CardContent>
                </Card>
                <Card className="p-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-medium text-gray-600">Allergies</CardTitle>
                        <div className="rounded-full p-4 bg-emerald-50">
                            <Activity className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">87</div>
                    </CardContent>
                </Card>
            </div>

            {/* Students Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Health Records</h2>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" /> Add Record
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Grade</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Blood Type</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Conditions</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Allergies</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={student.image} />
                                                <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div className="font-medium text-gray-900">{student.name}</div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-gray-600">{student.grade}</td>
                                    <td className="whitespace-nowrap py-4 text-gray-600">{student.bloodType}</td>
                                    <td className="whitespace-nowrap py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {student.conditions.length > 0 ? student.conditions.map(c => (
                                                <Badge key={c} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none">
                                                    {c}
                                                </Badge>
                                            )) : <span className="text-gray-400 text-sm">-</span>}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {student.allergies.length > 0 ? student.allergies.map(a => (
                                                <Badge key={a} variant="destructive" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                                                    {a}
                                                </Badge>
                                            )) : <span className="text-gray-400 text-sm">-</span>}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${student.status === 'Critical' ? 'bg-red-500' : student.status === 'Stable' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                            <span className="text-gray-700">{student.status}</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4 pr-6 text-right">
                                        <Button variant="ghost" size="sm">View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
