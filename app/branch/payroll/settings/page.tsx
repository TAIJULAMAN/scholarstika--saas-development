"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings2, DollarSign, Percent, Plus, Edit, Trash2 } from "lucide-react"

const salaryStructures = [
    {
        id: 1,
        role: "Principal",
        baseSalary: 12000,
        houseAllowance: 1500,
        transportAllowance: 500,
        totalAllowances: 2000,
        taxRate: 10,
    },
    {
        id: 2,
        role: "Senior Teacher",
        baseSalary: 8500,
        houseAllowance: 1000,
        transportAllowance: 500,
        totalAllowances: 1500,
        taxRate: 8,
    },
    {
        id: 3,
        role: "Junior Teacher",
        baseSalary: 6000,
        houseAllowance: 700,
        transportAllowance: 400,
        totalAllowances: 1100,
        taxRate: 5,
    },
    {
        id: 4,
        role: "IT Manager",
        baseSalary: 9000,
        houseAllowance: 1100,
        transportAllowance: 100,
        totalAllowances: 1200,
        taxRate: 8,
    },
]

const deductions = [
    { id: 1, name: "Income Tax", type: "Percentage", value: 10, applicable: "All Employees" },
    { id: 2, name: "Health Insurance", type: "Fixed", value: 150, applicable: "Full-time" },
    { id: 3, name: "Pension Fund", type: "Percentage", value: 5, applicable: "All Employees" },
    { id: 4, name: "Professional Tax", type: "Fixed", value: 50, applicable: "All Employees" },
]

const allowances = [
    { id: 1, name: "House Rent Allowance", type: "Percentage", value: 12.5, applicable: "All Employees" },
    { id: 2, name: "Transport Allowance", type: "Fixed", value: 500, applicable: "All Employees" },
    { id: 3, name: "Medical Allowance", type: "Fixed", value: 200, applicable: "Full-time" },
    { id: 4, name: "Performance Bonus", type: "Variable", value: 0, applicable: "All Employees" },
]

export default function PayrollSettingsPage() {
    const [activeTab, setActiveTab] = useState("structures")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payroll Settings</h1>
                    <p className="text-sm text-gray-600">Configure salary structures, allowances, and deductions</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Settings2 className="mr-2 h-4 w-4" />
                    Save Settings
                </Button>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="structures">Salary Structures</TabsTrigger>
                    <TabsTrigger value="allowances">Allowances</TabsTrigger>
                    <TabsTrigger value="deductions">Deductions</TabsTrigger>
                </TabsList>

                {/* Salary Structures Tab */}
                <TabsContent value="structures" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Define salary structures for different roles</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Structure
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Salary Structure</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div>
                                        <Label>Role/Position</Label>
                                        <Input placeholder="e.g., Senior Teacher" />
                                    </div>
                                    <div>
                                        <Label>Base Salary ($)</Label>
                                        <Input type="number" placeholder="8500" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>House Allowance ($)</Label>
                                            <Input type="number" placeholder="1000" />
                                        </div>
                                        <div>
                                            <Label>Transport Allowance ($)</Label>
                                            <Input type="number" placeholder="500" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Tax Rate (%)</Label>
                                        <Input type="number" placeholder="8" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Structure</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role/Position</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Base Salary</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">House Allowance</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Transport</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Allowances</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tax Rate</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {salaryStructures.map((structure) => (
                                        <tr key={structure.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <p className="font-medium text-gray-900">{structure.role}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">${structure.baseSalary}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-green-600">${structure.houseAllowance}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-green-600">${structure.transportAllowance}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-blue-600">${structure.totalAllowances}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-purple-600">{structure.taxRate}%</td>
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                {/* Allowances Tab */}
                <TabsContent value="allowances" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Manage employee allowances and benefits</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Allowance
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Allowance</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div>
                                        <Label>Allowance Name</Label>
                                        <Input placeholder="e.g., Medical Allowance" />
                                    </div>
                                    <div>
                                        <Label>Type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="fixed">Fixed Amount</SelectItem>
                                                <SelectItem value="percentage">Percentage</SelectItem>
                                                <SelectItem value="variable">Variable</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Value</Label>
                                        <Input type="number" placeholder="200" />
                                    </div>
                                    <div>
                                        <Label>Applicable To</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select applicability" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Employees</SelectItem>
                                                <SelectItem value="fulltime">Full-time Only</SelectItem>
                                                <SelectItem value="parttime">Part-time Only</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Allowance</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Allowance Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Value</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Applicable To</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {allowances.map((allowance) => (
                                        <tr key={allowance.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="rounded-lg bg-green-50 p-2">
                                                        <DollarSign className="h-4 w-4 text-green-600" />
                                                    </div>
                                                    <p className="font-medium text-gray-900">{allowance.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{allowance.type}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-green-600">
                                                {allowance.type === "Percentage" ? `${allowance.value}%` : `$${allowance.value}`}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{allowance.applicable}</td>
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                {/* Deductions Tab */}
                <TabsContent value="deductions" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Configure salary deductions and taxes</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Deduction
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Deduction</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div>
                                        <Label>Deduction Name</Label>
                                        <Input placeholder="e.g., Health Insurance" />
                                    </div>
                                    <div>
                                        <Label>Type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="fixed">Fixed Amount</SelectItem>
                                                <SelectItem value="percentage">Percentage</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Value</Label>
                                        <Input type="number" placeholder="150" />
                                    </div>
                                    <div>
                                        <Label>Applicable To</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select applicability" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Employees</SelectItem>
                                                <SelectItem value="fulltime">Full-time Only</SelectItem>
                                                <SelectItem value="parttime">Part-time Only</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Deduction</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Deduction Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Value</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Applicable To</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {deductions.map((deduction) => (
                                        <tr key={deduction.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="rounded-lg bg-red-50 p-2">
                                                        <Percent className="h-4 w-4 text-red-600" />
                                                    </div>
                                                    <p className="font-medium text-gray-900">{deduction.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{deduction.type}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-red-600">
                                                {deduction.type === "Percentage" ? `${deduction.value}%` : `$${deduction.value}`}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">{deduction.applicable}</td>
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
