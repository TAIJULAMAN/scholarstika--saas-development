"use client"

import { StudentStats } from "@/components/institution/student-management/student-stats"
import { StudentsTable } from "@/components/institution/student-management/students-table"
import { PageHeader } from "@/components/common/page-header"

export default function StudentsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Student Management"
                description="Overview of student enrollment and management across all branches"
            />
            <StudentStats />
            <StudentsTable />
        </div>
    )
}
