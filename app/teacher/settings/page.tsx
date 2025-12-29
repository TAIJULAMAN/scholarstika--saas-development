"use client"

import { PageHeader } from "@/components/common/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export default function TeacherSettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Settings"
                description="Manage your profile and preferences"
            />

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Profile Picture */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Profile Picture</h3>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Avatar className="h-32 w-32">
                                <AvatarImage src="https://avatar.iran.liara.run/public/50" />
                                <AvatarFallback className="bg-emerald-600 text-white text-2xl">SJ</AvatarFallback>
                            </Avatar>
                            <button className="absolute bottom-0 right-0 rounded-full bg-emerald-600 p-2 text-white shadow-lg hover:bg-emerald-700">
                                <Camera className="h-4 w-4" />
                            </button>
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Click the camera icon to upload a new photo
                        </p>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Sarah" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Johnson" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="sarah.johnson@school.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="subject">Subject Specialization</Label>
                            <Input id="subject" defaultValue="Mathematics" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </div>
                </div>
            </div>

            {/* Change Password */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Change Password</h3>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Update Password</Button>
                </div>
            </div>

            {/* Notification Preferences */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Notification Preferences</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">Email Notifications</p>
                            <p className="text-sm text-gray-600">Receive email updates about assignments and messages</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">Assignment Reminders</p>
                            <p className="text-sm text-gray-600">Get reminded about upcoming assignment deadlines</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">Student Messages</p>
                            <p className="text-sm text-gray-600">Receive notifications for new student messages</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}
