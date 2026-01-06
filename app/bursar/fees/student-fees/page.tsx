"use client"

import { StudentFeesStats } from "@/components/institution/student-fees-management/student-fees-stats"
import { StudentFeesTable } from "@/components/institution/student-fees-management/student-fees-table"

export default function BursarStudentFeesPage() {
    return (
        <div className="space-y-6">
            <StudentFeesStats branchId="current" />
            <StudentFeesTable />
        </div>
    )
}
