"use client"

import { StudentFeesTable } from "@/components/branch/student-fees-management/student-fees-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchStudentFeesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Student Fees"
                description="Manage student fee payments for this branch"
            />
            <StudentFeesTable />
        </div>
    )
}
