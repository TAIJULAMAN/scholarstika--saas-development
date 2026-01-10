"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Key } from "lucide-react"
import { EditProfileDialog } from "@/components/institution/settings/edit-profile-dialog"
import { ChangePasswordDialog } from "@/components/institution/settings/change-password-dialog"

export default function BursarProfilePage() {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

    // User data
    const userData = {
        name: "Robert Chen",
        email: "robert.chen@hillcrest.edu",
        phone: "+1 (555) 234-5678",
        avatar: "https://avatar.iran.liara.run/public/33",
        role: "Finance Administrator"
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">User Profile</h2>
                <p className="text-gray-500 mt-1">Manage your account settings and preferences.</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setIsEditProfileOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                >
                    <User className="h-4 w-4" />
                    Edit Profile
                </button>
                <button
                    onClick={() => setIsChangePasswordOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                >
                    <Key className="h-4 w-4" />
                    Change Password
                </button>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm max-w-2xl">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-emerald-600" />
                        <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b">
                        <Avatar className="h-20 w-20 border-2 border-gray-200">
                            <AvatarImage src={userData.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-green-600 text-2xl text-white">
                                {userData.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-lg font-semibold text-gray-900">{userData.name}</p>
                            <p className="text-sm text-gray-500">{userData.role}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Full Name</p>
                            <p className="text-sm font-semibold text-gray-900">{userData.name}</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Email Address</p>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <p className="text-sm text-gray-900">{userData.email}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Phone Number</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <p className="text-sm text-gray-900">{userData.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EditProfileDialog
                open={isEditProfileOpen}
                onOpenChange={setIsEditProfileOpen}
                ownerData={userData}
            />

            <ChangePasswordDialog
                open={isChangePasswordOpen}
                onOpenChange={setIsChangePasswordOpen}
            />
        </div>
    )
}
