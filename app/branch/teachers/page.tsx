"use client"

import { TeachersTable } from "@/components/branch/teacher-management/teachers-table"
import { TeacherStats } from "@/components/branch/teacher-management/teacher-stats"

export default function BranchTeachersPage() {
    return (
        <div className="space-y-6">

            <TeacherStats branchId="1" />
            <TeachersTable />
        </div>
    )
}
