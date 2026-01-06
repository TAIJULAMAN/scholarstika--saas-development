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
        <div className="space-y-5">
            <div className="flex justify-end">
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
            <BranchStats branchId={selectedBranch} />
            <BranchesTable />
        </div >
    )
}
