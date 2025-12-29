"use client"

import { StudentsTable } from "@/components/branch/student-management/students-table"
import { StudentStats } from "@/components/branch/student-management/student-stats"
import { PageHeader } from "@/components/common/page-header"

export default function BranchStudentsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Student Management"
                description="Manage students enrolled in this branch"
            />
            <StudentStats branchId="1" />
            <StudentsTable />
        </div>
    )
}
