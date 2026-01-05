"use client"

import { TeachersTable } from "@/components/branch/teacher-management/teachers-table"
import { TeacherStats } from "@/components/branch/teacher-management/teacher-stats"
import { PageHeader } from "@/components/common/page-header"

export default function BranchTeachersPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Teacher Management"
                description="Manage teachers in this branch"
            /> */}
            <TeacherStats branchId="1" />
            <TeachersTable />
        </div>
    )
}
