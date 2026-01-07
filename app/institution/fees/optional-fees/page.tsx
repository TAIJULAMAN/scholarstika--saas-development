"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { OptionalFeesStats } from "@/components/institution/optional-fees-management/optional-fees-stats"
import { OptionalFeesTable } from "@/components/institution/optional-fees-management/optional-fees-table"

const branchOptions = [
    { value: "all", label: "All Branches" },
    { value: "1", label: "Hillcrest School" },
    { value: "2", label: "Lakeside Learning Center" },
    { value: "3", label: "Southpark Academy" },
    { value: "4", label: "Greenfield University" },
    { value: "5", label: "Oakwood College" },
    { value: "6", label: "Mountainside High School" },
    { value: "7", label: "Riverdale Junior High" },
    { value: "8", label: "Sunset Middle School" },
    { value: "9", label: "Bayview Elementary" },
    { value: "10", label: "Crestview Elementary" },
    { value: "11", label: "Greenfield Elementary" },
    { value: "12", label: "Oakwood Elementary" },
    { value: "13", label: "Mountainside Elementary" },
    { value: "14", label: "Riverdale Elementary" },
    { value: "15", label: "Sunset Elementary" },
]

export default function OptionalFeesPage() {
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
            <OptionalFeesStats branchId={selectedBranch} />
            <OptionalFeesTable />
        </div>
    )
}
