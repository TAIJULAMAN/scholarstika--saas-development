"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BranchStats } from "@/components/institution/branch-management/branch-stats"
import { BranchesTable } from "@/components/institution/branch-management/branches-table"

const branchOptions = [
    { value: "all", label: "All Branches" },
    { value: "1", label: "Downtown Campus" },
    { value: "2", label: "Westside Branch" },
    { value: "3", label: "Northgate Academy" },
    { value: "4", label: "Riverside School" },
    { value: "5", label: "Eastside Institute" },
    { value: "6", label: "Southpark Academy" },
]

export default function BranchManagementPage() {
    const [selectedBranch, setSelectedBranch] = useState("all")

    return (
        <div className="space-y-6">
            {/* Page Header with Branch Filter */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Branch Management</h1>
                    <p className="mt-1 text-sm text-gray-500">Manage and monitor all your institution branches</p>
                </div>
                <div className="w-64">
                    <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                            {branchOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Statistics Cards */}
            <BranchStats branchId={selectedBranch} />

            {/* Branches Table */}
            <BranchesTable />
        </div>
    )
}
