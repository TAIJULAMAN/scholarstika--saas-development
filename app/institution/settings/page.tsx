"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building2, User, Shield, MapPin, Upload, Save, Eye, Edit, ChevronRight, CheckCircle } from "lucide-react"

export default function InstitutionSettingsPage() {
    const [institutionName, setInstitutionName] = useState("Springfield Academy")
    const [institutionType, setInstitutionType] = useState("primary")
    const [address, setAddress] = useState("123 Education Street, Springfield, IL 62701")
    const [phone, setPhone] = useState("+1 (555) 123-4587")
    const [email, setEmail] = useState("info@springfieldacademy.edu")
    const [website, setWebsite] = useState("https://springfieldacademy.edu")
    const [country, setCountry] = useState("us")

    const [ownerName, setOwnerName] = useState("John Smith")
    const [ownerEmail, setOwnerEmail] = useState("john.smith@springfieldacademy.edu")
    const [ownerPhone, setOwnerPhone] = useState("+1 (555) 987-6543")
    const [ownerPosition, setOwnerPosition] = useState("founder")

    const [taxId, setTaxId] = useState("")
    const [billingAddress, setBillingAddress] = useState("")
    const [currency, setCurrency] = useState("usd")

    const branches = [
        { name: "Springfield North Campus", location: "North Springfield", status: "Active" },
        { name: "Springfield South Campus", location: "South Springfield", status: "Pending" },
    ]

    const recentActivity = [
        { action: "Profile updated", time: "2 hours ago" },
        { action: "Password changed", time: "3 days ago" },
        { action: "New branch added", time: "1 week ago" },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Parent Institution Profile</h1>
                <p className="text-sm text-gray-600">Manage your institution details and owner profile settings</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column - Institution & Billing Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Institution Information */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <div className="mb-6 flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-green-600" />
                            <h2 className="text-lg font-bold text-gray-900">Institution Information</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Institution Name</label>
                                    <Input
                                        value={institutionName}
                                        onChange={(e) => setInstitutionName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Type of Institution</label>
                                    <Select value={institutionType} onValueChange={setInstitutionType}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="primary">Primary School</SelectItem>
                                            <SelectItem value="secondary">Secondary School</SelectItem>
                                            <SelectItem value="university">University</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Institution Address</label>
                                <textarea
                                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                    rows={3}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <button className="mt-2 flex items-center gap-1 text-sm text-green-600 hover:underline">
                                    <MapPin className="h-4 w-4" />
                                    Autocomplete Address
                                </button>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                                    <Input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Website URL</label>
                                    <Input
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Type of Institution</label>
                                    <Select value={country} onValueChange={setCountry}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="us">United States</SelectItem>
                                            <SelectItem value="uk">United Kingdom</SelectItem>
                                            <SelectItem value="ca">Canada</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Institution Logo</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                                        <Upload className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Upload className="mr-2 h-4 w-4" />
                                        Upload Logo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Billing Information */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h3 className="mb-6 text-lg font-bold text-gray-900">Billing Information</h3>
                        <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Tax ID / VAT Number</label>
                                    <Input
                                        placeholder="Enter tax ID"
                                        value={taxId}
                                        onChange={(e) => setTaxId(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Billing Address</label>
                                    <Input
                                        placeholder="Same as institution address"
                                        value={billingAddress}
                                        onChange={(e) => setBillingAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Currency</label>
                                <Select value={currency} onValueChange={setCurrency}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="usd">USD ($)</SelectItem>
                                        <SelectItem value="eur">EUR (€)</SelectItem>
                                        <SelectItem value="gbp">GBP (£)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <Button className="bg-green-600 hover:bg-green-700">
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                            </Button>
                            <Button variant="outline">Cancel</Button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Owner Profile & Security */}
                <div className="space-y-6">
                    {/* Owner Profile */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <div className="mb-6 flex items-center gap-2">
                            <User className="h-5 w-5 text-green-600" />
                            <h2 className="text-lg font-bold text-gray-900">Owner Profile</h2>
                        </div>

                        <div className="mb-6 flex justify-center">
                            <div className="relative">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                                    <AvatarImage src="/placeholder-avatar.png" />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-2xl text-white">
                                        JS
                                    </AvatarFallback>
                                </Avatar>
                                <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                                <Input
                                    value={ownerName}
                                    onChange={(e) => setOwnerName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                                <Input
                                    type="email"
                                    value={ownerEmail}
                                    onChange={(e) => setOwnerEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                                <Input
                                    value={ownerPhone}
                                    onChange={(e) => setOwnerPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Position</label>
                                <Select value={ownerPosition} onValueChange={setOwnerPosition}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="founder">Founder</SelectItem>
                                        <SelectItem value="ceo">CEO</SelectItem>
                                        <SelectItem value="director">Director</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Social Links</label>
                                <div className="flex gap-2">
                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                        <span className="text-sm font-bold">in</span>
                                    </button>
                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400 text-white hover:bg-blue-500">
                                        <span className="text-sm font-bold">𝕏</span>
                                    </button>
                                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                        <span className="text-sm font-bold">f</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-green-600" />
                            <h2 className="text-lg font-bold text-gray-900">Security</h2>
                        </div>
                        <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 p-3 text-left hover:bg-gray-50">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">🔑</span>
                                <span className="text-sm font-medium text-gray-700">Change Password</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-bold text-gray-900">Recent Activity</h3>
                        <div className="space-y-3">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700">{activity.action}</span>
                                    <span className="text-gray-500">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 text-sm font-medium text-green-600 hover:underline">
                            View all activity
                        </button>
                    </div>
                </div>
            </div>

            {/* Branch Management */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Branch Management</h2>
                    <Button className="bg-green-600 hover:bg-green-700">
                        + Add Branch
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Branch Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {branches.map((branch, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 text-sm text-gray-900">{branch.name}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700">{branch.location}</td>
                                    <td className="px-4 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${branch.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {branch.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded p-1.5 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                        </div>
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
