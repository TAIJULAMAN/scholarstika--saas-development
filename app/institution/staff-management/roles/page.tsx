"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Shield, Plus, Edit, Trash2, Users } from "lucide-react"

const summaryStats = [
    {
        icon: Shield,
        label: "Total Roles",
        value: "6",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
    {
        icon: Users,
        label: "Staff Assigned",
        value: "68",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
]

const roles = [
    {
        id: 1,
        name: "Administrator",
        description: "Full system access with all permissions",
        staffCount: 2,
        permissions: {
            dashboard: true,
            students: true,
            teachers: true,
            academics: true,
            fees: true,
            exams: true,
            reports: true,
            payroll: true,
            certificates: true,
            settings: true,
        },
    },
    {
        id: 2,
        name: "Principal",
        description: "Senior management with most permissions",
        staffCount: 1,
        permissions: {
            dashboard: true,
            students: true,
            teachers: true,
            academics: true,
            fees: true,
            exams: true,
            reports: true,
            payroll: true,
            certificates: true,
            settings: false,
        },
    },
    {
        id: 3,
        name: "Teacher",
        description: "Teaching staff with limited access",
        staffCount: 45,
        permissions: {
            dashboard: true,
            students: true,
            teachers: false,
            academics: true,
            fees: false,
            exams: true,
            reports: false,
            payroll: false,
            certificates: false,
            settings: false,
        },
    },
    {
        id: 4,
        name: "Accountant",
        description: "Financial management access",
        staffCount: 3,
        permissions: {
            dashboard: true,
            students: true,
            teachers: false,
            academics: false,
            fees: true,
            exams: false,
            reports: true,
            payroll: true,
            certificates: false,
            settings: false,
        },
    },
]

const permissionsList = [
    { key: "dashboard", label: "Dashboard" },
    { key: "students", label: "Students Management" },
    { key: "teachers", label: "Teachers Management" },
    { key: "academics", label: "Academics" },
    { key: "fees", label: "Fees Management" },
    { key: "exams", label: "Exams" },
    { key: "reports", label: "Reports" },
    { key: "payroll", label: "Payroll" },
    { key: "certificates", label: "Certificates & IDs" },
    { key: "settings", label: "Settings" },
]

export default function RolesPermissionPage() {
    const [selectedRole, setSelectedRole] = useState<number | null>(null)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Roles & Permissions</h1>
                    <p className="text-sm text-gray-600">Manage user roles and access control permissions</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Role
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Create New Role</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <Label>Role Name</Label>
                                <Input placeholder="e.g., Librarian" />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input placeholder="Brief description of this role" />
                            </div>
                            <div>
                                <Label className="mb-3 block">Permissions</Label>
                                <div className="space-y-3 max-h-64 overflow-y-auto">
                                    {permissionsList.map((permission) => (
                                        <div key={permission.key} className="flex items-center justify-between p-3 rounded-lg border">
                                            <span className="text-sm font-medium text-gray-700">{permission.label}</span>
                                            <Switch />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Role</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Roles List */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">All Roles</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Staff Assigned</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Permissions</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {roles.map((role) => {
                                const activePermissions = Object.values(role.permissions).filter(Boolean).length
                                const totalPermissions = Object.keys(role.permissions).length

                                return (
                                    <tr key={role.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-lg bg-indigo-50 p-2">
                                                    <Shield className="h-4 w-4 text-indigo-600" />
                                                </div>
                                                <p className="font-medium text-gray-900">{role.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{role.description}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-blue-600">{role.staffCount}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-emerald-600 h-2 rounded-full"
                                                        style={{ width: `${(activePermissions / totalPermissions) * 100}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">
                                                    {activePermissions}/{totalPermissions}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Permissions Matrix */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Permissions Matrix</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Permission</th>
                                {roles.map((role) => (
                                    <th key={role.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                        {role.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {permissionsList.map((permission) => (
                                <tr key={permission.key} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{permission.label}</td>
                                    {roles.map((role) => (
                                        <td key={role.id} className="px-6 py-4 text-center">
                                            {role.permissions[permission.key as keyof typeof role.permissions] ? (
                                                <span className="inline-block h-5 w-5 rounded-full bg-green-500"></span>
                                            ) : (
                                                <span className="inline-block h-5 w-5 rounded-full bg-gray-300"></span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
