"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TeacherStats } from "@/components/institution/teacher-management/teacher-stats"
import { TeachersTable } from "@/components/institution/teacher-management/teachers-table"
import { PageHeader } from "@/components/common/page-header"

const branchOptions = [
    { value: "all", label: "All Branches" },
    { value: "1", label: "Main Campus" },
    { value: "2", label: "North Branch" },
    { value: "3", label: "South Branch" },
]

export default function TeachersPage() {
    const [selectedBranch, setSelectedBranch] = useState("all")

    return (
        <div className="space-y-6">
            <PageHeader
                title="Teacher Management"
                description="Manage and monitor all your institution teachers"
            />
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
            {/* Statistics Cards */}
            <TeacherStats branchId={selectedBranch} />

            {/* Teachers Table */}
            <TeachersTable />
        </div>
    )
}
