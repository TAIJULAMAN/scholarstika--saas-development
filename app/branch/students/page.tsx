"use client"

import { StudentsTable } from "@/components/branch/student-management/students-table"
import { StudentStats } from "@/components/branch/student-management/student-stats"

export default function BranchStudentsPage() {
    return (
        <div className="space-y-6">
            <StudentStats branchId="1" />
            <StudentsTable />
        </div>
    )
}
