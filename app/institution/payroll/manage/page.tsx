"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PayrollStats } from "@/components/institution/payroll-management/payroll-stats"
import { PayrollTable } from "@/components/institution/payroll-management/payroll-table"
import { PageHeader } from "@/components/common/page-header"
import { Send, Download } from "lucide-react"

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

export default function ManagePayrollPage() {
    const [selectedBranch, setSelectedBranch] = useState("all")

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <PageHeader
                    title="Manage Payroll"
                    description="Process and manage employee salary payments across all branches"
                />
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Send className="mr-2 h-4 w-4" />
                        Process Payroll
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

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

            <PayrollStats branchId={selectedBranch} />
            <PayrollTable />
        </div>
    )
}
