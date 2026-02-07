"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PageHeader } from "@/components/common/page-header"
import { Building2, User, Mail, Phone, Globe, MapPin, Edit, Key, Shield } from "lucide-react"
import { EditInstitutionDialog } from "@/components/institution/settings/edit-institution-dialog"
import { EditProfileDialog } from "@/components/institution/settings/edit-profile-dialog"
import { ChangePasswordDialog } from "@/components/institution/settings/change-password-dialog"

export default function InstitutionSettingsPage() {
    const [isEditInstitutionOpen, setIsEditInstitutionOpen] = useState(false)
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

    // Institution data
    const institutionData = {
        name: "Springfield Academy",
        type: "Primary & Secondary School",
        address: "123 Education Street, Springfield, IL 62701",
        phone: "+1 (555) 123-4587",
        email: "info@springfieldacademy.edu",
        website: "https://springfieldacademy.edu",
        country: "United States",
        logo: "/institution-logo.png",
    }

    // Owner data
    const ownerData = {
        name: "John Smith",
        email: "john.smith@springfieldacademy.edu",
        phone: "+1 (555) 987-6543",
        avatar: "/avatars/owner.jpg",
    }

    return (
        <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setIsEditProfileOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                    <User className="h-4 w-4" />
                    Edit Profile
                </button>
                <button
                    onClick={() => setIsEditInstitutionOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                    <Building2 className="h-4 w-4" />
                    Edit Institution
                </button>
                <button
                    onClick={() => setIsChangePasswordOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                    <Key className="h-4 w-4" />
                    Change Password
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-green-600" />
                                <h2 className="text-lg font-bold text-gray-900">Institution Information</h2>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Institution Name</p>
                                    <p className="text-sm font-semibold text-gray-900">{institutionData.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Type</p>
                                    <p className="text-sm font-semibold text-gray-900">{institutionData.type}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Address</p>
                                <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                                    <p className="text-sm text-gray-900">{institutionData.address}</p>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Phone Number</p>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{institutionData.phone}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Email Address</p>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{institutionData.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Website</p>
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-gray-400" />
                                        <a href={institutionData.website} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">
                                            {institutionData.website}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Country</p>
                                    <p className="text-sm text-gray-900">{institutionData.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-green-600" />
                                <h2 className="text-lg font-bold text-gray-900">Owner Profile</h2>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 pb-4 border-b">
                                <Avatar className="h-16 w-16 border-2 border-gray-200">
                                    <AvatarImage src={ownerData.avatar} />
                                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-xl text-white">
                                        {ownerData.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Profile Picture</p>
                                    <p className="text-xs text-gray-500">Click edit to update photo</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Full Name</p>
                                <p className="text-sm font-semibold text-gray-900">{ownerData.name}</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Email Address</p>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{ownerData.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Phone Number</p>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <p className="text-sm text-gray-900">{ownerData.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Dialogs */}
            <EditInstitutionDialog
                open={isEditInstitutionOpen}
                onOpenChange={setIsEditInstitutionOpen}
                institutionData={institutionData}
            />

            <EditProfileDialog
                open={isEditProfileOpen}
                onOpenChange={setIsEditProfileOpen}
                ownerData={ownerData}
            />

            <ChangePasswordDialog
                open={isChangePasswordOpen}
                onOpenChange={setIsChangePasswordOpen}
            />
        </div>
    )
}
