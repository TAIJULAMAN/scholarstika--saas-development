"use client"

import { Button } from "@/components/ui/button"
import { PayrollStats } from "@/components/institution/payroll-management/payroll-stats"
import { PayrollTable } from "@/components/institution/payroll-management/payroll-table"
import { PageHeader } from "@/components/common/page-header"
import { Send, Download } from "lucide-react"

export default function ManagePayrollPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <PageHeader
                    title="Manage Payroll"
                    description="Process and manage employee salary payments for this branch"
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

            <PayrollStats branchId="1" />
            <PayrollTable />
        </div>
    )
}
