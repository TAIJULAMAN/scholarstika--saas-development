"use client"

import { PageHeader } from "@/components/common/page-header"
import { Settings as SettingsIcon, User, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function BranchSettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Settings"
                description="Manage branch settings and preferences"
            />

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Profile Settings */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-3">
                            <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Profile Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <Label>Branch Name</Label>
                            <Input defaultValue="Hillcrest School" />
                        </div>
                        <div>
                            <Label>Contact Email</Label>
                            <Input defaultValue="hillcrest@scholarstika.com" />
                        </div>
                        <div>
                            <Label>Contact Phone</Label>
                            <Input defaultValue="+1 (555) 123-4567" />
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                            Save Changes
                        </Button>
                    </div>
                </div>

                {/* Notification Settings */}
            </div>

            {/* Notification Settings */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-purple-50 p-3">
                        <Bell className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label>Email Notifications</Label>
                        <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>SMS Notifications</Label>
                        <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>Push Notifications</Label>
                        <Switch />
                    </div>
                </div>
            </div>

            {/* Fee Automation Settings */}
            <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-50 p-3">
                        <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Fee Automation</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label className="text-base">Auto-send Fee Reminders</Label>
                            <p className="text-sm text-gray-500">Automatically send reminders to students with past due fees on the due date.</p>
                        </div>
                        <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <Label className="text-base">Notify Parents Automatically</Label>
                            <p className="text-sm text-gray-500">Send a copy of the fee reminder to registered parent contacts.</p>
                        </div>
                        <Switch />
                    </div>
                    <div className="pt-2">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            Save Automation Settings
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
