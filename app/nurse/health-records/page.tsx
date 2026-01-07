"use client"

import { Search, Filter, Plus, FileText, AlertCircle, Heart, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Health Records (Kardex)</h2>
                    <p className="text-gray-500">Manage student health profiles, allergies, and conditions.</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2 h-4 w-4" /> Add Student Record
                </Button>
            </div>

            {/* Stats Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                        <p className="text-xs text-muted-foreground">+12 from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
                        <AlertCircle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Requires daily monitoring</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conditions</CardTitle>
                        <Heart className="h-4 w-4 text-pink-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145</div>
                        <p className="text-xs text-muted-foreground">Students with chronic conditions</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Allergies</CardTitle>
                        <Activity className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">87</div>
                        <p className="text-xs text-muted-foreground">Food or drug allergies tracked</p>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search by name, grade, or condition..."
                        className="pl-9"
                    />
                </div>
                <Button variant="outline" className="w-full md:w-auto">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
            </div>

            {/* Students Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Active Health Records</CardTitle>
                    <CardDescription>A list of all students with registered health conditions or alerts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead>Blood Type</TableHead>
                                <TableHead>Conditions</TableHead>
                                <TableHead>Allergies</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map((student) => (
                                <TableRow key={student.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={student.image} />
                                                <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div className="font-medium">{student.name}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{student.grade}</TableCell>
                                    <TableCell>{student.bloodType}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {student.conditions.length > 0 ? student.conditions.map(c => (
                                                <Badge key={c} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                                                    {c}
                                                </Badge>
                                            )) : <span className="text-gray-400 text-sm">-</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {student.allergies.length > 0 ? student.allergies.map(a => (
                                                <Badge key={a} variant="destructive" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                                                    {a}
                                                </Badge>
                                            )) : <span className="text-gray-400 text-sm">-</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${student.status === 'Critical' ? 'bg-red-500' : student.status === 'Stable' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                            <span>{student.status}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">View</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
