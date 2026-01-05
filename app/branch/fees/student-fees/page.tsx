"use client"

import { StudentFeesStats } from "@/components/institution/student-fees-management/student-fees-stats"
import { StudentFeesTable } from "@/components/institution/student-fees-management/student-fees-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchStudentFeesPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Student Fees Management"
                description="Track and manage student fee payments and dues"
            /> */}
            <StudentFeesStats branchId="current" />
            <StudentFeesTable />
        </div>
    )
}
