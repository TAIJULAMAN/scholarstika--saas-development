"use client"

import { MoreHorizontal, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const visits = [
    {
        id: 1,
        student: {
            name: "Alex Thompson",
            grade: "Grade 5-A",
            image: "/placeholder-student-1.jpg",
            initials: "AT",
        },
        reason: "Stomach Ache",
        time: "09:30 AM",
        status: "Checked In",
        severity: "low",
    },
    {
        id: 2,
        student: {
            name: "Sarah Williams",
            grade: "Grade 3-B",
            image: "/placeholder-student-2.jpg",
            initials: "SW",
        },
        reason: "Minor Cut",
        time: "10:15 AM",
        status: "Treated",
        severity: "low",
    },
    {
        id: 3,
        student: {
            name: "Michael Chen",
            grade: "Grade 8-C",
            image: "/placeholder-student-3.jpg",
            initials: "MC",
        },
        reason: "Fever",
        time: "11:00 AM",
        status: "Waiting",
        severity: "medium",
    },
    {
        id: 4,
        student: {
            name: "Emily Davis",
            grade: "Grade 4-A",
            image: "/placeholder-student-4.jpg",
            initials: "ED",
        },
        reason: "Allergic Reaction",
        time: "11:30 AM",
        status: "In Progress",
        severity: "high",
    },
]

import { NewVisitDialog } from "@/components/nurse/dashboard/new-visit-dialog"

export function TodaysVisits() {
    return (
        <Card className="col-span-1 lg:col-span-2 px-2 py-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold">Today's Clinic Visits</CardTitle>
                </div>
                <NewVisitDialog>
                    <Button>New Visit</Button>
                </NewVisitDialog>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {visits.map((visit) => (
                        <div
                            key={visit.id}
                            className="flex items-center justify-between rounded-lg border p-6 transition-colors hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={visit.student.image} alt={visit.student.name} />
                                    <AvatarFallback>{visit.student.initials}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{visit.student.name}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>{visit.student.grade}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {visit.time}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="hidden text-right sm:block">
                                    <p className="text-sm font-medium">{visit.reason}</p>
                                    <div className="flex items-center justify-end gap-2 mt-1">
                                        <Badge
                                            variant={
                                                visit.severity === "high"
                                                    ? "destructive"
                                                    : visit.severity === "medium"
                                                        ? "secondary" // Changed from warning to secondary as warning might not exist in default shadcn
                                                        : "outline"
                                            }
                                            className={visit.severity === "medium" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-none" : ""}
                                        >
                                            {visit.severity.charAt(0).toUpperCase() + visit.severity.slice(1)}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                            {visit.status}
                                        </Badge>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuItem>Edit Visit</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
