"use client"

import { AlertTriangle, FileText, Camera, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function IncidentReportingPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Incident Reporting</h2>
                    <p className="text-gray-500">Log accidents, injuries, and safety incidents.</p>
                </div>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
                    <AlertTriangle className="mr-2 h-4 w-4" /> Emergency Protocols
                </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>New Incident Report</CardTitle>
                        <CardDescription>
                            Please fill out all details accurately for official records.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label>Date & Time</Label>
                                <Input type="datetime-local" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Location</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="playground">Playground</SelectItem>
                                        <SelectItem value="classroom">Classroom</SelectItem>
                                        <SelectItem value="cafeteria">Cafeteria</SelectItem>
                                        <SelectItem value="gym">Gymnasium</SelectItem>
                                        <SelectItem value="hallway">Hallway</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label>Students Involved</Label>
                            <Input placeholder="Search and add students..." />
                        </div>

                        <div className="grid gap-2">
                            <Label>Incident Type</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="fall">Fall / Slip</SelectItem>
                                    <SelectItem value="collision">Collision</SelectItem>
                                    <SelectItem value="equipment">Equipment Related</SelectItem>
                                    <SelectItem value="fight">Physical Altercation</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Description of Incident</Label>
                            <Textarea
                                className="min-h-[100px]"
                                placeholder="Describe exactly what happened..."
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Injury Details & Treatment</Label>
                            <Textarea
                                className="min-h-[100px]"
                                placeholder="Describe injuries sustained and first aid provided..."
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Witnesses</Label>
                            <Input placeholder="Names of staff or student witnesses..." />
                        </div>

                        <div className="border-t pt-6 flex justify-end gap-4">
                            <Button variant="ghost">Cancel</Button>
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Submit Report
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6 lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Evidence</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                                <Camera className="mx-auto h-8 w-8 text-gray-400" />
                                <p className="mt-2 text-sm text-gray-500">Upload Photos</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin className="h-4 w-4" />
                                <span>Tag Exact Location on Map</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="rounded-lg border p-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-semibold text-sm">Playground Fall</span>
                                        <Badge variant="outline" className="text-xs">Yesterday</Badge>
                                    </div>
                                    <p className="text-xs text-gray-500">James Wilson (Gr 6)</p>
                                </div>
                                <div className="rounded-lg border p-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-semibold text-sm">Gym Collision</span>
                                        <Badge variant="outline" className="text-xs">Oct 24</Badge>
                                    </div>
                                    <p className="text-xs text-gray-500">Sarah & Emma</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
