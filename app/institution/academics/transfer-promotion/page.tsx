"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TransferPromotionStats } from "@/components/institution/transfer-promotion-management/transfer-promotion-stats"
import { TransferPromotionContent } from "@/components/institution/transfer-promotion-management/transfer-promotion-content"
import { PageHeader } from "@/components/common/page-header"

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

export default function TransferPromotionPage() {
    const [selectedBranch, setSelectedBranch] = useState("all")

    return (
        <div className="space-y-6">
            <PageHeader
                title="Student Transfer & Promotion"
                description="Transfer students between sections or promote to next grade"
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
            <TransferPromotionStats branchId={selectedBranch} />
            <TransferPromotionContent />
        </div>
    )
}
