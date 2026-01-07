"use client"

import { User, Mail, Phone, MapPin, Shield, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NurseProfilePage() {
    const nurseData = {
        name: "Sarah Nurse",
        role: "School Nurse",
        department: "Health & Wellness",
        email: "sarah.nurse@school.edu",
        phone: "+1 (555) 123-4567",
        location: "Main Clinic, Building A",
        joinDate: "August 2023",
        status: "Active",
        licenseNumber: "RN-12345678",
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Nurse Profile</h2>
                <p className="text-gray-500">Manage your personal information and account settings.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Profile Card */}
                <Card className="col-span-3 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                                <AvatarImage src="/placeholder-avatar.jpg" />
                                <AvatarFallback className="text-2xl bg-emerald-100 text-emerald-600">SN</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1 text-center sm:text-left">
                                <h3 className="text-2xl font-bold">{nurseData.name}</h3>
                                <p className="text-gray-500">{nurseData.role}</p>
                                <div className="flex items-center justify-center gap-2 sm:justify-start pt-2">
                                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                        {nurseData.status}
                                    </Badge>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        Full Time
                                    </Badge>
                                </div>
                            </div>
                            <div className="ml-auto flex gap-2">
                                <Button variant="outline">Edit Profile</Button>
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                    onClick={() => window.location.href = "/nurse"}
                                >
                                    Complete Setup
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 pt-6 border-t">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Full Name</label>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.name}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Email Address</label>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.email}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Phone Number</label>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.phone}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Location</label>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.location}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Department</label>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.department}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Join Date</label>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>{nurseData.joinDate}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Professional Details Card */}
                <Card className="col-span-3 lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Professional Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-lg border p-3 bg-gray-50">
                            <p className="text-sm font-medium text-gray-500">License Number</p>
                            <p className="font-mono text-sm">{nurseData.licenseNumber}</p>
                        </div>

                        <div>
                            <h4 className="mb-2 text-sm font-medium">Specializations</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Pediatrics</Badge>
                                <Badge variant="secondary">First Aid</Badge>
                                <Badge variant="secondary">Emergency Care</Badge>
                            </div>
                        </div>

                        <div className="pt-4 border-t">
                            <Button className="w-full" variant="secondary">View Schedule</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
