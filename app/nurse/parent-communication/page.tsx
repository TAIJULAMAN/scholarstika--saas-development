"use client"

import { Megaphone, MessageSquare, Send, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ParentCommunicationPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2 lg:col-span-1 p-5">
                    <CardHeader>
                        <CardTitle>One-Click Notify</CardTitle>
                        <CardDescription>
                            Quickly send standard notifications for common clinic visits.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Select Student</Label>
                            <Input placeholder="Search student name..." />
                        </div>
                        <div className="grid gap-2">
                            <Label>Visit Reason</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select reason" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="headache">Headache</SelectItem>
                                    <SelectItem value="stomach">Stomach Ache</SelectItem>
                                    <SelectItem value="minor_injury">Minor Injury (Cut/Graze)</SelectItem>
                                    <SelectItem value="fever">Fever (Sent Home)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Action Taken</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select action" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rest">Rested in clinic</SelectItem>
                                    <SelectItem value="medication">Administered Medication</SelectItem>
                                    <SelectItem value="cleaned">Cleaned & Bandaged</SelectItem>
                                    <SelectItem value="sent_home">Sent Home</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full bg-emerald-500">
                            <Send className="mr-1 h-4 w-4" /> Send Notification
                        </Button>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 lg:col-span-1 p-5">
                    <CardHeader>
                        <CardTitle>Custom Message</CardTitle>
                        <CardDescription>
                            Compose a specific message for a parent or guardian.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Recipient</Label>
                            <Input placeholder="Enter parent email or phone..." />
                        </div>
                        <div className="grid gap-2">
                            <Label>Subject</Label>
                            <Input placeholder="Regarding..." />
                        </div>
                        <div className="grid gap-2">
                            <Label>Message</Label>
                            <Textarea
                                placeholder="Type your message here..."
                                className="min-h-[120px]"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button className="bg-emerald-500">
                                <Send className="mr-1 h-4 w-4" /> Send Email
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="p-5">
                <CardHeader>
                    <CardTitle>Recent Communications</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="space-y-1">
                                    <p className="font-medium">To: parent@example.com</p>
                                    <p className="text-sm text-gray-500">Student: Alex Thompson • Reason: Headache</p>
                                </div>
                                <span className="text-xs text-gray-400">2 hours ago</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
